"use client"

import { useEffect, useState } from "react"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { cn } from "@/lib/utils"
import { useI18n } from "./i18n-provider"

export function ContributionBar({
  total = 10,
  received = 8,
  members,
}: {
  total?: number
  received?: number
  members: { id: number; name: string; initials: string }[]
}) {
  const [progress, setProgress] = useState(0)
  const { t } = useI18n()
  useEffect(() => {
    const id = setTimeout(() => setProgress(received), 200)
    return () => clearTimeout(id)
  }, [received])

  return (
    <div className="w-full">
      <div className="flex items-center justify-between text-sm text-[#E5E7EB]/80 mb-2">
        <span>{`${received}/${total} ${t("contributions")}`}</span>
      </div>
      <div className="relative h-5 rounded-[12px] bg-[#111827] border border-[#1F2937] overflow-hidden">
        <div
          className="absolute left-0 top-0 h-full bg-[#2563EB] transition-all duration-400 ease-out"
          style={{ width: `${(progress / total) * 100}%` }}
        />
        <div className="relative z-10 flex h-full items-center gap-1 px-1">
          {members.slice(0, total).map((m, idx) => {
            const filled = idx < progress
            return (
              <div key={m.id} className={cn("h-3 w-3 rounded-full border border-[#0B1220] overflow-hidden")}>
                {filled ? (
                  <div className="h-full w-full bg-[#93C5FD]" />
                ) : (
                  <div className="h-full w-full bg-[#0B1220]" />
                )}
              </div>
            )
          })}
        </div>
      </div>
      <div className="mt-3 flex gap-2">
        {members.slice(0, total).map((m, idx) => {
          const filled = idx < progress
          return (
            <Avatar key={m.id} className="size-7 border border-[#1F2937]">
              <AvatarImage
                alt={m.name}
                src={`/abstract-geometric-shapes.png?height=40&width=40&query=${encodeURIComponent("tiny avatar " + m.name)}`}
              />
              <AvatarFallback
                className={cn("text-[10px]", filled ? "bg-[#2563EB] text-white" : "bg-[#111827] text-[#E5E7EB]")}
              >
                {m.initials}
              </AvatarFallback>
            </Avatar>
          )
        })}
      </div>
    </div>
  )
}
