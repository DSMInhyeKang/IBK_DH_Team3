'use client'

import Image from 'next/image'
import {
  Fuel,
  ShieldCheck,
  ShoppingBasket,
  ShoppingCart,
  Smartphone,
  Users,
  Zap,
} from 'lucide-react'
import { CountUp } from '@/components/count-up'

const expenseIcons = [
  { icon: ShieldCheck, label: '4대보험' },
  { icon: Zap, label: '전기·도시가스' },
  { icon: Smartphone, label: '이동통신' },
  { icon: ShoppingCart, label: '온라인쇼핑' },
  { icon: Users, label: '구인플랫폼' },
  { icon: Fuel, label: '주유·충전' },
  { icon: ShoppingBasket, label: '대형마트' },
]

export function HeroSection() {
  return (
    <section
      id="top"
      className="relative overflow-hidden bg-gradient-to-b from-[#0c1a3c] via-[#132a5e] to-[#1b336e] text-white"
    >
      <div className="pointer-events-none absolute inset-0 opacity-[0.15] [background-image:radial-gradient(circle_at_1px_1px,white_1px,transparent_0)] [background-size:26px_26px]" />
      <div className="relative mx-auto grid max-w-6xl items-center gap-12 px-5 pb-20 pt-16 lg:grid-cols-[1.05fr_0.95fr] lg:pb-28 lg:pt-24">
        <div>
          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-white/25 bg-white/10 px-3.5 py-1.5 text-xs font-semibold tracking-wide">
            <span className="rounded bg-white px-1.5 py-0.5 text-[10px] font-black text-[#132a5e]">
              IBK
            </span>
            개인사업자 특화카드
          </div>

          <h1 className="text-balance text-4xl font-black leading-[1.15] tracking-tight sm:text-5xl lg:text-6xl">
            사장님의 사업비,
            <br />
            그냥 비용으로
            <br />
            끝내지 마세요.
          </h1>

          <p className="mt-6 max-w-md text-pretty text-base leading-relaxed text-white/70 sm:text-lg">
            사업의 업종에 맞춰 혜택을 더한
            <br className="hidden sm:block" /> IBK 개인사업자 특화카드
          </p>

          <div className="mt-7 flex flex-wrap items-center gap-2.5">
            <span className="rounded-full bg-white/12 px-4 py-2 text-sm font-bold ring-1 ring-white/20">
              B-RETAIL
            </span>
            <span className="rounded-full bg-white/12 px-4 py-2 text-sm font-bold ring-1 ring-white/20">
              B-F&B
            </span>
          </div>

          <div className="mt-10 flex items-end gap-4">
            <div className="flex items-baseline gap-1">
              <CountUp
                value={2}
                suffix="%"
                className="text-7xl font-black leading-none tracking-tighter text-[color:var(--point)] sm:text-8xl"
                format={false}
              />
            </div>
            <div className="mb-2">
              <p className="text-lg font-bold">사업영역 적립</p>
              <p className="text-sm text-white/60">자주 쓰는 사업비부터 달라집니다</p>
            </div>
          </div>

          <div className="mt-9 flex flex-wrap gap-3">
            <a
              href="#select"
              className="rounded-full bg-white px-6 py-3 text-sm font-bold text-[#132a5e] transition-transform hover:-translate-y-0.5"
            >
              내 업종에 맞는 카드 찾기
            </a>
            <a
              href="#simulation"
              className="rounded-full border border-white/30 px-6 py-3 text-sm font-bold text-white transition-colors hover:bg-white/10"
            >
              적립 혜택 계산하기
            </a>
          </div>
        </div>

        <div className="relative">
          <div className="relative mx-auto flex max-w-md items-center justify-center">
            <div className="relative w-[62%] -rotate-6 transition-transform duration-500 hover:-translate-y-2">
              <Image
                src="/cards/b-retail.png"
                alt="IBK B-RETAIL 카드"
                width={520}
                height={520}
                priority
                className="drop-shadow-2xl"
              />
            </div>
            <div className="relative -ml-16 w-[62%] rotate-6 transition-transform duration-500 hover:-translate-y-2">
              <Image
                src="/cards/b-fnb.png"
                alt="IBK B-F&B 카드"
                width={520}
                height={520}
                priority
                className="drop-shadow-2xl"
              />
            </div>
          </div>

          <div className="mt-8 flex flex-wrap justify-center gap-2.5">
            {expenseIcons.map(({ icon: Icon, label }) => (
              <span
                key={label}
                className="inline-flex items-center gap-1.5 rounded-full border border-white/15 bg-white/8 px-3 py-1.5 text-xs font-medium text-white/80"
              >
                <Icon className="h-3.5 w-3.5 text-[color:var(--point)]" />
                {label}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
