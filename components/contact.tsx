"use client"

import { FormEvent, useState } from "react"
import { useLanguage } from "@/contexts/language-context"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ArrowRight, ArrowUpRight, CalendarDays, LoaderCircle, Mail, MapPin, Phone } from "lucide-react"
import Link from "next/link"

type ContactFormState = {
  name: string
  email: string
  company: string
  summary: string
  website: string
}

const initialFormState: ContactFormState = {
  name: "",
  email: "",
  company: "",
  summary: "",
  website: "",
}

export function Contact() {
  const { t } = useLanguage()
  const calcomUrl = process.env.NEXT_PUBLIC_CALCOM_URL
  const [form, setForm] = useState<ContactFormState>(initialFormState)
  const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">("idle")
  const [feedback, setFeedback] = useState("")

  const items = [
    { label: t.contact.labels.phone, value: t.contact.phone, href: `tel:${t.contact.phone}`, icon: Phone },
    { label: t.contact.labels.email, value: t.contact.email, href: `mailto:${t.contact.email}`, icon: Mail },
    { label: t.contact.labels.address, value: t.contact.address, href: null, icon: MapPin },
  ]

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()
    setStatus("submitting")
    setFeedback("")

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(form),
      })

      const data = (await response.json().catch(() => null)) as { error?: string; message?: string } | null

      if (!response.ok) {
        throw new Error(data?.error || t.contact.form.messages.error)
      }

      setStatus("success")
      setFeedback(data?.message || t.contact.form.messages.success)
      setForm(initialFormState)
    } catch (error) {
      setStatus("error")
      setFeedback(error instanceof Error ? error.message : t.contact.form.messages.error)
    }
  }

  return (
    <section id="contact" className="section-shell flex min-h-screen snap-start items-center py-24 text-white">
      <div className="container mx-auto px-4">
        <div className="mx-auto max-w-6xl">
          <p className="font-mono-accent text-sm uppercase tracking-[0.28em] text-sky-200/80">{t.contact.eyebrow}</p>
          <h2 className="font-display mt-5 max-w-4xl text-4xl font-bold leading-tight tracking-[-0.04em] md:text-6xl">
            {t.contact.title}
          </h2>
          <p className="mt-6 max-w-3xl text-lg leading-8 text-slate-300">{t.contact.intro}</p>
          <p className="mt-5 text-base leading-7 text-slate-400">{t.contact.note}</p>

          <div className="mt-10 grid items-start gap-6 lg:grid-cols-2">
            <Card className="h-full border-white/10 bg-[linear-gradient(180deg,rgba(19,25,39,0.92),rgba(16,22,36,0.78))] shadow-[0_24px_80px_rgba(2,6,23,0.36)]">
              <CardContent className="p-6 md:p-7">
                <div className="mb-6">
                  <p className="font-mono-accent text-xs uppercase tracking-[0.22em] text-sky-200/70">
                    {t.contact.form.eyebrow}
                  </p>
                  <h3 className="mt-3 font-display text-2xl font-semibold tracking-[-0.03em] text-white">
                    {t.contact.form.title}
                  </h3>
                  <p className="mt-3 max-w-xl text-sm leading-7 text-slate-400">{t.contact.form.description}</p>
                </div>

                <form className="grid gap-4" onSubmit={handleSubmit}>
                  <input
                    type="text"
                    name="website"
                    value={form.website}
                    onChange={(event) => setForm({ ...form, website: event.target.value })}
                    className="hidden"
                    tabIndex={-1}
                    autoComplete="off"
                  />
                  <div className="grid gap-4 md:grid-cols-2">
                    <label className="grid gap-2 text-sm text-slate-300">
                      <span>{t.contact.form.fields.name}</span>
                      <input
                        type="text"
                        value={form.name}
                        onChange={(event) => setForm({ ...form, name: event.target.value })}
                        className="h-12 rounded-2xl border border-white/10 bg-white/5 px-4 text-white outline-none transition focus:border-sky-400/70 focus:bg-white/[0.07]"
                        placeholder={t.contact.form.placeholders.name}
                        required
                      />
                    </label>
                    <label className="grid gap-2 text-sm text-slate-300">
                      <span>{t.contact.form.fields.email}</span>
                      <input
                        type="email"
                        value={form.email}
                        onChange={(event) => setForm({ ...form, email: event.target.value })}
                        className="h-12 rounded-2xl border border-white/10 bg-white/5 px-4 text-white outline-none transition focus:border-sky-400/70 focus:bg-white/[0.07]"
                        placeholder={t.contact.form.placeholders.email}
                        required
                      />
                    </label>
                  </div>

                  <label className="grid gap-2 text-sm text-slate-300">
                    <span>{t.contact.form.fields.company}</span>
                    <input
                      type="text"
                      value={form.company}
                      onChange={(event) => setForm({ ...form, company: event.target.value })}
                      className="h-12 rounded-2xl border border-white/10 bg-white/5 px-4 text-white outline-none transition focus:border-sky-400/70 focus:bg-white/[0.07]"
                      placeholder={t.contact.form.placeholders.company}
                      required
                    />
                  </label>

                  <label className="grid gap-2 text-sm text-slate-300">
                    <span>{t.contact.form.fields.summary}</span>
                    <textarea
                      value={form.summary}
                      onChange={(event) => setForm({ ...form, summary: event.target.value })}
                      className="min-h-36 rounded-3xl border border-white/10 bg-white/5 px-4 py-3 text-white outline-none transition focus:border-sky-400/70 focus:bg-white/[0.07]"
                      placeholder={t.contact.form.placeholders.summary}
                      required
                    />
                  </label>

                  <div className="flex flex-col gap-3 md:flex-row md:items-center">
                    <Button
                      type="submit"
                      size="lg"
                      disabled={status === "submitting"}
                      className="h-12 rounded-full bg-gradient-to-r from-purple-600 via-blue-600 to-sky-500 px-7 text-sm font-semibold uppercase tracking-[0.18em] text-white shadow-[0_0_40px_rgba(37,99,235,0.24)] transition-transform duration-300 hover:scale-[1.02]"
                    >
                      {status === "submitting" ? (
                        <>
                          <LoaderCircle className="h-4 w-4 animate-spin" />
                          {t.contact.form.submitting}
                        </>
                      ) : (
                        <>
                          {t.contact.form.cta}
                          <ArrowRight className="h-4 w-4" />
                        </>
                      )}
                    </Button>
                    <p
                      className={`text-sm leading-6 ${status === "error" ? "text-rose-300" : "text-slate-400"}`}
                      role="status"
                    >
                      {feedback || t.contact.form.helper}
                    </p>
                  </div>
                </form>
              </CardContent>
            </Card>

            <Card className="h-full border-sky-400/20 bg-[linear-gradient(160deg,rgba(14,165,233,0.16),rgba(17,24,39,0.88),rgba(88,28,135,0.26))] shadow-[0_24px_80px_rgba(2,6,23,0.36)]">
              <CardContent className="flex h-full flex-col p-6 md:p-7">
                <p className="font-mono-accent text-xs uppercase tracking-[0.22em] text-sky-200/80">
                  {t.contact.schedule.eyebrow}
                </p>
                <h3 className="mt-3 font-display text-2xl font-semibold tracking-[-0.03em] text-white">
                  {t.contact.schedule.title}
                </h3>
                <p className="mt-3 text-sm leading-7 text-slate-300">{t.contact.schedule.description}</p>
                <ul className="mt-5 grid gap-3 text-sm leading-6 text-slate-300">
                  {t.contact.schedule.points.map((point) => (
                    <li key={point} className="flex gap-3">
                      <span className="mt-1 h-2 w-2 rounded-full bg-sky-300" />
                      <span>{point}</span>
                    </li>
                  ))}
                </ul>
                {calcomUrl ? (
                  <Button
                    asChild
                    size="lg"
                    className="mt-6 h-12 rounded-full border border-white/15 bg-white/10 px-6 text-sm font-semibold uppercase tracking-[0.16em] text-white backdrop-blur hover:bg-white/15 lg:mt-auto"
                  >
                    <a href={calcomUrl} target="_blank" rel="noreferrer">
                      <CalendarDays className="h-4 w-4" />
                      {t.contact.schedule.cta}
                      <ArrowUpRight className="h-4 w-4" />
                    </a>
                  </Button>
                ) : (
                  <p className="mt-6 text-sm leading-6 text-slate-400 lg:mt-auto">{t.contact.schedule.fallback}</p>
                )}
              </CardContent>
            </Card>
          </div>

          <div className="mt-6 grid gap-4 md:grid-cols-2 xl:grid-cols-3">
            {items.map(({ label, value, href, icon: Icon }) => (
              <Card
                key={label}
                className="border-white/10 bg-[linear-gradient(180deg,rgba(19,25,39,0.9),rgba(16,22,36,0.72))] shadow-[0_24px_80px_rgba(2,6,23,0.36)]"
              >
                <CardContent className="flex items-start gap-4 p-6">
                  <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-white/5 text-sky-200">
                    <Icon className="h-5 w-5" />
                  </div>
                  <div>
                    <p className="font-mono-accent text-xs uppercase tracking-[0.22em] text-slate-400">{label}</p>
                    {href ? (
                      <a href={href} className="mt-3 block text-lg leading-7 text-white transition-colors hover:text-sky-200">
                        {value}
                      </a>
                    ) : (
                      <p className="mt-3 text-lg leading-7 text-white">{value}</p>
                    )}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        <div className="mx-auto mt-20 flex max-w-6xl flex-col gap-3 border-t border-white/10 pt-8 text-sm text-slate-400 md:flex-row md:items-center md:justify-between">
          <p>© 2026 AIAPAEC. Arquitectura para la evolucion.</p>
          <div className="flex flex-wrap gap-4">
            <Link href="/privacidad" className="transition-colors hover:text-white">
              Politica de Privacidad
            </Link>
            <Link href="/eliminar-datos" className="transition-colors hover:text-white">
              Eliminacion de cuenta y datos
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}
