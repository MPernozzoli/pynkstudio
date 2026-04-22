import { Canvas, useFrame } from "@react-three/fiber";
import { MeshDistortMaterial, Sparkles } from "@react-three/drei";
import { useEffect, useMemo, useRef, useState } from "react";
import * as THREE from "three";

function hslPrimaryColor(): THREE.Color {
  const raw = getComputedStyle(document.documentElement).getPropertyValue("--primary").trim();
  if (!raw) return new THREE.Color("#e879c9");
  return new THREE.Color(`hsl(${raw})`);
}

function OrganicMesh() {
  const groupRef = useRef<THREE.Group>(null);
  const [color, setColor] = useState(() => hslPrimaryColor());
  const mouse = useRef({ x: 0, y: 0 });

  useEffect(() => {
    const sync = () => setColor(hslPrimaryColor());
    sync();
    const mo = new MutationObserver(sync);
    mo.observe(document.documentElement, { attributes: true, attributeFilter: ["class"] });
    return () => mo.disconnect();
  }, []);

  useEffect(() => {
    const onMove = (e: MouseEvent) => {
      mouse.current.x = (e.clientX / window.innerWidth) * 2 - 1;
      mouse.current.y = (e.clientY / window.innerHeight) * 2 - 1;
    };
    window.addEventListener("mousemove", onMove, { passive: true });
    return () => window.removeEventListener("mousemove", onMove);
  }, []);

  const baseRot = useRef(0);

  useFrame((_, delta) => {
    const g = groupRef.current;
    if (!g) return;
    baseRot.current += delta * 0.12;
    const targetX = mouse.current.y * 0.35 + Math.sin(baseRot.current) * 0.08;
    const targetY = mouse.current.x * 0.45 + Math.cos(baseRot.current * 0.7) * 0.1;
    g.rotation.x = THREE.MathUtils.lerp(g.rotation.x, targetX, 0.06);
    g.rotation.y = THREE.MathUtils.lerp(g.rotation.y, targetY, 0.06);
    g.rotation.z = THREE.MathUtils.lerp(g.rotation.z, Math.sin(baseRot.current * 0.4) * 0.06, 0.04);
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
        <MeshDistortMaterial color={color} roughness={0.25} metalness={0.35} speed={2.2} distort={0.38} radius={1} />
      </mesh>
      <mesh scale={0.92}>
        <icosahedronGeometry args={[1, 12]} />
        <meshBasicMaterial color={secondary} wireframe transparent opacity={0.12} depthWrite={false} />
      </mesh>
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
