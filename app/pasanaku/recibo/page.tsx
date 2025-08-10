"use client"

import Header from "../_components/header"
import LayoutHint from "../layout-hint"
import { Button } from "@/components/ui/button"
import { I18nProvider, useI18n } from "../_components/i18n-provider"
import Link from "next/link"

function Receipt() {
  const { t } = useI18n()
  return (
    <LayoutHint>
      <Header title={t("receipt")} />
      <main className="py-6">
        <div className="max-w-xl rounded-[12px] border border-[#1F2937] bg-[#111827] p-6">
          <div className="grid grid-cols-2 gap-4">
            <div>
              <div className="text-sm text-[#E5E7EB]/80">{t("tx_id")}</div>
              <div className="flex items-center gap-2">
                <div className="text-[#E5E7EB] font-semibold">0x7a…c4</div>
                <button className="text-xs underline text-[#93C5FD] hover:text-white" type="button">
                  copiar
                </button>
              </div>
            </div>
            <div>
              <div className="text-sm text-[#E5E7EB]/80">{t("local_datetime")}</div>
              <div className="text-[#E5E7EB] font-semibold">Hoy 19:00</div>
            </div>
            <div>
              <div className="text-sm text-[#E5E7EB]/80">{t("period_label")}</div>
              <div className="text-[#E5E7EB] font-semibold">Semana 3/10</div>
            </div>
            <div>
              <div className="text-sm text-[#E5E7EB]/80">{t("coverage_source")}</div>
              <div className="text-[#E5E7EB] font-semibold">100% cuotas · 0% fondo</div>
            </div>
          </div>
          <div className="mt-6 flex gap-3">
            <Button className="rounded-[12px] min-h-11 bg-[#2563EB] hover:bg-[#1D4ED8] text-white">
              {t("share_receipt")}
            </Button>
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
      <Receipt />
    </I18nProvider>
  )
}
