"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Calendar } from "@/components/ui/calendar"
import { Card, CardContent } from "@/components/ui/card"
import Navigation from "@/components/navigation"
import Footer from "@/components/footer"

export default function ReservationForm() {
  const [date, setDate] = useState<Date | undefined>(undefined)
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    time: "",
    guests: ""
  })

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target
    setFormData(prev => ({ ...prev, [name]: value }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log({ date, ...formData })
  }

  return (
    <>
      <Navigation />
      <section className="min-h-screen bg-gradient-to-b from-amber-50 to-white py-20 text-gray-900">
        <div className="max-w-7xl mx-auto px-4">
          {/* Heading */}
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 text-gray-900">
              Reserve Your Table
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Book your table in advance and secure your spot for an unforgettable{" "}
              <span className="text-[#d97706] font-semibold">
                authentic BBQ experience
              </span>
            </p>
          </div>

          <div className="flex flex-col lg:flex-row gap-8">
            {/* Form Card */}
            <Card className="bg-amber-50 border border-amber-200 shadow-xl rounded-2xl flex-1">
              <CardContent className="p-8 space-y-6">
                <form onSubmit={handleSubmit}>
                  {/* Full Name */}
                  <div>
                    <label className="block text-sm font-semibold mb-2 text-gray-700">
                      Full Name *
                    </label>
                    <Input
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      placeholder="Enter your full name"
                      required
                      className="py-6 border border-gray-300 text-gray-900 rounded-lg focus:border-[#d97706] focus:ring-2 focus:ring-[#d97706] transition-colors"
                    />
                  </div>

                  {/* Email */}
                  <div className="mt-2">
                    <label className="block text-sm font-semibold mb-2 text-gray-700">
                      Email Address *
                    </label>
                    <Input
                      name="email"
                      type="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      placeholder="Enter your email"
                      required
                      className="py-6  border border-gray-300 text-gray-900 rounded-lg focus:border-[#d97706] focus:ring-2 focus:ring-[#d97706] transition-colors"
                    />
                  </div>

                

                  {/* Time Dropdown */}
                  <div className="mt-2">
                    <label className="block text-sm font-semibold mb-2 text-gray-700">
                      Select Time *
                    </label>
                    <select
                      name="time"
                      value={formData.time}
                      onChange={handleInputChange}
                      required
                      className="w-full py-4  border border-gray-300 text-gray-900 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-[#d97706] focus:border-[#d97706] transition-colors"
                    >
                      <option value="">Choose a time</option>
                      <option value="5pm">5:00 PM</option>
                      <option value="6pm">6:00 PM</option>
                      <option value="7pm">7:00 PM</option>
                      <option value="8pm">8:00 PM</option>
                      <option value="9pm">9:00 PM</option>
                    </select>
                  </div>

                  {/* Guests */}
                  <div className="mt-2">
                    <label className="block text-sm font-semibold mb-2 text-gray-700">
                      Number of Guests *
                    </label>
                    <select
                      name="guests"
                      value={formData.guests}
                      onChange={handleInputChange}
                      required
                      className="w-full py-4  border border-gray-300 text-gray-900 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-[#d97706] focus:border-[#d97706] transition-colors"
                    >
                      <option value="">Select guests</option>
                      <option value="1">1 Person</option>
                      <option value="2">2 People</option>
                      <option value="3">3 People</option>
                      <option value="4">4 People</option>
                      <option value="5">5 People</option>
                      <option value="6">6+ People</option>
                    </select>
                  </div>

                  {/* Special Requests */}
                  <div className="mt-2">
                    <label className="block text-sm font-semibold mb-2 text-gray-700">
                      Special Requests
                    </label>
                    <textarea
                      placeholder="Any special occasions or dietary requirements?"
                      className="w-full py-4 border border-gray-300 text-gray-900 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-[#d97706] focus:border-[#d97706] transition-colors min-h-[100px]"
                    />
                  </div>

                    {/* Date */}
                  <div className="mt-2">
                    <label className="block text-sm font-semibold mb-2 text-gray-700">
                      Select Date *
                    </label>
                    <Calendar
                      mode="single"
                      selected={date}
                      onSelect={setDate}
                      className="rounded-lg border border-gray-300 py-6  text-gray-900 shadow-sm"
                      disabled={(date) => date < new Date()}
                    />
                  </div>

                  {/* Button */}
                  <div className="text-center  mt-6">
                    <Button 
                      type="submit"
                      className="bg-[#d97706]  text-white px-8 py-6 text-lg rounded-lg shadow-md hover:bg-[#b45309] transition-all transform hover:scale-105"
                    >
                      Reserve Table
                    </Button>
                  </div>
                </form>
              </CardContent>
            </Card>

            {/* Information Panel */}
            <div className="flex-1 space-y-6">
              <Card className="bg-amber-50 border border-amber-200 shadow-md rounded-2xl">
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-4 flex items-center">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2 text-[#d97706]" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-11a1 1 0 10-2 0v3.586L7.707 9.293a1 1 0 00-1.414 1.414l3 3a1 1 0 001.414 0l3-3a1 1 0 00-1.414-1.414L11 10.586V7z" clipRule="evenodd" />
                    </svg>
                    Reservation Details
                  </h3>
                  <ul className="space-y-3 text-gray-700">
                    <li className="flex items-start">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2 text-[#d97706] mt-0.5" viewBox="0 0 20 20" fill="currentColor">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                      </svg>
                      <span>Reservations are held for 15 minutes past the reserved time</span>
                    </li>
                    <li className="flex items-start">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2 text-[#d97706] mt-0.5" viewBox="0 0 20 20" fill="currentColor">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                      </svg>
                      <span>Groups of 6 or more require 24 hours notice for cancellation</span>
                    </li>
                    <li className="flex items-start">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2 text-[#d97706] mt-0.5" viewBox="0 0 20 20" fill="currentColor">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                      </svg>
                      <span>Dress code: Smart casual</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>

              <Card className="bg-amber-50 border border-amber-200 shadow-md rounded-2xl">
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-4 flex items-center">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2 text-[#d97706]" viewBox="0 0 20 20" fill="currentColor">
                      <path d="M2 3a1 1 0 00-1 1v1a1 1 0 001 1h16a1 1 0 001-1V4a1 1 0 00-1-1H2z" />
                      <path fillRule="evenodd" d="M2 7.5h16l-.811 7.71a2 2 0 01-1.99 1.79H4.802a2 2 0 01-1.99-1.79L2 7.5zM7 11a1 1 0 011-1h4a1 1 0 110 2H8a1 1 0 01-1-1z" clipRule="evenodd" />
                    </svg>
                    Special Offers
                  </h3>
                  <p className="text-gray-700 mb-3">Make the most of your dining experience:</p>
                  <ul className="space-y-2 text-gray-700">
                    <li className="flex items-center">
                      <span className="bg-amber-100 text-amber-800 text-xs font-semibold mr-2 px-2.5 py-0.5 rounded">Offer</span>
                      Happy Hour: 5PM-7PM, 20% off on drinks
                    </li>
                    <li className="flex items-center">
                      <span className="bg-amber-100 text-amber-800 text-xs font-semibold mr-2 px-2.5 py-0.5 rounded">Offer</span>
                      Weekend BBQ platter specials
                    </li>
                  </ul>
                </CardContent>
              </Card>

              <Card className="bg-amber-50 border border-amber-200 text-gray-700  shadow-md rounded-2xl">
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold mb-3">Need assistance?</h3>
                  <p className="mb-4">Our team is happy to help you with your reservation.</p>
                  <div className="space-y-2">
                    <p className="flex items-center">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2 text-[#d97706]" viewBox="0 0 20 20" fill="currentColor">
                        <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                      </svg>
                      +1 (555) 123-4567
                    </p>
                    <p className="flex items-center">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2 text-[#d97706]" viewBox="0 0 20 20" fill="currentColor">
                        <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                        <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                      </svg>
                      reservations@bbqrestaurant.com
                    </p>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </>
  )
}