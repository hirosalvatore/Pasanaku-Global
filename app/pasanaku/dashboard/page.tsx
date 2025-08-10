"use client"

import Header from "../_components/header"
import LayoutHint from "../layout-hint"
import { Chip } from "../_components/chip"
import { ShieldCheck, Zap, Globe2, Plus, Users, Bell, TrendingUp, Clock, Banknote } from "lucide-react"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { I18nProvider, useI18n } from "../_components/i18n-provider"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Progress } from "@/components/ui/progress"

// Datos de ejemplo
const activeGroups = [
  {
    id: 1,
    name: "Amigos UNI",
    members: 10,
    currentWeek: 3,
    totalWeeks: 10,
    weeklyAmount: 100,
    currency: "USDC",
    nextRelease: "Hoy 19:00",
    beneficiary: "Lucía G.",
    contributions: 8,
    status: "active",
    zeroLoss: true,
  },
  {
    id: 2,
    name: "Familia",
    members: 6,
    currentWeek: 1,
    totalWeeks: 6,
    weeklyAmount: 200,
    currency: "USDC",
    nextRelease: "Mañana 20:00",
    beneficiary: "Carlos M.",
    contributions: 5,
    status: "active",
    zeroLoss: true,
  },
]

const quickStats = {
  totalSaved: 2400,
  completedCycles: 3,
  reputation: 97,
  level: "GOLD",
}

