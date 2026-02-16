"use client"

import Image from "next/image"
import { useEffect, useState } from "react"

function clamp(value: number, min: number, max: number) {
  return Math.min(Math.max(value, min), max)
}

type LogoMotionState = {
  sectionProgress: number
  parallaxY: number
  hue: number
  saturation: number
  brightness: number
}

export function LogoParallaxBackground() {
  const [state, setState] = useState<LogoMotionState>({
    sectionProgress: 0,
    parallaxY: 0,
    hue: 10,
    saturation: 1.3,
    brightness: 0.95,
  })

  useEffect(() => {
    let rafId = 0

    const updateLogo = () => {
      const sections = Array.from(document.querySelectorAll("main section"))
      if (sections.length === 0) return

      const sectionTops = sections.map((section) => section.offsetTop)
      const scrollY = window.scrollY
      const lastSectionIndex = sectionTops.length - 1
      let sectionProgress = 1

      if (lastSectionIndex > 0) {
        if (scrollY <= sectionTops[0]) {
          sectionProgress = 0
        } else if (scrollY >= sectionTops[lastSectionIndex]) {
          sectionProgress = 1
        } else {
          for (let i = 0; i < lastSectionIndex; i++) {
            const start = sectionTops[i]
            const end = sectionTops[i + 1]
            if (scrollY >= start && scrollY < end) {
              const localProgress = clamp((scrollY - start) / Math.max(end - start, 1), 0, 1)
              sectionProgress = (i + localProgress) / lastSectionIndex
              break
            }
          }
        }
      }

      setState({
        sectionProgress,
        parallaxY: sectionProgress * 200 - 100,
        hue: 10 + sectionProgress * 220,
        saturation: 1.3 + sectionProgress * 0.6,
        brightness: 0.95 - sectionProgress * 0.15,
      })
    }

    const onScrollOrResize = () => {
      cancelAnimationFrame(rafId)
      rafId = requestAnimationFrame(updateLogo)
    }

    updateLogo()
    window.addEventListener("scroll", onScrollOrResize, { passive: true })
    window.addEventListener("resize", onScrollOrResize)

    return () => {
      cancelAnimationFrame(rafId)
      window.removeEventListener("scroll", onScrollOrResize)
      window.removeEventListener("resize", onScrollOrResize)
    }
  }, [])

  return (
    <div className="pointer-events-none fixed inset-0 z-[20] overflow-hidden" aria-hidden="true">
      <Image
        src="/logo_svg_bw.svg"
        alt=""
        aria-hidden="true"
        width={1024}
        height={1081}
        priority
        className="absolute left-1/2 h-auto w-auto select-none"
        style={{
          width: "120vw",
          top: "50%",
          opacity: 0.16 - state.sectionProgress * 0.04,
          transform: `translate(-50%, calc(-50% + ${state.parallaxY}px))`,
          filter: `sepia(1) saturate(${state.saturation}) hue-rotate(${state.hue}deg) brightness(${state.brightness})`,
          transition: "opacity 320ms ease-out, filter 320ms ease-out, transform 320ms ease-out",
        }}
      />
    </div>
  )
}
