import { Badge } from "@/components/ui/badge"
import { Card, CardContent } from "@/components/ui/card"
import { Award, Users, Clock, Heart } from "lucide-react"
import Navigation from "@/components/navigation"
import Footer from "@/components/footer"

export default function AboutPage() {
  const milestones = [
    {
      year: "1985",
      title: "The Beginning",
      description: "Joe and Mary Thompson opened their first BBQ joint with just a small smoker and big dreams.",
    },
    {
      year: "1992",
      title: "First Award",
      description: "Won our first state championship for Best Brisket at the Texas BBQ Cook-off.",
    },
    {
      year: "2001",
      title: "Second Generation",
      description: "Son Michael Thompson joined the business, bringing fresh ideas while honoring tradition.",
    },
    {
      year: "2010",
      title: "Expansion",
      description: "Opened our second location and launched catering services for the community.",
    },
    {
      year: "2018",
      title: "Third Generation",
      description: "Granddaughter Sarah Thompson became head pitmaster, continuing the family legacy.",
    },
    {
      year: "2024",
      title: "Today",
      description: "Still family-owned, still smoking the best BBQ in Texas with the same passion as day one.",
    },
  ]

  const values = [
    {
      icon: <Clock className="w-8 h-8" />,
      title: "Time-Honored Tradition",
      description: "We believe great BBQ can't be rushed. Every cut of meat gets the time it deserves in our smokers.",
    },
    {
      icon: <Heart className="w-8 h-8" />,
      title: "Family Values",
      description: "Three generations of the Thompson family have poured their hearts into every meal we serve.",
    },
    {
      icon: <Award className="w-8 h-8" />,
      title: "Quality First",
      description: "We source only the finest cuts and never compromise on ingredients or preparation methods.",
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: "Community Focus",
      description: "We're proud to be part of this community, supporting local events and bringing people together.",
    },
  ]

  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      {/* Hero Section */}
  <section className="relative py-44 overflow-hidden">
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
            Our <span className="text-primary">Story</span>
          </h1>

          <p className="text-xl md:text-2xl max-w-3xl mx-auto leading-relaxed text-gray-200 animate-fade-in-delay">
             For nearly four decades, the Thompson family has been serving up <span className="text-primary font-semibold">authentic Texas BBQ</span> with a commitment to
       
            <span className="text-accent font-semibold"> quality, tradition,</span> and community that runs as deep as our smoke rings.
          </p>


          <div className="mt-10 flex justify-center">
            <div className="h-1 w-40 bg-gradient-to-r from-primary to-accent rounded-full shadow-lg animate-scale-in"></div>
          </div>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="animate-slide-in-left">
              <h2 className="text-3xl md:text-4xl font-bold mb-6">It Started with a Dream</h2>
              <div className="space-y-6 text-lg leading-relaxed text-muted-foreground">
                <p>
                  Back in 1985, Joe and Mary Thompson had a simple dream: to serve the kind of BBQ that brings families
                  together and creates lasting memories. Armed with nothing but a small offset smoker, a secret dry rub
                  recipe, and an unwavering commitment to quality, they opened the doors to what would become a local
                  institution.
                </p>
                <p>
                  What started as a small roadside stand has grown into a beloved restaurant, but our core values remain
                  unchanged. We still smoke our meats low and slow, still use the same family recipes, and still treat
                  every customer like family.
                </p>
                <p>
                  Today, three generations of Thompsons work side by side, each bringing their own expertise while
                  honoring the traditions that made us who we are. From Joe's original dry rub to Sarah's innovative
                  sides, every dish tells the story of our family's passion for authentic BBQ.
                </p>
              </div>
            </div>
            <div className="relative animate-slide-in-right">
              <div
                className="h-96 bg-cover bg-center rounded-lg shadow-2xl hover:scale-105 transition-transform duration-500"
                style={{
                  backgroundImage: "url('/vintage-bbq-restaurant-family-photo.png')",
                }}
              />
            </div>
          </div>
        </div>
      </section>

      {/* Timeline Section */}
      <section className="py-20 bg-gradient-to-br from-card/50 to-muted/30">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 animate-slide-up">Our Journey</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto animate-fade-in-delay">
              Nearly four decades of serving authentic BBQ and building lasting relationships
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {milestones.map((milestone, index) => (
              <Card
                key={index}
                className="hover:shadow-2xl hover:shadow-accent/20 transition-all duration-500 border border-accent/20 bg-gradient-to-br from-card to-card/80 hover:-translate-y-3 animate-fade-in-stagger"
              >
                <CardContent className="p-6">
                  <div className="text-2xl font-bold text-primary mb-2">{milestone.year}</div>
                  <h3 className="text-xl font-bold mb-3">{milestone.title}</h3>
                  <p className="text-muted-foreground leading-relaxed">{milestone.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 animate-slide-up">What We Stand For</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto animate-fade-in-delay">
              The principles that guide everything we do, from sourcing ingredients to serving customers
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {values.map((value, index) => (
              <Card
                key={index}
                className="text-center p-8 hover:shadow-2xl hover:shadow-accent/20 transition-all duration-500 border border-accent/20 bg-gradient-to-br from-card to-card/80 hover:-translate-y-3 animate-fade-in-stagger"
              >
                <CardContent className="pt-6">
                  <div className="w-16 h-16 bg-accent/20 rounded-full flex items-center justify-center mx-auto mb-6 text-accent animate-bounce-slow">
                    {value.icon}
                  </div>
                  <h3 className="text-2xl font-bold mb-4">{value.title}</h3>
                  <p className="text-muted-foreground leading-relaxed">{value.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20 bg-gradient-to-br from-card/50 to-muted/30">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 animate-slide-up">Meet the Thompson Family</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto animate-fade-in-delay">
              Three generations of pitmasters dedicated to serving you the finest BBQ
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <Card className="text-center hover:shadow-2xl hover:shadow-accent/20 transition-all duration-500 border border-accent/20 bg-gradient-to-br from-card to-card/80 hover:-translate-y-3 animate-fade-in-stagger">
              <CardContent className="p-8">
                <div
                  className="w-32 h-32 bg-cover bg-center rounded-full mx-auto mb-6 shadow-lg hover:scale-110 transition-transform duration-300"
                  style={{
                    backgroundImage: "url('/elderly-man-bbq-pitmaster-founder.png')",
                  }}
                />
                <h3 className="text-2xl font-bold mb-2">Joe Thompson</h3>
                <p className="text-primary font-semibold mb-4">Founder & Original Pitmaster</p>
                <p className="text-muted-foreground leading-relaxed">
                  The man who started it all. Joe's passion for BBQ and commitment to quality laid the foundation for
                  everything we do today.
                </p>
              </CardContent>
            </Card>

            <Card className="text-center hover:shadow-2xl hover:shadow-accent/20 transition-all duration-500 border border-accent/20 bg-gradient-to-br from-card to-card/80 hover:-translate-y-3 animate-fade-in-stagger">
              <CardContent className="p-8">
                <div
                  className="w-32 h-32 bg-cover bg-center rounded-full mx-auto mb-6 shadow-lg hover:scale-110 transition-transform duration-300"
                  style={{
                    backgroundImage: "url('/middle-aged-man-bbq-restaurant-manager.png')",
                  }}
                />
                <h3 className="text-2xl font-bold mb-2">Michael Thompson</h3>
                <p className="text-primary font-semibold mb-4">General Manager & Pitmaster</p>
                <p className="text-muted-foreground leading-relaxed">
                  Michael brought modern business practices while preserving the traditional methods that make our BBQ
                  special.
                </p>
              </CardContent>
            </Card>

            <Card className="text-center hover:shadow-2xl hover:shadow-accent/20 transition-all duration-500 border border-accent/20 bg-gradient-to-br from-card to-card/80 hover:-translate-y-3 animate-fade-in-stagger">
              <CardContent className="p-8">
                <div
                  className="w-32 h-32 bg-cover bg-center rounded-full mx-auto mb-6 shadow-lg hover:scale-110 transition-transform duration-300"
                  style={{
                    backgroundImage: "url('/young-woman-chef-bbq-pitmaster.png')",
                  }}
                />
                <h3 className="text-2xl font-bold mb-2">Sarah Thompson</h3>
                <p className="text-primary font-semibold mb-4">Head Pitmaster & Innovation Chef</p>
                <p className="text-muted-foreground leading-relaxed">
                  The newest generation brings fresh ideas and techniques while honoring the family traditions that
                  define us.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

     

      {/* Footer */}
      <Footer />
    </div>
  )
}
