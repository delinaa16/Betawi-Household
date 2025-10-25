"use client"
import { PageHeader } from "@/components/page-header"
import { Edit, Download } from "lucide-react"

export default function HouseholdProfile() {
  const householdData = {
    name: "Abebe Kebede",
    email: "abebe@example.com",
    phone: "+251-911-234567",
    nationalId: "ET-123456789",
    kebeleId: "KB-987654",
    address: "Bole, Addis Ababa",
    emergencyContact: "Almaz Kebede",
    emergencyPhone: "+251-922-345678",
    familyContact: "Tadesse Kebede",
    location: "Addis Ababa",
    numberOfChildren: 2,
    childrenAges: "5, 8",
    accountStatus: "Verified",
    joinDate: "2025-10-01",
  }

  return (
    <div className="min-h-screen bg-background">
      <PageHeader title="My Profile" subtitle="Household Information" backHref="/dashboard" />

      <main className="max-w-4xl mx-auto px-4 py-12">
        <div className="bg-card border border-border rounded-xl p-8 mb-8">
          <div className="flex items-center justify-between mb-8">
            <h2 className="text-2xl font-bold text-foreground">Account Information</h2>
            <button className="flex items-center gap-2 px-4 py-2 bg-secondary text-foreground rounded-lg hover:opacity-90 transition">
              <Edit size={18} />
              Edit Profile
            </button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Personal Information */}
            <div className="space-y-6">
              <div>
                <h3 className="text-sm font-semibold text-muted-foreground mb-4">Personal Information</h3>
                <div className="space-y-4">
                  <div className="bg-gradient-to-r from-secondary/10 to-primary/5 p-4 rounded-lg border border-secondary/20">
                    <p className="text-xs text-muted-foreground mb-1">Full Name</p>
                    <p className="text-lg font-semibold text-foreground">{householdData.name}</p>
                  </div>
                  <div className="bg-gradient-to-r from-secondary/10 to-primary/5 p-4 rounded-lg border border-secondary/20">
                    <p className="text-xs text-muted-foreground mb-1">Email</p>
                    <p className="text-lg font-semibold text-foreground">{householdData.email}</p>
                  </div>
                  <div className="bg-gradient-to-r from-secondary/10 to-primary/5 p-4 rounded-lg border border-secondary/20">
                    <p className="text-xs text-muted-foreground mb-1">Phone</p>
                    <p className="text-lg font-semibold text-foreground">{householdData.phone}</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Accountability Information */}
            <div className="space-y-6">
              <div>
                <h3 className="text-sm font-semibold text-muted-foreground mb-4">Accountability Information</h3>
                <div className="space-y-4">
                  <div className="bg-gradient-to-r from-secondary/10 to-primary/5 p-4 rounded-lg border border-secondary/20">
                    <p className="text-xs text-muted-foreground mb-1">National ID</p>
                    <p className="text-lg font-semibold text-foreground">{householdData.nationalId}</p>
                  </div>
                  <div className="bg-gradient-to-r from-secondary/10 to-primary/5 p-4 rounded-lg border border-secondary/20">
                    <p className="text-xs text-muted-foreground mb-1">Kebele ID</p>
                    <p className="text-lg font-semibold text-foreground">{householdData.kebeleId}</p>
                  </div>
                  <div className="bg-gradient-to-r from-secondary/10 to-primary/5 p-4 rounded-lg border border-secondary/20">
                    <p className="text-xs text-muted-foreground mb-1">Address</p>
                    <p className="text-lg font-semibold text-foreground">{householdData.address}</p>
                  </div>
                  <div className="bg-gradient-to-r from-secondary/10 to-primary/5 p-4 rounded-lg border border-secondary/20">
                    <p className="text-xs text-muted-foreground mb-1">Location</p>
                    <p className="text-lg font-semibold text-foreground">{householdData.location}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Emergency Contacts */}
          <div className="mt-8 pt-8 border-t border-border">
            <h3 className="text-sm font-semibold text-muted-foreground mb-4">Emergency Contacts</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="bg-gradient-to-r from-secondary/10 to-primary/5 p-4 rounded-lg border border-secondary/20">
                <p className="text-xs text-muted-foreground mb-1">Emergency Contact</p>
                <p className="text-lg font-semibold text-foreground">{householdData.emergencyContact}</p>
                <p className="text-sm text-muted-foreground mt-1">{householdData.emergencyPhone}</p>
              </div>
              <div className="bg-gradient-to-r from-secondary/10 to-primary/5 p-4 rounded-lg border border-secondary/20">
                <p className="text-xs text-muted-foreground mb-1">Family Contact</p>
                <p className="text-lg font-semibold text-foreground">{householdData.familyContact}</p>
              </div>
            </div>
          </div>

          {/* Household Details */}
          <div className="mt-8 pt-8 border-t border-border">
            <h3 className="text-sm font-semibold text-muted-foreground mb-4">Household Details</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="bg-gradient-to-r from-secondary/10 to-primary/5 p-4 rounded-lg border border-secondary/20">
                <p className="text-xs text-muted-foreground mb-1">Number of Children</p>
                <p className="text-lg font-semibold text-foreground">{householdData.numberOfChildren}</p>
              </div>
              <div className="bg-gradient-to-r from-secondary/10 to-primary/5 p-4 rounded-lg border border-secondary/20">
                <p className="text-xs text-muted-foreground mb-1">Children Ages</p>
                <p className="text-lg font-semibold text-foreground">{householdData.childrenAges}</p>
              </div>
              <div className="bg-gradient-to-r from-secondary/10 to-primary/5 p-4 rounded-lg border border-secondary/20">
                <p className="text-xs text-muted-foreground mb-1">Account Status</p>
                <p className="text-lg font-semibold text-primary">{householdData.accountStatus}</p>
              </div>
            </div>
          </div>

          {/* Download Profile */}
          <div className="mt-8 pt-8 border-t border-border">
            <button className="flex items-center gap-2 px-6 py-3 bg-secondary text-foreground rounded-lg hover:opacity-90 transition font-semibold">
              <Download size={18} />
              Download Profile Document
            </button>
          </div>
        </div>
      </main>
    </div>
  )
}
