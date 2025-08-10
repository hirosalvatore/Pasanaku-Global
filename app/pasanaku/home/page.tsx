"use client"

import Header from "../_components/header"
import LayoutHint from "../layout-hint"
import TrustRing from "../_components/trust-ring"
import { ContributionBar } from "../_components/contribution-bar"
import { Chip } from "../_components/chip"
import { ShieldCheck, Zap, Banknote, CirclePlus, ExternalLink, ChevronDown } from "lucide-react"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { Money } from "../_components/money"
import { I18nProvider, useI18n } from "../_components/i18n-provider"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"

const members = [
  { id: 1, name: "Lucía G.", initials: "LG" },
  { id: 2, name: "Carlos M.", initials: "CM" },
  { id: 3, name: "Ana P.", initials: "AP" },
  { id: 4, name: "Diego R.", initials: "DR" },
  { id: 5, name: "María J.", initials: "MJ" },
  { id: 6, name: "Luis T.", initials: "LT" },
  { id: 7, name: "Sofía V.", initials: "SV" },
  { id: 8, name: "Jorge N.", initials: "JN" },
  { id: 9, name: "Elena C.", initials: "EC" },
  { id: 10, name: "Pedro S.", initials: "PS" },
]

function Home() {
  const { t } = useI18n()
  const groupChips = (
    <>
      <Chip tone="primary" icon={<Zap className="size-4" />}>
        {t("confirmation_5s")}
      </Chip>
      <Chip tone="success" icon={<ShieldCheck className="size-4" />}>
        {t("protection_auto")}
      </Chip>
      <Chip tone="warning" icon={<Banknote className="size-4" />}>
        {t("fee_red_approx")}
      </Chip>
    </>
  )

  return (
    <LayoutHint>
      <Header groupName={t("active_group")} groupChips={groupChips} />
      <main className="py-6">
        <div className="grid grid-cols-1 lg:grid-cols-[320px_1fr] gap-6">
          <section className="rounded-[12px] border border-[#1F2937] bg-[#111827] p-5 shadow-[0_8px_24px_rgba(2,6,23,0.12)]">
            <h2 className="text-[#E5E7EB] font-semibold mb-4">{t("trust_ring")}</h2>
            <TrustRing members={members} currentId={1} />
          </section>

          <section className="rounded-[12px] border border-[#1F2937] bg-[#111827] p-5 shadow-[0_8px_24px_rgba(2,6,23,0.12)] flex flex-col justify-between">
            <div>
              <div className="mb-6">
                <ContributionBar total={10} received={8} members={members} />
              </div>

              <div className="rounded-[12px] border border-[#1F2937] bg-[#0B1220] p-4 mb-6 relative overflow-hidden">
                <div className="absolute inset-0 bg-[radial-gradient(600px_300px_at_50%_10%,rgba(37,99,235,0.1),transparent)]" />
                <div className="relative z-10">
                  <div className="flex items-center justify-between">
                    <div>
                      <div className="text-sm text-[#E5E7EB]/80">{t("next_release")}</div>
                      <div className="text-[#E5E7EB] font-semibold">{t("today_at")} 19:00 (hora local)</div>
                    </div>
                    <Chip tone="success" icon={<ShieldCheck className="size-4" />}>
                      {t("zero_loss_active")}
                    </Chip>
                  </div>
                  <div className="mt-3 text-sm text-[#E5E7EB]/80">{t("amount_to_release")}</div>
                  <div className="text-xl font-semibold text-[#E5E7EB]">
                    <Money value={1000} currency="USDC" />
                  </div>
                </div>
              </div>
            </div>

            <div className="flex flex-wrap gap-3 mt-auto">
              <Link href="/pasanaku/pagar">
                <Button className="rounded-[12px] min-h-11 bg-[#2563EB] hover:bg-[#1D4ED8] text-white">
                  {t("pay_my_fee")} (100 USDC)
                </Button>
              </Link>
              <Button
                variant="outline"
                className="rounded-[12px] min-h-11 border-[#1F2937] text-[#E5E7EB] hover:bg-[#0B1220] bg-transparent"
              >
                {t("view_history")}
              </Button>
              <Link href="/pasanaku/invitacion">
                <Button variant="ghost" className="rounded-[12px] min-h-11 text-[#E5E7EB] hover:bg-[#0B1220]">
                  {t("invite")} <CirclePlus className="ml-1 size-4" />
                </Button>
              </Link>
            </div>
          </section>
        </div>

        <footer className="mt-6 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 text-xs text-[#E5E7EB]/60">
          <div>
            {t("contract")}: 0x7a…c4 ·{" "}
            <a className="underline hover:text-[#E5E7EB]" href="#" aria-label="Explorer">
              {t("view_in_explorer")} <ExternalLink className="inline size-3" />
            </a>
          </div>
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="ghost" className="rounded-[12px] min-h-11 text-[#E5E7EB] hover:bg-[#111827] text-xs">
                {t("select_group")} <ChevronDown className="ml-1 size-3" />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent className="w-(--radix-popper-anchor-width) bg-[#111827] border-[#1F2937] text-[#E5E7EB]">
              <DropdownMenuItem className="hover:bg-[#0B1220] cursor-pointer">
                <span>Pasanaku – Amigos UNI</span>
              </DropdownMenuItem>
              <DropdownMenuItem className="hover:bg-[#0B1220] cursor-pointer">
                <span>Pasanaku – Familia</span>
              </DropdownMenuItem>
              <DropdownMenuItem className="hover:bg-[#0B1220] cursor-pointer">
                <span>Pasanaku – Trabajo</span>
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </footer>
      </main>
    </LayoutHint>
  )
}

export default function Page() {
  return (
    <I18nProvider>
      <Home />
    </I18nProvider>
  )
}
