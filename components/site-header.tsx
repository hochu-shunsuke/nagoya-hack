import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Code } from "lucide-react"

interface NavItem {
  label: string
  href: string
}

interface SiteHeaderProps {
  navItems: NavItem[]
  ctaText?: string
  ctaHref?: string
}

export function SiteHeader({ navItems, ctaText, ctaHref }: SiteHeaderProps) {
  return (
    <header className="sticky top-0 z-40 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="flex h-16 items-center justify-between px-4">
        <div className="flex items-center gap-2 font-bold text-xl">
          <Code className="h-6 w-6" />
          <Link href="/">NagoyaHack</Link>
        </div>
        <nav className="hidden md:flex items-center gap-6 text-sm">
          {navItems.map((item, index) => (
            <Link key={index} href={item.href} className="transition-colors hover:text-foreground/80">
              {item.label}
            </Link>
          ))}
        </nav>
        {ctaText && ctaHref && (
          <Button asChild>
            <Link href={ctaHref}>{ctaText}</Link>
          </Button>
        )}
      </div>
    </header>
  )
}
