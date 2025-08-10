"use client"

import Header from "../_components/header"
import LayoutHint from "../layout-hint"
import BrandLogo from "../_components/brand-logo"
import { Button } from "@/components/ui/button"
import { ShieldCheck, Zap, Globe2 } from "lucide-react"
import { Chip } from "../_components/chip"
import { I18nProvider, useI18n } from "../_components/i18n-provider"
import Link from "next/link"

function Splash() {
  const { t } = useI18n()
  return (
    <LayoutHint>
      <Header />
      <main className="relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(1200px_600px_at_50%_-10%,rgba(37,99,235,0.18),transparent),radial-gradient(800px_400px_at_60%_120%,rgba(167,139,250,0.12),transparent)]" />
        <div className="relative mx-auto max-w-2xl text-center py-16">
          <div className="mb-6 flex justify-center">
            <BrandLogo size={64} />
          </div>
          <h1 className="text-3xl md:text-4xl font-semibold text-[#E5E7EB]">{t("app_title")}</h1>
          <p className="mt-3 text-[#E5E7EB]/80 text-base max-w-xl mx-auto">{t("tagline")}</p>
          <div className="mt-6 flex flex-wrap items-center justify-center gap-2">
            <Chip tone="dark" icon={<ShieldCheck className="size-4" />}>
              {t("protection_auto")}
            </Chip>
            <Chip tone="dark" icon={<Zap className="size-4" />}>
              {t("confirmation_5s")}
            </Chip>
            <Chip tone="dark" icon={<Globe2 className="size-4" />}>
              {t("international")}
            </Chip>
          </div>
          <div className="mt-8 flex items-center justify-center gap-3">
            <Link href="/pasanaku/dashboard">
              <Button className="rounded-[12px] min-h-11 bg-[#2563EB] hover:bg-[#1D4ED8] text-white">
                {t("create_group")}
              </Button>
            </Link>
            <Link href="/pasanaku/dashboard">
              <Button variant="ghost" className="rounded-[12px] min-h-11 text-[#E5E7EB] hover:bg-[#111827]">
                {t("explore")}
              </Button>
            </Link>
          </div>
        </div>
      </main>
    </LayoutHint>
  )
}

export default function Page() {
  return (
    <I18nProvider>
      <Splash />
    </I18nProvider>
  )
}
