"use client"

import type React from "react"

import Header from "../../_components/header"
import LayoutHint from "../../layout-hint"
import { useState } from "react"
import { Button } from "@/components/ui/button"
import { GripVertical } from "lucide-react"
import { I18nProvider, useI18n } from "../../_components/i18n-provider"
import Link from "next/link"

type Member = { id: number; name: string; initials: string }

const initialMembers: Member[] = [
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

function DraggableList() {
  const [list, setList] = useState<Member[]>(initialMembers)

  const onDragStart = (e: React.DragEvent, index: number) => {
    e.dataTransfer.setData("text/plain", String(index))
    e.currentTarget.classList.add("opacity-70")
  }
  const onDragEnd = (e: React.DragEvent) => {
    e.currentTarget.classList.remove("opacity-70")
  }
  const onDrop = (e: React.DragEvent, index: number) => {
    const from = Number(e.dataTransfer.getData("text/plain"))
    if (Number.isNaN(from)) return
    const newList = [...list]
    const [moved] = newList.splice(from, 1)
    newList.splice(index, 0, moved)
    setList(newList)
  }
  const onDragOver = (e: React.DragEvent) => {
    e.preventDefault()
  }

  return (
    <div className="rounded-[12px] border border-[#1F2937] bg-[#111827] p-4">
      <ul className="space-y-2">
        {list.map((m, idx) => {
          const chip =
            idx <= 2 ? (
              <span className="ml-2 text-[11px] px-2 py-0.5 rounded-full border border-[#1F2937] text-[#22C55E] bg-[#0B1220]">
                {idx === 0 ? "Depósito 3×" : "Vesting 50/50"}
              </span>
            ) : null
          return (
            <li
              key={m.id}
              draggable
              onDragStart={(e) => onDragStart(e, idx)}
              onDragEnd={onDragEnd}
              onDrop={(e) => onDrop(e, idx)}
              onDragOver={onDragOver}
              className="flex items-center gap-3 rounded-[12px] border border-[#1F2937] bg-[#0B1220] p-3 cursor-grab"
            >
              <GripVertical className="size-4 text-[#E5E7EB]/60" />
              <div className="size-9 rounded-full bg-[#111827] border border-[#1F2937] grid place-items-center text-[#E5E7EB] text-sm">
                {m.initials}
              </div>
              <div className="flex-1">
                <div className="text-[#E5E7EB]">{m.name}</div>
                <div className="text-xs text-[#E5E7EB]/60">
                  Turno {idx + 1}
                  {chip}
                </div>
              </div>
            </li>
          )
        })}
      </ul>
    </div>
  )
}

function Step3() {
  const { t } = useI18n()
  return (
    <LayoutHint>
      <Header title={`${t("step")} 3/3 — ${t("choose_turn_order")}`} />
      <main className="py-6 max-w-2xl">
        <DraggableList />
        <div className="mt-6 flex justify-end">
          <Link href="/pasanaku/dashboard">
            <Button className="rounded-[12px] bg-[#2563EB] hover:bg-[#1D4ED8] text-white min-h-11">
              {t("create_group_cta")}
            </Button>
          </Link>
        </div>
      </main>
    </LayoutHint>
  )
}

export default function Page() {
  return (
    <I18nProvider>
      <Step3 />
    </I18nProvider>
  )
}
