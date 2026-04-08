import * as React from 'npm:react@18.3.1'
import {
  Body, Container, Head, Heading, Html, Preview, Text, Hr,
} from 'npm:@react-email/components@0.0.22'
import type { TemplateEntry } from './registry.ts'

const SITE_NAME = "Pynk Studio"

interface ContactConfirmationProps {
  name?: string
  reason?: string
}

const ContactConfirmationEmail = ({ name, reason }: ContactConfirmationProps) => (
  <Html lang="it" dir="ltr">
    <Head />
    <Preview>Abbiamo ricevuto il tuo messaggio — {SITE_NAME}</Preview>
    <Body style={main}>
      <Container style={container}>
        <Heading style={logo}>PYNK</Heading>
        <Text style={logoSub}>Studio</Text>
        <Hr style={divider} />

        <Heading style={h1}>
          {name ? `Ciao ${name} 👋` : 'Grazie per averci contattato!'}
        </Heading>
        <Text style={text}>
          Abbiamo ricevuto il tuo messaggio. Grazie per averci contattato.
        </Text>

        {reason && (
          <>
            <Text style={labelText}>Motivo</Text>
            <Text style={reasonText}>{reason}</Text>
          </>
        )}

        <Text style={text}>
          Un membro del nostro team ti risponderà entro <strong>24 ore lavorative</strong>.
        </Text>
        <Text style={text}>
          Nel frattempo, se hai bisogno di aggiungere qualcosa, rispondi direttamente a questa email.
        </Text>

        <Hr style={divider} />
        <Text style={footer}>{SITE_NAME} — Soluzioni digitali su misura</Text>
      </Container>
    </Body>
  </Html>
)

export const template = {
  component: ContactConfirmationEmail,
  subject: `Abbiamo ricevuto il tuo messaggio — ${SITE_NAME}`,
  displayName: 'Conferma contatto',
  previewData: { name: 'Marco', reason: 'Migliorare la mia azienda' },
} satisfies TemplateEntry

const main = { backgroundColor: '#ffffff', fontFamily: "'Helvetica Neue', Helvetica, Arial, sans-serif" }
const container = { padding: '40px 28px' }
const logo: React.CSSProperties = { fontSize: '28px', fontWeight: 300, letterSpacing: '4px', color: '#E94B97', textAlign: 'center', margin: '0' }
const logoSub: React.CSSProperties = { fontSize: '10px', letterSpacing: '6px', color: '#999', textTransform: 'uppercase', textAlign: 'center', margin: '2px 0 0' }
const divider = { borderColor: '#f0e0ea', margin: '28px 0' }
const h1 = { fontSize: '24px', fontWeight: 300, color: '#1a1a1a', margin: '0 0 8px' }
const text = { fontSize: '15px', fontWeight: 300, color: '#555', lineHeight: '1.6', margin: '0 0 16px' }
const labelText: React.CSSProperties = { fontSize: '11px', letterSpacing: '2px', textTransform: 'uppercase', color: '#999', margin: '0 0 4px' }
const reasonText = { fontSize: '15px', fontWeight: 400, color: '#E94B97', margin: '0 0 24px' }
const footer: React.CSSProperties = { fontSize: '12px', color: '#aaa', textAlign: 'center', margin: '0' }
