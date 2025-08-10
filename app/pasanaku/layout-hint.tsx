"use client"

import type React from "react"

export default function LayoutHint({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-[100svh] bg-[#0B1220] text-[#E5E7EB]">
      <div className="mx-auto max-w-5xl px-4">{children}</div>
    </div>
  )
}
