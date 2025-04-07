import Link from "next/link"
import { Code } from "lucide-react"

interface FooterLink {
  label: string
  href: string
}

interface SiteFooterProps {
  links: FooterLink[]
}

export function SiteFooter({ links }: SiteFooterProps) {
  return (
    <footer className="w-full border-t bg-background py-6">
      <div className="container flex flex-col items-center justify-center gap-4 px-4 md:px-6 md:flex-row md:justify-between">
        <div className="flex items-center gap-2 font-bold text-xl">
          <Code className="h-6 w-6" />
          <span>NagoyaHack</span>
        </div>
        <p className="text-center text-sm text-muted-foreground md:text-left">
          &copy; {new Date().getFullYear()} NagoyaHack. All rights reserved.
        </p>
        <div className="flex gap-4">
          {links.map((link, index) => (
            <Link key={index} href={link.href} className="text-muted-foreground hover:text-foreground">
              {link.label}
            </Link>
          ))}
        </div>
      </div>
    </footer>
  )
}

