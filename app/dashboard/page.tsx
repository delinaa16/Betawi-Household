"use client"
import Link from "next/link"
import { useState } from "react"
import { CheckCircle, Users, MessageSquare, Settings, User, Users2, MessageCircle } from "lucide-react"
import { PageHeader } from "@/components/page-header"
import { useAuth } from "@/lib/auth-context"
import { useRouter } from "next/navigation"

export default function Dashboard() {
  const router = useRouter()
  const { isLoggedIn, logout } = useAuth()
  const [accountStatus] = useState("approved")
  const [activeBookings] = useState([
    { id: 1, helperName: "Selamawit", role: "Nanny", startDate: "2025-10-25", status: "active", image: "👩‍🍳" },
    { id: 2, helperName: "Mekdes", role: "Cook", startDate: "2025-10-20", status: "active", image: "👨‍🍳" },
  ])

  const handleLogout = () => {
    logout()
    router.push("/")
  }

  return (
    <div className="min-h-screen bg-background">
      <PageHeader
        title="Household Dashboard"
        subtitle="Manage your account and bookings"
        backHref="/"
        logoutFn={handleLogout}
      />

      <main className="max-w-7xl mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          <Link href="/profile">
            <div className="bg-gradient-to-br from-secondary/20 to-card border border-secondary/40 rounded-xl p-8 hover:shadow-lg hover:border-secondary/60 transition cursor-pointer group">
              <div className="w-16 h-16 bg-secondary/30 rounded-lg mb-4 flex items-center justify-center group-hover:scale-110 transition">
                <User size={32} className="text-primary" />
              </div>
              <h3 className="text-2xl font-bold text-foreground mb-2">My Profile</h3>
              <p className="text-muted-foreground">
                View and manage your household information and accountability details
              </p>
            </div>
          </Link>

          <Link href="/helpers">
            <div className="bg-gradient-to-br from-secondary/20 to-card border border-secondary/40 rounded-xl p-8 hover:shadow-lg hover:border-secondary/60 transition cursor-pointer group">
              <div className="w-16 h-16 bg-secondary/30 rounded-lg mb-4 flex items-center justify-center group-hover:scale-110 transition">
                <Users2 size={32} className="text-primary" />
              </div>
              <h3 className="text-2xl font-bold text-foreground mb-2">Browse Helpers</h3>
              <p className="text-muted-foreground">
                Find and book verified nannies, cooks, and cleaners for your household
              </p>
            </div>
          </Link>

          <Link href="/chat">
            <div className="bg-gradient-to-br from-secondary/20 to-card border border-secondary/40 rounded-xl p-8 hover:shadow-lg hover:border-secondary/60 transition cursor-pointer group">
              <div className="w-16 h-16 bg-secondary/30 rounded-lg mb-4 flex items-center justify-center group-hover:scale-110 transition">
                <MessageCircle size={32} className="text-primary" />
              </div>
              <h3 className="text-2xl font-bold text-foreground mb-2">Chat with Admin</h3>
              <p className="text-muted-foreground">
                Communicate directly with our admin team for support and assistance
              </p>
            </div>
          </Link>
        </div>

        {/* Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          <div className="bg-gradient-to-br from-secondary/15 to-card border border-secondary/30 rounded-xl p-6 hover:shadow-lg hover:border-secondary/40 transition">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-sm font-semibold text-muted-foreground">Account Status</h3>
              <CheckCircle size={24} className="text-primary" />
            </div>
            <p className="text-3xl font-bold text-primary capitalize mb-2">{accountStatus}</p>
            <p className="text-sm text-muted-foreground">Your account has been verified</p>
          </div>
          <div className="bg-gradient-to-br from-secondary/15 to-card border border-secondary/30 rounded-xl p-6 hover:shadow-lg hover:border-secondary/40 transition">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-sm font-semibold text-muted-foreground">Active Bookings</h3>
              <Users size={24} className="text-primary" />
            </div>
            <p className="text-3xl font-bold text-primary mb-2">{activeBookings.length}</p>
            <p className="text-sm text-muted-foreground">Helpers currently assigned</p>
          </div>
          <div className="bg-gradient-to-br from-secondary/15 to-card border border-secondary/30 rounded-xl p-6 hover:shadow-lg hover:border-secondary/40 transition">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-sm font-semibold text-muted-foreground">Support</h3>
              <MessageSquare size={24} className="text-primary" />
            </div>
            <p className="text-lg font-bold text-foreground mb-2">+251-XXX-XXXXXX</p>
            <p className="text-sm text-muted-foreground">Available 24/7</p>
          </div>
        </div>

        {/* Active Bookings */}
        <div className="bg-card border border-border rounded-xl p-8 mb-8 shadow-sm">
          <h2 className="text-2xl font-bold text-foreground mb-6">Active Bookings</h2>
          {activeBookings.length > 0 ? (
            <div className="space-y-4">
              {activeBookings.map((booking) => (
                <div
                  key={booking.id}
                  className="flex items-center justify-between p-4 bg-gradient-to-r from-secondary/10 to-primary/5 rounded-lg border border-secondary/20 hover:shadow-md hover:border-secondary/40 transition"
                >
                  <div className="flex items-center gap-4">
                    <div className="text-4xl">{booking.image}</div>
                    <div>
                      <h3 className="font-semibold text-foreground text-lg">{booking.helperName}</h3>
                      <p className="text-sm text-muted-foreground">
                        {booking.role} • Started {booking.startDate}
                      </p>
                    </div>
                  </div>
                  <div className="flex gap-2">
                    <Link href="/chat">
                      <button className="px-4 py-2 bg-secondary text-foreground rounded-lg hover:opacity-90 transition text-sm font-semibold flex items-center gap-2">
                        <MessageSquare size={16} />
                        Chat
                      </button>
                    </Link>
                    <Link href={`/bookings/${booking.id}`}>
                      <button className="px-4 py-2 border border-secondary/30 text-foreground rounded-lg hover:bg-secondary/10 transition text-sm font-semibold flex items-center gap-2">
                        <Settings size={16} />
                        Details
                      </button>
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <p className="text-muted-foreground">No active bookings yet</p>
          )}
        </div>
      </main>
    </div>
  )
}
