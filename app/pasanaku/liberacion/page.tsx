"use client"

import Header from "../_components/header"
import LayoutHint from "../layout-hint"
import MiniConfetti from "../_components/confetti"
import { Chip } from "../_components/chip"
import { ShieldCheck, Zap } from "lucide-react"
import { I18nProvider, useI18n } from "../_components/i18n-provider"
import { Money } from "../_components/money"
import Link from "next/link"
import { Button } from "@/components/ui/button"

function Release() {
  const { t } = useI18n()
  return (
    <LayoutHint>
      <Header title={t("release_wow")} />
      <main className="py-6">
        <div className="max-w-xl mx-auto text-center">
          <div className="mb-2 text-lg font-semibold text-[#22C55E]">{t("release_wow")}</div>
          <MiniConfetti run />
          <div className="rounded-[12px] border border-[#1F2937] bg-[#111827] p-6 text-left">
            <div className="grid grid-cols-2 gap-4">
              <div>
                <div className="text-sm text-[#E5E7EB]/80">{t("beneficiary")}</div>
                <div className="text-[#E5E7EB] font-semibold">Lucía G.</div>
              </div>
              <div>
                <div className="text-sm text-[#E5E7EB]/80">{t("amount_to_release")}</div>
                <div className="text-[#E5E7EB] font-semibold">
                  <Money value={1000} currency="USDC" />
                </div>
              </div>
              <div>
                <div className="text-sm text-[#E5E7EB]/80">{t("time")}</div>
                <div className="text-[#E5E7EB] font-semibold">5.2 s · $0.00</div>
              </div>
            </div>
            <div className="mt-4 flex flex-wrap gap-2">
              <Chip tone="success" icon={<ShieldCheck className="size-4" />}>
                Depósito aplicado
              </Chip>
              <Chip tone="primary" icon={<Zap className="size-4" />}>
                Autopago activo
              </Chip>
            </div>
            <div className="mt-4 text-xs text-[#E5E7EB]/60">{t("micro_confirmed")}</div>
          </div>

          <div className="mt-6 flex gap-3 justify-center">
            <Link href="/pasanaku/recibo">
              <Button className="rounded-[12px] min-h-11 bg-[#2563EB] hover:bg-[#1D4ED8] text-white">Ver Recibo</Button>
            </Link>
            <Link href="/pasanaku/dashboard">
              <Button
                variant="outline"
                className="rounded-[12px] min-h-11 border-[#1F2937] text-[#E5E7EB] bg-transparent hover:bg-[#0B1220]"
              >
                Volver al Dashboard
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
      <Release />
    </I18nProvider>
  )
}
