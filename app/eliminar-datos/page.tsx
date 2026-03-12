import type { Metadata } from "next"
import Link from "next/link"
import { DataDeletionForm } from "@/components/data-deletion-form"

export const metadata: Metadata = {
  title: "Eliminar cuenta y datos | AIAPAEC",
  description:
    "Formulario para solicitar la eliminación de cuenta y datos asociados en servicios de AIAPAEC.",
  robots: {
    index: true,
    follow: true,
  },
}

export default function DataDeletionPage() {
  return (
    <main className="min-h-screen bg-background py-12 text-foreground md:py-16">
      <div className="container mx-auto px-4">
        <article className="mx-auto max-w-4xl rounded-[2rem] border border-white/10 bg-[linear-gradient(180deg,rgba(19,25,39,0.92),rgba(16,22,36,0.78))] p-6 shadow-[0_24px_80px_rgba(2,6,23,0.42)] md:p-10">
          <header className="mb-8">
            <p className="font-mono-accent text-sm uppercase tracking-[0.24em] text-sky-200/80">Atención de privacidad</p>
            <h1 className="font-display mt-3 text-3xl font-bold tracking-tight md:text-5xl">
              Solicitud de eliminación de cuenta y datos
            </h1>
            <p className="mt-4 leading-relaxed text-slate-300">
              Usa este formulario para solicitar la eliminación de tu cuenta y de los datos personales asociados a
              nuestros servicios digitales.
            </p>
          </header>

          <section className="mb-8">
            <DataDeletionForm />
          </section>

          <section className="rounded-2xl border border-white/10 bg-white/5 p-4 text-sm text-slate-300">
            <p className="mb-1 font-medium text-white">Qué ocurre después</p>
            <p>
              Verificaremos la titularidad de la cuenta y procesaremos la solicitud dentro de los plazos legales
              aplicables. Si algún dato debe conservarse por obligación legal o de seguridad, te lo informaremos.
            </p>
          </section>

          <footer className="mt-10 border-t border-white/10 pt-6">
            <div className="flex flex-wrap gap-4 text-sm">
              <Link href="/privacidad" className="underline transition-colors hover:text-white">
                Ver Política de Privacidad
              </Link>
              <Link href="/" className="underline transition-colors hover:text-white">
                Volver al inicio
              </Link>
            </div>
          </footer>
        </article>
      </div>
    </main>
  )
}
