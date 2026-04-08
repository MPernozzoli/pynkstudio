import * as React from 'npm:react@18.3.1'
import {
  Body, Container, Head, Heading, Html, Preview, Text, Hr,
} from 'npm:@react-email/components@0.0.22'
import type { TemplateEntry } from './registry.ts'

interface ContactNotificationProps {
  name?: string
  email?: string
  phone?: string
  reason?: string
  message?: string
}

const ContactNotificationEmail = ({ name, email, phone, reason, message }: ContactNotificationProps) => (
  <Html lang="it" dir="ltr">
    <Head />
    <Preview>Nuovo messaggio da {name || 'un visitatore'}</Preview>
    <Body style={main}>
      <Container style={container}>
        <Heading style={h1}>Nuovo messaggio dal form di contatto</Heading>
        <Hr style={divider} />

        <Text style={label}>Nome</Text>
        <Text style={value}>{name || '—'}</Text>

        <Text style={label}>Email</Text>
        <Text style={value}>{email || '—'}</Text>

        {phone && (
          <>
            <Text style={label}>Telefono</Text>
            <Text style={value}>{phone}</Text>
          </>
        )}

        {reason && (
          <>
            <Text style={label}>Motivo / Contesto</Text>
            <Text style={value}>{reason}</Text>
          </>
        )}

        <Text style={label}>Messaggio</Text>
        <Text style={value}>{message || '—'}</Text>
      </Container>
    </Body>
  </Html>
)

export const template = {
  component: ContactNotificationEmail,
  subject: (data: Record<string, any>) => `Nuovo messaggio da ${data.name || 'un visitatore'} — Contatto`,
  displayName: 'Notifica contatto (team)',
  to: 'info@pynkstudio.it',
  previewData: { name: 'Marco Rossi', email: 'marco@esempio.it', phone: '+39 333 1234567', reason: 'Migliorare la mia azienda', message: 'Vorremmo automatizzare i processi interni.' },
} satisfies TemplateEntry

const main = { backgroundColor: '#ffffff', fontFamily: "'Helvetica Neue', Helvetica, Arial, sans-serif" }
const container = { padding: '32px 28px' }
const h1 = { fontSize: '20px', fontWeight: 600, color: '#1a1a1a', margin: '0 0 4px' }
const divider = { borderColor: '#eee', margin: '20px 0' }
const label: React.CSSProperties = { fontSize: '11px', letterSpacing: '1.5px', textTransform: 'uppercase', color: '#999', margin: '0 0 2px' }
const value = { fontSize: '15px', color: '#333', margin: '0 0 16px', lineHeight: '1.5' }
