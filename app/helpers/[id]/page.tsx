"use client"
import Link from "next/link"
import { useState } from "react"
import { PageHeader } from "@/components/page-header"
import { Phone, MapPin, FileText, Users, Clock, Award, Languages } from "lucide-react"

const HELPERS_DATA = [
  {
    id: 1,
    name: "Selamawit",
    age: 28,
    role: "Nanny",
    experience: "5 years",
    skills: ["Childcare", "Cooking"],
    strengths: ["Patient", "Organized"],
    weaknesses: ["Limited driving experience"],
    availability: "Live-in",
    rating: 4.5,
    verified: true,
    bio: "Experienced nanny with a passion for childcare. I love working with children and creating a safe, nurturing environment.",
    phone: "+251911234567",
    email: "selamawit@betawi.com",
    nationalId: "ET-2024-001234",
    kebeleId: "KB-2024-5678",
    address: "Addis Ababa, Bole Subcity, Woreda 3",
    emergencyContact: "+251922345678",
    emergencyContactName: "Abebe Selamawit",
    familyContact: "+251933456789",
    familyContactName: "Almaz Selamawit",
    location: "Bole, Addis Ababa",
    familySize: 4,
    certifications: ["Childcare Certificate", "First Aid Training"],
    languages: ["Amharic", "English", "Oromo"],
    hourlyRate: 150,
    workingHours: "6:00 AM - 8:00 PM",
  },
  {
    id: 2,
    name: "Mekdes",
    age: 32,
    role: "Cook",
    experience: "7 years",
    skills: ["Cooking", "Cleaning"],
    strengths: ["Fast", "Clean"],
    weaknesses: ["No childcare experience"],
    availability: "On-demand",
    rating: 4.0,
    verified: true,
    bio: "Professional cook with expertise in traditional and modern cuisine. Committed to food safety and quality.",
    phone: "+251912345678",
    email: "mekdes@betawi.com",
    nationalId: "ET-2024-002345",
    kebeleId: "KB-2024-6789",
    address: "Addis Ababa, Nifas Silk Subcity, Woreda 5",
    emergencyContact: "+251923456789",
    emergencyContactName: "Tadesse Mekdes",
    familyContact: "+251934567890",
    familyContactName: "Hiwot Mekdes",
    location: "Nifas Silk, Addis Ababa",
    familySize: 3,
    certifications: ["Food Safety Certificate", "Professional Cooking Diploma"],
    languages: ["Amharic", "English"],
    hourlyRate: 120,
    workingHours: "7:00 AM - 6:00 PM",
  },
  {
    id: 3,
    name: "Almaz",
    age: 26,
    role: "Cleaner",
    experience: "3 years",
    skills: ["Cleaning", "Laundry"],
    strengths: ["Thorough", "Reliable"],
    weaknesses: ["Limited cooking skills"],
    availability: "On-demand",
    rating: 4.8,
    verified: true,
    bio: "Detail-oriented cleaner dedicated to maintaining spotless homes. Reliable and professional service.",
    phone: "+251913456789",
    email: "almaz@betawi.com",
    nationalId: "ET-2024-003456",
    kebeleId: "KB-2024-7890",
    address: "Addis Ababa, Kolfe Keranio Subcity, Woreda 2",
    emergencyContact: "+251924567890",
    emergencyContactName: "Getnet Almaz",
    familyContact: "+251935678901",
    familyContactName: "Selam Almaz",
    location: "Kolfe Keranio, Addis Ababa",
    familySize: 2,
    certifications: ["Professional Cleaning Certificate"],
    languages: ["Amharic", "English"],
    hourlyRate: 100,
    workingHours: "8:00 AM - 5:00 PM",
  },
  {
    id: 4,
    name: "Tigist",
    age: 35,
    role: "Nanny",
    experience: "10 years",
    skills: ["Childcare", "Cooking", "Cleaning"],
    strengths: ["Experienced", "Caring", "Flexible"],
    weaknesses: ["None noted"],
    availability: "Live-in",
    rating: 4.9,
    verified: true,
    bio: "Highly experienced nanny with a track record of excellent care. Flexible and adaptable to family needs.",
    phone: "+251914567890",
    email: "tigist@betawi.com",
    nationalId: "ET-2024-004567",
    kebeleId: "KB-2024-8901",
    address: "Addis Ababa, Yeka Subcity, Woreda 1",
    emergencyContact: "+251925678901",
    emergencyContactName: "Dawit Tigist",
    familyContact: "+251936789012",
    familyContactName: "Marta Tigist",
    location: "Yeka, Addis Ababa",
    familySize: 5,
    certifications: ["Advanced Childcare Certificate", "First Aid & CPR", "Child Development Specialist"],
    languages: ["Amharic", "English", "Tigrinya"],
    hourlyRate: 180,
    workingHours: "24/7 (Live-in)",
  },
]

