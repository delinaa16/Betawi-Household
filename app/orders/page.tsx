"use client"

import Link from "next/link"
import { useState } from "react"
import { PageHeader } from "@/components/page-header"
import { FileText, Flag, Star, CheckCircle } from "lucide-react"

export default function OrdersPage() {
  const [bookings] = useState([
    {
      id: 1,
      helperName: "Selamawit",
      role: "Nanny",
      status: "active",
      startDate: "2025-10-25",
      image: "👩‍🍳",
      rating: null,
    },
    {
      id: 2,
      helperName: "Mekdes",
      role: "Cook",
      status: "completed",
      startDate: "2025-09-01",
      endDate: "2025-10-01",
      image: "👨‍🍳",
      rating: 4.5,
    },
  ])

  return (
    <div className="min-h-screen bg-background">
      <PageHeader title="My Bookings" subtitle="Manage Your Orders" backHref="/dashboard" />

      <main className="max-w-4xl mx-auto px-4 py-12">
        <div className="space-y-6">
          {bookings.map((booking) => (
            <div key={booking.id} className="bg-card border border-border rounded-xl p-6 hover:shadow-lg transition">
              <div className="flex items-start justify-between mb-6">
                <div className="flex items-center gap-4">
                  <div className="text-5xl">{booking.image}</div>
                  <div>
                    <h3 className="text-xl font-bold text-foreground">{booking.helperName}</h3>
                    <p className="text-muted-foreground">{booking.role}</p>
                    <p className="text-sm text-muted-foreground mt-2">
                      Started: {booking.startDate}
                      {booking.endDate && ` • Ended: ${booking.endDate}`}
                    </p>
                  </div>
                </div>
                <span
                  className={`px-4 py-2 rounded-full font-semibold text-sm ${
                    booking.status === "active" ? "bg-primary/10 text-primary" : "bg-secondary/10 text-secondary"
                  }`}
                >
                  {booking.status === "active" ? "Active" : "Completed"}
                </span>
              </div>

              <div className="flex flex-wrap gap-3">
                <Link href="/contract">
                  <button className="flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-secondary/10 to-primary/5 border border-secondary/20 text-foreground rounded-lg hover:border-secondary/40 transition text-sm font-semibold">
                    <FileText size={16} />
                    View Contract
                  </button>
                </Link>

                {booking.status === "active" && (
                  <>
                    <button className="flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-secondary/10 to-primary/5 border border-secondary/20 text-foreground rounded-lg hover:border-secondary/40 transition text-sm font-semibold">
                      <CheckCircle size={16} />
                      Mark Completed
                    </button>
                    <button className="flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-secondary/10 to-primary/5 border border-secondary/20 text-foreground rounded-lg hover:border-secondary/40 transition text-sm font-semibold">
                      <Flag size={16} />
                      Report Issue
                    </button>
                  </>
                )}

                {booking.status === "completed" && !booking.rating && (
                  <Link href="/rate">
                    <button className="flex items-center gap-2 px-4 py-2 bg-secondary text-foreground rounded-lg hover:opacity-90 transition text-sm font-semibold">
                      <Star size={16} />
                      Rate Helper
                    </button>
                  </Link>
                )}

                {booking.rating && (
                  <div className="flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-secondary/10 to-primary/5 border border-secondary/20 rounded-lg">
                    <Star size={16} className="text-yellow-500" />
                    <span className="font-semibold text-foreground">{booking.rating} / 5</span>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </main>
    </div>
  )
}
