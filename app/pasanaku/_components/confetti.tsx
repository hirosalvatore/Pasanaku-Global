"use client"

import { useEffect, useRef } from "react"

export default function MiniConfetti({ run = false }: { run?: boolean }) {
  const ref = useRef<HTMLDivElement | null>(null)

  useEffect(() => {
    if (!run || !ref.current) return
    const colors = ["#22C55E", "#2563EB", "#A78BFA"]
    const container = ref.current
    const particles: HTMLSpanElement[] = []
    for (let i = 0; i < 12; i++) {
      const p = document.createElement("span")
      p.className = "absolute rounded-full"
      const size = 6 + Math.random() * 4
      p.style.width = `${size}px`
      p.style.height = `${size}px`
      p.style.left = "50%"
      p.style.top = "0"
      p.style.transform = "translateX(-50%)"
      p.style.background = colors[Math.floor(Math.random() * colors.length)]
      container.appendChild(p)
      const dx = (Math.random() - 0.5) * 160
      const dy = 80 + Math.random() * 80
      const rot = (Math.random() - 0.5) * 180
      const delay = Math.random() * 60
      p.animate(
        [
          { transform: `translate(-50%, 0) rotate(0deg)`, opacity: 1 },
          { transform: `translate(calc(-50% + ${dx}px), ${dy}px) rotate(${rot}deg)`, opacity: 0 },
        ],
        { duration: 900 + delay, easing: "cubic-bezier(0.16, 1, 0.3, 1)", fill: "forwards" },
      )
      particles.push(p)
    }
    const timeout = setTimeout(() => {
      particles.forEach((p) => p.remove())
    }, 1600)
    return () => clearTimeout(timeout)
  }, [run])

  return <div ref={ref} className="relative h-0" aria-hidden="true" />
}
