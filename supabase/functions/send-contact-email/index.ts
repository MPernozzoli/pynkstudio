import { serve } from "https://deno.land/std@0.190.0/http/server.ts";
import { Resend } from "https://esm.sh/resend@4.0.0";

const resend = new Resend(Deno.env.get("RESEND_API_KEY"));

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers": "authorization, x-client-info, apikey, content-type",
};

interface ContactRequest {
  name: string;
  email: string;
  phone?: string;
  reason: string;
  message: string;
}

const buildConfirmationEmail = (name: string, reason: string) => `
<!DOCTYPE html>
<html lang="it">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
</head>
<body style="margin:0;padding:0;background-color:#0a0a0a;font-family:'Helvetica Neue',Helvetica,Arial,sans-serif;">
  <table role="presentation" width="100%" cellspacing="0" cellpadding="0" style="background-color:#0a0a0a;padding:40px 20px;">
    <tr>
      <td align="center">
        <table role="presentation" width="600" cellspacing="0" cellpadding="0" style="max-width:600px;width:100%;">
          
          <!-- Header -->
          <tr>
            <td style="padding:40px 40px 30px;text-align:center;border-bottom:1px solid rgba(236,72,153,0.2);">
              <h1 style="margin:0;font-size:32px;font-weight:300;letter-spacing:4px;color:#ec4899;">PYNK</h1>
              <p style="margin:4px 0 0;font-size:11px;letter-spacing:6px;color:rgba(255,255,255,0.4);text-transform:uppercase;">Studio</p>
            </td>
          </tr>

          <!-- Body -->
          <tr>
            <td style="padding:48px 40px;">
              <h2 style="margin:0 0 8px;font-size:28px;font-weight:300;color:#ffffff;line-height:1.3;">
                Ciao ${name} 👋
              </h2>
              <p style="margin:0 0 32px;font-size:16px;font-weight:300;color:rgba(255,255,255,0.6);line-height:1.6;">
                Abbiamo ricevuto il tuo messaggio. Grazie per averci contattato.
              </p>

              <!-- Reason card -->
              <table role="presentation" width="100%" cellspacing="0" cellpadding="0">
                <tr>
                  <td style="background:linear-gradient(135deg, rgba(236,72,153,0.1) 0%, rgba(168,85,247,0.08) 100%);border:1px solid rgba(236,72,153,0.15);border-radius:16px;padding:24px 28px;">
                    <p style="margin:0 0 4px;font-size:11px;letter-spacing:3px;text-transform:uppercase;color:rgba(255,255,255,0.4);">Motivo</p>
                    <p style="margin:0;font-size:16px;font-weight:400;color:#ec4899;">${reason}</p>
                  </td>
                </tr>
              </table>

              <p style="margin:32px 0 0;font-size:16px;font-weight:300;color:rgba(255,255,255,0.6);line-height:1.7;">
                Un membro del nostro team ti risponderà entro <strong style="color:#ffffff;">24 ore lavorative</strong>.
              </p>
              <p style="margin:16px 0 0;font-size:16px;font-weight:300;color:rgba(255,255,255,0.6);line-height:1.7;">
                Nel frattempo, se hai bisogno di aggiungere qualcosa, rispondi direttamente a questa email.
              </p>
            </td>
          </tr>

          <!-- Divider -->
          <tr>
            <td style="padding:0 40px;">
              <div style="height:1px;background:linear-gradient(90deg, transparent, rgba(236,72,153,0.3), transparent);"></div>
            </td>
          </tr>

          <!-- Footer -->
          <tr>
            <td style="padding:32px 40px 48px;text-align:center;">
              <p style="margin:0 0 8px;font-size:13px;color:rgba(255,255,255,0.3);font-weight:300;">
                Pynk Studio — Soluzioni digitali su misura
              </p>
              <a href="https://pynkstudio.lovable.app" style="font-size:13px;color:#ec4899;text-decoration:none;font-weight:300;">
                pynkstudio.it
              </a>
            </td>
          </tr>

        </table>
      </td>
    </tr>
  </table>
</body>
</html>
`;

const handler = async (req: Request): Promise<Response> => {
  if (req.method === "OPTIONS") {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    const { name, email, phone, reason, message }: ContactRequest = await req.json();
    
    console.log("Sending contact email from:", email, "name:", name, "reason:", reason);

    const phoneRow = phone ? `<p><strong>Telefono:</strong> ${phone}</p>` : "";

    // Send notification to Pynk team
    const emailResponse = await resend.emails.send({
      from: "Pynk Studio <info@pynkstudio.it>",
      to: ["info@pynkstudio.it"],
      replyTo: email,
      subject: `Nuovo messaggio da ${name} — ${reason}`,
      html: `
        <h2>Nuovo messaggio dal form di contatto</h2>
        <p><strong>Nome:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        ${phoneRow}
        <p><strong>Motivo:</strong> ${reason}</p>
        <p><strong>Messaggio:</strong></p>
        <p>${message.replace(/\n/g, '<br>')}</p>
      `,
    });

    console.log("Team email sent:", emailResponse);

    // Send confirmation to user
    const confirmResponse = await resend.emails.send({
      from: "Pynk Studio <info@pynkstudio.it>",
      to: [email],
      replyTo: "info@pynkstudio.it",
      subject: `Abbiamo ricevuto il tuo messaggio — Pynk Studio`,
      html: buildConfirmationEmail(name, reason),
    });

    console.log("Confirmation email sent:", confirmResponse);

    return new Response(JSON.stringify(emailResponse), {
      status: 200,
      headers: {
        "Content-Type": "application/json",
        ...corsHeaders,
      },
    });
  } catch (error: any) {
    console.error("Error sending email:", error);
    return new Response(
      JSON.stringify({ error: error.message }),
      {
        status: 500,
        headers: { "Content-Type": "application/json", ...corsHeaders },
      }
    );
  }
};

serve(handler);
