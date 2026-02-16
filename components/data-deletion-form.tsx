"use client"

import { FormEvent, useMemo, useState } from "react"

type FormState = {
  fullName: string
  email: string
  appName: string
  appPackage: string
  accountIdentifier: string
  country: string
  details: string
  consent: boolean
}

const initialState: FormState = {
  fullName: "",
  email: "",
  appName: "",
  appPackage: "",
  accountIdentifier: "",
  country: "",
  details: "",
  consent: false,
}

export function DataDeletionForm() {
  const [form, setForm] = useState<FormState>(initialState)
  const [submitted, setSubmitted] = useState(false)

  const mailtoHref = useMemo(() => {
    const subject = `Solicitud de eliminación de cuenta y datos - ${form.fullName || "Usuario"}`
    const body = [
      "Hola equipo de aiapaec tech,",
      "",
      "Solicito la eliminación de mi cuenta y los datos personales asociados.",
      "",
      `Nombre completo: ${form.fullName || "-"}`,
      `Correo de contacto: ${form.email || "-"}`,
      `Aplicación a eliminar: ${form.appName || "-"}`,
      `Identificador de app (paquete/bundle, opcional): ${form.appPackage || "-"}`,
      `Identificador de cuenta (email, user ID u otro): ${form.accountIdentifier || "-"}`,
      `País: ${form.country || "-"}`,
      "",
      "Información adicional:",
      form.details || "-",
      "",
      "Declaro que soy titular de la cuenta o representante autorizado y solicito la eliminación de los datos asociados conforme a la Política de Privacidad.",
    ].join("\n")

    return `mailto:hola@aiapaec.xyz?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`
  }, [form])

  const onSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    window.location.href = mailtoHref
    setSubmitted(true)
  }

  return (
    <form onSubmit={onSubmit} className="space-y-5">
      <div className="grid md:grid-cols-2 gap-4">
        <label className="flex flex-col gap-2 text-sm">
          <span className="font-medium">Nombre completo *</span>
          <input
            required
            className="rounded-md border border-slate-300 px-3 py-2"
            value={form.fullName}
            onChange={(event) => setForm({ ...form, fullName: event.target.value })}
          />
        </label>

        <label className="flex flex-col gap-2 text-sm">
          <span className="font-medium">Correo electrónico *</span>
          <input
            required
            type="email"
            className="rounded-md border border-slate-300 px-3 py-2"
            value={form.email}
            onChange={(event) => setForm({ ...form, email: event.target.value })}
          />
        </label>
      </div>

      <div className="grid md:grid-cols-2 gap-4">
        <label className="flex flex-col gap-2 text-sm">
          <span className="font-medium">Aplicación que deseas eliminar *</span>
          <input
            required
            className="rounded-md border border-slate-300 px-3 py-2"
            placeholder="Ejemplo: Aiapaec App"
            value={form.appName}
            onChange={(event) => setForm({ ...form, appName: event.target.value })}
          />
        </label>

        <label className="flex flex-col gap-2 text-sm">
          <span className="font-medium">ID de app (paquete/bundle)</span>
          <input
            className="rounded-md border border-slate-300 px-3 py-2"
            placeholder="Ejemplo: com.aiapaec.app"
            value={form.appPackage}
            onChange={(event) => setForm({ ...form, appPackage: event.target.value })}
          />
        </label>
      </div>

      <div className="grid md:grid-cols-2 gap-4">
        <label className="flex flex-col gap-2 text-sm">
          <span className="font-medium">Identificador de cuenta *</span>
          <input
            required
            className="rounded-md border border-slate-300 px-3 py-2"
            placeholder="Email de cuenta, User ID, teléfono, etc."
            value={form.accountIdentifier}
            onChange={(event) => setForm({ ...form, accountIdentifier: event.target.value })}
          />
        </label>
      </div>

      <label className="flex flex-col gap-2 text-sm">
        <span className="font-medium">País o región</span>
        <input
          className="rounded-md border border-slate-300 px-3 py-2"
          value={form.country}
          onChange={(event) => setForm({ ...form, country: event.target.value })}
        />
      </label>

      <label className="flex flex-col gap-2 text-sm">
        <span className="font-medium">Información adicional</span>
        <textarea
          rows={5}
          className="rounded-md border border-slate-300 px-3 py-2"
          placeholder="Si deseas, agrega más contexto para localizar tu cuenta."
          value={form.details}
          onChange={(event) => setForm({ ...form, details: event.target.value })}
        />
      </label>

      <label className="flex items-start gap-3 text-sm">
        <input
          type="checkbox"
          required
          className="mt-1"
          checked={form.consent}
          onChange={(event) => setForm({ ...form, consent: event.target.checked })}
        />
        <span>
          Confirmo que soy el titular de la cuenta o representante autorizado y solicito la eliminación de la cuenta
          y sus datos asociados.
        </span>
      </label>

      <button
        type="submit"
        className="inline-flex items-center justify-center rounded-md bg-slate-900 px-5 py-2.5 text-white hover:bg-slate-800"
      >
        Enviar solicitud
      </button>

      <p className="text-sm text-slate-600">
        Al enviar, se abrirá tu cliente de correo con la solicitud prellenada hacia{" "}
        <a className="underline" href="mailto:hola@aiapaec.xyz">
          hola@aiapaec.xyz
        </a>
        .
      </p>

      {submitted ? (
        <p className="text-sm text-emerald-700">
          Si tu aplicación de correo no se abrió, envía manualmente tu solicitud a hola@aiapaec.xyz usando los datos
          del formulario.
        </p>
      ) : null}
    </form>
  )
}
