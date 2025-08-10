"use client"

import Header from "../_components/header"
import LayoutHint from "../layout-hint"
import { BadgeCheck, Zap } from "lucide-react"
import { Chip } from "../_components/chip"
import { I18nProvider, useI18n } from "../_components/i18n-provider"

function Profile() {
  const { t } = useI18n()
  return (
    <LayoutHint>
      <Header title={t("profile_title")} />
      <main className="py-6">
        <div className="max-w-2xl rounded-[12px] border border-[#1F2937] bg-[#111827] p-6">
          <div className="flex items-center gap-4">
            <div className="size-14 rounded-full bg-[#111827] border border-[#1F2937] grid place-items-center text-[#E5E7EB]">
              LG
            </div>
            <div>
              <div className="text-[#E5E7EB] font-semibold">Lucía G.</div>
              <div className="text-sm text-[#22C55E]">{t("level")} GOLD</div>
            </div>
          </div>
          <div className="mt-5 grid grid-cols-2 sm:grid-cols-4 gap-4">
            <div className="rounded-[12px] border border-[#1F2937] bg-[#0B1220] p-4">
              <div className="text-xs text-[#E5E7EB]/60">{t("punctuality")}</div>
              <div className="text-[#E5E7EB] font-semibold">
                97% <span className="text-xs text-[#E5E7EB]/60">({t("streak")}: 11)</span>
              </div>
            </div>
            <div className="rounded-[12px] border border-[#1F2937] bg-[#0B1220] p-4">
              <div className="text-xs text-[#E5E7EB]/60">{t("cycles_completed")}</div>
              <div className="text-[#E5E7EB] font-semibold">3</div>
            </div>
            <div className="rounded-[12px] border border-[#1F2937] bg-[#0B1220] p-4">
              <div className="text-xs text-[#E5E7EB]/60">{t("max_quota_enabled")}</div>
              <div className="text-[#E5E7EB] font-semibold">250 USDC</div>
            </div>
            <div className="rounded-[12px] border border-[#1F2937] bg-[#0B1220] p-4">
              <div className="text-xs text-[#E5E7EB]/60">{t("early_turns")}</div>
              <div className="text-[#E5E7EB] font-semibold">{t("allowed_without_vesting")}</div>
            </div>
          </div>

          <div className="mt-5 flex flex-wrap gap-2">
            <Chip tone="success" icon={<BadgeCheck className="size-4" />}>
              {t("trusted_organizer")}
            </Chip>
            <Chip tone="primary" icon={<Zap className="size-4" />}>
              {t("autopay_pro")}
            </Chip>
          </div>

          <p className="mt-5 text-sm text-[#E5E7EB]/80">{t("profile_copy")}</p>
        </div>
      </main>
    </LayoutHint>
  )
}

export default function Page() {
  return (
    <I18nProvider>
      <Profile />
    </I18nProvider>
  )
}
