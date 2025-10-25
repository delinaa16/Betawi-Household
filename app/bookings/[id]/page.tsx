"use client"
import Link from "next/link"
import { useParams } from "next/navigation"
import { PageHeader } from "@/components/page-header"
import { MessageSquare, Phone, Mail, MapPin, Clock } from "lucide-react"

const BOOKING_DETAILS: Record<number, any> = {
  1: {
    id: 1,
    helperName: "Selamawit",
    role: "Nanny",
    startDate: "2025-10-25",
    status: "active",
    image: "👩‍🍳",
    phone: "+251-912-345-678",
    email: "selamawit@betawi.com",
    address: "Addis Ababa, Bole",
    experience: "5 years",
    skills: ["Childcare", "Cooking", "Cleaning"],
    hourlyRate: "150 ETB",
    workingHours: "8:00 AM - 5:00 PM",
  },
  2: {
    id: 2,
    helperName: "Mekdes",
    role: "Cook",
    startDate: "2025-10-20",
    status: "active",
    image: "👨‍🍳",
    phone: "+251-923-456-789",
    email: "mekdes@betawi.com",
    address: "Addis Ababa, Kazanchis",
    experience: "7 years",
    skills: ["Ethiopian Cuisine", "International Cooking", "Menu Planning"],
    hourlyRate: "200 ETB",
    workingHours: "6:00 AM - 2:00 PM",
  },
}

export default function BookingDetails() {
  const params = useParams()
  const bookingId = Number.parseInt(params.id as string)
  const booking = BOOKING_DETAILS[bookingId]

  if (!booking) {
    return (
      <div className="min-h-screen bg-background">
        <PageHeader title="Booking Not Found" subtitle="This booking does not exist" backHref="/dashboard" />
        <main className="max-w-7xl mx-auto px-4 py-12">
          <p className="text-muted-foreground">The booking you're looking for could not be found.</p>
        </main>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-background">
      <PageHeader title="Booking Details" subtitle={`${booking.helperName} - ${booking.role}`} backHref="/dashboard" />

      <main className="max-w-4xl mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Main Details */}
          <div className="md:col-span-2 space-y-6">
            {/* Helper Info Card */}
            <div className="bg-gradient-to-br from-secondary/15 to-card border border-secondary/30 rounded-xl p-8">
              <div className="flex items-start gap-6 mb-6">
                <div className="text-6xl">{booking.image}</div>
                <div className="flex-1">
                  <h2 className="text-3xl font-bold text-foreground mb-2">{booking.helperName}</h2>
                  <p className="text-lg text-primary font-semibold mb-4">{booking.role}</p>
                  <div className="flex flex-wrap gap-2">
                    {booking.skills.map((skill: string) => (
                      <span
                        key={skill}
                        className="px-3 py-1 bg-secondary/30 text-foreground rounded-full text-sm font-medium"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-4 pt-6 border-t border-secondary/20">
                <div>
                  <p className="text-sm text-muted-foreground mb-1">Experience</p>
                  <p className="text-lg font-semibold text-foreground">{booking.experience}</p>
                </div>
                <div>
                  <p className="text-sm text-muted-foreground mb-1">Hourly Rate</p>
                  <p className="text-lg font-semibold text-foreground">{booking.hourlyRate}</p>
                </div>
              </div>
            </div>

            {/* Contact Information */}
            <div className="bg-card border border-border rounded-xl p-8">
              <h3 className="text-xl font-bold text-foreground mb-6">Contact Information</h3>
              <div className="space-y-4">
                <div className="flex items-center gap-4 p-4 bg-secondary/10 rounded-lg">
                  <Phone size={24} className="text-primary" />
                  <div>
                    <p className="text-sm text-muted-foreground">Phone</p>
                    <p className="font-semibold text-foreground">{booking.phone}</p>
                  </div>
                </div>
                <div className="flex items-center gap-4 p-4 bg-secondary/10 rounded-lg">
                  <Mail size={24} className="text-primary" />
                  <div>
                    <p className="text-sm text-muted-foreground">Email</p>
                    <p className="font-semibold text-foreground">{booking.email}</p>
                  </div>
                </div>
                <div className="flex items-center gap-4 p-4 bg-secondary/10 rounded-lg">
                  <MapPin size={24} className="text-primary" />
                  <div>
                    <p className="text-sm text-muted-foreground">Location</p>
                    <p className="font-semibold text-foreground">{booking.address}</p>
                  </div>
                </div>
                <div className="flex items-center gap-4 p-4 bg-secondary/10 rounded-lg">
                  <Clock size={24} className="text-primary" />
                  <div>
                    <p className="text-sm text-muted-foreground">Working Hours</p>
                    <p className="font-semibold text-foreground">{booking.workingHours}</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Booking Status */}
            <div className="bg-card border border-border rounded-xl p-8">
              <h3 className="text-xl font-bold text-foreground mb-6">Booking Status</h3>
              <div className="space-y-4">
                <div className="flex items-center justify-between p-4 bg-primary/10 rounded-lg">
                  <span className="text-foreground font-semibold">Status</span>
                  <span className="px-4 py-2 bg-primary text-primary-foreground rounded-full font-semibold capitalize">
                    {booking.status}
                  </span>
                </div>
                <div className="flex items-center justify-between p-4 bg-secondary/10 rounded-lg">
                  <span className="text-foreground font-semibold">Start Date</span>
                  <span className="text-foreground font-semibold">{booking.startDate}</span>
                </div>
              </div>
            </div>
          </div>

          {/* Action Sidebar */}
          <div className="space-y-4">
            <Link href="/chat" className="block">
              <button className="w-full px-6 py-4 bg-secondary text-foreground rounded-lg hover:opacity-90 transition font-semibold flex items-center justify-center gap-2">
                <MessageSquare size={20} />
                Send Message
              </button>
            </Link>
            <button className="w-full px-6 py-4 border border-secondary/30 text-foreground rounded-lg hover:bg-secondary/10 transition font-semibold">
              Report Issue
            </button>
            <Link href="/rate" className="block">
              <button className="w-full px-6 py-4 border border-secondary/30 text-foreground rounded-lg hover:bg-secondary/10 transition font-semibold">
                Rate Helper
              </button>
            </Link>
            <Link href="/dashboard" className="block">
              <button className="w-full px-6 py-4 border border-border text-foreground rounded-lg hover:bg-muted transition font-semibold">
                Back to Dashboard
              </button>
            </Link>
          </div>
        </div>
      </main>
    </div>
  )
}
