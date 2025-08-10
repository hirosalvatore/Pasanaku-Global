"use client"

import type React from "react"

import { createContext, useContext, useMemo, useState } from "react"

export type Lang = "es" | "en"

type I18nContextType = {
  lang: Lang
  setLang: (l: Lang) => void
  t: (key: string) => string
  formatMoney: (value: number, currency: string) => string
  formatNumber: (value: number) => string
}

const I18nContext = createContext<I18nContextType | null>(null)

const dict: Record<Lang, Record<string, string>> = {
  es: {
    app_title: "Pasanaku Global",
    tagline: "Ahorra en grupo, sin riesgos. Si alguien falla, nadie pierde y el ciclo sigue.",
    create_group: "Crear mi grupo",
    explore: "Explorar",
    protection_auto: "Protección automática",
    confirmation_5s: "Confirmación ~5 s",
    international: "Internacional",
    active_group: "Pasanaku – Amigos UNI",
    week: "Semana",
    of: "de",
    fee_net: "Fee red",
    trust_ring: "Anillo de confianza",
    contributions: "aportes recibidos",
    next_release: "Próxima liberación",
    today_at: "Hoy",
    amount_to_release: "Monto a liberar",
    zero_loss_active: "Zero-Loss activo",
    pay_my_fee: "Pagar mi cuota",
    view_history: "Ver historial",
    invite: "Invitar",
    contract: "Contrato",
    view_in_explorer: "Ver en explorador",
    step: "Paso",
    create_your_group: "Crea tu pasanaku",
    group_size: "Tamaño del grupo",
    fee_per_period: "Cuota por período",
    period: "Periodicidad",
    weekly: "Semanal",
    biweekly: "Quincenal",
    continue: "Continuar",
    hint_invite: "Puedes invitar después por WhatsApp o correo.",
    protections: "Protección automática del grupo",
    deposit_per_turn: "Depósito por turno",
    deposit_tooltip: "Quien cobra antes garantiza más",
    vesting_turns: "Vesting en turnos 1–3",
    autopay_weekly: "Autopago semanal",
    continuity_fund: "Fondo de continuidad",
    promise_diagram: "Si alguien falla, el pago sale igual.",
    choose_order: "Elegir orden",
    choose_turn_order: "Elegir orden de turnos",
    turn: "Turno",
    create_group_cta: "Crear grupo",
    deposit_3x: "Depósito 3×",
    vesting_5050: "Vesting 50/50",
    invitation_title: "Invitación / Compartir",
    join_text:
      "Únete a 'Amigos UNI' — cuota 100 USDC, semanal, 10 personas. Turnos transparentes. Protección automática.",
    invitation_link: "Link de invitación",
    copy: "Copiar",
    autopay_title: "Activa pago automático",
    autopay_copy:
      "Autorizas al contrato a debitar 100 USDC cada miércoles a las 19:00. Puedes desactivar cuando termine el ciclo.",
    authorize: "Autorizar",
    not_now: "Ahora no",
    improves_reputation: "Mejora tu reputación al usar autopago",
    pay_fee_title: "Pagar cuota (1 toque)",
    fee_summary: "Cuota Semana 3 — 100 USDC",
    estimated_time: "Tiempo estimado",
    pay_now: "Pagar ahora",
    confirmed_in: "Confirmado en 5.2 s",
    release_wow: "Pago liberado",
    beneficiary: "Beneficiario",
    time: "Tiempo",
    receipt: "Recibo / Explorador",
    tx_id: "ID transacción",
    local_datetime: "Fecha/hora local",
    period_label: "Periodo",
    coverage_source: "Fuente de cobertura",
    share_receipt: "Compartir recibo",
    profile_title: "Perfil & Reputación",
    level: "Nivel",
    punctuality: "Puntualidad",
    streak: "racha",
    cycles_completed: "Ciclos completados",
    max_quota_enabled: "Cuota máxima habilitada",
    early_turns: "Turnos tempranos",
    allowed_without_vesting: "permitidos sin vesting",
    trusted_organizer: "Organizador confiable",
    autopay_pro: "Autopago Pro",
    profile_copy: "Cumple y baja tu depósito en próximos grupos.",
    notifications_center: "Centro de notificaciones",
    today: "Hoy",
    this_week: "Esta semana",
    pay_action: "Pagar",
    share_action: "Compartir recibo",
    history_action: "Ver historial",
    notif_due: "Tu cuota vence en 4 h — Pagar ahora",
    notif_released: "Pago liberado — Recibo listo",
    notif_deposit_return: "Devolución de depósito programada",
    micro_zero_loss: "Protección automática activada: pase lo que pase, tu grupo cobra.",
    micro_confirmed: "Confirmado en 5.2 s — fee de red ~$0.00.",
    micro_reputation: "Reputación: mientras más puntualmente pagas, menos depósito necesitas.",
    micro_international: "Internacional: recibe o aporta desde cualquier país con stablecoins.",
    language: "Idioma",
    theme: "Tema",
    dark: "Oscuro",
    light: "Claro",
    week_progress: "Semana 3/10",
    fee_red_approx: "Fee red ~$0.00",
    notifications: "Notificaciones",
    select_group: "Seleccionar grupo",
  },
  en: {
    app_title: "Pasanaku Global",
    tagline: "Save in groups, risk-free. If someone fails, nobody loses and the cycle continues.",
    create_group: "Create my group",
    explore: "Explore",
    protection_auto: "Automatic protection",
    confirmation_5s: "Confirmation ~5 s",
    international: "International",
    active_group: "Pasanaku – Friends UNI",
    week: "Week",
    of: "of",
    fee_net: "Network fee",
    trust_ring: "Trust Ring",
    contributions: "contributions received",
    next_release: "Next release",
    today_at: "Today",
    amount_to_release: "Amount to release",
    zero_loss_active: "Zero-Loss active",
    pay_my_fee: "Pay my installment",
    view_history: "View history",
    invite: "Invite",
    contract: "Contract",
    view_in_explorer: "View in explorer",
    step: "Step",
    create_your_group: "Create your pasanaku",
    group_size: "Group size",
    fee_per_period: "Installment per period",
    period: "Periodicity",
    weekly: "Weekly",
    biweekly: "Biweekly",
    continue: "Continue",
    hint_invite: "You can invite later via WhatsApp or email.",
    protections: "Group automatic protection",
    deposit_per_turn: "Deposit per turn",
    deposit_tooltip: "Those paid earlier guarantee more",
    vesting_turns: "Vesting on turns 1–3",
    autopay_weekly: "Weekly autopay",
    continuity_fund: "Continuity fund",
    promise_diagram: "If someone fails, the payout still goes out.",
    choose_order: "Choose order",
    choose_turn_order: "Choose turn order",
    turn: "Turn",
    create_group_cta: "Create group",
    deposit_3x: "Deposit 3×",
    vesting_5050: "Vesting 50/50",
    invitation_title: "Invitation / Share",
    join_text: "Join 'Friends UNI' — 100 USDC, weekly, 10 people. Transparent turns. Automatic protection.",
    invitation_link: "Invitation link",
    copy: "Copy",
    autopay_title: "Enable autopay",
    autopay_copy:
      "You authorize the contract to debit 100 USDC every Wednesday at 19:00. You can disable when the cycle ends.",
    authorize: "Authorize",
    not_now: "Not now",
    improves_reputation: "Improve your reputation using autopay",
    pay_fee_title: "Pay installment (1 tap)",
    fee_summary: "Week 3 Installment — 100 USDC",
    estimated_time: "Estimated time",
    pay_now: "Pay now",
    confirmed_in: "Confirmed in 5.2 s",
    release_wow: "Payout released",
    beneficiary: "Beneficiary",
    time: "Time",
    receipt: "Receipt / Explorer",
    tx_id: "Transaction ID",
    local_datetime: "Local date/time",
    period_label: "Period",
    coverage_source: "Coverage source",
    share_receipt: "Share receipt",
    profile_title: "Profile & Reputation",
    level: "Level",
    punctuality: "Punctuality",
    streak: "streak",
    cycles_completed: "Completed cycles",
    max_quota_enabled: "Max enabled installment",
    early_turns: "Early turns",
    allowed_without_vesting: "allowed without vesting",
    trusted_organizer: "Trusted organizer",
    autopay_pro: "Autopay Pro",
    profile_copy: "Pay on time to reduce your deposit in upcoming groups.",
    notifications_center: "Notifications center",
    today: "Today",
    this_week: "This week",
    pay_action: "Pay",
    share_action: "Share receipt",
    history_action: "View history",
    notif_due: "Your installment is due in 4 h — Pay now",
    notif_released: "Payout released — Receipt ready",
    notif_deposit_return: "Deposit return scheduled",
    micro_zero_loss: "Automatic protection active: no matter what, your group is paid.",
    micro_confirmed: "Confirmed in 5.2 s — network fee ~$0.00.",
    micro_reputation: "Reputation: the more timely you pay, the less deposit you need.",
    micro_international: "International: receive or contribute from any country with stablecoins.",
    language: "Language",
    theme: "Theme",
    dark: "Dark",
    light: "Light",
    week_progress: "Week 3/10",
    fee_red_approx: "Network fee ~$0.00",
    notifications: "Notifications",
    select_group: "Select group",
  },
}

export function I18nProvider({ children }: { children: React.ReactNode }) {
  const [lang, setLang] = useState<Lang>("es")

  const t = (key: string) => {
    return dict[lang][key] ?? key
  }

  const formatMoney = (value: number, currency: string) => {
    const locale = lang === "es" ? "es-ES" : "en-US"
    const nf = new Intl.NumberFormat(locale, {
      minimumFractionDigits: 2,
      maximumFractionDigits: 2,
    })
    return `${nf.format(value)} ${currency.toUpperCase()}`
  }

  const formatNumber = (value: number) => {
    const locale = lang === "es" ? "es-ES" : "en-US"
    return new Intl.NumberFormat(locale).format(value)
  }

  const value = useMemo(() => ({ lang, setLang, t, formatMoney, formatNumber }), [lang])

  return <I18nContext.Provider value={value}>{children}</I18nContext.Provider>
}

export function useI18n() {
  const ctx = useContext(I18nContext)
  if (!ctx) throw new Error("useI18n must be used within I18nProvider")
  return ctx
}
