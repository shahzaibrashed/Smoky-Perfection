import Navigation from "@/components/navigation"
import Footer from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import {
  Clock,
  MapPin,
  Phone,
  Star,
  Users,
  Flame,
  ChefHat,
  Trophy,
  Download,
  Smartphone,
  Gift,
  Zap,
} from "lucide-react"
import Link from "next/link"

export default function HomePage() {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      <section className="relative md:min-h-screen h-auto md:py-0 py-10 flex items-center justify-center overflow-hidden bg-gradient-to-br from-primary/5 via-background to-accent/5">
  {/* Background Image */}
  <div className="absolute inset-0 z-0">
    <img
      src="/mouth-watering-bbq-platter-hero.png"
      alt="Premium BBQ platter with brisket, ribs, and sides"
      className="w-full h-full object-cover"
    />
    {/* Overlay */}
    <div className="absolute inset-0 bg-black/60 backdrop-blur-[4px]"></div>
  </div>

  {/* Content */}
  <div className="relative z-10 text-center max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 animate-fade-in">
    {/* Heading */}
    <h1 className="text-4xl sm:text-5xl md:text-7xl lg:text-8xl font-bold text-white leading-tight animate-slide-up">
      <span className="text-primary">Smoky</span> Perfection
      <span className="block text-2xl sm:text-4xl md:text-6xl lg:text-7xl text-primary font-semibold mt-3 md:mt-4 animate-slide-up-delay">
        America's Favorite BBQ
      </span>
    </h1>

    {/* Description */}
    <p className="text-base sm:text-lg md:text-2xl lg:text-3xl mb-8 md:mb-12 max-w-3xl sm:max-w-4xl md:max-w-5xl mx-auto text-white leading-relaxed animate-fade-in-delay">
      Join millions of satisfied customers who choose Smoky Perfection for authentic, mouth-watering BBQ
      delivered fresh to your table or right to your door.
    </p>

    {/* Badge */}
    <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center items-center animate-slide-up-delay-2">
      <Badge className="mb-6 sm:mb-8 bg-primary hover:bg-primary/90 text-primary-foreground text-sm sm:text-base md:text-lg px-6 sm:px-8 py-3 sm:py-4 shadow-xl border-2 border-primary/20 hover:scale-105 transition-all duration-300 animate-scale-in">
        <Gift className="w-5 h-5 sm:w-6 sm:h-6 mr-2 sm:mr-3 animate-bounce" />
        Limited Time: 20% Off Family Meals
      </Badge>
    </div>

    {/* Features */}
    <div className="flex flex-wrap justify-center gap-4 sm:gap-6 md:gap-8 text-sm sm:text-lg md:text-xl animate-fade-in-delay-3">
      <div className="flex items-center gap-2 sm:gap-3 bg-card px-5 sm:px-6 md:px-8 py-3 sm:py-4 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 border border-primary/20">
        <Star className="w-5 h-5 sm:w-6 sm:h-6 md:w-7 md:h-7 text-primary fill-current" />
        <span className="font-bold">4.8/5 Stars</span>
      </div>
      <div className="flex items-center gap-2 sm:gap-3 bg-card px-5 sm:px-6 md:px-8 py-3 sm:py-4 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 border border-primary/20">
        <Users className="w-5 h-5 sm:w-6 sm:h-6 md:w-7 md:h-7 text-primary" />
        <span className="font-bold">2M+ Customers</span>
      </div>
      <div className="flex items-center gap-2 sm:gap-3 bg-card px-5 sm:px-6 md:px-8 py-3 sm:py-4 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 border border-primary/20">
        <Zap className="w-5 h-5 sm:w-6 sm:h-6 md:w-7 md:h-7 text-primary" />
        <span className="font-bold">Fast Delivery</span>
      </div>
    </div>
  </div>
     </section>

      <section className="md:py-20 py-10 bg-background">
  <div className="max-w-7xl mx-auto px-4">
    <div className="text-center mb-20">
      <h2 className="text-3xl md:text-7xl font-bold text-foreground mb-4 animate-slide-up">
        Fan Favorites
      </h2>
      <p className="md:text-2xl text-lg text-muted-foreground max-w-4xl mx-auto text-pretty leading-relaxed">
        These are the dishes that made us famous. Try them once and you'll
        understand why millions keep coming back.
      </p>
    </div>

  
    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
      {[
        {
          name: "The Original Brisket",
          image: "/bbq-brisket-sliced.png",
          price: "$18.99",
          badge: "Best Seller",
          description: "Our signature 14-hour smoked brisket",
          rating: 4.9,
          orders: "2.3k+ orders",
        },
        {
          name: "Championship Ribs",
          image: "/bbq-ribs-glazed.png",
          price: "$24.99",
          badge: "Award Winner",
          description: "Fall-off-the-bone tender perfection",
          rating: 4.8,
          orders: "1.8k+ orders",
        },
        {
          name: "Pulled Pork Deluxe",
          image: "/pulled-pork-sandwich.png",
          price: "$14.99",
          badge: "Customer Favorite",
          description: "Smoky, tender, piled high",
          rating: 4.9,
          orders: "3.1k+ orders",
        },
      ].map((item, index) => (
        <div
          key={index}
          className="group relative overflow-hidden rounded-3xl shadow-2xl hover:shadow-3xl transition-all duration-700 hover:-translate-y-6 hover:scale-105 animate-fade-in-stagger"
        >
          
          <div className="absolute inset-0 bg-gradient-to-br from-[#DC841E] via-[#e6902f] to-[#f1a851] opacity-90"></div>
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent"></div>
          <div className="absolute inset-0 backdrop-blur-sm bg-white/10 border border-white/20"></div>

         
          <div className="relative z-10 md:p-5 p-3">
           
            <div className="relative mb-8 overflow-hidden rounded-2xl shadow-xl">
              <img
                src={item.image || "/placeholder.svg"}
                alt={item.name}
                className="w-full h-64 object-cover group-hover:scale-125 transition-transform duration-1000"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent"></div>

              <div className="absolute top-4 left-4">
                <div className="bg-[#DC841E] text-white font-bold text-sm px-5 py-2 rounded-full shadow-lg backdrop-blur-sm">
                  {item.badge}
                </div>
              </div>

              <div className="absolute top-4 right-4">
                <div className="bg-white/90 text-gray-900 font-bold text-xl px-5 py-2 rounded-full shadow-lg backdrop-blur-sm">
                  {item.price}
                </div>
              </div>
            </div>

            <div className="text-center">
              <h3 className="text-3xl font-extrabold text-white mb-4 group-hover:scale-110 transition-transform duration-300">
                {item.name}
              </h3>
              <p className="text-white/90 text-lg mb-6 leading-relaxed">
                {item.description}
              </p>

              <div className="flex items-center justify-center gap-2 mb-8">
                <div className="flex">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className={`w-6 h-6 ${
                        i < Math.floor(item.rating)
                          ? "text-yellow-400 fill-current"
                          : "text-white/30"
                      }`}
                    />
                  ))}
                </div>
                <span className="text-white/90 font-medium text-lg">
                  ({item.orders})
                </span>
              </div>

              <button className="w-full bg-[#DC841E]/80 hover:bg-[#DC841E] text-white font-bold text-xl py-5 px-6 rounded-2xl backdrop-blur-sm border border-white/20 hover:border-white/40 hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-2xl">
                <span className="flex items-center justify-center gap-3">
                  Add to Cart
                  <Flame className="w-6 h-6 group-hover:animate-bounce" />
                </span>
              </button>
            </div>
          </div>

          <div className="absolute inset-0 rounded-3xl bg-gradient-to-r from-transparent via-white/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
        </div>
      ))}
    </div>
  </div>
      </section>


      <section className="md:py-20 py-10 bg-gradient-to-br from-card to-muted">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-20">
            <h2 className="text-3xl md:text-6xl font-bold text-foreground mb-8 animate-slide-up">
              Limited Time Offers
            </h2>
            <p className="md:text-2xl text-lg text-muted-foreground max-w-4xl mx-auto text-pretty leading-relaxed">
              Don't miss out on these incredible deals. Available for a limited time only!
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: "Family Feast Deal",
                description: "Feed 4 people with our signature combo",
                originalPrice: "$89.99",
                salePrice: "$69.99",
                savings: "Save $20",
                color: "primary",
              },
              {
                title: "Lunch Special",
                description: "Any sandwich + side + drink",
                originalPrice: "$24.99",
                salePrice: "$16.99",
                savings: "Save $8",
                color: "accent",
              },
              {
                title: "Weekend Warriors",
                description: "Double meat on any platter",
                originalPrice: "$34.99",
                salePrice: "$29.99",
                savings: "Save $5",
                color: "primary",
              },
            ].map((offer, index) => (
              <Card
                key={index}
                className={`group hover:shadow-2xl transition-all duration-500 border-2 shadow-xl overflow-hidden bg-gradient-to-br from-card to-background hover:-translate-y-4 animate-fade-in-stagger ${offer.color === "primary"
                    ? "border-primary hover:shadow-primary/20"
                    : "border-accent hover:shadow-accent/20"
                  }`}
              >
                <CardContent className="p-8 text-center">
                  <Badge
                    className={`mb-6 text-lg px-6 py-2 font-bold ${offer.color === "primary"
                        ? "bg-primary text-primary-foreground"
                        : "bg-accent text-accent-foreground"
                      }`}
                  >
                    {offer.savings}
                  </Badge>
                  <h3 className="text-3xl font-bold text-card-foreground mb-4">{offer.title}</h3>
                  <p className="text-xl text-muted-foreground mb-6">{offer.description}</p>
                  <div className="mb-6">
                    <span className="text-lg text-muted-foreground line-through mr-3">{offer.originalPrice}</span>
                    <span
                      className={`text-4xl font-bold ${offer.color === "primary" ? "text-primary" : "text-accent"}`}
                    >
                      {offer.salePrice}
                    </span>
                  </div>
                  <Button
                    size="lg"
                    className={`w-full text-xl py-6 font-bold hover:scale-105 transition-all duration-300 ${offer.color === "primary" ? "bg-primary hover:bg-primary/90" : "bg-accent hover:bg-accent/90"
                      }`}
                  >
                    Order Now
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="md:py-20 py-10 bg-gradient-to-br from-card/30 to-background">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-20">
            <h2 className="text-3xl md:text-6xl font-bold text-foreground mb-8 animate-slide-up">
              What Our Customers Say
            </h2>
            <p className="md:text-2xl text-lg text-muted-foreground max-w-4xl mx-auto text-pretty leading-relaxed">
              Don't just take our word for it - hear from the BBQ lovers who keep coming back for more.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-10">
            {[
              {
                name: "Sarah Johnson",
                rating: 5,
                review: "The best BBQ I've ever had! The brisket melts in your mouth and the atmosphere is perfect.",
                location: "Local Food Critic",
              },
              {
                name: "Mike Rodriguez",
                rating: 5,
                review:
                  "Family-owned excellence. Three generations of BBQ mastery in every bite. Absolutely incredible!",
                location: "BBQ Enthusiast",
              },
              {
                name: "Emily Chen",
                rating: 5,
                review: "The pulled pork sandwich is legendary. I drive 2 hours just to eat here. Worth every mile!",
                location: "Regular Customer",
              },
            ].map((testimonial, index) => (
              <Card
                key={index}
                className="group hover:shadow-2xl hover:shadow-accent/10 transition-all duration-500 border border-accent/20 shadow-xl bg-gradient-to-br from-card to-card/80 hover:-translate-y-3 animate-fade-in-stagger"
              >
                <CardContent className="p-8 text-center">
                  <div className="flex justify-center mb-6">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="w-6 h-6 text-accent fill-current animate-pulse-delay" />
                    ))}
                  </div>
                  <p className="text-lg text-card-foreground mb-6 italic leading-relaxed">"{testimonial.review}"</p>
                  <div>
                    <h4 className="font-bold text-xl text-foreground">{testimonial.name}</h4>
                    <p className="text-muted-foreground">{testimonial.location}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="md:py-20 py-10 bg-gradient-to-b from-background to-card/30">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-20">
            <h2 className="text-3xl md:text-6xl font-bold text-foreground mb-8 animate-slide-up">
              The BBQ Experience You Crave
            </h2>
            <p className="md:text-2xl text-lg text-muted-foreground max-w-4xl mx-auto text-pretty leading-relaxed">
              From our signature dry rubs to our secret sauces, every dish is a masterpiece of flavor that will leave
              you coming back for more.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-10">
            <Card className="group hover:shadow-2xl hover:shadow-accent/20 transition-all duration-500 border border-accent/20 shadow-xl bg-gradient-to-br from-card to-card/80 hover:-translate-y-3 animate-fade-in-stagger">
              <CardContent className="  text-center">
                <div className="mb-8 relative overflow-hidden rounded-xl shadow-lg">
                  <img
                    src="/perfectly-smoked-beef-brisket-slices-with-beautifu.png"
                    alt="Premium smoked brisket"
                    className="w-full h-56 object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-background/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </div>
                <div className="mb-6 flex justify-center">
                  <div className="bg-accent/20 p-4 rounded-full">
                    <ChefHat className="w-8 h-8 text-accent animate-bounce-slow" />
                  </div>
                </div>
                <h3 className="text-3xl font-bold text-card-foreground mb-6">Premium Cuts</h3>
                <p className="text-muted-foreground text-lg text-pretty leading-relaxed">
                  Hand-selected, premium cuts of meat smoked low and slow for 12-16 hours to achieve the perfect
                  tenderness and flavor.
                </p>
              </CardContent>
            </Card>

            <Card className="group hover:shadow-2xl hover:shadow-accent/20 transition-all duration-500 border border-accent/20 shadow-xl bg-gradient-to-br from-card to-card/80 hover:-translate-y-3 animate-fade-in-stagger">
              <CardContent className=" text-center">
                <div className="mb-8 relative overflow-hidden rounded-xl shadow-lg">
                  <img
                    src="/traditional-bbq-smoker-with-wood-chips-and-aromati.png"
                    alt="Traditional BBQ smoker"
                    className="w-full h-56 object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-background/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </div>
                <div className="mb-6 flex justify-center">
                  <div className="bg-accent/20 p-4 rounded-full">
                    <Flame className="w-8 h-8 text-accent animate-pulse" />
                  </div>
                </div>
                <h3 className="text-3xl font-bold text-card-foreground mb-6">Wood-Fired Tradition</h3>
                <p className="text-muted-foreground text-lg text-pretty leading-relaxed">
                  Using only authentic hardwood like hickory and oak, we maintain the traditional smoking methods passed
                  down through generations.
                </p>
              </CardContent>
            </Card>

            <Card className="group hover:shadow-2xl hover:shadow-accent/20 transition-all duration-500 border border-accent/20 shadow-xl bg-gradient-to-br from-card to-card/80 hover:-translate-y-3 animate-fade-in-stagger">
              <CardContent className=" text-center">
                <div className="mb-8 relative overflow-hidden rounded-xl shadow-lg">
                  <img
                    src="/variety-of-colorful-bbq-sauces-and-dry-rub-spices-.png"
                    alt="Signature BBQ sauces and rubs"
                    className="w-full h-56 object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-background/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </div>
                <div className="mb-6 flex justify-center">
                  <div className="bg-accent/20 p-4 rounded-full">
                    <Trophy className="w-8 h-8 text-accent animate-spin-slow" />
                  </div>
                </div>
                <h3 className="text-3xl font-bold text-card-foreground mb-6">Secret Recipes</h3>
                <p className="text-muted-foreground text-lg text-pretty leading-relaxed">
                  Our signature dry rubs and sauces are crafted from secret family recipes, creating unique flavors you
                  won't find anywhere else.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <section className="md:py-20 py-10 bg-gradient-to-b from-card/30 to-background">
        <div className="max-w-7xl mx-auto px-4">
         
          <div className="text-center mb-20">
            <h2 className="text-3xl md:text-6xl font-bold  mb-6">
              Customer Favorites
            </h2>
            <p className="md:text-xl text-lg text-slate-700 max-w-2xl mx-auto leading-relaxed">
              Discover the dishes our customers love the most, crafted with passion and perfection.
            </p>
          </div>

       
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-10">
            {[
              {
                name: "Signature Brisket",
                image: "/bbq-brisket-premium.png",
                price: "$24.99",
                description: "14-hour smoked perfection",
                popularity: "95%",
                reorderRate: "87%",
              },
              {
                name: "Fall-Off-The-Bone Ribs",
                image: "/bbq-ribs-caramelized.png",
                price: "$28.99",
                description: "Tender, juicy, unforgettable",
                popularity: "92%",
                reorderRate: "91%",
              },
              {
                name: "Pulled Pork Sandwich",
                image: "/pulled-pork-loaded.png",
                price: "$16.99",
                description: "Smoky, tender, loaded high",
                popularity: "89%",
                reorderRate: "84%",
              },
              {
                name: "BBQ Platter",
                image: "/bbq-ultimate-platter.png",
                price: "$34.99",
                description: "The ultimate BBQ experience",
                popularity: "96%",
                reorderRate: "93%",
              },
            ].map((item, index) => (
              <div
                key={index}
                className="group relative overflow-hidden rounded-3xl transition-all duration-500 hover:-translate-y-4 shadow-2xl bg-white/5 backdrop-blur-xl border border-white/10"
              >
               
                <div className="relative">
                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-full h-44 object-cover rounded-t-3xl group-hover:scale-105 transition-transform duration-700"
                  />
                  <span className="absolute top-3 right-3 bg-[#dc841e] text-white font-semibold text-sm px-4 py-1 rounded-full shadow">
                    {item.price}
                  </span>
                </div>

                
                <div className="p-6 text-center">
                  <h3 className="text-xl font-bold text-black mb-3">
                    {item.name}
                  </h3>
                  <p className="text-black text-base mb-4">{item.description}</p>

                  
                  <div className="flex items-center justify-between mb-6 p-3 bg-white/5 rounded-xl border border-white/10">
                    <div className="text-center">
                      <p className="text-lg font-bold text-[#dc841e]">{item.popularity}</p>
                      <p className="text-xs text-[#dc841e]">Satisfaction</p>
                    </div>
                    <div className="w-px h-8 bg-white/20"></div>
                    <div className="text-center">
                      <p className="text-lg font-bold text-[#dc841e]">{item.reorderRate}</p>
                      <p className="text-xs text-[#dc841e]">Reorder</p>
                    </div>
                  </div>

                  <button className="w-full bg-[#dc841e] text-white font-bold text-base py-3 px-6 rounded-2xl transition-all duration-300 hover:scale-105">
                    Order Favorite
                  </button>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-16">
            <Button
              asChild
              size="lg"
              className="bg-[#dc841e] text-white text-xl px-16 py-8 shadow-xl hover:scale-105 transition-all duration-300 font-bold rounded-2xl"
            >
              <Link href="/menu">
                <span className="mr-3">View Full Menu</span>
              </Link>
            </Button>
          </div>
        </div>
      </section>

      <section className="md:py-20 py-10 bg-gradient-to-b from-background to-card/30">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="animate-slide-up">
              <h2 className="text-3xl md:text-6xl font-bold text-foreground mb-8">Visit Our Smokehouse</h2>
              <p className="md:text-2xl text-lg text-muted-foreground mb-12 text-pretty leading-relaxed">
                Experience the warmth of our family-owned restaurant where every meal is prepared with love and served
                with genuine hospitality in our cozy, dimly-lit atmosphere.
              </p>

              <div className="space-y-8">
                <div className="flex items-center gap-6 p-6 bg-card rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 border border-accent/20">
                  <div className="bg-accent/20 p-4 rounded-full">
                    <MapPin className="w-8 h-8 text-accent animate-pulse" />
                  </div>
                  <div>
                    <h3 className="font-bold text-xl text-card-foreground mb-1">Location</h3>
                    <p className="text-muted-foreground text-lg">123 BBQ Lane, Smoketown, ST 12345</p>
                  </div>
                </div>

                <div className="flex items-center gap-6 p-6 bg-card rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 border border-accent/20">
                  <div className="bg-accent/20 p-4 rounded-full">
                    <Clock className="w-8 h-8 text-accent animate-spin-slow" />
                  </div>
                  <div>
                    <h3 className="font-bold text-xl text-card-foreground mb-1">Hours</h3>
                    <p className="text-muted-foreground text-lg">Mon-Thu: 11AM-9PM | Fri-Sun: 11AM-10PM</p>
                  </div>
                </div>

                <div className="flex items-center gap-6 p-6 bg-card rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 border border-accent/20">
                  <div className="bg-accent/20 p-4 rounded-full">
                    <Phone className="w-8 h-8 text-accent animate-bounce-slow" />
                  </div>
                  <div>
                    <h3 className="font-bold text-xl text-card-foreground mb-1">Phone</h3>
                    <p className="text-muted-foreground text-lg">(555) 123-SMOKE</p>
                  </div>
                </div>
              </div>

              <div className="mt-12 flex flex-col sm:flex-row gap-6">
                <Button
                  asChild
                  size="lg"
                  className="bg-[#dc841e] text-white text-xl px-12 py-6 shadow-xl hover:scale-110 transition-all duration-300 animate-pulse-slow"
                >
                  <Link href="/reservations">Make Reservation</Link>
                </Button>
                <Button
                  asChild
                  variant="outline"
                  size="lg"
                  className="border-2 border-[#dc841e] text-[#dc841e] text-xl px-12 py-6 shadow-lg hover:scale-110 transition-all duration-300 bg-transparent"
                >
                  <Link href="/contact">Get Directions</Link>
                </Button>
              </div>
            </div>

            <div className="relative animate-fade-in-delay">
              <img
                src="/bbq-restaurant-interior.png"
                alt="Cozy BBQ restaurant interior with warm lighting"
                className="w-full h-96 lg:h-[600px] object-cover rounded-2xl shadow-2xl hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute -bottom-8 -left-8 bg-card p-8 rounded-2xl shadow-2xl border-2 border-accent/20 animate-bounce-slow">
                <div className="flex items-center gap-4">
                  <div className="flex">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-6 h-6 text-accent fill-current animate-pulse-delay" />
                    ))}
                  </div>
                  <div>
                    <p className="font-bold text-xl text-card-foreground">4.9/5 Rating</p>
                    <p className="text-lg text-muted-foreground">2,847 Reviews</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
