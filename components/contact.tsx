"use client"

import { useLanguage } from "@/contexts/language-context"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Phone, Mail, MapPin, ExternalLink } from "lucide-react"
import Link from "next/link"

export function Contact() {
  const { t } = useLanguage()

  return (
    <section
      id="contact"
      className="min-h-screen snap-start flex items-start bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 text-white"
    >
      <div className="container mx-auto h-screen px-4 pt-6 md:pt-8">
        <div className="mx-auto flex h-[50vh] max-w-4xl flex-col justify-between">
          <h2 className="text-3xl md:text-5xl font-bold text-center mb-6 md:mb-8">{t.contact.title}</h2>

          <div className="grid md:grid-cols-3 gap-4 md:gap-6 mb-4 md:mb-6">
            <Card className="bg-white/10 backdrop-blur-sm border-white/20 text-white">
              <CardContent className="p-4 md:p-5 text-center">
                <Phone className="w-9 h-9 md:w-10 md:h-10 mx-auto mb-2 text-purple-400" />
                <h3 className="text-lg font-semibold mb-2">Teléfono</h3>
                <a href={`tel:${t.contact.phone}`} className="text-purple-300 hover:text-purple-200 transition-colors">
                  {t.contact.phone}
                </a>
              </CardContent>
            </Card>

            <Card className="bg-white/10 backdrop-blur-sm border-white/20 text-white">
              <CardContent className="p-4 md:p-5 text-center">
                <Mail className="w-9 h-9 md:w-10 md:h-10 mx-auto mb-2 text-blue-400" />
                <h3 className="text-lg font-semibold mb-2">Email</h3>
                <a href={`mailto:${t.contact.email}`} className="text-blue-300 hover:text-blue-200 transition-colors">
                  {t.contact.email}
                </a>
              </CardContent>
            </Card>

            <Card className="bg-white/10 backdrop-blur-sm border-white/20 text-white">
              <CardContent className="p-4 md:p-5 text-center">
                <MapPin className="w-9 h-9 md:w-10 md:h-10 mx-auto mb-2 text-green-400" />
                <h3 className="text-lg font-semibold mb-2">Dirección</h3>
                <p className="text-green-300 text-sm">{t.contact.address}</p>
              </CardContent>
            </Card>
          </div>

          <div className="text-center">
            <Button
              asChild
              size="lg"
              className="bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white px-7 py-3 text-base md:text-lg font-semibold rounded-full shadow-2xl hover:shadow-purple-500/25 transition-all duration-300 transform hover:scale-105"
            >
              <a href={`mailto:${t.contact.email}`}>
                {t.contact.cta}
                <ExternalLink className="ml-2 w-5 h-5" />
              </a>
            </Button>
          </div>

          <div className="text-center pt-4 border-t border-white/20">
            <p className="text-gray-400">© 2026 aiapaec tech</p>
            <p className="mt-2">
              <Link href="/privacidad" className="text-gray-300 hover:text-white underline text-sm">
                Política de Privacidad
              </Link>
            </p>
            <p className="mt-1">
              <Link href="/eliminar-datos" className="text-gray-300 hover:text-white underline text-sm">
                Solicitar eliminación de cuenta y datos
              </Link>
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
