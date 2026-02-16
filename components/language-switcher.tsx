"use client"

import { useLanguage } from "@/contexts/language-context"
import { Button } from "@/components/ui/button"
import { Languages } from "lucide-react"

export function LanguageSwitcher() {
  const { language, setLanguage } = useLanguage()

  return (
    <div className="fixed top-4 right-4 z-50">
      <div className="flex gap-2 bg-white/90 backdrop-blur-sm rounded-lg p-2 shadow-lg">
        <Button
          variant={language === "es" ? "default" : "ghost"}
          size="sm"
          onClick={() => setLanguage("es")}
          className="text-xs"
        >
          ES
        </Button>
        <Button
          variant={language === "qu" ? "default" : "ghost"}
          size="sm"
          onClick={() => setLanguage("qu")}
          className="text-xs"
        >
          QU
        </Button>
        <Button
          variant={language === "en" ? "default" : "ghost"}
          size="sm"
          onClick={() => setLanguage("en")}
          className="text-xs"
        >
          EN
        </Button>
        <Languages className="w-4 h-4 text-gray-600 ml-1" />
      </div>
    </div>
  )
}
