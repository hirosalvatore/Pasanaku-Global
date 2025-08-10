"use client"

import type React from "react"

import { cn } from "@/lib/utils"

export function Section({
  title,
  children,
  className,
}: { title?: string; children: React.ReactNode; className?: string }) {
  return (
    <section
      className={cn(
        "rounded-[12px] border border-[#1F2937] bg-[#111827] p-4 shadow-[0_8px_24px_rgba(2,6,23,0.12)]",
        className,
      )}
    >
      {title ? <h3 className="text-[#E5E7EB] text-sm font-semibold mb-3">{title}</h3> : null}
      {children}
    </section>
  )
}
