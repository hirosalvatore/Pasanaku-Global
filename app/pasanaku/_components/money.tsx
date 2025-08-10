"use client"

import { useI18n } from "./i18n-provider"

export function Money({ value, currency = "USDC" }: { value: number; currency?: string }) {
  const { formatMoney } = useI18n()
  return <span className="tabular-nums">{formatMoney(value, currency)}</span>
}
