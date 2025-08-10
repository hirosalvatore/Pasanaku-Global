"use client"

import Header from "../_components/header"
import LayoutHint from "../layout-hint"
import { Button } from "@/components/ui/button"
import { PhoneIcon as Whatsapp, Send, Mail, Copy, QrCode } from "lucide-react"
import { I18nProvider, useI18n } from "../_components/i18n-provider"

function Invitation() {
  const { t } = useI18n()
  const link = "https://pasanaku.global/join/Amigos-UNI?g=10&c=100USDC&period=weekly"
  return (
    <LayoutHint>
      <Header title={t("invitation_title")} />
      <main className="py-6">
        <div className="rounded-[12px] border border-[#1F2937] bg-[#111827] p-5 max-w-2xl">
          <p className="text-[#E5E7EB]/80">{t("join_text")}</p>
          <div className="mt-4">
            <label className="block text-sm text-[#E5E7EB]/80 mb-2">{t("invitation_link")}</label>
            <div className="flex gap-2">
              <input
                readOnly
                value={link}
                className="flex-1 rounded-[12px] border border-[#1F2937] bg-[#0B1220] px-3 py-2 text-[#E5E7EB]"
              />
              <Button className="rounded-[12px] min-h-11 bg-[#2563EB] hover:bg-[#1D4ED8] text-white">
                <Copy className="mr-1 size-4" />
                {t("copy")}
              </Button>
            </div>
          </div>

          <div className="mt-5 grid grid-cols-2 sm:grid-cols-4 gap-3">
            <Button
              variant="outline"
              className="rounded-[12px] min-h-11 border-[#1F2937] text-[#E5E7EB] bg-transparent"
            >
              <Whatsapp className="mr-1 size-4" /> WhatsApp
            </Button>
            <Button
              variant="outline"
              className="rounded-[12px] min-h-11 border-[#1F2937] text-[#E5E7EB] bg-transparent"
            >
              <Send className="mr-1 size-4" /> Telegram
            </Button>
            <Button
              variant="outline"
              className="rounded-[12px] min-h-11 border-[#1F2937] text-[#E5E7EB] bg-transparent"
            >
              <Mail className="mr-1 size-4" /> Email
            </Button>
            <Button
              variant="outline"
              className="rounded-[12px] min-h-11 border-[#1F2937] text-[#E5E7EB] bg-transparent"
            >
              <QrCode className="mr-1 size-4" /> QR
            </Button>
          </div>
          <div className="mt-4">
            <img
              alt="QR"
              className="rounded-[12px] border border-[#1F2937] bg-[#0B1220] p-3"
              src="/placeholder-59nli.png"
              width={180}
              height={180}
            />
          </div>
        </div>
      </main>
    </LayoutHint>
  )
}

export default function Page() {
  return (
    <I18nProvider>
      <Invitation />
    </I18nProvider>
  )
}
