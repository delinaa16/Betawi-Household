"use client"
import { useState } from "react"
import { Send, Phone, Info } from "lucide-react"
import { PageHeader } from "@/components/page-header"

const CONVERSATIONS = [
  {
    id: 1,
    adminName: "Admin Support Team",
    department: "Customer Support",
    lastMessage: "Your booking has been confirmed for Monday",
    timestamp: "2 hours ago",
    unread: true,
    image: "👨‍💼",
  },
  {
    id: 2,
    adminName: "Admin - Verification",
    department: "Account Verification",
    lastMessage: "Your documents have been verified successfully",
    timestamp: "1 day ago",
    unread: false,
    image: "✓",
  },
  {
    id: 3,
    adminName: "Admin - Billing",
    department: "Billing & Payments",
    lastMessage: "Invoice for October has been sent to your email",
    timestamp: "3 days ago",
    unread: false,
    image: "💳",
  },
]

const MESSAGES = [
  {
    id: 1,
    sender: "admin",
    text: "Hello! Thank you for joining BetaWi. How can we assist you today?",
    timestamp: "10:30 AM",
  },
  { id: 2, sender: "user", text: "Hi! I'd like to book a nanny for my household.", timestamp: "10:35 AM" },
  {
    id: 3,
    sender: "admin",
    text: "Great! We have several verified nannies available. What are your requirements?",
    timestamp: "10:40 AM",
  },
  {
    id: 4,
    sender: "user",
    text: "I need someone experienced with infants and available on weekdays.",
    timestamp: "10:45 AM",
  },
  { id: 5, sender: "admin", text: "Your booking has been confirmed for Monday", timestamp: "10:50 AM" },
]

export default function Chat() {
  const [selectedConversation, setSelectedConversation] = useState(CONVERSATIONS[0])
  const [newMessage, setNewMessage] = useState("")

  const handleSendMessage = () => {
    if (newMessage.trim()) {
      setNewMessage("")
    }
  }

  return (
    <div className="min-h-screen bg-background flex flex-col">
      <PageHeader title="Admin Support" subtitle="Chat with BetaWi admin team" backHref="/" />

      <main className="flex-1 flex max-w-7xl mx-auto w-full">
        <div className="w-full md:w-80 border-r border-border bg-card flex flex-col">
          <div className="overflow-y-auto flex-1">
            {CONVERSATIONS.map((conversation) => (
              <button
                key={conversation.id}
                onClick={() => setSelectedConversation(conversation)}
                className={`w-full p-4 border-b border-border text-left hover:bg-secondary/10 transition ${
                  selectedConversation.id === conversation.id ? "bg-secondary/20 border-l-4 border-l-primary" : ""
                }`}
              >
                <div className="flex items-start gap-3">
                  <div className="text-3xl">{conversation.image}</div>
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center justify-between mb-1">
                      <h3 className="font-semibold text-foreground">{conversation.adminName}</h3>
                      {conversation.unread && <div className="w-3 h-3 bg-secondary rounded-full shadow-md" />}
                    </div>
                    <p className="text-xs text-secondary font-medium mb-1">{conversation.department}</p>
                    <p className="text-sm text-muted-foreground truncate">{conversation.lastMessage}</p>
                    <p className="text-xs text-muted-foreground mt-1">{conversation.timestamp}</p>
                  </div>
                </div>
              </button>
            ))}
          </div>
        </div>

        {/* Chat Area */}
        <div className="flex-1 flex flex-col">
          <div className="border-b border-border bg-gradient-to-r from-card to-secondary/5 p-4 flex items-center justify-between shadow-sm">
            <div className="flex items-center gap-3">
              <div className="text-4xl">{selectedConversation.image}</div>
              <div>
                <h2 className="text-lg font-bold text-foreground">{selectedConversation.adminName}</h2>
                <p className="text-sm text-secondary font-medium">{selectedConversation.department}</p>
              </div>
            </div>
            <div className="flex gap-2">
              <button className="p-2 hover:bg-secondary/20 rounded-lg transition">
                <Phone size={20} className="text-foreground" />
              </button>
              <button className="p-2 hover:bg-secondary/20 rounded-lg transition">
                <Info size={20} className="text-foreground" />
              </button>
            </div>
          </div>

          {/* Messages */}
          <div className="flex-1 overflow-y-auto p-4 space-y-4 bg-background/50">
            {MESSAGES.map((message) => (
              <div key={message.id} className={`flex ${message.sender === "user" ? "justify-end" : "justify-start"}`}>
                <div
                  className={`max-w-xs px-4 py-3 rounded-2xl shadow-sm ${
                    message.sender === "user"
                      ? "bg-primary text-primary-foreground rounded-br-none"
                      : "bg-secondary/20 border border-secondary/40 text-foreground rounded-bl-none"
                  }`}
                >
                  <p className="text-sm">{message.text}</p>
                  <p
                    className={`text-xs mt-1 ${
                      message.sender === "user" ? "text-primary-foreground/70" : "text-muted-foreground"
                    }`}
                  >
                    {message.timestamp}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* Message Input */}
          <div className="border-t border-border bg-card p-4 shadow-sm">
            <div className="flex gap-2">
              <input
                type="text"
                value={newMessage}
                onChange={(e) => setNewMessage(e.target.value)}
                onKeyPress={(e) => e.key === "Enter" && handleSendMessage()}
                placeholder="Type a message..."
                className="flex-1 px-4 py-3 border border-border rounded-lg bg-background text-foreground placeholder-muted-foreground focus:outline-none focus:ring-2 focus:ring-secondary"
              />
              <button
                onClick={handleSendMessage}
                className="px-6 py-3 bg-secondary text-foreground rounded-lg hover:opacity-90 transition font-semibold flex items-center gap-2 shadow-md hover:shadow-lg"
              >
                <Send size={18} />
              </button>
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}
