"use client"
import { useState } from "react"
import { useRouter } from "next/navigation"
import { PageHeader } from "@/components/page-header"

export default function Verification() {
  const router = useRouter()
  const [verificationCode, setVerificationCode] = useState("")

  const handleVerify = () => {
    if (verificationCode.length === 6) {
      router.push("/dashboard")
    }
  }

  return (
    <div className="min-h-screen bg-background flex flex-col">
      <PageHeader title="Account Created" subtitle="Your account is pending admin verification" backHref="/" />

      <main className="flex-1 flex items-center justify-center px-4 py-12">
        <div className="w-full max-w-md">
          <div className="bg-card border border-border rounded-lg p-8 text-center">
            <div className="w-16 h-16 bg-secondary rounded-full flex items-center justify-center mx-auto mb-6">
              <span className="text-3xl">✓</span>
            </div>
            <p className="text-muted-foreground mb-8">
              Your account is pending admin verification. We'll review your information and notify you once approved.
            </p>

            <div className="bg-muted rounded-lg p-4 mb-8">
              <p className="text-sm text-muted-foreground mb-4">Verification Code (for demo)</p>
              <input
                type="text"
                maxLength={6}
                value={verificationCode}
                onChange={(e) => setVerificationCode(e.target.value.replace(/\D/g, ""))}
                placeholder="000000"
                className="w-full px-4 py-2 border border-border rounded-lg bg-background text-foreground text-center text-2xl tracking-widest focus:outline-none focus:ring-2 focus:ring-primary"
              />
            </div>

            <button
              onClick={handleVerify}
              disabled={verificationCode.length !== 6}
              className="w-full px-4 py-2 bg-primary text-primary-foreground rounded-lg hover:opacity-90 transition font-semibold disabled:opacity-50 disabled:cursor-not-allowed"
            >
              Verify & Continue
            </button>

            <p className="text-center text-muted-foreground mt-6 text-sm">
              This typically takes 24-48 hours. You'll receive an email confirmation.
            </p>
          </div>
        </div>
      </main>
    </div>
  )
}
