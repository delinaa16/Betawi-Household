"use client"

import Link from "next/link"
import Image from "next/image"
import { ChevronRight } from "lucide-react"

export default function Home() {
  return (
    <div className="min-h-screen bg-background flex flex-col">
      <nav className="border-b border-border bg-card shadow-sm">
        <div className="max-w-7xl mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Image
              src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/logo-FXmvUP86YI4FZCWRoXrbUezaCaR4UK.webp"
              alt="BetaWi Logo"
              width={40}
              height={40}
            />
            <span className="text-xl font-bold text-primary">BetaWi</span>
          </div>
          <div className="flex gap-4">
            <Link href="/auth/login">
              <button className="px-4 py-2 text-primary hover:bg-secondary/20 rounded-lg transition font-medium">
                Login
              </button>
            </Link>
            <Link href="/auth/signup">
              <button className="px-4 py-2 bg-secondary text-foreground rounded-lg hover:opacity-90 transition font-semibold">
                Sign Up
              </button>
            </Link>
          </div>
        </div>
      </nav>

      <main className="flex-1 max-w-7xl mx-auto px-4 py-16 w-full">
        <div className="text-center mb-16">
          <Image
            src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/logo-FXmvUP86YI4FZCWRoXrbUezaCaR4UK.webp"
            alt="BetaWi"
            width={120}
            height={120}
            className="mx-auto mb-6"
          />
          <h1 className="text-5xl md:text-6xl font-bold text-foreground mb-4 text-balance">
            Welcome to <span className="text-primary">BetaWi</span>
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-8 text-balance">
            Connect with verified household helpers. Find trusted nannies, cooks, and cleaners for your family with
            confidence and ease.
          </p>
          <Link href="/dashboard">
            <button className="px-8 py-4 bg-secondary text-foreground rounded-lg hover:opacity-90 transition font-semibold text-lg inline-flex items-center gap-2 shadow-lg hover:shadow-xl">
              Get Started
              <ChevronRight size={20} />
            </button>
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16">
          <div className="bg-gradient-to-br from-secondary/10 to-card border border-secondary/20 rounded-xl p-8 hover:shadow-lg hover:border-secondary/40 transition relative overflow-hidden group">
            <div className="absolute top-0 right-0 w-24 h-24 bg-secondary/20 rounded-full -mr-12 -mt-12 group-hover:scale-110 transition" />
            <div className="w-14 h-14 bg-secondary/30 rounded-lg mb-4 flex items-center justify-center relative z-10">
              <span className="text-3xl">✓</span>
            </div>
            <h3 className="text-xl font-semibold text-foreground mb-2">Verified Helpers</h3>
            <p className="text-muted-foreground">
              All helpers are thoroughly verified by our admin team for your safety and peace of mind.
            </p>
          </div>
          <div className="bg-gradient-to-br from-secondary/10 to-card border border-secondary/20 rounded-xl p-8 hover:shadow-lg hover:border-secondary/40 transition relative overflow-hidden group">
            <div className="absolute top-0 right-0 w-24 h-24 bg-secondary/20 rounded-full -mr-12 -mt-12 group-hover:scale-110 transition" />
            <div className="w-14 h-14 bg-secondary/30 rounded-lg mb-4 flex items-center justify-center relative z-10">
              <span className="text-3xl">💬</span>
            </div>
            <h3 className="text-xl font-semibold text-foreground mb-2">Admin Communication</h3>
            <p className="text-muted-foreground">
              Chat directly with our admin team to discuss your household needs and preferences.
            </p>
          </div>
          <div className="bg-gradient-to-br from-secondary/10 to-card border border-secondary/20 rounded-xl p-8 hover:shadow-lg hover:border-secondary/40 transition relative overflow-hidden group">
            <div className="absolute top-0 right-0 w-24 h-24 bg-secondary/20 rounded-full -mr-12 -mt-12 group-hover:scale-110 transition" />
            <div className="w-14 h-14 bg-secondary/30 rounded-lg mb-4 flex items-center justify-center relative z-10">
              <span className="text-3xl">⭐</span>
            </div>
            <h3 className="text-xl font-semibold text-foreground mb-2">Ratings & Reviews</h3>
            <p className="text-muted-foreground">
              Read reviews from other households and rate your experience transparently.
            </p>
          </div>
        </div>
      </main>

      <footer className="border-t border-border bg-card mt-16">
        <div className="max-w-7xl mx-auto px-4 py-8 text-center text-muted-foreground">
          <p>BetaWi © 2025 | Connecting Households with Trusted Helpers | Contact: +251-XXX-XXXXXX</p>
        </div>
      </footer>
    </div>
  )
}
