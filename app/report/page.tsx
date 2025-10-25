"use client"

import Link from "next/link"
import { useState } from "react"
import { PageHeader } from "@/components/page-header"
import { CheckCircle } from "lucide-react"

export default function ReportPage() {
  const [issueType, setIssueType] = useState("")
  const [description, setDescription] = useState("")
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = () => {
    if (issueType && description) {
      setSubmitted(true)
    }
  }

  if (submitted) {
    return (
      <div className="min-h-screen bg-background">
        <PageHeader title="Report Submitted" subtitle="Thank You" backHref="/orders" />
        <main className="max-w-2xl mx-auto px-4 py-12">
          <div className="bg-card border border-border rounded-xl p-12 text-center">
            <CheckCircle size={64} className="text-primary mx-auto mb-6" />
            <h2 className="text-3xl font-bold text-foreground mb-4">Report Received</h2>
            <p className="text-lg text-muted-foreground mb-8">
              Your report has been sent to BetaWi admin. We will investigate and take appropriate action within 24-48
              hours.
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
      <PageHeader title="Report Issue" subtitle="We're Here to Help" backHref="/orders" />

      <main className="max-w-2xl mx-auto px-4 py-12">
        <div className="bg-card border border-border rounded-xl p-8">
          <div className="mb-8 p-4 bg-gradient-to-r from-secondary/10 to-primary/5 border border-secondary/20 rounded-lg">
            <p className="text-foreground">
              If you experience any issues with a helper, please report it here. BetaWi admin will investigate and take
              appropriate action.
            </p>
          </div>

          {/* Issue Type */}
          <div className="mb-8">
            <label className="block text-sm font-semibold text-foreground mb-4">Issue Type *</label>
            <select
              value={issueType}
              onChange={(e) => setIssueType(e.target.value)}
              className="w-full px-4 py-3 border border-border rounded-lg bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-primary"
            >
              <option value="">Select an issue type</option>
              <option value="misconduct">Misconduct</option>
              <option value="theft">Theft</option>
              <option value="payment">Payment Issue</option>
              <option value="safety">Safety Concern</option>
              <option value="other">Other</option>
            </select>
          </div>

          {/* Description */}
          <div className="mb-8">
            <label className="block text-sm font-semibold text-foreground mb-4">Description *</label>
            <textarea
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              placeholder="Please provide detailed information about the issue..."
              className="w-full px-4 py-3 border border-border rounded-lg bg-background text-foreground placeholder-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary"
              rows={6}
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
              disabled={!issueType || !description}
              className="flex-1 px-6 py-3 bg-primary text-primary-foreground rounded-lg hover:opacity-90 transition font-semibold disabled:opacity-50"
            >
              Submit Report
            </button>
          </div>
        </div>
      </main>
    </div>
  )
}
