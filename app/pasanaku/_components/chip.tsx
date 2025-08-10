"use client"

import type React from "react"

import { cn } from "@/lib/utils"

export function Chip({
  children,
  tone = "neutral",
  icon,
  className,
}: {
  children: React.ReactNode
  tone?: "neutral" | "success" | "warning" | "primary" | "dark"
  icon?: React.ReactNode
  className?: string
}) {
  const base =
    "inline-flex items-center gap-1.5 px-3 py-1.5 text-xs rounded-full border transition-all duration-200 ease-out"
  const styles = {
    neutral: "bg-[#111827] text-[#E5E7EB] border-[#1F2937]",
    success: "bg-[#0B1220] text-[#22C55E] border-[#1F2937]",
    warning: "bg-[#0B1220] text-[#F59E0B] border-[#1F2937]",
    primary: "bg-[#0B1220] text-[#93C5FD] border-[#1F2937]",
    dark: "bg-[#0B1220] text-[#E5E7EB] border-[#1F2937]",
  } as const
  return (
    <span className={cn(base, styles[tone], className)}>
      {icon ? <span className="grid place-items-center">{icon}</span> : null}
      {children}
    </span>
  )
}
