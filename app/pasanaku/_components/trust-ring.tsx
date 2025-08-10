"use client"

import { useMemo, useState } from "react"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { cn } from "@/lib/utils"

type Member = { id: number; name: string; initials: string; image?: string }

export default function TrustRing({
  members,
  currentId,
}: {
  members: Member[]
  currentId: number
}) {
  const [active, setActive] = useState(currentId)
  const radius = 120
  const center = 140
  const positioned = useMemo(() => {
    const n = members.length
    return members.map((m, i) => {
      const angle = (i / n) * 2 * Math.PI - Math.PI / 2
      const x = center + radius * Math.cos(angle)
      const y = center + radius * Math.sin(angle)
      return { ...m, x, y }
    })
  }, [members])

  const currentBeneficiary = members.find((m) => m.id === active)

  return (
    <div className="relative" style={{ width: 280, height: 280 }}>
      <div className="absolute inset-0 rounded-full border border-[#1F2937] bg-[#0B1220]" />
      {positioned.map((m) => {
        const isActive = m.id === active
        return (
          <button
            key={m.id}
            className={cn(
              "group absolute -translate-x-1/2 -translate-y-1/2 focus:outline-none transition-all duration-300 ease-out",
              isActive ? "z-10" : "z-0",
            )}
            style={{ left: m.x, top: m.y }}
            onClick={() => setActive(m.id)}
            aria-label={`Miembro ${m.name}`}
            type="button"
          >
            <div
              className={cn(
                "relative size-12 rounded-full grid place-items-center transition-all duration-200 ease-out",
                isActive ? "ring-4 ring-[#22C55E] ring-offset-2 ring-offset-[#0B1220]" : "",
              )}
            >
              <Avatar className="size-12 border border-[#1F2937]">
                <AvatarImage
                  alt={m.name}
                  src={`/abstract-geometric-shapes.png?height=64&width=64&query=${encodeURIComponent("person avatar " + m.name)}`}
                />
                <AvatarFallback className="bg-[#111827] text-[#E5E7EB]">{m.initials}</AvatarFallback>
              </Avatar>
            </div>
          </button>
        )
      })}
      {currentBeneficiary && (
        <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 text-center transition-all duration-300 ease-out">
          <div className="relative size-24 rounded-full grid place-items-center ring-4 ring-[#22C55E] ring-offset-2 ring-offset-[#0B1220]">
            <Avatar className="size-24 border border-[#1F2937]">
              <AvatarImage
                alt={currentBeneficiary.name}
                src={`/abstract-geometric-shapes.png?height=128&width=128&query=${encodeURIComponent("large person avatar " + currentBeneficiary.name)}`}
              />
              <AvatarFallback className="bg-[#111827] text-[#E5E7EB] text-2xl">
                {currentBeneficiary.initials}
              </AvatarFallback>
            </Avatar>
          </div>
          <div className="mt-2 text-sm font-semibold text-[#E5E7EB]">{currentBeneficiary.name}</div>
        </div>
      )}
      <div className="absolute left-1/2 -translate-x-1/2 bottom-2 text-center text-sm text-[#E5E7EB]/80">
        <span>Order tap to inspect</span>
      </div>
    </div>
  )
}
