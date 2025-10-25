"use client"

import type React from "react"
import Link from "next/link"
import { useState } from "react"
import { useRouter } from "next/navigation"
import { PageHeader } from "@/components/page-header"

export default function SignUp() {
  const router = useRouter()
  const [step, setStep] = useState(1)
  const [formData, setFormData] = useState({
    // Step 1: Basic Info
    name: "",
    email: "",
    phone: "",
    nationalId: "",
    kebeleId: "",
    address: "",
    emergencyContact: "",
    emergencyPhone: "",
    familyContact: "",
    location: "",
    // Step 2: Password
    password: "",
    confirmPassword: "",
    // Step 3: Household Details
    numberOfChildren: "",
    childrenAges: "",
    numberOfHelpersNeeded: "",
  })
  const [error, setError] = useState("")

  const handleNext = () => {
    if (step === 1) {
      if (
        !formData.name ||
        !formData.email ||
        !formData.phone ||
        !formData.nationalId ||
        !formData.kebeleId ||
        !formData.address
      ) {
        setError("Please fill in all required fields")
        return
      }
      setError("")
      setStep(2)
    } else if (step === 2) {
      if (!formData.password || !formData.confirmPassword) {
        setError("Please fill in all fields")
        return
      }
      if (formData.password !== formData.confirmPassword) {
        setError("Passwords do not match")
        return
      }
      setError("")
      setStep(3)
    }
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (!formData.numberOfChildren || !formData.numberOfHelpersNeeded) {
      setError("Please fill in all fields")
      return
    }
    router.push("/auth/verification")
  }

  return (
    <div className="min-h-screen bg-background flex flex-col">
      <PageHeader title="Create Account" subtitle={`Step ${step} of 3`} backHref="/" />

      <main className="flex-1 flex items-center justify-center px-4 py-12">
        <div className="w-full max-w-md">
          <div className="bg-card border border-border rounded-lg p-8">
            <div className="w-full bg-muted rounded-full h-2 mb-8">
              <div className="bg-primary h-2 rounded-full transition-all" style={{ width: `${(step / 3) * 100}%` }} />
            </div>

            <form onSubmit={step === 3 ? handleSubmit : (e) => e.preventDefault()} className="space-y-4">
              {error && (
                <div className="p-3 bg-destructive/10 border border-destructive text-destructive rounded-lg text-sm">
                  {error}
                </div>
              )}

              {step === 1 && (
                <>
                  <div>
                    <label className="block text-sm font-medium text-foreground mb-2">Full Name *</label>
                    <input
                      type="text"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      placeholder="Your name"
                      className="w-full px-4 py-2 border border-border rounded-lg bg-background text-foreground placeholder-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-foreground mb-2">Email *</label>
                    <input
                      type="email"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      placeholder="you@example.com"
                      className="w-full px-4 py-2 border border-border rounded-lg bg-background text-foreground placeholder-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-foreground mb-2">Phone Number *</label>
                    <input
                      type="tel"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      placeholder="+251-XXX-XXXXXX"
                      className="w-full px-4 py-2 border border-border rounded-lg bg-background text-foreground placeholder-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-foreground mb-2">National ID *</label>
                    <input
                      type="text"
                      value={formData.nationalId}
                      onChange={(e) => setFormData({ ...formData, nationalId: e.target.value })}
                      placeholder="Your national ID number"
                      className="w-full px-4 py-2 border border-border rounded-lg bg-background text-foreground placeholder-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-foreground mb-2">Kebele ID *</label>
                    <input
                      type="text"
                      value={formData.kebeleId}
                      onChange={(e) => setFormData({ ...formData, kebeleId: e.target.value })}
                      placeholder="Your kebele ID"
                      className="w-full px-4 py-2 border border-border rounded-lg bg-background text-foreground placeholder-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-foreground mb-2">Address *</label>
                    <input
                      type="text"
                      value={formData.address}
                      onChange={(e) => setFormData({ ...formData, address: e.target.value })}
                      placeholder="Your home address"
                      className="w-full px-4 py-2 border border-border rounded-lg bg-background text-foreground placeholder-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-foreground mb-2">Emergency Contact</label>
                    <input
                      type="text"
                      value={formData.emergencyContact}
                      onChange={(e) => setFormData({ ...formData, emergencyContact: e.target.value })}
                      placeholder="Emergency contact name"
                      className="w-full px-4 py-2 border border-border rounded-lg bg-background text-foreground placeholder-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-foreground mb-2">Emergency Phone</label>
                    <input
                      type="tel"
                      value={formData.emergencyPhone}
                      onChange={(e) => setFormData({ ...formData, emergencyPhone: e.target.value })}
                      placeholder="+251-XXX-XXXXXX"
                      className="w-full px-4 py-2 border border-border rounded-lg bg-background text-foreground placeholder-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-foreground mb-2">Family Contact</label>
                    <input
                      type="text"
                      value={formData.familyContact}
                      onChange={(e) => setFormData({ ...formData, familyContact: e.target.value })}
                      placeholder="Family member name"
                      className="w-full px-4 py-2 border border-border rounded-lg bg-background text-foreground placeholder-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-foreground mb-2">Location</label>
                    <input
                      type="text"
                      value={formData.location}
                      onChange={(e) => setFormData({ ...formData, location: e.target.value })}
                      placeholder="City/Area"
                      className="w-full px-4 py-2 border border-border rounded-lg bg-background text-foreground placeholder-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary"
                    />
                  </div>
                </>
              )}

              {step === 2 && (
                <>
                  <div>
                    <label className="block text-sm font-medium text-foreground mb-2">Password</label>
                    <input
                      type="password"
                      value={formData.password}
                      onChange={(e) => setFormData({ ...formData, password: e.target.value })}
                      placeholder="••••••••"
                      className="w-full px-4 py-2 border border-border rounded-lg bg-background text-foreground placeholder-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-foreground mb-2">Confirm Password</label>
                    <input
                      type="password"
                      value={formData.confirmPassword}
                      onChange={(e) => setFormData({ ...formData, confirmPassword: e.target.value })}
                      placeholder="••••••••"
                      className="w-full px-4 py-2 border border-border rounded-lg bg-background text-foreground placeholder-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary"
                    />
                  </div>
                </>
              )}

              {step === 3 && (
                <>
                  <div>
                    <label className="block text-sm font-medium text-foreground mb-2">Number of Children</label>
                    <input
                      type="number"
                      min="0"
                      value={formData.numberOfChildren}
                      onChange={(e) => setFormData({ ...formData, numberOfChildren: e.target.value })}
                      placeholder="0"
                      className="w-full px-4 py-2 border border-border rounded-lg bg-background text-foreground placeholder-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-foreground mb-2">
                      Children Ages (comma separated)
                    </label>
                    <input
                      type="text"
                      value={formData.childrenAges}
                      onChange={(e) => setFormData({ ...formData, childrenAges: e.target.value })}
                      placeholder="e.g., 5, 8, 12"
                      className="w-full px-4 py-2 border border-border rounded-lg bg-background text-foreground placeholder-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-foreground mb-2">Number of Helpers Needed</label>
                    <input
                      type="number"
                      min="1"
                      value={formData.numberOfHelpersNeeded}
                      onChange={(e) => setFormData({ ...formData, numberOfHelpersNeeded: e.target.value })}
                      placeholder="1"
                      className="w-full px-4 py-2 border border-border rounded-lg bg-background text-foreground placeholder-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary"
                    />
                  </div>
                </>
              )}

              <div className="flex gap-3 pt-4">
                {step > 1 && (
                  <button
                    type="button"
                    onClick={() => setStep(step - 1)}
                    className="flex-1 px-4 py-2 border border-border text-foreground rounded-lg hover:bg-muted transition font-semibold"
                  >
                    Back
                  </button>
                )}
                {step < 3 ? (
                  <button
                    type="button"
                    onClick={handleNext}
                    className="flex-1 px-4 py-2 bg-primary text-primary-foreground rounded-lg hover:opacity-90 transition font-semibold"
                  >
                    Next
                  </button>
                ) : (
                  <button
                    type="submit"
                    className="flex-1 px-4 py-2 bg-primary text-primary-foreground rounded-lg hover:opacity-90 transition font-semibold"
                  >
                    Create Account
                  </button>
                )}
              </div>
            </form>

            <p className="text-center text-muted-foreground mt-6">
              Already have an account?{" "}
              <Link href="/auth/login" className="text-primary hover:underline font-semibold">
                Sign in
              </Link>
            </p>
          </div>
        </div>
      </main>
    </div>
  )
}
