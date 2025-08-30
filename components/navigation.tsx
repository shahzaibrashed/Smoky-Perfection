"use client"

import { useState } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Menu, X, Flame, Download } from "lucide-react"

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false)

  const navItems = [
    { href: "/", label: "Home" },
    { href: "/menu", label: "Menu" },
    { href: "/about", label: "About" },
    { href: "/contact", label: "Contact" },
    { href: "/reservations", label: "Reservations" },
    { href: "/order", label: "Order" },
  ]

  return (
    <nav className="sticky top-0 w-full backdrop-blur-md bg-background/80 z-50 shadow-lg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <Link
            href="/"
            className="flex items-center gap-3 font-bold text-2xl sm:text-3xl group"
          >
            <div className="bg-primary/15 p-2 sm:p-3 rounded-full group-hover:bg-primary/25 transition-all duration-300 group-hover:scale-110">
              <Flame className="w-8 h-8 sm:w-10 sm:h-10 text-primary" />
            </div>
            <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent group-hover:text-primary transition-colors">
              Smoky Perfection
            </span>
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center gap-8 lg:gap-12">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="text-foreground hover:text-primary transition-all duration-300 font-medium text-base lg:text-lg relative group py-2"
              >
                {item.label}
                <span className="absolute -bottom-1 left-0 w-0 h-[2px] bg-gradient-to-r from-primary to-accent transition-all duration-300 group-hover:w-full rounded-full"></span>
              </Link>
            ))}
            <div className="flex items-center gap-3 lg:gap-4">
              <Button
                asChild
                variant="outline"
                size="lg"
                className=" py-6 bg-transparent lg:size-lg border-2 border-accent text-accent font-semibold hover:scale-105 transition-all duration-300"
              >
                <Link href="/app">
                  <Download className="w-4 h-4 sm:w-5 sm:h-5 mr-1" />
                  Get App
                </Link>
              </Button>
              <Button
                asChild
                size="lg"
                className="  py-6 lg:size-lg bg-primary hover:bg-primary/90 text-primary-foreground  shadow-md hover:shadow-primary/25 hover:scale-105 transition-all duration-300 font-semibold"
              >
                <Link href="/order">Order Now</Link>
              </Button>
            </div>
          </div>

          {/* Mobile Toggle */}
          <button
            className="md:hidden  rounded-lg hover:bg-primary/10 transition-colors"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? (
              <X className="w-7 h-7 text-primary" />
            ) : (
              <Menu className="w-7 h-7 text-primary" />
            )}
          </button>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden py-6 border-t border-primary/20 bg-background/95 backdrop-blur-xl">
            <div className="flex flex-col gap-4">
              {navItems.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="text-foreground hover:text-primary transition-colors py-3 text-lg font-medium border-b border-border/40 last:border-b-0 hover:bg-primary/5 px-4 rounded-lg"
                  onClick={() => setIsOpen(false)}
                >
                  {item.label}
                </Link>
              ))}
              <div className="flex flex-col gap-3 mt-4 px-4">
                <Button
                  asChild
                  variant="outline"
                  className="border-2 border-accent py-5 text-accent hover:bg-accent hover:text-accent-foreground font-bold bg-transparent"
                >
                  <Link href="/app" onClick={() => setIsOpen(false)}>
                    <Download className="w-5 h-5 mr-2" />
                    Get App
                  </Link>
                </Button>
                <Button
                  asChild
                  className="bg-primary hover:bg-primary/90 text-primary-foreground font-bold py-5"
                >
                  <Link href="/order" onClick={() => setIsOpen(false)}>
                    Order Now
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  )
}
