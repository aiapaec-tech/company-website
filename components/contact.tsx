"use client"

import { useLanguage } from "@/contexts/language-context"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Phone, Mail, MapPin, ExternalLink } from "lucide-react"

export function Contact() {
  const { t } = useLanguage()

  return (
    <section id="contact" className="py-20 bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 text-white">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-16">{t.contact.title}</h2>

          <div className="grid md:grid-cols-3 gap-8 mb-12">
            <Card className="bg-white/10 backdrop-blur-sm border-white/20 text-white">
              <CardContent className="p-8 text-center">
                <Phone className="w-12 h-12 mx-auto mb-4 text-purple-400" />
                <h3 className="text-lg font-semibold mb-2">Teléfono</h3>
                <a href={`tel:${t.contact.phone}`} className="text-purple-300 hover:text-purple-200 transition-colors">
                  {t.contact.phone}
                </a>
              </CardContent>
            </Card>

            <Card className="bg-white/10 backdrop-blur-sm border-white/20 text-white">
              <CardContent className="p-8 text-center">
                <Mail className="w-12 h-12 mx-auto mb-4 text-blue-400" />
                <h3 className="text-lg font-semibold mb-2">Email</h3>
                <a href={`mailto:${t.contact.email}`} className="text-blue-300 hover:text-blue-200 transition-colors">
                  {t.contact.email}
                </a>
              </CardContent>
            </Card>

            <Card className="bg-white/10 backdrop-blur-sm border-white/20 text-white">
              <CardContent className="p-8 text-center">
                <MapPin className="w-12 h-12 mx-auto mb-4 text-green-400" />
                <h3 className="text-lg font-semibold mb-2">Dirección</h3>
                <p className="text-green-300 text-sm">{t.contact.address}</p>
              </CardContent>
            </Card>
          </div>

          <div className="text-center">
            <Button
              asChild
              size="lg"
              className="bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white px-8 py-4 text-lg font-semibold rounded-full shadow-2xl hover:shadow-purple-500/25 transition-all duration-300 transform hover:scale-105"
            >
              <a href={`mailto:${t.contact.email}`}>
                {t.contact.cta}
                <ExternalLink className="ml-2 w-5 h-5" />
              </a>
            </Button>
          </div>

          <div className="text-center mt-12 pt-8 border-t border-white/20">
            <p className="text-gray-400">© 2025 aiapaec tech. WWW.AIAPAEC.XYZ</p>
          </div>
        </div>
      </div>
    </section>
  )
}
