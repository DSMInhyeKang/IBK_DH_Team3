'use client'

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-40 border-b border-border/70 bg-background/85 backdrop-blur-md">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-5">
        <a href="#top" className="flex items-center gap-2.5">
          <span className="flex h-8 items-center rounded-md bg-primary px-2 text-sm font-black tracking-tight text-primary-foreground">
            IBK
          </span>
          <span className="text-sm font-bold text-ink">
            개인사업자 특화카드
          </span>
        </a>
        <nav className="hidden items-center gap-7 text-sm font-medium text-muted-foreground md:flex">
          <a href="#benefits" className="transition-colors hover:text-ink">
            핵심 혜택
          </a>
          <a href="#select" className="transition-colors hover:text-ink">
            업종 선택
          </a>
          <a href="#simulation" className="transition-colors hover:text-ink">
            혜택 시뮬레이션
          </a>
          <a href="#apply" className="transition-colors hover:text-ink">
            카드 신청
          </a>
        </nav>
        <a
          href="#apply"
          className="rounded-full bg-ink px-4 py-2 text-xs font-bold text-background transition-transform hover:-translate-y-0.5 md:text-sm"
        >
          카드 신청하기
        </a>
      </div>
    </header>
  )
}
