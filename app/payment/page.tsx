"use client"

import Link from "next/link"
import { useState } from "react"
import { PageHeader } from "@/components/page-header"
import { CheckCircle } from "lucide-react"

export default function PaymentPage() {
  const [paymentMethod, setPaymentMethod] = useState("telebirr")
  const [isProcessing, setIsProcessing] = useState(false)
  const [paymentComplete, setPaymentComplete] = useState(false)

  const bookingSummary = {
    helperName: "Selamawit",
    role: "Nanny",
    duration: "30 days",
    cost: 5000,
    startDate: "2025-11-01",
  }

  const handlePayment = () => {
    setIsProcessing(true)
    setTimeout(() => {
      setIsProcessing(false)
      setPaymentComplete(true)
    }, 2000)
  }

  if (paymentComplete) {
    return (
      <div className="min-h-screen bg-background">
        <PageHeader title="Payment Successful" subtitle="Booking Confirmed" backHref="/dashboard" />
        <main className="max-w-2xl mx-auto px-4 py-12">
          <div className="bg-card border border-border rounded-xl p-12 text-center">
            <CheckCircle size={64} className="text-primary mx-auto mb-6" />
            <h2 className="text-3xl font-bold text-foreground mb-4">Payment Received</h2>
            <p className="text-lg text-muted-foreground mb-8">
              Payment received by BetaWi. Your booking is under admin review and will be confirmed shortly.
            </p>
            <div className="bg-gradient-to-r from-secondary/10 to-primary/5 p-6 rounded-lg border border-secondary/20 mb-8">
              <p className="text-sm text-muted-foreground mb-2">Booking Reference</p>
              <p className="text-2xl font-bold text-foreground">BW-2025-001234</p>
            </div>
            <Link href="/bookings">
              <button className="px-8 py-3 bg-primary text-primary-foreground rounded-lg hover:opacity-90 transition font-semibold">
                View My Bookings
              </button>
            </Link>
          </div>
        </main>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-background">
      <PageHeader title="Payment" subtitle="Complete Your Booking" backHref="/helpers" />

      <main className="max-w-2xl mx-auto px-4 py-12">
        {/* Booking Summary */}
        <div className="bg-card border border-border rounded-xl p-8 mb-8">
          <h2 className="text-2xl font-bold text-foreground mb-6">Booking Summary</h2>
          <div className="space-y-4">
            <div className="flex justify-between items-center pb-4 border-b border-border">
              <span className="text-foreground">Helper</span>
              <span className="font-semibold text-foreground">{bookingSummary.helperName}</span>
            </div>
            <div className="flex justify-between items-center pb-4 border-b border-border">
              <span className="text-foreground">Role</span>
              <span className="font-semibold text-foreground">{bookingSummary.role}</span>
            </div>
            <div className="flex justify-between items-center pb-4 border-b border-border">
              <span className="text-foreground">Duration</span>
              <span className="font-semibold text-foreground">{bookingSummary.duration}</span>
            </div>
            <div className="flex justify-between items-center pb-4 border-b border-border">
              <span className="text-foreground">Start Date</span>
              <span className="font-semibold text-foreground">{bookingSummary.startDate}</span>
            </div>
            <div className="flex justify-between items-center pt-4 bg-gradient-to-r from-secondary/10 to-primary/5 p-4 rounded-lg">
              <span className="text-lg font-semibold text-foreground">Total Amount</span>
              <span className="text-2xl font-bold text-primary">ETB {bookingSummary.cost}</span>
            </div>
          </div>
        </div>

        {/* Payment Methods */}
        <div className="bg-card border border-border rounded-xl p-8 mb-8">
          <h2 className="text-2xl font-bold text-foreground mb-6">Select Payment Method</h2>
          <div className="space-y-4">
            {[
              { id: "telebirr", name: "Telebirr", icon: "📱" },
              { id: "chapa", name: "Chapa", icon: "💳" },
              { id: "card", name: "Credit/Debit Card", icon: "🏦" },
              { id: "cash", name: "Cash (Pay at Office)", icon: "💵" },
            ].map((method) => (
              <label
                key={method.id}
                className={`flex items-center p-4 border-2 rounded-lg cursor-pointer transition ${
                  paymentMethod === method.id
                    ? "border-primary bg-primary/5"
                    : "border-border hover:border-secondary/50"
                }`}
              >
                <input
                  type="radio"
                  name="payment"
                  value={method.id}
                  checked={paymentMethod === method.id}
                  onChange={(e) => setPaymentMethod(e.target.value)}
                  className="w-4 h-4"
                />
                <span className="text-2xl ml-4">{method.icon}</span>
                <span className="ml-4 font-semibold text-foreground">{method.name}</span>
              </label>
            ))}
          </div>
        </div>

        {/* Terms */}
        <div className="bg-gradient-to-r from-secondary/10 to-primary/5 border border-secondary/20 rounded-xl p-8 mb-8">
          <div className="flex items-start gap-4">
            <input type="checkbox" className="mt-1" />
            <p className="text-foreground">
              I understand that <strong>BetaWi handles all payments</strong> on behalf of the helper. BetaWi ensures
              safe, secure transactions and maintains all accountability records.
            </p>
          </div>
        </div>

        {/* Confirm Button */}
        <button
          onClick={handlePayment}
          disabled={isProcessing}
          className="w-full px-6 py-4 bg-primary text-primary-foreground rounded-lg hover:opacity-90 transition font-semibold text-lg disabled:opacity-50"
        >
          {isProcessing ? "Processing..." : "Confirm Payment"}
        </button>
      </main>
    </div>
  )
}
