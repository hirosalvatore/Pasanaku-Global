"use client"

import Header from "../_components/header"
import LayoutHint from "../layout-hint"
import { Button } from "@/components/ui/button"
import { I18nProvider, useI18n } from "../_components/i18n-provider"
import Link from "next/link"

function Notifications() {
  const { t } = useI18n()
  return (
    <LayoutHint>
      <Header title={t("notifications_center")} />
      <main className="py-6">
        <div className="grid gap-6 md:grid-cols-2">
          <div className="rounded-[12px] border border-[#1F2937] bg-[#111827] p-5">
            <h3 className="text-[#E5E7EB] font-semibold mb-3">{t("today")}</h3>
            <div className="space-y-3">
              <div className="rounded-[12px] border border-[#1F2937] bg-[#0B1220] p-4">
                <div className="text-[#E5E7EB]">{t("notif_due")}</div>
                <div className="mt-3 flex gap-2">
                  <Link href="/pasanaku/pagar">
                    <Button className="rounded-[12px] min-h-11 bg-[#2563EB] hover:bg-[#1D4ED8] text-white">
                      {t("pay_action")}
                    </Button>
                  </Link>
                  <Button
                    variant="outline"
                    className="rounded-[12px] min-h-11 border-[#1F2937] text-[#E5E7EB] bg-transparent"
                  >
                    {t("history_action")}
                  </Button>
                </div>
              </div>
              <div className="rounded-[12px] border border-[#1F2937] bg-[#0B1220] p-4">
                <div className="text-[#E5E7EB]">{t("notif_released")}</div>
                <div className="mt-3 flex gap-2">
                  <Link href="/pasanaku/recibo">
                    <Button
                      variant="outline"
                      className="rounded-[12px] min-h-11 border-[#1F2937] text-[#E5E7EB] bg-transparent"
                    >
                      {t("share_action")}
                    </Button>
                  </Link>
                </div>
              </div>
            </div>
          </div>

          <div className="rounded-[12px] border border-[#1F2937] bg-[#111827] p-5">
            <h3 className="text-[#E5E7EB] font-semibold mb-3">{t("this_week")}</h3>
            <div className="space-y-3">
              <div className="rounded-[12px] border border-[#1F2937] bg-[#0B1220] p-4">
                <div className="text-[#E5E7EB]">{t("notif_deposit_return")}</div>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-6 text-xs text-[#E5E7EB]/70 space-y-1">
          <div>• {t("micro_zero_loss")}</div>
          <div>• {t("micro_confirmed")}</div>
          <div>• {t("micro_reputation")}</div>
          <div>• {t("micro_international")}</div>
        </div>
      </main>
    </LayoutHint>
  )
}

export default function Page() {
  return (
    <I18nProvider>
      <Notifications />
    </I18nProvider>
  )
}
