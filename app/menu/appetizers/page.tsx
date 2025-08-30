import Navigation from "@/components/navigation"
import MenuCategory from "@/components/menu-category"
import { Flame } from "lucide-react"
import { Badge } from "@/components/ui/badge"

export default function AppetizersPage() {
  const appetizers = [
    {
      name: "Smoked Wings",
      description: "Eight wings smoked to perfection with your choice of sauce: Buffalo, BBQ, Honey Garlic, or Dry Rub",
      price: "$12.99",
      popular: true,
      spicy: false,
    },
    {
      name: "Loaded Potato Skins",
      description:
        "Crispy potato skins loaded with pulled pork, melted cheese, bacon bits, and green onions. Served with sour cream.",
      price: "$9.99",
      popular: false,
      spicy: false,
    },
    {
      name: "BBQ Nachos",
      description:
        "House-made tortilla chips topped with choice of brisket or pulled pork, queso, jalapeños, tomatoes, and sour cream",
      price: "$13.99",
      popular: true,
      spicy: true,
    },
    {
      name: "Smoked Jalapeño Poppers",
      description: "Fresh jalapeños stuffed with cream cheese and wrapped in bacon, then smoked until crispy",
      price: "$8.99",
      popular: false,
      spicy: true,
    },
    {
      name: "Fried Pickles",
      description: "Hand-battered dill pickle spears served with ranch dipping sauce",
      price: "$6.99",
      popular: false,
      spicy: false,
    },
    {
      name: "Smoked Queso",
      description: "Our signature cheese dip infused with smoky flavor, served with tortilla chips",
      price: "$7.99",
      popular: true,
      spicy: false,
    },
  ]

  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      <section className="pt-20 pb-12 bg-muted/30">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <Badge variant="secondary" className="mb-4 bg-primary/20 text-primary border-primary/30">
            Start Your Meal Right
          </Badge>
          <h1 className="text-4xl md:text-6xl font-bold mb-6 text-balance">Appetizers</h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto text-pretty">
            Kick off your BBQ experience with these crowd-pleasing starters, each infused with our signature smoky
            flavors
          </p>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 py-12">
        <MenuCategory title="" description="" items={appetizers} icon={<Flame className="w-6 h-6" />} />
      </div>
    </div>
  )
}
