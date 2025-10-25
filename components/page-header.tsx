"use client"

import Image from "next/image"
import Link from "next/link"
import { ArrowLeft } from "lucide-react"

interface PageHeaderProps {
  title: string
  subtitle?: string
  backHref: string
  logoutFn?: () => void
}

export function PageHeader({ title, subtitle, backHref, logoutFn }: PageHeaderProps) {
  return (
    <div className="bg-card border-b border-border shadow-sm">
      <div className="max-w-7xl mx-auto px-4 py-6">
        {/* Logo and Logout Button Row */}
        <div className="flex items-center justify-between mb-4">
          <Link href="/" className="flex items-center gap-2 hover:opacity-80 transition">
            <Image
              src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/logo-FXmvUP86YI4FZCWRoXrbUezaCaR4UK.webp"
              alt="BetaWi Logo"
              width={40}
              height={40}
            />
            <span className="text-xl font-bold text-primary">BetaWi</span>
          </Link>
          {logoutFn && (
            <button
              onClick={logoutFn}
              className="px-4 py-2 text-foreground hover:bg-secondary/20 rounded-lg transition font-medium"
            >
              Logout
            </button>
          )}
        </div>

        {/* Back Button and Title Row */}
        <div className="flex items-center gap-3">
          <Link href={backHref}>
            <button className="p-2 hover:bg-muted rounded-lg transition flex-shrink-0">
              <ArrowLeft size={24} className="text-primary" />
            </button>
          </Link>
          <div>
            <h1 className="text-3xl font-bold text-foreground">{title}</h1>
            {subtitle && <p className="text-muted-foreground">{subtitle}</p>}
          </div>
        </div>
      </div>
    </div>
  )
}
