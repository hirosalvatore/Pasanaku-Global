"use client"

import Header from "../../_components/header"
import LayoutHint from "../../layout-hint"
import { Slider } from "@/components/ui/slider"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { useState } from "react"
import { I18nProvider, useI18n } from "../../_components/i18n-provider"
import Link from "next/link"

function Step1() {
  const { t } = useI18n()
  const [size, setSize] = useState<number[]>([10])
  const [amount, setAmount] = useState("100")
  const [currency, setCurrency] = useState("USDC")
  const [period, setPeriod] = useState<"weekly" | "biweekly">("weekly")

  return (
    <LayoutHint>
      <Header title={`${t("step")} 1/3 — ${t("create_your_group")}`} />
      <main className="py-6">
        <div className="rounded-[12px] border border-[#1F2937] bg-[#111827] p-5 max-w-xl">
          <h2 className="text-[#E5E7EB] font-semibold mb-4">{t("create_your_group")}</h2>

          <label className="block text-sm text-[#E5E7EB]/80 mb-2">{t("group_size")} (5–12)</label>
          <div className="px-2">
            <Slider
              value={size}
              min={5}
              max={12}
              step={1}
              onValueChange={setSize}
              className="[&_[role=slider]]:size-5 [&_[role=slider]]:rounded-full [&_[role=slider]]:bg-[#2563EB]"
            />
          </div>
          <div className="text-sm text-[#E5E7EB] mt-2">{size[0]}</div>

          <div className="mt-5">
            <label className="block text-sm text-[#E5E7EB]/80 mb-2">{t("fee_per_period")}</label>
            <div className="flex gap-2">
              <Input
                value={amount}
                onChange={(e) => setAmount(e.target.value)}
                className="rounded-[12px] border-[#1F2937] bg-[#0B1220] text-[#E5E7EB]"
                inputMode="decimal"
              />
              <select
                value={currency}
                onChange={(e) => setCurrency(e.target.value)}
                className="rounded-[12px] border border-[#1F2937] bg-[#0B1220] px-3 text-[#E5E7EB] min-h-11"
              >
                <option>USDC</option>
                <option>USDT</option>
                <option>DAI</option>
              </select>
            </div>
          </div>

          <div className="mt-5">
            <label className="block text-sm text-[#E5E7EB]/80 mb-2">{t("period")}</label>
            <div className="flex gap-2">
              <button
                type="button"
                onClick={() => setPeriod("weekly")}
                className={`px-4 py-2 rounded-full border min-h-11 ${period === "weekly" ? "bg-[#2563EB] border-[#2563EB] text-white" : "bg-[#0B1220] border-[#1F2937] text-[#E5E7EB]"}`}
              >
                {t("weekly")}
              </button>
              <button
                type="button"
                onClick={() => setPeriod("biweekly")}
                className={`px-4 py-2 rounded-full border min-h-11 ${period === "biweekly" ? "bg-[#2563EB] border-[#2563EB] text-white" : "bg-[#0B1220] border-[#1F2937] text-[#E5E7EB]"}`}
              >
                {t("biweekly")}
              </button>
            </div>
          </div>

          <div className="mt-6 flex items-center justify-between">
            <p className="text-xs text-[#E5E7EB]/60">{t("hint_invite")}</p>
            <Link href="/pasanaku/crear-grupo/step-2">
              <Button className="rounded-[12px] bg-[#2563EB] hover:bg-[#1D4ED8] text-white min-h-11">
                {t("continue")}
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
      <Step1 />
    </I18nProvider>
  )
}
