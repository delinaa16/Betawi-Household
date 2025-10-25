"use client"
import Link from "next/link"
import { useState } from "react"
import { Star, MapPin, Briefcase, Clock, Phone, FileText } from "lucide-react"
import { PageHeader } from "@/components/page-header"

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
    image: "👩‍🍳",
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
    image: "👨‍🍳",
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
    image: "🧹",
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
    image: "👩‍🏫",
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

export default function Helpers() {
  const [filters, setFilters] = useState({
    role: "all",
    availability: "all",
  })

  const filteredHelpers = HELPERS_DATA.filter((helper) => {
    if (filters.role !== "all" && helper.role !== filters.role) return false
    if (filters.availability !== "all" && helper.availability !== filters.availability) return false
    return true
  })

  return (
    <div className="min-h-screen bg-background">
      <PageHeader
        title="Browse Verified Helpers"
        subtitle="Find the perfect helper for your household needs"
        backHref="/"
      />

      <main className="max-w-7xl mx-auto px-4 py-12">
        <div className="bg-gradient-to-r from-secondary/15 via-primary/5 to-secondary/10 border border-secondary/30 rounded-xl p-6 mb-8 shadow-sm">
          <h3 className="font-semibold text-foreground mb-4 text-lg">Filter Helpers</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-foreground mb-2">Role</label>
              <select
                value={filters.role}
                onChange={(e) => setFilters({ ...filters, role: e.target.value })}
                className="w-full px-4 py-2 border border-secondary/30 rounded-lg bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-secondary"
              >
                <option value="all">All Roles</option>
                <option value="Nanny">Nanny</option>
                <option value="Cook">Cook</option>
                <option value="Cleaner">Cleaner</option>
              </select>
            </div>
            <div>
              <label className="block text-sm font-medium text-foreground mb-2">Availability</label>
              <select
                value={filters.availability}
                onChange={(e) => setFilters({ ...filters, availability: e.target.value })}
                className="w-full px-4 py-2 border border-secondary/30 rounded-lg bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-secondary"
              >
                <option value="all">All Types</option>
                <option value="Live-in">Live-in</option>
                <option value="On-demand">On-demand</option>
              </select>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredHelpers.map((helper) => (
            <Link key={helper.id} href={`/helpers/${helper.id}`}>
              <div className="bg-card border border-border rounded-xl overflow-hidden hover:shadow-xl hover:border-secondary/40 transition cursor-pointer h-full flex flex-col group">
                <div className="bg-gradient-to-r from-primary/10 via-secondary/15 to-primary/5 p-6 flex items-start justify-between relative overflow-hidden">
                  <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition bg-gradient-to-r from-secondary/10 to-transparent" />
                  <div className="text-5xl relative z-10">{helper.image}</div>
                  {helper.verified && (
                    <span className="px-3 py-1 bg-secondary text-foreground text-xs font-semibold rounded-full flex items-center gap-1 relative z-10 shadow-md">
                      <Star size={12} fill="currentColor" /> Verified
                    </span>
                  )}
                </div>

                <div className="p-6 flex-1 flex flex-col">
                  <h3 className="text-xl font-bold text-foreground mb-1">{helper.name}</h3>
                  <p className="text-sm text-primary font-semibold mb-4">{helper.role}</p>

                  <div className="space-y-3 mb-6 flex-1">
                    <div className="flex items-center gap-2 text-sm text-foreground">
                      <Briefcase size={16} className="text-primary" />
                      <span>{helper.experience} experience</span>
                    </div>
                    <div className="flex items-center gap-2 text-sm text-foreground">
                      <Clock size={16} className="text-primary" />
                      <span>{helper.availability}</span>
                    </div>
                    <div className="flex items-center gap-2 text-sm text-foreground">
                      <MapPin size={16} className="text-primary" />
                      <span>Age {helper.age}</span>
                    </div>
                    <div className="flex items-center gap-2 text-sm text-foreground">
                      <Phone size={16} className="text-primary" />
                      <span className="truncate">{helper.phone}</span>
                    </div>
                    <div className="flex items-center gap-2 text-sm text-foreground">
                      <FileText size={16} className="text-primary" />
                      <span className="truncate">{helper.nationalId}</span>
                    </div>
                  </div>

                  <div className="mb-6">
                    <p className="text-xs font-semibold text-muted-foreground mb-2">Skills</p>
                    <div className="flex flex-wrap gap-2">
                      {helper.skills.map((skill) => (
                        <span
                          key={skill}
                          className="px-3 py-1 bg-secondary/25 text-foreground text-xs rounded-full font-medium border border-secondary/40"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="flex items-center justify-between pt-4 border-t border-border">
                    <div className="flex items-center gap-1">
                      <span className="text-lg font-bold text-foreground">{helper.rating}</span>
                      <Star size={16} className="text-yellow-500" fill="currentColor" />
                    </div>
                    <button className="px-4 py-2 bg-secondary text-foreground rounded-lg hover:opacity-90 transition text-sm font-semibold shadow-md hover:shadow-lg">
                      View Profile
                    </button>
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </main>
    </div>
  )
}
