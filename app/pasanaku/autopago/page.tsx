"use client"

import Header from "../_components/header"
import LayoutHint from "../layout-hint"
import { Button } from "@/components/ui/button"
import { Sparkles } from "lucide-react"
import { Chip } from "../_components/chip"
import { I18nProvider, useI18n } from "../_components/i18n-provider"
import Link from "next/link"

function Autopay() {
  const { t } = useI18n()
  return (
    <LayoutHint>
      <Header title={t("autopay_title")} />
      <main className="py-6">
        <div className="rounded-[12px] border border-[#1F2937] bg-[#111827] p-6 max-w-xl">
          <h2 className="text-[#E5E7EB] font-semibold">{t("autopay_title")}</h2>
          <p className="mt-2 text-[#E5E7EB]/80">{t("autopay_copy")}</p>

          <div className="mt-4">
            <Chip tone="primary" icon={<Sparkles className="size-4" />}>
              {t("improves_reputation")}
            </Chip>
          </div>

          <div className="mt-6 flex gap-3">
            <Link href="/pasanaku/dashboard">
              <Button className="rounded-[12px] min-h-11 bg-[#2563EB] hover:bg-[#1D4ED8] text-white">
                {t("authorize")}
              </Button>
            </Link>
            <Link href="/pasanaku/dashboard">
              <Button variant="ghost" className="rounded-[12px] min-h-11 text-[#E5E7EB] hover:bg-[#0B1220]">
                {t("not_now")}
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
      <Autopay />
    </I18nProvider>
  )
}
