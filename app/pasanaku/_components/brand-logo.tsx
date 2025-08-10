"use client"

export default function BrandLogo({ size = 56 }: { size?: number }) {
  return (
    <div
      style={{ width: size, height: size }}
      className="rounded-[12px] bg-[#2563EB] grid place-items-center text-white shadow-[0_8px_24px_rgba(2,6,23,0.12)]"
      aria-label="Pasanaku Global logo"
    >
      <span className="font-semibold text-lg">P</span>
    </div>
  )
}
