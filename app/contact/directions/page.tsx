import { Badge } from "@/components/ui/badge"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { MapPin, Car, Bus, Plane, Clock, Phone } from "lucide-react"
import Navigation from "@/components/navigation"

export default function DirectionsPage() {
  const transportOptions = [
    {
      icon: <Car className="w-8 h-8" />,
      title: "By Car",
      directions: [
        {
          from: "Downtown Smoketown",
          route: "Take Highway 35 North for 5 miles, exit at BBQ Lane. Turn right and we're 0.2 miles on the right.",
          time: "12 minutes",
        },
        {
          from: "Smoketown Airport",
          route: "Take Airport Boulevard west to Highway 35, then north for 3 miles. Exit at BBQ Lane and turn right.",
          time: "15 minutes",
        },
        {
          from: "North Side",
          route: "Take Highway 35 South, exit at BBQ Lane. Turn left and we're 0.2 miles on the right.",
          time: "8 minutes",
        },
      ],
    },
    {
      icon: <Bus className="w-8 h-8" />,
      title: "By Public Transit",
      directions: [
        {
          from: "Metro Bus Route 42",
          route: "Take Route 42 to the BBQ Lane stop. Walk 2 blocks east on BBQ Lane.",
          time: "25 minutes + 5 min walk",
        },
        {
          from: "Metro Rail",
          route: "Take the Green Line to Smoketown Station, then Bus Route 42 to BBQ Lane stop.",
          time: "35 minutes + 5 min walk",
        },
      ],
    },
    {
      icon: <Plane className="w-8 h-8" />,
      title: "From Airport",
      directions: [
        {
          from: "Smoketown International",
          route: "Taxi/Rideshare: 15 minutes via Airport Boulevard and Highway 35. Rental car available.",
          time: "15 minutes",
        },
        {
          from: "Airport Shuttle",
          route: "Airport Express stops at Downtown Terminal, then take Bus Route 42 to BBQ Lane.",
          time: "45 minutes",
        },
      ],
    },
  ]

  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      {/* Hero Section */}
      <section className="pt-20 pb-12 bg-muted/30">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <Badge variant="secondary" className="mb-4 bg-primary/20 text-primary border-primary/30">
            Find Your Way
          </Badge>
          <h1 className="text-4xl md:text-6xl font-bold mb-6 text-balance">Directions</h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto text-pretty">
            Getting to Smoky Perfection is easy from anywhere in Smoketown. Here are the best routes to reach us.
          </p>
        </div>
      </section>

      {/* Quick Info */}
      <section className="py-12 bg-primary text-primary-foreground">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-8 text-center">
            <div className="flex items-center justify-center gap-3">
              <MapPin className="w-6 h-6" />
              <div>
                <p className="font-semibold">123 BBQ Lane</p>
                <p className="opacity-90">Smoketown, TX 75001</p>
              </div>
            </div>
            <div className="flex items-center justify-center gap-3">
              <Phone className="w-6 h-6" />
              <div>
                <p className="font-semibold">(555) 123-RIBS</p>
                <p className="opacity-90">Call for directions</p>
              </div>
            </div>
            <div className="flex items-center justify-center gap-3">
              <Clock className="w-6 h-6" />
              <div>
                <p className="font-semibold">Open Daily</p>
                <p className="opacity-90">11 AM - 9 PM</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Directions by Transport */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">How to Get Here</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Choose your preferred method of transportation
            </p>
          </div>

          <div className="space-y-12">
            {transportOptions.map((transport, index) => (
              <Card key={index} className="overflow-hidden">
                <CardContent className="p-8">
                  <div className="flex items-center gap-4 mb-6">
                    <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center text-primary">
                      {transport.icon}
                    </div>
                    <h3 className="text-2xl font-bold">{transport.title}</h3>
                  </div>

                  <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {transport.directions.map((direction, idx) => (
                      <div key={idx} className="border-l-4 border-primary/20 pl-4">
                        <h4 className="font-semibold text-lg mb-2">{direction.from}</h4>
                        <p className="text-muted-foreground mb-2">{direction.route}</p>
                        <div className="flex items-center gap-2 text-sm text-primary">
                          <Clock className="w-4 h-4" />
                          <span>{direction.time}</span>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Parking Information */}
      <section className="py-20 bg-muted/30">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Parking Information</h2>
            <p className="text-xl text-muted-foreground">Convenient and free parking options available</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card>
              <CardContent className="p-6 text-center">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Car className="w-8 h-8 text-primary" />
                </div>
                <h3 className="text-xl font-bold mb-2">Restaurant Lot</h3>
                <p className="text-muted-foreground">
                  Free parking behind the restaurant with 50+ spaces. Well-lit and secure.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6 text-center">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <MapPin className="w-8 h-8 text-primary" />
                </div>
                <h3 className="text-xl font-bold mb-2">Street Parking</h3>
                <p className="text-muted-foreground">
                  Additional free parking available on BBQ Lane and adjacent streets.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6 text-center">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Clock className="w-8 h-8 text-primary" />
                </div>
                <h3 className="text-xl font-bold mb-2">No Time Limits</h3>
                <p className="text-muted-foreground">
                  Take your time and enjoy your meal - no parking meters or time restrictions.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Map and Contact */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold mb-6">Still Need Help?</h2>
              <p className="text-lg text-muted-foreground mb-6">
                If you're having trouble finding us or need specific directions from your location, don't hesitate to
                call us. Our friendly staff will be happy to help guide you to the best BBQ in town!
              </p>

              <div className="space-y-4">
                <Button size="lg" className="w-full sm:w-auto">
                  <Phone className="w-5 h-5 mr-2" />
                  Call for Directions
                </Button>
                <Button size="lg" variant="outline" className="w-full sm:w-auto bg-transparent">
                  <MapPin className="w-5 h-5 mr-2" />
                  Open in Maps App
                </Button>
              </div>
            </div>

            <div className="relative">
              <div
                className="h-96 bg-cover bg-center rounded-lg shadow-lg"
                style={{
                  backgroundImage: "url('/bbq-restaurant-exterior-with-parking-lot.png')",
                }}
              >
                <div className="absolute inset-0 bg-black/20 rounded-lg" />
                <div className="absolute bottom-4 left-4 bg-white/90 backdrop-blur-sm rounded-lg p-4">
                  <div className="flex items-center gap-2">
                    <MapPin className="w-5 h-5 text-primary" />
                    <div>
                      <p className="font-semibold">Smoky Perfection</p>
                      <p className="text-sm text-muted-foreground">Look for the big smoker!</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
