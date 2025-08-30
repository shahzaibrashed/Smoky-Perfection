import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { ShoppingCart, Clock, Truck, Phone, MapPin, Star, ChevronRight, CheckCircle } from "lucide-react"
import Navigation from "@/components/navigation"
import Footer from "@/components/footer"

export default function OrderPage() {
  const popularItems = [
    {
      name: "Pitmaster's Platter",
      description: "Brisket, ribs, pulled pork, and sausage with two sides",
      price: "$28.99",
      image: "BBQ platter with multiple meats",
      rating: 4.8,
      reviews: 142,
    },
    {
      name: "Smoked Brisket ",
      description: "Sliced brisket on brioche bun with coleslaw",
      price: "$14.99",
      image: "brisket sandwich with coleslaw",
      rating: 4.7,
      reviews: 89,
    },
    {
      name: "Baby Back Ribs",
      description: "Full rack is that with by the signature dry rub ",
      price: "$22.99",
      image: "glazed baby back ribs",
      rating: 4.9,
      reviews: 156,
    },
    {
      name: "Family Pack",
      description: "Feeds 4-6 people with variety of meats and sides",
      price: "$89.99",
      image: "large BBQ family meal spread",
      rating: 4.8,
      reviews: 78,
    },
  ]

  return (
    <div className="min-h-screen bg-gradient-to-b from-amber-50 to-white">
      <Navigation />

      {/* Hero Section */}
      <section className="pt-28 pb-16 bg-gradient-to-r from-amber-900/10 to-amber-800/10">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <Badge className="mb-4 bg-amber-600 text-white border-amber-700 px-4 py-1.5 text-base">
            Order Online
          </Badge>
          <h1 className="text-4xl md:text-6xl font-bold mb-6 text-balance text-gray-900">
            Authentic BBQ, Ready for Pickup
          </h1>
          <p className="text-xl text-gray-700 max-w-2xl mx-auto text-pretty mb-8">
            Skip the line and order your favorite BBQ online. Ready for pickup in 20-30 minutes.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-amber-600 hover:bg-amber-700 text-white px-8 py-3 text-lg">
              Start Order
            </Button>
            <Button size="lg" variant="outline" className="border-amber-600 text-amber-700 bg-transparent px-8 py-3 text-lg">
              View Menu
            </Button>
          </div>
        </div>
      </section>

      {/* Order Options */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4">
          <Tabs defaultValue="pickup" className="w-full">
            <TabsList className="grid w-full grid-cols-2 max-w-md mx-auto mb-16 bg-amber-100 p-1.5 rounded-xl">
              <TabsTrigger 
                value="pickup" 
                className="flex items-center gap-2 data-[state=active]:bg-amber-600 data-[state=active]:text-white rounded-lg py-3"
              >
                <ShoppingCart className="w-5 h-5" />
                Pickup
              </TabsTrigger>
              <TabsTrigger 
                value="catering" 
                className="flex items-center gap-2 data-[state=active]:bg-amber-600 data-[state=active]:text-white rounded-lg py-3"
              >
                <Truck className="w-5 h-5" />
                Catering
              </TabsTrigger>
            </TabsList>

            <TabsContent value="pickup" className="space-y-16">
              {/* Pickup Info */}
              <div className="grid md:grid-cols-3 gap-8 mb-16">
                <Card className="text-center p-6 border-amber-200 shadow-md hover:shadow-lg transition-shadow">
                  <CardContent className="pt-6">
                    <div className="w-16 h-16 bg-amber-100 rounded-full flex items-center justify-center mx-auto mb-4">
                      <Clock className="w-8 h-8 text-amber-700" />
                    </div>
                    <h3 className="text-xl font-bold mb-2 text-gray-900">Quick Pickup</h3>
                    <p className="text-gray-600">Ready in 20-30 minutes</p>
                  </CardContent>
                </Card>

                <Card className="text-center p-6 border-amber-200 shadow-md hover:shadow-lg transition-shadow">
                  <CardContent className="pt-6">
                    <div className="w-16 h-16 bg-amber-100 rounded-full flex items-center justify-center mx-auto mb-4">
                      <MapPin className="w-8 h-8 text-amber-700" />
                    </div>
                    <h3 className="text-xl font-bold mb-2 text-gray-900">Easy Location</h3>
                    <p className="text-gray-600">123 BBQ Lane, Smoketown</p>
                  </CardContent>
                </Card>

                <Card className="text-center p-6 border-amber-200 shadow-md hover:shadow-lg transition-shadow">
                  <CardContent className="pt-6">
                    <div className="w-16 h-16 bg-amber-100 rounded-full flex items-center justify-center mx-auto mb-4">
                      <Phone className="w-8 h-8 text-amber-700" />
                    </div>
                    <h3 className="text-xl font-bold mb-2 text-gray-900">Order by Phone</h3>
                    <p className="text-gray-600">(555) 123-RIBS</p>
                  </CardContent>
                </Card>
              </div>

              {/* Popular Items */}
              <div>
                <div className="text-center mb-16">
                  <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900">Customer Favorites</h2>
                  <p className="text-xl text-gray-600">Our most-ordered BBQ classics</p>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                  {popularItems.map((item, index) => (
                    <Card key={index} className="hover:shadow-xl transition-all duration-300 border-amber-100 overflow-hidden group p-0">
                      <div className="relative overflow-hidden">
                        <div
                          className="h-48 bg-cover bg-center transition-transform duration-500 group-hover:scale-105"
                          style={{
                            backgroundImage: `url('/placeholder.svg?height=300&width=400')`,
                          }}
                        />
                        <div className="absolute top-4 left-4 bg-amber-600 text-white text-xs font-bold px-2.5 py-1 rounded-full">
                          Popular
                        </div>
                      </div>
                      <CardContent className="p-3">
                        <div className="flex justify-between items-start mb-2">
                          <h3 className="text-lg font-bold text-gray-900">{item.name}</h3>
                          <span className="text-lg font-bold text-amber-700">{item.price}</span>
                        </div>
                        <p className="text-gray-600 text-sm mb-4">{item.description}</p>
                        
                        <div className="flex items-center mb-4">
                          <div className="flex text-amber-500">
                            {[...Array(5)].map((_, i) => (
                              <Star 
                                key={i} 
                                className="w-4 h-4 fill-current" 
                                fill={i < Math.floor(item.rating) ? "currentColor" : "none"}
                              />
                            ))}
                          </div>
                          <span className="text-xs text-gray-500 ml-2">({item.reviews})</span>
                        </div>
                        
                        <Button className="w-full bg-amber-600 hover:bg-amber-700 text-white">
                          Add to Cart
                        </Button>
                      </CardContent>
                    </Card>
                  ))}
                </div>

               
              </div>
            </TabsContent>

            <TabsContent value="catering" className="space-y-12">
              {/* Catering Info */}
              <div className="max-w-4xl mx-auto">
                <Card className="border-amber-200 shadow-lg">
                  <CardHeader className="text-center pb-6">
                    <CardTitle className="text-3xl text-gray-900">Catering Services</CardTitle>
                    <p className="text-gray-600 text-lg">
                      Let us cater your next event with authentic BBQ that will impress your guests
                    </p>
                  </CardHeader>
                  <CardContent className="space-y-8">
                    <div className="grid md:grid-cols-2 gap-8">
                      <div>
                        <h3 className="text-xl font-bold mb-4 text-gray-900">Catering Packages</h3>
                        <div className="space-y-4">
                          <div className="border-l-4 border-amber-500 pl-4 py-2">
                            <h4 className="font-semibold text-gray-900">Office Lunch Package</h4>
                            <p className="text-sm text-gray-600">Perfect for 10-50 people</p>
                            <p className="text-amber-700 font-semibold">Starting at $12.99/person</p>
                          </div>
                          <div className="border-l-4 border-amber-500 pl-4 py-2">
                            <h4 className="font-semibold text-gray-900">Event Catering</h4>
                            <p className="text-sm text-gray-600">Weddings, parties, corporate events</p>
                            <p className="text-amber-700 font-semibold">Starting at $18.99/person</p>
                          </div>
                          <div className="border-l-4 border-amber-500 pl-4 py-2">
                            <h4 className="font-semibold text-gray-900">Full Service</h4>
                            <p className="text-sm text-gray-600">Setup, service, and cleanup included</p>
                            <p className="text-amber-700 font-semibold">Starting at $24.99/person</p>
                          </div>
                        </div>
                      </div>

                      <div>
                        <h3 className="text-xl font-bold mb-4 text-gray-900">What's Included</h3>
                        <ul className="space-y-3 text-gray-700">
                          <li className="flex items-start">
                            <CheckCircle className="w-5 h-5 text-amber-600 mr-2 mt-0.5 flex-shrink-0" />
                            <span>Choice of 2-3 premium smoked meats</span>
                          </li>
                          <li className="flex items-start">
                            <CheckCircle className="w-5 h-5 text-amber-600 mr-2 mt-0.5 flex-shrink-0" />
                            <span>Selection of homemade sides</span>
                          </li>
                          <li className="flex items-start">
                            <CheckCircle className="w-5 h-5 text-amber-600 mr-2 mt-0.5 flex-shrink-0" />
                            <span>Fresh buns and condiments</span>
                          </li>
                          <li className="flex items-start">
                            <CheckCircle className="w-5 h-5 text-amber-600 mr-2 mt-0.5 flex-shrink-0" />
                            <span>Disposable plates and utensils</span>
                          </li>
                          <li className="flex items-start">
                            <CheckCircle className="w-5 h-5 text-amber-600 mr-2 mt-0.5 flex-shrink-0" />
                            <span>Professional setup and presentation</span>
                          </li>
                          <li className="flex items-start">
                            <CheckCircle className="w-5 h-5 text-amber-600 mr-2 mt-0.5 flex-shrink-0" />
                            <span>Chafing dishes to keep food warm</span>
                          </li>
                        </ul>
                      </div>
                    </div>

                    <div className="text-center space-y-4 pt-4">
                      <p className="text-gray-600">
                        Minimum order of 10 people. 48-hour advance notice required.
                      </p>
                      <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <Button size="lg" className="bg-amber-600 hover:bg-amber-700 text-white">
                          <Phone className="w-5 h-5 mr-2" />
                          Call for Quote
                        </Button>
                        <Button size="lg" variant="outline" className="border-amber-600 text-amber-700 hover:bg-amber-50">
                          Download Catering Menu
                        </Button>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-20 bg-gradient-to-b from-amber-100/50 to-amber-50/50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900">How Online Ordering Works</h2>
            <p className="text-xl text-gray-600">Simple, fast, and convenient</p>
          </div>

          <div className="grid md:grid-cols-4 gap-8">
            {[
              { step: "1", title: "Browse Menu", desc: "Choose from our full selection of BBQ favorites" },
              { step: "2", title: "Place Order", desc: "Add items to cart and checkout securely" },
              { step: "3", title: "We Prepare", desc: "Your order is prepared fresh by our pitmasters" },
              { step: "4", title: "Quick Pickup", desc: "Pick up your hot, fresh BBQ in 20-30 minutes" }
            ].map((item, index) => (
              <div key={index} className="text-center group">
                <div className="relative inline-block mb-6">
                  <div className="w-20 h-20 bg-amber-600 text-white rounded-full flex items-center justify-center mx-auto text-2xl font-bold group-hover:scale-110 transition-transform duration-300">
                    {item.step}
                  </div>
                  <div className="absolute -inset-4 bg-amber-200 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10"></div>
                </div>
                <h3 className="text-xl font-bold mb-2 text-gray-900">{item.title}</h3>
                <p className="text-gray-600">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
      
      <Footer/>
    </div>
  )
}