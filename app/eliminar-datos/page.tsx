import type { Metadata } from "next"
import Link from "next/link"
import { DataDeletionForm } from "@/components/data-deletion-form"

export const metadata: Metadata = {
  title: "Eliminar cuenta y datos | aiapaec tech",
  description:
    "Formulario de solicitud para eliminación de cuenta y datos asociados de usuarios en servicios de aiapaec tech.",
  robots: {
    index: true,
    follow: true,
  },
}

export default function DataDeletionPage() {
  return (
    <main className="min-h-screen bg-slate-50 text-slate-900 py-12 md:py-16">
      <div className="container mx-auto px-4">
        <article className="max-w-4xl mx-auto rounded-2xl border border-slate-200 bg-white shadow-lg p-6 md:p-10">
          <header className="mb-8">
            <h1 className="text-3xl md:text-5xl font-bold tracking-tight">Solicitud de eliminación de cuenta y datos</h1>
            <p className="mt-4 text-slate-700 leading-relaxed">
              Usa este formulario para solicitar la eliminación de tu cuenta y de los datos personales asociados a
              nuestros sitios web y aplicaciones móviles.
            </p>
          </header>

          <section className="mb-8">
            <DataDeletionForm />
          </section>

          <section className="rounded-lg border border-slate-200 bg-slate-50 p-4 text-sm text-slate-700">
            <p className="font-medium text-slate-900 mb-1">¿Qué ocurre después?</p>
            <p>
              Verificaremos la titularidad de la cuenta y procesaremos la solicitud dentro de los plazos legales
              aplicables. Si algún dato debe conservarse por obligación legal o de seguridad, te lo informaremos.
            </p>
          </section>

          <footer className="mt-10 pt-6 border-t border-slate-200">
            <div className="flex flex-wrap gap-4 text-sm">
              <Link href="/privacidad" className="text-slate-700 hover:text-slate-900 underline">
                Ver Política de Privacidad
              </Link>
              <Link href="/" className="text-slate-700 hover:text-slate-900 underline">
                Volver al inicio
              </Link>
            </div>
          </footer>
        </article>
      </div>
    </main>
  )
}
