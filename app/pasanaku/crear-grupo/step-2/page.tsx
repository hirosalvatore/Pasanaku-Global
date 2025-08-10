"use client"

import Header from "../../_components/header"
import LayoutHint from "../../layout-hint"
import { Switch } from "@/components/ui/switch"
import { Slider } from "@/components/ui/slider"
import { Button } from "@/components/ui/button"
import { useState } from "react"
import { ShieldCheck, Clock, Zap, Sparkles, Info } from "lucide-react"
import { I18nProvider, useI18n } from "../../_components/i18n-provider"
import { Chip } from "../../_components/chip"
import Link from "next/link"

function Step2() {
  const { t } = useI18n()
  const [deposit, setDeposit] = useState(true)
  const [vesting, setVesting] = useState<number[]>([50])
  const [autopay, setAutopay] = useState(true)
  const [fund, setFund] = useState<number[]>([1])

  return (
    <LayoutHint>
      <Header title={`${t("step")} 2/3 — ${t("protections")}`} />
      <main className="py-6">
        <div className="rounded-[12px] border border-[#1F2937] bg-[#111827] p-5 max-w-2xl space-y-6">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2 text-[#E5E7EB]">
              <ShieldCheck className="size-5" />
              <div className="font-semibold">{t("deposit_per_turn")}</div>
            </div>
            <Switch checked={deposit} onCheckedChange={setDeposit} />
          </div>
          <div className="text-xs text-[#E5E7EB]/60 flex items-center gap-1">
            <Info className="size-3" />
            {t("deposit_tooltip")}
          </div>

          <div className="space-y-2">
            <div className="flex items-center justify-between text-[#E5E7EB]">
              <div className="flex items-center gap-2">
                <Clock className="size-5" />
                <div className="font-semibold">{t("vesting_turns")}</div>
              </div>
              <div className="tabular-nums text-sm text-[#E5E7EB]/80">
                {vesting[0]} / {100 - vesting[0]}
              </div>
            </div>
            <div className="px-2">
              <Slider value={vesting} min={40} max={60} step={1} onValueChange={setVesting} />
            </div>
          </div>

          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2 text-[#E5E7EB]">
              <Zap className="size-5" />
              <div className="font-semibold">{t("autopay_weekly")}</div>
            </div>
            <Switch checked={autopay} onCheckedChange={setAutopay} />
          </div>

          <div className="space-y-2">
            <div className="flex items-center justify-between text-[#E5E7EB]">
              <div className="flex items-center gap-2">
                <Sparkles className="size-5" />
                <div className="font-semibold">{t("continuity_fund")}</div>
              </div>
              <div className="tabular-nums text-sm text-[#E5E7EB]/80">{fund[0]}%</div>
            </div>
            <div className="px-2">
              <Slider value={fund} min={0} max={1.5} step={0.1} onValueChange={setFund} />
            </div>
          </div>

          <div className="rounded-[12px] border border-[#1F2937] bg-[#0B1220] p-4">
            <div className="text-[#E5E7EB]/80 text-sm">{t("promise_diagram")}</div>
            <div className="mt-2 flex gap-2">
              <Chip tone="success">Zero-Loss</Chip>
              <Chip tone="primary">Deposits</Chip>
              <Chip tone="warning">Continuity Fund</Chip>
            </div>
          </div>

          <div className="flex justify-end">
            <Link href="/pasanaku/crear-grupo/step-3">
              <Button className="rounded-[12px] bg-[#2563EB] hover:bg-[#1D4ED8] text-white min-h-11">
                {t("choose_order")}
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
      <Step2 />
    </I18nProvider>
  )
}
