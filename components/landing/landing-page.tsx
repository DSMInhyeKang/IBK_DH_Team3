'use client'

import { useState } from 'react'
import type { CardId } from '@/lib/card-data'
import { SiteHeader } from './site-header'
import { HeroSection } from './hero-section'
import { CoreBenefitsSection } from './core-benefits-section'
import { IndustrySelectSection } from './industry-select-section'
import { SimulationSection } from './simulation-section'
import { VideoSection } from './video-section'
import { ApplySection } from './apply-section'
import { SiteFooter } from './site-footer'
import { StickyCta } from './sticky-cta'

export function LandingPage() {
  const [selectedCard, setSelectedCard] = useState<CardId>('retail')

  const handleSelect = (id: CardId) => {
    setSelectedCard(id)
  }

  return (
    <div className="relative min-h-screen bg-background">
      {/* 앰비언트 오로라 배경 — 글래스 표면이 굴절시킬 색을 깔아줍니다 */}
      <div
        aria-hidden="true"
        className="pointer-events-none fixed inset-0 -z-10 overflow-hidden"
      >
        <div className="absolute -left-32 top-[8%] h-[28rem] w-[28rem] rounded-full bg-[#7c8cff] opacity-20 blur-[120px]" />
        <div className="absolute right-[-6rem] top-[38%] h-[26rem] w-[26rem] rounded-full bg-[#4fd0e0] opacity-20 blur-[120px]" />
        <div className="absolute bottom-[6%] left-[28%] h-[30rem] w-[30rem] rounded-full bg-[#c79bff] opacity-[0.16] blur-[130px]" />
      </div>
      <SiteHeader />
      <main>
        <HeroSection />
        <CoreBenefitsSection />
        <IndustrySelectSection
          selectedCard={selectedCard}
          onSelect={handleSelect}
        />
        <SimulationSection
          selectedCard={selectedCard}
          onSelect={handleSelect}
        />
        <VideoSection />
        <ApplySection />
      </main>
      <SiteFooter />
      <StickyCta selectedCard={selectedCard} />
    </div>
  )
}
