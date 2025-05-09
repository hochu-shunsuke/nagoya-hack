import type { ReactNode } from "react"
import { SiteHeader } from "@/components/site-header"
import { SiteFooter } from "@/components/site-footer"

interface LayoutWrapperProps {
  children: ReactNode
}

export function LayoutWrapper({ children }: LayoutWrapperProps) {
  const navItems = [
    { label: "ホーム", href: "/" },
    { label: "イベント", href: "#events" },
    { label: "過去のイベント", href: "#past-events" },

    { label: "私たちについて", href: "#about" },
    { label: "スポンサー", href: "#sponsors" },
    { label: "FAQ", href: "#faq" },
  ]

  const footerLinks = [
    { label: "Twitter", href: "https://x.com/NagoyaHack" },
    { label: "Instagram", href: "https://www.instagram.com/nagoyahack/" },
  ]

  return (
    <div className="flex min-h-screen flex-col">
      <SiteHeader navItems={navItems} ctaText="参加登録" ctaHref="https://connpass.com/user/Josho/open/" />
      <main className="flex-1">{children}</main>
      <SiteFooter links={footerLinks} />
    </div>
  )
}
