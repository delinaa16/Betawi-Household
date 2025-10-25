"use client"
import { useState } from "react"
import { PageHeader } from "@/components/page-header"

const BOOKINGS_DATA = [
  {
    id: 1,
    helperName: "Selamawit",
    role: "Nanny",
    startDate: "2025-10-25",
    status: "active",
    rating: null,
  },
  {
    id: 2,
    helperName: "Mekdes",
    role: "Cook",
    startDate: "2025-10-20",
    status: "active",
    rating: null,
  },
  {
    id: 3,
    helperName: "Almaz",
    role: "Cleaner",
    startDate: "2025-09-15",
    status: "completed",
    rating: 4.8,
  },
]

export default function Bookings() {
  const [bookings, setBookings] = useState(BOOKINGS_DATA)
  const [ratingForm, setRatingForm] = useState<{ bookingId: number; rating: number; review: string } | null>(null)

  const handleCompleteBooking = (bookingId: number) => {
    setBookings(bookings.map((b) => (b.id === bookingId ? { ...b, status: "completed" } : b)))
  }

  const handleSubmitRating = () => {
    if (ratingForm) {
      setBookings(bookings.map((b) => (b.id === ratingForm.bookingId ? { ...b, rating: ratingForm.rating } : b)))
      setRatingForm(null)
      alert("Thank you for your rating!")
    }
  }

  return (
    <div className="min-h-screen bg-background">
      <PageHeader title="My Bookings" subtitle="Manage your active and completed bookings" backHref="/" />

      <main className="max-w-7xl mx-auto px-4 py-12">
        <div className="space-y-4">
          {bookings.map((booking) => (
            <div key={booking.id} className="bg-card border border-border rounded-lg p-6">
              <div className="flex items-start justify-between mb-4">
                <div>
                  <h3 className="text-lg font-semibold text-foreground">{booking.helperName}</h3>
                  <p className="text-sm text-muted-foreground">{booking.role}</p>
                </div>
                <span
                  className={`px-3 py-1 rounded-full text-sm font-semibold ${
                    booking.status === "active"
                      ? "bg-primary text-primary-foreground"
                      : "bg-muted text-muted-foreground"
                  }`}
                >
                  {booking.status === "active" ? "Active" : "Completed"}
                </span>
              </div>

              <p className="text-sm text-muted-foreground mb-4">Started: {booking.startDate}</p>

              <div className="flex gap-2">
                {booking.status === "active" ? (
                  <>
                    <button className="px-4 py-2 bg-primary text-primary-foreground rounded-lg hover:opacity-90 transition text-sm">
                      Chat
                    </button>
                    <button
                      onClick={() => handleCompleteBooking(booking.id)}
                      className="px-4 py-2 border border-border text-foreground rounded-lg hover:bg-muted transition text-sm"
                    >
                      Mark Complete
                    </button>
                  </>
                ) : (
                  <>
                    {booking.rating ? (
                      <div className="flex items-center gap-2">
                        <span className="text-sm text-foreground">Your rating:</span>
                        <div className="flex items-center gap-1">
                          <span className="font-semibold text-foreground">{booking.rating}</span>
                          <span className="text-yellow-500">★</span>
                        </div>
                      </div>
                    ) : (
                      <button
                        onClick={() => setRatingForm({ bookingId: booking.id, rating: 5, review: "" })}
                        className="px-4 py-2 bg-secondary text-secondary-foreground rounded-lg hover:opacity-90 transition text-sm"
                      >
                        Rate Helper
                      </button>
                    )}
                  </>
                )}
              </div>
            </div>
          ))}
        </div>

        {ratingForm && (
          <div className="fixed inset-0 bg-black/50 flex items-center justify-center p-4 z-50">
            <div className="bg-card rounded-lg p-8 max-w-md w-full">
              <h2 className="text-2xl font-bold text-foreground mb-6">Rate Your Experience</h2>
              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">Rating</label>
                  <div className="flex gap-2">
                    {[1, 2, 3, 4, 5].map((star) => (
                      <button
                        key={star}
                        onClick={() => setRatingForm({ ...ratingForm, rating: star })}
                        className={`text-3xl ${star <= ratingForm.rating ? "text-yellow-500" : "text-muted-foreground"}`}
                      >
                        ★
                      </button>
                    ))}
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">Review (Optional)</label>
                  <textarea
                    value={ratingForm.review}
                    onChange={(e) => setRatingForm({ ...ratingForm, review: e.target.value })}
                    placeholder="Share your experience..."
                    className="w-full px-4 py-2 border border-border rounded-lg bg-background text-foreground"
                    rows={4}
                  />
                </div>
                <div className="flex gap-2 pt-4">
                  <button
                    onClick={handleSubmitRating}
                    className="flex-1 px-4 py-2 bg-primary text-primary-foreground rounded-lg hover:opacity-90 transition font-semibold"
                  >
                    Submit Rating
                  </button>
                  <button
                    onClick={() => setRatingForm(null)}
                    className="flex-1 px-4 py-2 border border-border text-foreground rounded-lg hover:bg-muted transition font-semibold"
                  >
                    Cancel
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}
      </main>
    </div>
  )
}
