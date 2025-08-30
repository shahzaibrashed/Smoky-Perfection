import Navigation from "@/components/navigation"
import MenuCategory from "@/components/menu-category"
import { Award } from "lucide-react"
import { Badge } from "@/components/ui/badge"

export default function MainsPage() {
  const mains = [
    {
      name: "Pitmaster's Platter",
      description:
        "The ultimate BBQ experience featuring our best: brisket, baby back ribs, pulled pork, and smoked sausage. Served with two sides of your choice.",
      price: "$28.99",
      popular: true,
      spicy: false,
    },
    {
      name: "Smoked Brisket",
      description:
        "14-hour smoked prime brisket with perfect bark and smoke ring. Sliced to order and served with our signature BBQ sauce.",
      price: "$18.99",
      popular: true,
      spicy: false,
    },
    {
      name: "Baby Back Ribs",
      description:
        "Full rack of tender ribs rubbed with our secret spice blend and smoked until they fall off the bone.",
      price: "$22.99",
      popular: true,
      spicy: false,
    },
    {
      name: "Pulled Pork Sandwich",
      description: "Slow-smoked pork shoulder served on a toasted brioche bun with coleslaw and pickles.",
      price: "$12.99",
      popular: false,
      spicy: false,
    },
    {
      name: "Smoked Chicken",
      description: "Half chicken rubbed with our signature spice blend and smoked to juicy perfection.",
      price: "$16.99",
      popular: false,
      spicy: false,
    },
    {
      name: "Hot Links",
      description: "House-made spicy sausage links grilled with peppers and onions. Not for the faint of heart!",
      price: "$14.99",
      popular: false,
      spicy: true,
    },
    {
      name: "Burnt Ends",
      description: "Kansas City style burnt ends cut from our premium brisket point, caramelized to perfection.",
      price: "$19.99",
      popular: true,
      spicy: false,
    },
    {
      name: "BBQ Combo",
      description: "Can't decide? Choose any two meats from our selection and pair with two sides.",
      price: "$21.99",
      popular: false,
      spicy: false,
    },
  ]

  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      <section className="pt-20 pb-12 bg-muted/30">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <Badge variant="secondary" className="mb-4 bg-primary/20 text-primary border-primary/30">
            Signature Smoked Meats
          </Badge>
          <h1 className="text-4xl md:text-6xl font-bold mb-6 text-balance">Main Dishes</h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto text-pretty">
            Our award-winning smoked meats, prepared with time-honored techniques and premium cuts
          </p>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 py-12">
        <MenuCategory title="" description="" items={mains} icon={<Award className="w-6 h-6" />} />
      </div>
    </div>
  )
}