function Dashboard() {
  const { t } = useI18n()

  return (
    <LayoutHint>
      <Header
        groupName="Dashboard Principal"
        groupChips={
          <>
            <Chip tone="success" icon={<ShieldCheck className="size-4" />}>
              {t("protection_auto")}
            </Chip>
            <Chip tone="primary" icon={<Zap className="size-4" />}>
              {t("confirmation_5s")}
            </Chip>
            <Chip tone="warning" icon={<Globe2 className="size-4" />}>
              {t("international")}
            </Chip>
          </>
        }
      />

      <main className="py-6 space-y-6">
        {/* Hero Section - Acciones Principales */}
        <section className="relative overflow-hidden rounded-[12px] border border-[#1F2937] bg-[#111827] p-6">
          <div className="absolute inset-0 bg-[radial-gradient(1200px_600px_at_50%_-10%,rgba(37,99,235,0.15),transparent)]" />
          <div className="relative z-10">
            <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-6">
              <div>
                <h1 className="text-2xl font-semibold text-[#E5E7EB] mb-2">¡Bienvenido a {t("app_title")}!</h1>
                <p className="text-[#E5E7EB]/80 max-w-2xl">{t("tagline")}</p>
              </div>
              <div className="flex flex-wrap gap-3">
                <Link href="/pasanaku/crear-grupo/step-1">
                  <Button className="rounded-[12px] min-h-11 bg-[#2563EB] hover:bg-[#1D4ED8] text-white">
                    <Plus className="mr-2 size-4" />
                    {t("create_group")}
                  </Button>
                </Link>
                <Link href="/pasanaku/notificaciones">
                  <Button
                    variant="outline"
                    className="rounded-[12px] min-h-11 border-[#1F2937] text-[#E5E7EB] bg-transparent hover:bg-[#0B1220]"
                  >
                    <Bell className="mr-2 size-4" />
                    {t("notifications")}
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Stats Rápidas */}
        <section className="grid grid-cols-2 lg:grid-cols-4 gap-4">
          <Card className="rounded-[12px] border-[#1F2937] bg-[#111827] text-[#E5E7EB]">
            <CardContent className="p-4">
              <div className="flex items-center gap-2">
                <TrendingUp className="size-4 text-[#22C55E]" />
                <span className="text-xs text-[#E5E7EB]/80">Total Ahorrado</span>
              </div>
              <div className="text-xl font-semibold mt-1">{quickStats.totalSaved.toLocaleString()} USDC</div>
            </CardContent>
          </Card>

          <Card className="rounded-[12px] border-[#1F2937] bg-[#111827] text-[#E5E7EB]">
            <CardContent className="p-4">
              <div className="flex items-center gap-2">
                <Users className="size-4 text-[#2563EB]" />
                <span className="text-xs text-[#E5E7EB]/80">Ciclos Completados</span>
              </div>
              <div className="text-xl font-semibold mt-1">{quickStats.completedCycles}</div>
            </CardContent>
          </Card>

          <Card className="rounded-[12px] border-[#1F2937] bg-[#111827] text-[#E5E7EB]">
            <CardContent className="p-4">
              <div className="flex items-center gap-2">
                <ShieldCheck className="size-4 text-[#22C55E]" />
                <span className="text-xs text-[#E5E7EB]/80">Reputación</span>
              </div>
              <div className="text-xl font-semibold mt-1">{quickStats.reputation}%</div>
            </CardContent>
          </Card>

          <Card className="rounded-[12px] border-[#1F2937] bg-[#111827] text-[#E5E7EB]">
            <CardContent className="p-4">
              <div className="flex items-center gap-2">
                <Badge className="bg-[#22C55E] text-white text-xs">{quickStats.level}</Badge>
                <span className="text-xs text-[#E5E7EB]/80">Nivel</span>
              </div>
              <div className="text-xl font-semibold mt-1">Oro</div>
            </CardContent>
          </Card>
        </section>

        {/* Grupos Activos */}
        <section>
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-xl font-semibold text-[#E5E7EB]">Mis Grupos Activos</h2>
            <Link href="/pasanaku/crear-grupo/step-1">
              <Button variant="ghost" className="rounded-[12px] min-h-11 text-[#E5E7EB] hover:bg-[#111827]">
                <Plus className="mr-1 size-4" />
                Nuevo Grupo
              </Button>
            </Link>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {activeGroups.map((group) => (
              <Card
                key={group.id}
                className="rounded-[12px] border-[#1F2937] bg-[#111827] text-[#E5E7EB] hover:border-[#2563EB] transition-all duration-200 cursor-pointer"
              >
                <CardHeader className="pb-3">
                  <div className="flex items-center justify-between">
                    <CardTitle className="text-lg">Pasanaku – {group.name}</CardTitle>
                    {group.zeroLoss && (
                      <Chip tone="success" icon={<ShieldCheck className="size-3" />}>
                        Zero-Loss
                      </Chip>
                    )}
                  </div>
                  <CardDescription className="text-[#E5E7EB]/80">
                    {group.members} miembros • {group.weeklyAmount} {group.currency} semanal
                  </CardDescription>
                </CardHeader>

                <CardContent className="space-y-4">
                  {/* Progreso del Ciclo */}
                  <div>
                    <div className="flex items-center justify-between text-sm mb-2">
                      <span className="text-[#E5E7EB]/80">Progreso del ciclo</span>
                      <span className="text-[#E5E7EB]">
                        Semana {group.currentWeek}/{group.totalWeeks}
                      </span>
                    </div>
                    <Progress value={(group.currentWeek / group.totalWeeks) * 100} className="h-2 bg-[#0B1220]" />
                  </div>

                  {/* Contribuciones */}
                  <div>
                    <div className="flex items-center justify-between text-sm mb-2">
                      <span className="text-[#E5E7EB]/80">Contribuciones esta semana</span>
                      <span className="text-[#E5E7EB]">
                        {group.contributions}/{group.members}
                      </span>
                    </div>
                    <Progress value={(group.contributions / group.members) * 100} className="h-2 bg-[#0B1220]" />
                  </div>

                  {/* Próxima Liberación */}
                  <div className="rounded-[12px] border border-[#1F2937] bg-[#0B1220] p-3">
                    <div className="flex items-center gap-2 mb-1">
                      <Clock className="size-4 text-[#F59E0B]" />
                      <span className="text-sm text-[#E5E7EB]/80">Próxima liberación</span>
                    </div>
                    <div className="text-[#E5E7EB] font-semibold">{group.nextRelease}</div>
                    <div className="text-sm text-[#E5E7EB]/80">
                      Beneficiario: {group.beneficiary} • {(group.weeklyAmount * group.members).toLocaleString()}{" "}
                      {group.currency}
                    </div>
                  </div>

                  {/* Acciones */}
                  <div className="flex gap-2 pt-2">
                    <Link href="/pasanaku/home" className="flex-1">
                      <Button className="w-full rounded-[12px] min-h-11 bg-[#2563EB] hover:bg-[#1D4ED8] text-white">
                        Ver Grupo
                      </Button>
                    </Link>
                    <Link href="/pasanaku/pagar">
                      <Button
                        variant="outline"
                        className="rounded-[12px] min-h-11 border-[#1F2937] text-[#E5E7EB] bg-transparent hover:bg-[#0B1220]"
                      >
                        <Banknote className="size-4" />
                      </Button>
                    </Link>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* Acciones Rápidas */}
        <section>
          <h2 className="text-xl font-semibold text-[#E5E7EB] mb-4">Acciones Rápidas</h2>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
            <Link href="/pasanaku/crear-grupo/step-2">
              <Card className="rounded-[12px] border-[#1F2937] bg-[#111827] text-[#E5E7EB] hover:border-[#2563EB] transition-all duration-200 cursor-pointer">
                <CardContent className="p-4 text-center">
                  <ShieldCheck className="size-8 text-[#22C55E] mx-auto mb-2" />
                  <div className="font-semibold">Protecciones</div>
                  <div className="text-xs text-[#E5E7EB]/80 mt-1">Configurar Zero-Loss</div>
                </CardContent>
              </Card>
            </Link>

            <Link href="/pasanaku/perfil">
              <Card className="rounded-[12px] border-[#1F2937] bg-[#111827] text-[#E5E7EB] hover:border-[#2563EB] transition-all duration-200 cursor-pointer">
                <CardContent className="p-4 text-center">
                  <TrendingUp className="size-8 text-[#2563EB] mx-auto mb-2" />
                  <div className="font-semibold">Mi Perfil</div>
                  <div className="text-xs text-[#E5E7EB]/80 mt-1">Reputación & Stats</div>
                </CardContent>
              </Card>
            </Link>

            <Link href="/pasanaku/invitacion">
              <Card className="rounded-[12px] border-[#1F2937] bg-[#111827] text-[#E5E7EB] hover:border-[#2563EB] transition-all duration-200 cursor-pointer">
                <CardContent className="p-4 text-center">
                  <Users className="size-8 text-[#F59E0B] mx-auto mb-2" />
                  <div className="font-semibold">Invitar</div>
                  <div className="text-xs text-[#E5E7EB]/80 mt-1">Compartir grupo</div>
                </CardContent>
              </Card>
            </Link>

            <Link href="/pasanaku/autopago">
              <Card className="rounded-[12px] border-[#1F2937] bg-[#111827] text-[#E5E7EB] hover:border-[#2563EB] transition-all duration-200 cursor-pointer">
                <CardContent className="p-4 text-center">
                  <Zap className="size-8 text-[#A78BFA] mx-auto mb-2" />
                  <div className="font-semibold">Autopago</div>
                  <div className="text-xs text-[#E5E7EB]/80 mt-1">Configurar pagos</div>
                </CardContent>
              </Card>
            </Link>
          </div>
        </section>

        {/* Microcopys informativos */}
        <section className="rounded-[12px] border border-[#1F2937] bg-[#111827] p-4">
          <div className="text-xs text-[#E5E7EB]/70 space-y-1">
            <div>• {t("micro_zero_loss")}</div>
            <div>• {t("micro_confirmed")}</div>
            <div>• {t("micro_reputation")}</div>
            <div>• {t("micro_international")}</div>
          </div>
        </section>
      </main>
    </LayoutHint>
  )
}

export default function Page() {
  return (
    <I18nProvider>
      <Dashboard />
    </I18nProvider>
  )
}
