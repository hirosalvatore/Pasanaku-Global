"use client"

import Header from "../_components/header"
import LayoutHint from "../layout-hint"
import { Button } from "@/components/ui/button"
import { Check } from "lucide-react"
import { useEffect, useState } from "react"
import MiniConfetti from "../_components/confetti"
import { I18nProvider, useI18n } from "../_components/i18n-provider"
import Link from "next/link"

function Pay() {
  const { t } = useI18n()
  const [paying, setPaying] = useState(false)
  const [confirmed, setConfirmed] = useState(false)
  const [showCounter, setShowCounter] = useState(false)

  useEffect(() => {
    let t1: any
    let t2: any
    if (paying) {
      t1 = setTimeout(() => setShowCounter(true), 1000)
      t2 = setTimeout(() => {
        setConfirmed(true)
      }, 5200)
    }
    return () => {
      clearTimeout(t1)
      clearTimeout(t2)
    }
  }, [paying])

  return (
    <LayoutHint>
      <Header title={t("pay_fee_title")} />
      <main className="py-6">
        <div className="max-w-md rounded-[12px] border border-[#1F2937] bg-[#111827] p-6">
          <div className="text-[#E5E7EB] font-semibold">{t("fee_summary")}</div>
          <div className="mt-2 text-sm text-[#E5E7EB]/80">
            {t("estimated_time")}: ~5 s · {t("fee_net")}: $0.00
          </div>
          <div className="mt-6">
            <Button
              disabled={paying}
              onClick={() => setPaying(true)}
              className="w-full rounded-[12px] min-h-11 bg-[#2563EB] hover:bg-[#1D4ED8] text-white text-lg"
            >
              {t("pay_now")}
            </Button>
          </div>

          <div className="mt-6 h-16 grid place-items-center">
            {paying && !confirmed ? (
              <div className="flex items-center gap-2 text-[#E5E7EB]/90">
                <div className="size-6 rounded-full border-2 border-[#2563EB] border-t-transparent animate-spin" />
                {showCounter ? (
                  <span className="text-sm">{t("confirmed_in")}</span>
                ) : (
                  <span className="text-sm">Procesando…</span>
                )}
              </div>
            ) : null}
            {confirmed ? (
              <div className="flex items-center gap-2 text-[#22C55E]">
                <Check className="size-6" />
                <span className="text-sm">{t("confirmed_in")}</span>
              </div>
            ) : null}
          </div>
          <MiniConfetti run={confirmed} />

          {confirmed && (
            <div className="mt-4">
              <Link href="/pasanaku/liberacion">
                <Button className="w-full rounded-[12px] min-h-11 bg-[#22C55E] hover:bg-[#16A34A] text-white">
                  Ver Liberación
                </Button>
              </Link>
            </div>
          )}
        </div>
      </main>
    </LayoutHint>
  )
}

export default function Page() {
  return (
    <I18nProvider>
      <Pay />
    </I18nProvider>
  )
}
