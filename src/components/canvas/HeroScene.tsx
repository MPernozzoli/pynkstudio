import { Canvas, useFrame } from "@react-three/fiber";
import { MeshDistortMaterial, Sparkles } from "@react-three/drei";
import { useEffect, useMemo, useRef, useState } from "react";
import * as THREE from "three";

function hslPrimaryColor(): THREE.Color {
  const raw = getComputedStyle(document.documentElement).getPropertyValue("--primary").trim();
  if (!raw) return new THREE.Color("#e879c9");
  return new THREE.Color(`hsl(${raw})`);
}

/** Lerp ~costante al variare del framerate (k ≈ quanto è “reattivo”). */
function damp(current: number, target: number, lambda: number, delta: number) {
  return THREE.MathUtils.lerp(current, target, 1 - Math.exp(-lambda * delta));
}

function OrganicMesh() {
  const groupRef = useRef<THREE.Group>(null);
  const wireGroupRef = useRef<THREE.Group>(null);
  const distortMatRef = useRef<{ distort: number } | null>(null);
  const [color, setColor] = useState(() => hslPrimaryColor());
  /** Obiettivo puntatore normalizzato (-1…1), Y verso l’alto sullo schermo. */
  const pointerTarget = useRef({ x: 0, y: 0 });
  const pointerSmooth = useRef({ x: 0, y: 0 });
  const pointerPrev = useRef({ x: 0, y: 0 });
  const pointerSpeed = useRef(0);

  useEffect(() => {
    const sync = () => setColor(hslPrimaryColor());
    sync();
    const mo = new MutationObserver(sync);
    mo.observe(document.documentElement, { attributes: true, attributeFilter: ["class"] });
    return () => mo.disconnect();
  }, []);

  useEffect(() => {
    const norm = (e: PointerEvent) => {
      const x = (e.clientX / Math.max(window.innerWidth, 1)) * 2 - 1;
      const y = -((e.clientY / Math.max(window.innerHeight, 1)) * 2 - 1);
      pointerTarget.current.x = x;
      pointerTarget.current.y = y;
    };
    window.addEventListener("pointermove", norm, { passive: true });
    return () => window.removeEventListener("pointermove", norm);
  }, []);

  const baseRot = useRef(0);

  useFrame((_, delta) => {
    const g = groupRef.current;
    if (!g) return;

    const t = pointerTarget.current;
    const s = pointerSmooth.current;
    s.x = damp(s.x, t.x, 14, delta);
    s.y = damp(s.y, t.y, 14, delta);

    const vx = s.x - pointerPrev.current.x;
    const vy = s.y - pointerPrev.current.y;
    pointerPrev.current.x = s.x;
    pointerPrev.current.y = s.y;
    pointerSpeed.current = damp(pointerSpeed.current, Math.hypot(vx, vy) / Math.max(delta, 1e-4), 8, delta);

    baseRot.current += delta * 0.12;
    const bobX = Math.sin(baseRot.current) * 0.07;
    const bobY = Math.cos(baseRot.current * 0.72) * 0.08;

    const targetRotX = s.y * 0.55 + bobX;
    const targetRotY = s.x * 0.62 + bobY;
    g.rotation.x = damp(g.rotation.x, targetRotX, 10, delta);
    g.rotation.y = damp(g.rotation.y, targetRotY, 10, delta);
    g.rotation.z = damp(g.rotation.z, s.x * s.y * 0.14 + Math.sin(baseRot.current * 0.41) * 0.06, 6, delta);

    g.position.x = damp(g.position.x, s.x * 0.48, 7, delta);
    g.position.y = damp(g.position.y, s.y * 0.34, 7, delta);

    const mat = distortMatRef.current;
    if (mat) {
      const radial = Math.min(Math.hypot(s.x, s.y), 1);
      const wobble = Math.min(pointerSpeed.current * 3.2, 0.35);
      const targetDistort = 0.34 + radial * 0.2 + wobble;
      mat.distort = damp(mat.distort, targetDistort, 9, delta);
    }

    const wire = wireGroupRef.current;
    if (wire) {
      wire.rotation.x = s.y * -0.28;
      wire.rotation.y = s.x * -0.42;
    }
  });

  const secondary = useMemo(() => {
    const c = color.clone();
    c.offsetHSL(0.06, 0, 0.08);
    return c;
  }, [color]);

  return (
    <group ref={groupRef} scale={1.45}>
      <mesh>
        <icosahedronGeometry args={[1, 20]} />
        <MeshDistortMaterial
          ref={distortMatRef}
          color={color}
          roughness={0.25}
          metalness={0.35}
          speed={2.2}
          distort={0.38}
          radius={1}
        />
      </mesh>
      <group ref={wireGroupRef}>
        <mesh scale={0.92}>
          <icosahedronGeometry args={[1, 12]} />
          <meshBasicMaterial color={secondary} wireframe transparent opacity={0.12} depthWrite={false} />
        </mesh>
      </group>
    </group>
  );
}

function Scene() {
  const sparkleColor = useMemo(() => {
    const c = hslPrimaryColor();
    c.lerp(new THREE.Color("#ffffff"), 0.55);
    return c.getStyle();
  }, []);

  return (
    <>
      <ambientLight intensity={0.55} />
      <directionalLight position={[5, 6, 4]} intensity={0.85} />
      <directionalLight position={[-6, -2, -3]} intensity={0.35} color="#a78bfa" />
      <pointLight position={[0, 0, 6]} intensity={0.6} distance={12} decay={2} />
      <OrganicMesh />
      <Sparkles count={48} scale={5.5} size={1.4} speed={0.35} opacity={0.4} color={sparkleColor} />
    </>
  );
}

/** Sfondo WebGL hero: parallax leggero, tema da CSS variables, alpha. */
export default function HeroScene() {
  return (
    <div className="pointer-events-none absolute inset-0 z-0 h-full min-h-[100svh] w-full">
      <Canvas
        className="h-full w-full"
        camera={{ position: [0, 0, 4.8], fov: 42 }}
        dpr={[1, 1.5]}
        gl={{ alpha: true, antialias: true, powerPreference: "high-performance" }}
        frameloop="always"
      >
        <Scene />
      </Canvas>
    </div>
  );
}
