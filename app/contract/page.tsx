"use client"

import Link from "next/link"
import { useState } from "react"
import { PageHeader } from "@/components/page-header"
import { CheckCircle } from "lucide-react"

export default function ContractPage() {
  const [agreed, setAgreed] = useState(false)
  const [contractSigned, setContractSigned] = useState(false)

  if (contractSigned) {
    return (
      <div className="min-h-screen bg-background">
        <PageHeader title="Contract Signed" subtitle="Agreement Confirmed" backHref="/dashboard" />
        <main className="max-w-2xl mx-auto px-4 py-12">
          <div className="bg-card border border-border rounded-xl p-12 text-center">
            <CheckCircle size={64} className="text-primary mx-auto mb-6" />
            <h2 className="text-3xl font-bold text-foreground mb-4">Contract Accepted</h2>
            <p className="text-lg text-muted-foreground mb-8">
              You have successfully agreed to the service terms. Your booking is now active.
            </p>
            <Link href="/bookings">
              <button className="px-8 py-3 bg-primary text-primary-foreground rounded-lg hover:opacity-90 transition font-semibold">
                View Active Bookings
              </button>
            </Link>
          </div>
        </main>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-background">
      <PageHeader title="Service Contract" subtitle="Terms & Conditions" backHref="/helpers" />

      <main className="max-w-4xl mx-auto px-4 py-12">
        <div className="bg-card border border-border rounded-xl p-8 mb-8">
          <h2 className="text-2xl font-bold text-foreground mb-6">Service Agreement</h2>

          {/* Contract Details */}
          <div className="bg-gradient-to-r from-secondary/10 to-primary/5 p-6 rounded-lg border border-secondary/20 mb-8">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div>
                <p className="text-xs text-muted-foreground mb-2">Household</p>
                <p className="font-semibold text-foreground">Abebe Kebede</p>
                <p className="text-sm text-muted-foreground">ID: ET-123456789</p>
              </div>
              <div>
                <p className="text-xs text-muted-foreground mb-2">Helper</p>
                <p className="font-semibold text-foreground">Selamawit Tadesse</p>
                <p className="text-sm text-muted-foreground">ID: ET-987654321</p>
              </div>
              <div>
                <p className="text-xs text-muted-foreground mb-2">Service Type</p>
                <p className="font-semibold text-foreground">Nanny</p>
                <p className="text-sm text-muted-foreground">Live-in</p>
              </div>
            </div>
          </div>

          {/* Terms */}
          <div className="space-y-6 mb-8">
            <div>
              <h3 className="font-semibold text-foreground mb-3">Terms of Service</h3>
              <ol className="space-y-4 text-foreground">
                <li className="flex gap-4">
                  <span className="font-bold text-primary min-w-fit">1.</span>
                  <span>
                    <strong>Payment Handling:</strong> All payments are processed and managed by BetaWi on behalf of the
                    helper. BetaWi ensures secure transactions and maintains complete financial records.
                  </span>
                </li>
                <li className="flex gap-4">
                  <span className="font-bold text-primary min-w-fit">2.</span>
                  <span>
                    <strong>Helper Conduct:</strong> The helper agrees to maintain professional conduct, respect
                    household rules, and act ethically at all times.
                  </span>
                </li>
                <li className="flex gap-4">
                  <span className="font-bold text-primary min-w-fit">3.</span>
                  <span>
                    <strong>Household Responsibility:</strong> The household ensures a safe working environment and
                    treats the helper with respect and dignity.
                  </span>
                </li>
                <li className="flex gap-4">
                  <span className="font-bold text-primary min-w-fit">4.</span>
                  <span>
                    <strong>Accountability Records:</strong> BetaWi maintains all identification documents (National ID,
                    Kebele ID, addresses, contacts) as guarantee and for accountability purposes.
                  </span>
                </li>
                <li className="flex gap-4">
                  <span className="font-bold text-primary min-w-fit">5.</span>
                  <span>
                    <strong>Misconduct Policy:</strong> Any verified misconduct, theft, or violation of terms will
                    result in immediate termination and appropriate action.
                  </span>
                </li>
                <li className="flex gap-4">
                  <span className="font-bold text-primary min-w-fit">6.</span>
                  <span>
                    <strong>Dispute Resolution:</strong> All disputes will be handled by BetaWi admin team with fair
                    investigation and resolution.
                  </span>
                </li>
              </ol>
            </div>
          </div>

          {/* Signatures */}
          <div className="bg-gradient-to-r from-secondary/10 to-primary/5 p-6 rounded-lg border border-secondary/20 mb-8">
            <h3 className="font-semibold text-foreground mb-6">Signatures</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="border-b-2 border-foreground pb-4">
                <p className="text-sm text-muted-foreground mb-2">Household Signature</p>
                <p className="font-semibold text-foreground">Abebe Kebede</p>
                <p className="text-xs text-muted-foreground">Digitally Signed</p>
              </div>
              <div className="border-b-2 border-foreground pb-4">
                <p className="text-sm text-muted-foreground mb-2">Helper Signature</p>
                <p className="font-semibold text-foreground">Selamawit Tadesse</p>
                <p className="text-xs text-muted-foreground">Digitally Signed</p>
              </div>
              <div className="border-b-2 border-foreground pb-4">
                <p className="text-sm text-muted-foreground mb-2">Admin Signature</p>
                <p className="font-semibold text-foreground">BetaWi Admin</p>
                <p className="text-xs text-muted-foreground">Digitally Signed</p>
              </div>
            </div>
          </div>

          {/* Agreement Checkbox */}
          <label className="flex items-start gap-4 p-4 bg-gradient-to-r from-secondary/10 to-primary/5 rounded-lg border border-secondary/20 mb-8 cursor-pointer">
            <input
              type="checkbox"
              checked={agreed}
              onChange={(e) => setAgreed(e.target.checked)}
              className="mt-1 w-4 h-4"
            />
            <span className="text-foreground">
              I have read and agree to all terms and conditions outlined in this service agreement.
            </span>
          </label>

          {/* Action Buttons */}
          <div className="flex gap-4">
            <Link href="/helpers" className="flex-1">
              <button className="w-full px-6 py-3 border border-border text-foreground rounded-lg hover:bg-muted transition font-semibold">
                Decline
              </button>
            </Link>
            <button
              onClick={() => setContractSigned(true)}
              disabled={!agreed}
              className="flex-1 px-6 py-3 bg-primary text-primary-foreground rounded-lg hover:opacity-90 transition font-semibold disabled:opacity-50"
            >
              I Agree to Terms
            </button>
          </div>
        </div>
      </main>
    </div>
  )
}