export default function HelperProfile({ params }: { params: { id: string } }) {
  const helper = HELPERS_DATA.find((h) => h.id === Number.parseInt(params.id))
  const [showBookingForm, setShowBookingForm] = useState(false)
  const [bookingData, setBookingData] = useState({
    numberOfHelpers: 1,
    serviceType: "on-demand",
    startDate: "",
  })

  if (!helper) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-foreground mb-4">Helper not found</h1>
          <Link href="/helpers">
            <button className="px-6 py-2 bg-primary text-primary-foreground rounded-lg hover:opacity-90 transition">
              Back to Helpers
            </button>
          </Link>
        </div>
      </div>
    )
  }

  const handleBooking = () => {
    alert(`Booking request sent to ${helper.name}! Admin will confirm shortly.`)
    setShowBookingForm(false)
  }

  return (
    <div className="min-h-screen bg-background">
      <PageHeader title={helper.name} subtitle={helper.role} backHref="/helpers" />

      <main className="max-w-6xl mx-auto px-4 py-12">
        <div className="bg-card border border-border rounded-lg p-8 mb-8">
          <div className="flex items-start justify-between mb-6">
            {helper.verified && (
              <span className="px-3 py-1 bg-primary text-primary-foreground font-semibold rounded-lg">Verified</span>
            )}
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-8 pb-8 border-b border-border">
            <div>
              <p className="text-sm text-muted-foreground mb-1">Age</p>
              <p className="text-2xl font-bold text-foreground">{helper.age}</p>
            </div>
            <div>
              <p className="text-sm text-muted-foreground mb-1">Experience</p>
              <p className="text-2xl font-bold text-foreground">{helper.experience}</p>
            </div>
            <div>
              <p className="text-sm text-muted-foreground mb-1">Availability</p>
              <p className="text-2xl font-bold text-foreground">{helper.availability}</p>
            </div>
            <div>
              <p className="text-sm text-muted-foreground mb-1">Rating</p>
              <div className="flex items-center gap-1">
                <p className="text-2xl font-bold text-foreground">{helper.rating}</p>
                <span className="text-yellow-500">★</span>
              </div>
            </div>
          </div>

          <p className="text-foreground mb-8">{helper.bio}</p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <h3 className="font-semibold text-foreground mb-3">Skills</h3>
              <div className="flex flex-wrap gap-2">
                {helper.skills.map((skill) => (
                  <span key={skill} className="px-3 py-1 bg-secondary text-secondary-foreground rounded-full text-sm">
                    {skill}
                  </span>
                ))}
              </div>
            </div>
            <div>
              <h3 className="font-semibold text-foreground mb-3">Strengths</h3>
              <ul className="space-y-2">
                {helper.strengths.map((strength) => (
                  <li key={strength} className="text-sm text-foreground flex items-center gap-2">
                    <span className="text-primary">✓</span> {strength}
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h3 className="font-semibold text-foreground mb-3">Considerations</h3>
              <ul className="space-y-2">
                {helper.weaknesses.map((weakness) => (
                  <li key={weakness} className="text-sm text-foreground flex items-center gap-2">
                    <span className="text-muted-foreground">•</span> {weakness}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-8">
          {/* Contact Information */}
          <div className="bg-card border border-border rounded-lg p-6">
            <h3 className="font-semibold text-foreground mb-4 flex items-center gap-2">
              <Phone size={20} className="text-primary" />
              Contact Information
            </h3>
            <div className="space-y-3">
              <div>
                <p className="text-xs text-muted-foreground mb-1">Phone</p>
                <p className="text-foreground font-medium">{helper.phone}</p>
              </div>
              <div>
                <p className="text-xs text-muted-foreground mb-1">Email</p>
                <p className="text-foreground font-medium">{helper.email}</p>
              </div>
            </div>
          </div>

          {/* Identification */}
          <div className="bg-card border border-border rounded-lg p-6">
            <h3 className="font-semibold text-foreground mb-4 flex items-center gap-2">
              <FileText size={20} className="text-primary" />
              Identification
            </h3>
            <div className="space-y-3">
              <div>
                <p className="text-xs text-muted-foreground mb-1">National ID</p>
                <p className="text-foreground font-medium">{helper.nationalId}</p>
              </div>
              <div>
                <p className="text-xs text-muted-foreground mb-1">Kebele ID</p>
                <p className="text-foreground font-medium">{helper.kebeleId}</p>
              </div>
            </div>
          </div>

          {/* Location & Family */}
          <div className="bg-card border border-border rounded-lg p-6">
            <h3 className="font-semibold text-foreground mb-4 flex items-center gap-2">
              <MapPin size={20} className="text-primary" />
              Location & Family
            </h3>
            <div className="space-y-3">
              <div>
                <p className="text-xs text-muted-foreground mb-1">Location</p>
                <p className="text-foreground font-medium">{helper.location}</p>
              </div>
              <div>
                <p className="text-xs text-muted-foreground mb-1">Family Size</p>
                <p className="text-foreground font-medium">{helper.familySize} people</p>
              </div>
            </div>
          </div>
        </div>

        {/* Address & Emergency Contacts */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
          <div className="bg-gradient-to-br from-secondary/10 to-primary/5 border border-secondary/30 rounded-lg p-6">
            <h3 className="font-semibold text-foreground mb-4">Address</h3>
            <p className="text-foreground">{helper.address}</p>
          </div>

          <div className="bg-gradient-to-br from-secondary/10 to-primary/5 border border-secondary/30 rounded-lg p-6">
            <h3 className="font-semibold text-foreground mb-4">Emergency Contact</h3>
            <div className="space-y-2">
              <p className="text-sm text-foreground">
                <span className="font-medium">Name:</span> {helper.emergencyContactName}
              </p>
              <p className="text-sm text-foreground">
                <span className="font-medium">Phone:</span> {helper.emergencyContact}
              </p>
            </div>
          </div>
        </div>

        {/* Family Contact */}
        <div className="bg-gradient-to-br from-secondary/10 to-primary/5 border border-secondary/30 rounded-lg p-6 mb-8">
          <h3 className="font-semibold text-foreground mb-4 flex items-center gap-2">
            <Users size={20} className="text-primary" />
            Family Contact
          </h3>
          <div className="space-y-2">
            <p className="text-sm text-foreground">
              <span className="font-medium">Name:</span> {helper.familyContactName}
            </p>
            <p className="text-sm text-foreground">
              <span className="font-medium">Phone:</span> {helper.familyContact}
            </p>
          </div>
        </div>

        {/* Professional Information */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-8">
          {/* Certifications */}
          <div className="bg-card border border-border rounded-lg p-6">
            <h3 className="font-semibold text-foreground mb-4 flex items-center gap-2">
              <Award size={20} className="text-primary" />
              Certifications
            </h3>
            <div className="space-y-2">
              {helper.certifications.map((cert) => (
                <div key={cert} className="flex items-start gap-2">
                  <span className="text-primary mt-1">✓</span>
                  <p className="text-sm text-foreground">{cert}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Languages */}
          <div className="bg-card border border-border rounded-lg p-6">
            <h3 className="font-semibold text-foreground mb-4 flex items-center gap-2">
              <Languages size={20} className="text-primary" />
              Languages
            </h3>
            <div className="flex flex-wrap gap-2">
              {helper.languages.map((lang) => (
                <span
                  key={lang}
                  className="px-3 py-1 bg-secondary/25 text-foreground text-sm rounded-full border border-secondary/40"
                >
                  {lang}
                </span>
              ))}
            </div>
          </div>

          {/* Work Details */}
          <div className="bg-card border border-border rounded-lg p-6">
            <h3 className="font-semibold text-foreground mb-4 flex items-center gap-2">
              <Clock size={20} className="text-primary" />
              Work Details
            </h3>
            <div className="space-y-3">
              <div>
                <p className="text-xs text-muted-foreground mb-1">Hourly Rate</p>
                <p className="text-lg font-bold text-primary">{helper.hourlyRate} ETB/hour</p>
              </div>
              <div>
                <p className="text-xs text-muted-foreground mb-1">Working Hours</p>
                <p className="text-sm text-foreground">{helper.workingHours}</p>
              </div>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <button className="px-6 py-3 bg-primary text-primary-foreground rounded-lg hover:opacity-90 transition font-semibold">
            Send Message
          </button>
          <button
            onClick={() => setShowBookingForm(!showBookingForm)}
            className="px-6 py-3 border border-primary text-primary rounded-lg hover:bg-primary/5 transition font-semibold"
          >
            Request Booking
          </button>
        </div>

        {showBookingForm && (
          <div className="bg-card border border-border rounded-lg p-8 mt-8">
            <h2 className="text-2xl font-bold text-foreground mb-6">Request Booking</h2>
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-foreground mb-2">Number of Helpers</label>
                <input
                  type="number"
                  min="1"
                  value={bookingData.numberOfHelpers}
                  onChange={(e) => setBookingData({ ...bookingData, numberOfHelpers: Number.parseInt(e.target.value) })}
                  className="w-full px-4 py-2 border border-border rounded-lg bg-background text-foreground"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-foreground mb-2">Service Type</label>
                <select
                  value={bookingData.serviceType}
                  onChange={(e) => setBookingData({ ...bookingData, serviceType: e.target.value })}
                  className="w-full px-4 py-2 border border-border rounded-lg bg-background text-foreground"
                >
                  <option value="on-demand">On-demand</option>
                  <option value="live-in">Live-in</option>
                </select>
              </div>
              <div>
                <label className="block text-sm font-medium text-foreground mb-2">Start Date</label>
                <input
                  type="date"
                  value={bookingData.startDate}
                  onChange={(e) => setBookingData({ ...bookingData, startDate: e.target.value })}
                  className="w-full px-4 py-2 border border-border rounded-lg bg-background text-foreground"
                />
              </div>
              <div className="flex gap-4 pt-4">
                <button
                  onClick={handleBooking}
                  className="flex-1 px-6 py-2 bg-primary text-primary-foreground rounded-lg hover:opacity-90 transition font-semibold"
                >
                  Confirm Booking
                </button>
                <button
                  onClick={() => setShowBookingForm(false)}
                  className="flex-1 px-6 py-2 border border-border text-foreground rounded-lg hover:bg-muted transition font-semibold"
                >
                  Cancel
                </button>
              </div>
            </div>
          </div>
        )}
      </main>
    </div>
  )
}
