"use client"

import type React from "react"

import Link from "next/link"
import { Moon, Sun, Languages, Bell } from "lucide-react"
import { Button } from "@/components/ui/button"
import { useTheme } from "next-themes"
import { useI18n } from "./i18n-provider"

export default function Header({
  title,
  groupName,
  groupChips,
}: {
  title?: string
  groupName?: string
  groupChips?: React.ReactNode
}) {
  const { theme, setTheme } = useTheme()
  const { lang, setLang, t } = useI18n()
  return (
    <header className="sticky top-0 z-30 border-b border-[#1F2937] bg-[#0B1220]/80 backdrop-blur supports-[backdrop-filter]:bg-[#0B1220]/60 text-[#E5E7EB]">
      <div className="mx-auto max-w-5xl px-4 py-3">
        <div className="flex items-center justify-between">
          <Link
            href="/pasanaku/dashboard"
            className="flex items-center gap-2 hover:opacity-90 transition-all duration-200 ease-out"
          >
            <div className="size-8 rounded-md bg-[#2563EB] grid place-items-center text-white font-bold">P</div>
            <div className="font-semibold">{title ?? t("app_title")}</div>
          </Link>
          <div className="flex items-center gap-2">
            <Link href="/pasanaku/notificaciones" aria-label={t("notifications")}>
              <Button
                variant="outline"
                className="min-h-11 rounded-[12px] border-[#1F2937] text-[#E5E7EB] bg-transparent hover:bg-[#111827]"
              >
                <Bell className="size-4" />
              </Button>
            </Link>
            <div className="hidden sm:flex items-center gap-1 text-xs text-[#E5E7EB]/80">
              <Languages className="size-4" />
              <span>{t("language")}:</span>
            </div>
            <div className="flex rounded-full overflow-hidden border border-[#1F2937]">
              <button
                type="button"
                className={`px-3 py-2 text-sm ${lang === "es" ? "bg-[#111827] text-white" : "text-[#E5E7EB]/80 hover:text-white"}`}
                onClick={() => setLang("es")}
              >
                ES
              </button>
              <button
                type="button"
                className={`px-3 py-2 text-sm ${lang === "en" ? "bg-[#111827] text-white" : "text-[#E5E7EB]/80 hover:text-white"}`}
                onClick={() => setLang("en")}
              >
                EN
              </button>
            </div>
            <div className="hidden sm:flex items-center gap-1 text-xs text-[#E5E7EB]/80 pl-2">
              <Sun className="size-4" />
              <span>{t("theme")}:</span>
            </div>
            <Button
              variant="outline"
              className="min-h-11 rounded-[12px] border-[#1F2937] text-[#E5E7EB] bg-transparent hover:bg-[#111827]"
              onClick={() => setTheme(theme === "light" ? "dark" : "light")}
            >
              {theme === "light" ? <Moon className="size-4" /> : <Sun className="size-4" />}
              <span className="sr-only">Toggle theme</span>
            </Button>
          </div>
        </div>
        {groupName && (
          <div className="mt-3 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2">
            <h1 className="text-xl font-semibold text-[#E5E7EB]">{groupName}</h1>
            <div className="flex flex-wrap gap-2">{groupChips}</div>
          </div>
        )}
      </div>
    </header>
  )
}
