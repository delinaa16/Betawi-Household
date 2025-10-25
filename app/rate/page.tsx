"use client"

import Link from "next/link"
import { useState } from "react"
import { PageHeader } from "@/components/page-header"
import { CheckCircle } from "lucide-react"

export default function RatePage() {
  const [rating, setRating] = useState(0)
  const [feedback, setFeedback] = useState("")
  const [submitted, setSubmitted] = useState(false)

  const helper = {
    name: "Mekdes",
    role: "Cook",
    image: "👨‍🍳",
  }

  const handleSubmit = () => {
    if (rating > 0) {
      setSubmitted(true)
    }
  }

  if (submitted) {
    return (
      <div className="min-h-screen bg-background">
        <PageHeader title="Thank You" subtitle="Rating Submitted" backHref="/orders" />
        <main className="max-w-2xl mx-auto px-4 py-12">
          <div className="bg-card border border-border rounded-xl p-12 text-center">
            <CheckCircle size={64} className="text-primary mx-auto mb-6" />
            <h2 className="text-3xl font-bold text-foreground mb-4">Thank You for Rating</h2>
            <p className="text-lg text-muted-foreground mb-8">
              Your feedback for <strong>{helper.name}</strong> has been recorded and will help us maintain quality
              service.
            </p>
            <Link href="/orders">
              <button className="px-8 py-3 bg-primary text-primary-foreground rounded-lg hover:opacity-90 transition font-semibold">
                Back to Bookings
              </button>
            </Link>
          </div>
        </main>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-background">
      <PageHeader title="Rate Helper" subtitle="Share Your Experience" backHref="/orders" />

      <main className="max-w-2xl mx-auto px-4 py-12">
        <div className="bg-card border border-border rounded-xl p-8">
          {/* Helper Info */}
          <div className="text-center mb-8 pb-8 border-b border-border">
            <div className="text-6xl mb-4">{helper.image}</div>
            <h2 className="text-2xl font-bold text-foreground">{helper.name}</h2>
            <p className="text-muted-foreground">{helper.role}</p>
          </div>

          {/* Rating */}
          <div className="mb-8">
            <label className="block text-sm font-semibold text-foreground mb-4">How would you rate this helper?</label>
            <div className="flex justify-center gap-4">
              {[1, 2, 3, 4, 5].map((star) => (
                <button
                  key={star}
                  onClick={() => setRating(star)}
                  className={`text-5xl transition transform hover:scale-110 ${
                    star <= rating ? "text-yellow-500" : "text-muted-foreground"
                  }`}
                >
                  ★
                </button>
              ))}
            </div>
            {rating > 0 && (
              <p className="text-center text-foreground font-semibold mt-4">
                {rating === 5 && "Excellent!"}
                {rating === 4 && "Very Good!"}
                {rating === 3 && "Good"}
                {rating === 2 && "Fair"}
                {rating === 1 && "Poor"}
              </p>
            )}
          </div>

          {/* Feedback */}
          <div className="mb-8">
            <label className="block text-sm font-semibold text-foreground mb-4">Additional Feedback (Optional)</label>
            <textarea
              value={feedback}
              onChange={(e) => setFeedback(e.target.value)}
              placeholder="Share your experience with this helper..."
              className="w-full px-4 py-3 border border-border rounded-lg bg-background text-foreground placeholder-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary"
              rows={5}
            />
          </div>

          {/* Submit */}
          <div className="flex gap-4">
            <Link href="/orders" className="flex-1">
              <button className="w-full px-6 py-3 border border-border text-foreground rounded-lg hover:bg-muted transition font-semibold">
                Cancel
              </button>
            </Link>
            <button
              onClick={handleSubmit}
              disabled={rating === 0}
              className="flex-1 px-6 py-3 bg-primary text-primary-foreground rounded-lg hover:opacity-90 transition font-semibold disabled:opacity-50"
            >
              Submit Review
            </button>
          </div>
        </div>
      </main>
    </div>
  )
}
