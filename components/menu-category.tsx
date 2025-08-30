import type React from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Flame, Star } from "lucide-react"

interface MenuItem {
  name: string
  description: string
  price: string
  popular: boolean
  spicy: boolean
  image: string // new field for image
}

interface MenuCategoryProps {
  title: string
  description: string
  items: MenuItem[]
  icon: React.ReactNode
}

export default function MenuCategory({ title, description, items, icon }: MenuCategoryProps) {
  return (
    <div className="mb-20">
      {/* Heading Section */}
      <div className="text-center mb-14">
        <div className="flex items-center justify-center gap-3 mb-5">
          <div className="w-14 h-14 bg-gradient-to-tr from-primary/20 to-accent/20 rounded-full flex items-center justify-center text-primary shadow-md">
            {icon}
          </div>
        </div>
        <h2 className="text-3xl md:text-5xl font-extrabold mb-4 text-foreground tracking-tight">
          {title}
        </h2>
        <p className="text-lg md:text-xl text-muted-foreground  mx-auto leading-relaxed">
          {description}
        </p>
      </div>

      {/* Menu Items */}
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {items.map((item, index) => (
          <Card
            key={index}
            className="group p-0 relative overflow-hidden rounded-2xl border border-border hover:border-primary/40 hover:shadow-xl transition-all duration-300"
          >
            {/* Image */}
            <div className="relative h-60 w-full overflow-hidden">
              <img
                src={item.image}
                alt={item.name}
                className="h-full w-full object-cover transform group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-black/10 to-transparent"></div>
            </div>

            <CardContent className="relative p-7">
              <div className="flex justify-between items-start mb-4">
                <div className="flex flex-wrap items-center gap-2">
                  <h3 className="text-xl font-bold text-foreground">{item.name}</h3>
                  <div className="flex flex-wrap  gap-2">
                    {item.popular && (
                      <Badge variant="secondary" className="bg-primary/15 text-primary border-primary/30">
                        <Star className="w-3 h-3 mr-1" />
                        Popular
                      </Badge>
                    )}
                    {item.spicy && (
                      <Badge variant="outline" className="border-red-500/50 text-red-600 bg-red-50/40">
                        <Flame className="w-3 h-3 mr-1 text-red-500" />
                        Spicy
                      </Badge>
                    )}
                  </div>
                </div>
                <span className="text-xl font-extrabold text-primary">{item.price}</span>
              </div>
              <p className="text-muted-foreground p-4 leading-relaxed text-sm md:text-base">
                {item.description}
              </p>
              <button className="w-full bg-[#DC841E]/80 hover:bg-[#DC841E] text-white font-bold text-xl py-5 px-6 rounded-2xl backdrop-blur-sm border border-white/20 hover:border-white/40 hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-2xl">
                <span className="flex items-center justify-center gap-3">
                  Add to Cart
                  <Flame className="w-6 h-6 group-hover:animate-bounce" />
                </span>
              </button>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  )
}
