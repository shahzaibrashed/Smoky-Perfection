import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { MapPin, Phone, Clock, Mail, Facebook, Instagram, Twitter } from "lucide-react"
import Navigation from "@/components/navigation"
import Footer from "@/components/footer"

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      <section className="relative py-20 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img
            src="/cozy-bbq-restaurant-interior-with-warm-lighting--w.png"
            alt="Delicious BBQ background"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/50 to-black/70"></div>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-6 text-center text-white">

          <h1 className="text-5xl md:text-7xl font-extrabold mb-6 leading-tight tracking-tight animate-slide-up">
            Contact <span className="text-primary">Us</span>
          </h1>

          <p className="text-xl md:text-2xl max-w-3xl mx-auto leading-relaxed text-gray-200 animate-fade-in-delay">
            Have a question, planning an event, or just craving some <span className="text-primary font-semibold">authentic Texas BBQ?</span>
            We’d love to hear from you! The Thompson family believes in building lasting connections through
            <span className="text-accent font-semibold">good food, warm hospitality,</span> and a community spirit that’s as strong as our smoke.
            Reach out today — we’re here to help make your experience unforgettable.
          </p>



          <div className="mt-10 flex justify-center">
            <div className="h-1 w-40 bg-gradient-to-r from-primary to-accent rounded-full shadow-lg animate-scale-in"></div>
          </div>
        </div>
      </section>

      {/* Contact Information & Form */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Information */}
            <div className="space-y-8">
              <div>
                <h2 className="text-3xl font-bold mb-6">Visit Our Restaurant</h2>
                <div className="space-y-6">
                  <Card>
                    <CardContent className="p-3">
                      <div className="flex items-start gap-4">
                        <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0">
                          <MapPin className="w-6 h-6 text-primary" />
                        </div>
                        <div>
                          <h3 className="font-semibold text-lg mb-2">Address</h3>
                          <p className="text-muted-foreground">
                            123 BBQ Lane
                            <br />
                            Smoketown, TX 75001
                            <br />
                            United States
                          </p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>

                  <Card>
                    <CardContent className="p-3">
                      <div className="flex items-start gap-4">
                        <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0">
                          <Phone className="w-6 h-6 text-primary" />
                        </div>
                        <div>
                          <h3 className="font-semibold text-lg mb-2">Phone</h3>
                          <p className="text-muted-foreground">
                            Restaurant: (555) 123-RIBS
                            <br />
                            Catering: (555) 123-CATER
                          </p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>

                  <Card>
                    <CardContent className="p-3">
                      <div className="flex items-start gap-4">
                        <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0">
                          <Mail className="w-6 h-6 text-primary" />
                        </div>
                        <div>
                          <h3 className="font-semibold text-lg mb-2">Email</h3>
                          <p className="text-muted-foreground">
                            General: info@smokyperfection.com
                            <br />
                            Catering: catering@smokyperfection.com
                          </p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>


                </div>
              </div>

            </div>

            {/* Contact Form */}
            <div>
              <Card>
                <CardHeader>
                  <CardTitle className="text-2xl">Send Us a Message</CardTitle>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="firstName">First Name</Label>
                      <Input id="firstName" placeholder="Your first name" />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="lastName">Last Name</Label>
                      <Input id="lastName" placeholder="Your last name" />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="email">Email</Label>
                    <Input id="email" type="email" placeholder="your.email@example.com" />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="phone">Phone (Optional)</Label>
                    <Input id="phone" type="tel" placeholder="(555) 123-4567" />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="subject">Subject</Label>
                    <Input id="subject" placeholder="What's this about?" />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="message">Message</Label>
                    <Textarea id="message" placeholder="Tell us how we can help you..." className="min-h-32" />
                  </div>

                  <Button className="w-full" size="lg">
                    Send Message
                  </Button>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="py-20 bg-muted/30">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Find Us</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Located in the heart of Smoketown, we're easy to find and worth the trip
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-2xl font-bold mb-6">Directions</h3>
              <div className="space-y-4 text-muted-foreground">
                <div>
                  <h4 className="font-semibold text-foreground mb-2">From Downtown:</h4>
                  <p>
                    Take Highway 35 North for 5 miles, exit at BBQ Lane. We're on the right side, look for the big
                    smoker out front!
                  </p>
                </div>
                <div>
                  <h4 className="font-semibold text-foreground mb-2">From the Airport:</h4>
                  <p>
                    Take Airport Boulevard west to Highway 35, then north for 3 miles. Exit at BBQ Lane and turn right.
                  </p>
                </div>
                <div>
                  <h4 className="font-semibold text-foreground mb-2">Parking:</h4>
                  <p>Free parking available in our lot behind the restaurant. Additional street parking on BBQ Lane.</p>
                </div>
              </div>

              <div className="mt-8">
                <Button size="lg" className="py-6">Get Directions</Button>
              </div>
            </div>

            <div className="relative">
              <div
                className="h-96 bg-cover bg-center rounded-lg shadow-lg"
                style={{
                  backgroundImage: "url('/loc.jpeg')",
                }}
              >
                <div className="absolute inset-0 bg-black/20 rounded-lg" />
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="bg-white/90 backdrop-blur-sm rounded-lg p-4 text-center">
                    <MapPin className="w-8 h-8 text-primary mx-auto mb-2" />
                    <p className="font-semibold">Smoky Perfection</p>
                    <p className="text-sm text-muted-foreground">123 BBQ Lane</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20">
        <div className="max-w-5xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Frequently Asked Questions</h2>
            <p className="text-xl text-muted-foreground">Quick answers to common questions</p>
          </div>

          {/* grid layout for 2 per row */}
          <div className="grid md:grid-cols-2 md:gap-10 gap-5">
            <Card>
              <CardContent className="p-5">
                <h3 className="font-bold text-lg mb-2">Do you take reservations?</h3>
                <p className="text-muted-foreground">
                  Yes! We accept reservations for parties of 6 or more. For smaller groups, we operate on a first-come,
                  first-served basis.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-5">
                <h3 className="font-bold text-lg mb-2">Do you offer catering services?</h3>
                <p className="text-muted-foreground">
                  We cater events of all sizes, from office lunches to wedding receptions. Contact us at (555) 123-CATER
                  for details.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-5">
                <h3 className="font-bold text-lg mb-2">What payment methods do you accept?</h3>
                <p className="text-muted-foreground">
                  We accept cash, all major credit cards, and mobile payments including Apple Pay and Google Pay.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-5">
                <h3 className="font-bold text-lg mb-2">Do you have vegetarian options?</h3>
                <p className="text-muted-foreground">
                  While we specialize in BBQ, we offer several vegetarian sides including mac and cheese, coleslaw,
                  baked beans, and cornbread.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  )
}
