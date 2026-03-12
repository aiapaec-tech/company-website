"use client"

import { useLanguage } from "@/contexts/language-context"
import { Button } from "@/components/ui/button"
import { Languages } from "lucide-react"

export function LanguageSwitcher() {
  const { language, setLanguage } = useLanguage()

  return (
    <div className="fixed right-4 top-4 z-50">
      <div className="flex items-center gap-1 rounded-full border border-white/10 bg-slate-950/70 p-1.5 shadow-[0_20px_50px_rgba(2,6,23,0.45)] backdrop-blur-md">
        <Button
          variant={language === "es" ? "default" : "ghost"}
          size="sm"
          onClick={() => setLanguage("es")}
          className="rounded-full px-3 text-xs uppercase tracking-[0.16em]"
        >
          ES
        </Button>
        <Button
          variant={language === "qu" ? "default" : "ghost"}
          size="sm"
          onClick={() => setLanguage("qu")}
          className="rounded-full px-3 text-xs uppercase tracking-[0.16em]"
        >
          QU
        </Button>
        <Button
          variant={language === "en" ? "default" : "ghost"}
          size="sm"
          onClick={() => setLanguage("en")}
          className="rounded-full px-3 text-xs uppercase tracking-[0.16em]"
        >
          EN
        </Button>
        <div className="ml-1 flex h-8 w-8 items-center justify-center rounded-full bg-white/5 text-slate-300">
          <Languages className="h-4 w-4" />
        </div>
      </div>
    </div>
  )
}
