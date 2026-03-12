import { z } from "zod"

const contactSchema = z.object({
  name: z.string().trim().min(2),
  email: z.string().trim().email(),
  company: z.string().trim().min(2),
  summary: z.string().trim().min(20).max(2000),
  website: z.string().trim().optional(),
})

function json(data: unknown, init?: ResponseInit) {
  return Response.json(data, init)
}

function buildWebhookHeaders() {
  const headers = new Headers({
    "Content-Type": "application/json",
  })

  const username = process.env.CONTACT_WEBHOOK_USERNAME
  const password = process.env.CONTACT_WEBHOOK_PASSWORD

  if (username && password) {
    const token = Buffer.from(`${username}:${password}`).toString("base64")
    headers.set("Authorization", `Basic ${token}`)
  }

  return headers
}

export async function POST(request: Request) {
  try {
    const body = await request.json()
    const parsed = contactSchema.safeParse(body)

    if (!parsed.success) {
      return json(
        {
          error: "Por favor completa el formulario con un poco más de detalle.",
        },
        { status: 400 },
      )
    }

    const { website, ...submission } = parsed.data

    if (website) {
      return json({ message: "Gracias. Hemos recibido tu mensaje." })
    }

    const webhookUrl = process.env.CONTACT_WEBHOOK_URL

    if (!webhookUrl) {
      return json(
        {
          error: "El formulario no esta configurado. Define CONTACT_WEBHOOK_URL en el entorno del servidor.",
        },
        { status: 503 },
      )
    }

    const webhookResponse = await fetch(webhookUrl, {
      method: "POST",
      headers: buildWebhookHeaders(),
      body: JSON.stringify({
        ...submission,
        source: "company-website",
        receivedAt: new Date().toISOString(),
      }),
    })

    if (!webhookResponse.ok) {
      const errorBody = await webhookResponse.text().catch(() => "")

      console.error("Contact webhook failed", {
        status: webhookResponse.status,
        body: errorBody,
      })

      return json(
        {
          error: "No pudimos registrar la consulta en n8n en este momento. Revisa el webhook y vuelve a intentar.",
        },
        { status: 502 },
      )
    }

    return json({ message: "Gracias. Revisaremos tu caso y te responderemos pronto." })
  } catch (error) {
    console.error("Contact route failed", error)

    return json(
      {
        error: "No pudimos procesar tu mensaje. Intenta nuevamente en unos minutos.",
      },
      { status: 500 },
    )
  }
}
