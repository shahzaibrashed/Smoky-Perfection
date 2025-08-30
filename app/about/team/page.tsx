import { Badge } from "@/components/ui/badge"
import { Card, CardContent } from "@/components/ui/card"
import { Award, Clock, Users } from "lucide-react"
import Navigation from "@/components/navigation"

export default function TeamPage() {
  const teamMembers = [
    {
      name: "Joe Thompson",
      role: "Founder & Original Pitmaster",
      bio: "Joe started Smoky Perfection in 1985 with nothing but a dream and a small offset smoker. His passion for authentic BBQ and commitment to quality laid the foundation for everything we do today. At 78, he still comes in every morning to check on the smokers and share stories with customers.",
      specialties: ["Original Dry Rub Recipe", "Brisket Smoking", "Customer Relations"],
      image: "elderly man BBQ pitmaster founder with apron",
    },
    {
      name: "Mary Thompson",
      role: "Co-Founder & Kitchen Manager",
      bio: "Mary has been the heart of our kitchen operations since day one. Her homemade sides and desserts have become legendary, and her warm hospitality makes every customer feel like family. She's the secret behind our famous mac and cheese and peach cobbler.",
      specialties: ["Side Dishes", "Desserts", "Kitchen Operations"],
      image: "elderly woman restaurant kitchen manager smiling",
    },
    {
      name: "Michael Thompson",
      role: "General Manager & Pitmaster",
      bio: "Michael joined the family business in 2001, bringing modern business practices while preserving the traditional methods that make our BBQ special. He's responsible for our expansion and catering services, and he's a master at smoking ribs.",
      specialties: ["Business Operations", "Rib Smoking", "Catering Services"],
      image: "middle aged man BBQ restaurant manager",
    },
    {
      name: "Sarah Thompson",
      role: "Head Pitmaster & Innovation Chef",
      bio: "The newest generation of Thompsons, Sarah became head pitmaster in 2018. She brings fresh ideas and modern techniques while honoring family traditions. Her innovative sides and creative menu additions have earned rave reviews from customers and critics alike.",
      specialties: ["Menu Innovation", "Smoking Techniques", "Staff Training"],
      image: "young woman chef BBQ pitmaster with hat",
    },
    {
      name: "Carlos Rodriguez",
      role: "Assistant Pitmaster",
      bio: "Carlos has been with the Thompson family for over 15 years. He started as a prep cook and worked his way up to assistant pitmaster. His dedication to the craft and attention to detail make him an invaluable part of our team.",
      specialties: ["Pulled Pork", "Sausage Making", "Quality Control"],
      image: "hispanic man BBQ cook assistant pitmaster",
    },
    {
      name: "Lisa Chen",
      role: "Front of House Manager",
      bio: "Lisa joined our team five years ago and has transformed our customer service experience. Her friendly demeanor and organizational skills ensure that every guest has a memorable dining experience from the moment they walk in.",
      specialties: ["Customer Service", "Staff Coordination", "Event Planning"],
      image: "asian woman restaurant manager professional",
    },
  ]

  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      {/* Hero Section */}
      <section className="pt-20 pb-12 bg-muted/30">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <Badge variant="secondary" className="mb-4 bg-primary/20 text-primary border-primary/30">
            Our People
          </Badge>
          <h1 className="text-4xl md:text-6xl font-bold mb-6 text-balance">Meet Our Team</h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto text-pretty">
            The passionate individuals who make Smoky Perfection more than just a restaurant – we're a family dedicated
            to serving you the finest BBQ experience.
          </p>
        </div>
      </section>

      {/* Team Members */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12">
            {teamMembers.map((member, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow">
                <CardContent className="p-8">
                  <div className="flex flex-col md:flex-row gap-6">
                    <div
                      className="w-32 h-32 bg-cover bg-center rounded-lg flex-shrink-0 mx-auto md:mx-0"
                      style={{
                        backgroundImage: `url('/abstract-geometric-shapes.png')`,
                      }}
                    />
                    <div className="flex-1 text-center md:text-left">
                      <h3 className="text-2xl font-bold mb-2">{member.name}</h3>
                      <p className="text-primary font-semibold mb-4">{member.role}</p>
                      <p className="text-muted-foreground leading-relaxed mb-4">{member.bio}</p>
                      <div>
                        <h4 className="font-semibold mb-2">Specialties:</h4>
                        <div className="flex flex-wrap gap-2 justify-center md:justify-start">
                          {member.specialties.map((specialty, idx) => (
                            <Badge key={idx} variant="outline" className="text-xs">
                              {specialty}
                            </Badge>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Team Values */}
      <section className="py-20 bg-muted/30">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">What Drives Us</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              The shared values that unite our team and guide our daily work
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <Card className="text-center p-8">
              <CardContent className="pt-6">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Award className="w-8 h-8 text-primary" />
                </div>
                <h3 className="text-2xl font-bold mb-4">Excellence</h3>
                <p className="text-muted-foreground leading-relaxed">
                  We never settle for good enough. Every dish, every interaction, every detail matters.
                </p>
              </CardContent>
            </Card>

            <Card className="text-center p-8">
              <CardContent className="pt-6">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Users className="w-8 h-8 text-primary" />
                </div>
                <h3 className="text-2xl font-bold mb-4">Teamwork</h3>
                <p className="text-muted-foreground leading-relaxed">
                  We support each other and work together to create amazing experiences for our guests.
                </p>
              </CardContent>
            </Card>

            <Card className="text-center p-8">
              <CardContent className="pt-6">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Clock className="w-8 h-8 text-primary" />
                </div>
                <h3 className="text-2xl font-bold mb-4">Dedication</h3>
                <p className="text-muted-foreground leading-relaxed">
                  We're committed to our craft, our customers, and the traditions that make us special.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </div>
  )
}
