import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Separator } from "@/components/ui/separator"
import { Star, Flame, Award } from "lucide-react"
import Navigation from "@/components/navigation"
import Footer from "@/components/footer"
import MenuCategory from "@/components/menu-category"

export default function MenuPage() {
  const appetizers = [
    {
      name: "Smoked Wings",
      description: "Eight wings smoked to perfection with your choice of sauce",
      price: "$12.99",
      popular: true,
      spicy: true,
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRm_CrfcxnyiFh9aHdN9HoFUCALfYIPkwIoDA&s",
    },
    {
      name: "Loaded Potato Skins",
      description: "Crispy potato skins loaded with pulled pork, cheese, and green onions",
      price: "$9.99",
      popular: true,
      spicy: true,
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTQ-CGWyWylyRy2bkKguLsECuKfN-LlgvUfLw&s",
    },
    {
      name: "BBQ Nachos",
      description: "House-made chips topped with brisket, queso, jalapeños, and sour cream",
      price: "$13.99",
      popular: true,
      spicy: true,
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQbsm1mP-b6zHFfSyHLrNcfC44_MhQN1eRwaw&s",
    },
  ]

  const mains = [
    {
      name: "Pitmaster's Platter",
      description: "The ultimate BBQ experience: brisket, ribs, pulled pork, and sausage with two sides",
      price: "$28.99",
      popular: true,
      spicy: true,
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS8Oxb8zefzN9N8zreAnFRbQghqXfrXN1Ncpw&s",
    },
    {
      name: "Smoked Brisket",
      description: "14-hour smoked prime brisket with perfect bark and smoke ring",
      price: "$18.99",
      popular: true,
      spicy: true,
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTtl8N78DVWfG2GrsQP-4aFba20oqKkl19pxw&s"
    },
    {
      name: "Baby Back Ribs",
      description: "Full rack of tender ribs with our signature dry rub",
      price: "$22.99",
      popular: true,
      spicy: true,
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ62XUenLw26AsGLVqgJc7fs9hdUxoBbq_F-Q&s"
    },
    {
      name: "Pulled Pork Sandwich",
      description: "Slow-smoked pork shoulder on a brioche bun with coleslaw",
      price: "$12.99",
      popular: true,
      spicy: true,
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSg1ILdpRYX7RaNDxlJdWVVVJETQ6UJMLc20g&s"
    },
    {
      name: "Smoked Chicken",
      description: "Half chicken rubbed with our secret spice blend",
      price: "$16.99",
      popular: true,
      spicy: true,
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSrufhEvWRkOlDOWHGQ1L81VSe7u2Y_NAIhOg&s"
    },
    {
      name: "Hot Links",
      description: "House-made spicy sausage links with peppers and onions",
      price: "$14.99",
      popular: true,
      spicy: true,
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTljpBhp7PsfFMtpPvLHqombZCs_yViQS_g3w&s"
    },
  ]

  const sides = [
    {
      name: "Mac & Cheese",
      description: "Creamy three-cheese blend baked to golden perfection",
      price: "$4.99",
      popular: true,
      spicy: false,
      image: "https://poshjournal.com/wp-content/uploads/2020/11/baked-mac-and-cheese-3.jpg"
    },
    {
      name: "Coleslaw",
      description: "Fresh cabbage slaw with our tangy house dressing",
      price: "$3.99",
      popular: false,
      spicy: false,
      image: "https://www.inspiredtaste.net/wp-content/uploads/2015/01/Coleslaw-Recipe-1-1200.jpg"
    },
    {
      name: "Baked Beans",
      description: "Slow-cooked beans with brown sugar and bacon",
      price: "$4.49",
      popular: true,
      spicy: false,
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQkqMQsn-vApskftXEhb4PdOnpaiOVZ8jAZug&s"
    },
  ]

  const desserts = [
    {
      name: "Peach Cobbler",
      description: "Warm peach cobbler with vanilla ice cream",
      price: "$6.99",
      popular: true,
      spicy: true,
      image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRMTogNQlXjXbJv9-Vy8XRYosiKMcR3QkjPEw&s"
    },
    {
      name: "Chocolate Cake",
      description: "Rich chocolate cake with fudge frosting",
      price: "$5.99",
      popular: true,
      spicy: true,
      image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRfifQWOd8HYvbAibQ9lmU9xKa2m1TEpNbwEQ&s"
    },
    {
      name: "Banana Pudding",
      description: "Traditional Southern banana pudding with vanilla wafers",
      price: "$4.99",
      popular: true,
      spicy: true,
      image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQUHmw1RmsmdEnKoih_zDL68NSCdrdMmap49g&s"
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
            Discover <span className="text-primary">Our Menu</span>
          </h1>

          <p className="text-xl md:text-2xl max-w-3xl mx-auto leading-relaxed text-gray-200 animate-fade-in-delay">
            Every dish is crafted with <span className="text-primary font-semibold">premium ingredients</span> and
            <span className="text-accent font-semibold"> time-honored smoking techniques</span> passed down through generations.
          </p>

          <div className="mt-10 flex justify-center">
            <div className="h-1 w-40 bg-gradient-to-r from-primary to-accent rounded-full shadow-lg animate-scale-in"></div>
          </div>
        </div>
      </section>

      {/* Menu Categories */}
      <div className="max-w-7xl mx-auto px-4 py-12">
        <MenuCategory
          title="Appetizers"
          description="Start your meal with these crowd favorites. From crispy, cheesy bites to smoky, flavorful wings, our appetizers are designed to spark your appetite and set the tone for an unforgettable dining experience."
          items={appetizers}
          icon={<Flame className="w-6 h-6" />}
        />


        <Separator className="my-16" />

        <MenuCategory
          title="Main Dishes"
          description="Our signature smoked meats and BBQ classics are the heart of our menu. Each dish is slow-cooked to perfection, infused with rich smoky flavor, and prepared using time-honored techniques that highlight the true essence of barbecue.  "
          items={mains}
          icon={<Award className="w-6 h-6" />}
        />


        <Separator className="my-16" />

        <MenuCategory
          title="Sides"
          description="Perfect complements to our smoked meats, our sides are crafted to balance and elevate your dining experience. From creamy comfort dishes to fresh and zesty flavors, each side is made with care to enhance the bold taste of our barbecue."
          items={sides}
          icon={<Star className="w-6 h-6" />}
        />


        <Separator className="my-16" />

        <MenuCategory
          title="Desserts"
          description="Sweet endings to your BBQ experience, our desserts are crafted to leave you with the perfect final bite. From rich and indulgent classics to light and refreshing delights, every treat is made to satisfy your cravings and complete your meal on a high note."
          items={desserts}
          icon={<Star className="w-6 h-6" />}
        />

      </div>

      <Footer />
    </div>
  )
}
