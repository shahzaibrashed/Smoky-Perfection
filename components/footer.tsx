import Link from "next/link"
import { Button } from "@/components/ui/button"
import {
  Flame,
  MapPin,
  Phone,
  Clock,
  Mail,
  Facebook,
  Instagram,
  Twitter,
  Award,
} from "lucide-react"

export default function Footer() {
  return (
  <footer className="bg-white text-gray-800">
  <div className="max-w-7xl mx-auto px-6 py-16">
    <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-12">
      {/* Brand Section */}
      <div className="lg:col-span-2">
        <div className="flex items-center gap-4 mb-6">
          <div className="bg-[#DC841E]/10 p-4 rounded-full">
            <Flame className="w-10 h-10 text-[#DC841E]" />
          </div>
          <span className="font-bold text-3xl text-[#DC841E]">Smoky Perfection</span>
        </div>
        <p className="text-gray-600 text-lg leading-relaxed mb-6">
          America’s favorite BBQ destination, serving authentic, award-winning barbecue with passion and pride for
          over three generations. Join millions of satisfied customers nationwide.
        </p>
        <div className="flex items-center gap-3 mb-6 bg-[#dc841e] p-4 rounded-lg">
          <Award className="w-6 h-6 text-white" />
          <span className="font-semibold text-lg text-white">
            2024 Best BBQ Restaurant Winner
          </span>
        </div>
        <div className="flex gap-4">
          {[Facebook, Instagram, Twitter].map((Icon, idx) => (
            <Button
              key={idx}
              variant="ghost"
              size="lg"
              className="text-white bg-[#dc841e] h-10 w-10 rounded-full transition-all duration-300"
            >
              <Icon className="w-6 h-6" />
            </Button>
          ))}
        </div>
      </div>

      {/* Menu */}
      <div>
        <h3 className="font-bold text-xl mb-6 text-[#DC841E]">Menu</h3>
        <div className="space-y-4">
          {[
            { href: "/menu", label: "Full Menu" },
            { href: "/menu/appetizers", label: "Appetizers" },
            { href: "/menu/mains", label: "Main Dishes" },
            { href: "/menu/sides", label: "Sides" },
            { href: "/menu/desserts", label: "Desserts" },
            { href: "/catering", label: "Catering" },
          ].map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="block text-gray-600 hover:text-[#DC841E] transition-colors text-lg hover:translate-x-2 duration-300"
            >
              {link.label}
            </Link>
          ))}
        </div>
      </div>

      {/* Company */}
      <div>
        <h3 className="font-bold text-xl mb-6 text-[#DC841E]">Company</h3>
        <div className="space-y-4">
          {[
            { href: "/about", label: "About Us" },
            { href: "/about/team", label: "Our Team" },
            { href: "/careers", label: "Careers" },
            { href: "/locations", label: "Locations" },
            { href: "/franchise", label: "Franchise" },
            { href: "/news", label: "News" },
          ].map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="block text-gray-600 hover:text-[#DC841E] transition-colors text-lg hover:translate-x-2 duration-300"
            >
              {link.label}
            </Link>
          ))}
        </div>
      </div>

      {/* Contact & Hours */}
      <div>
        <h3 className="font-bold text-xl mb-6 text-[#DC841E]">Contact & Hours</h3>
        <div className="space-y-6">
          <div className="flex items-start gap-3">
            <MapPin className="w-6 h-6 text-[#DC841E] mt-1" />
            <div>
              <p className="text-gray-800 ">123 BBQ Lane</p>
              <p className="text-gray-600">Smoketown, ST 12345</p>
            </div>
          </div>
          <div className="flex items-center gap-3">
            <Phone className="w-6 h-6 text-[#DC841E]" />
            <p className="text-gray-800 ">(555) 123-SMOKE</p>
          </div>
          <div className="flex items-center gap-3">
            <Mail className="w-6 h-6 text-[#DC841E]" />
            <p className="text-gray-600 ">info@smoky.com</p>
          </div>
          <div className="flex items-start gap-3">
            <Clock className="w-6 h-6 text-[#DC841E] mt-1" />
            <div>
              <p className="text-gray-600">Mon-Thu: 11AM - 9PM</p>
              <p className="text-gray-600">Fri-Sun: 11AM - 10PM</p>
            </div>
          </div>
         
        </div>
      </div>
    </div>

    {/* Bottom Bar */}
    <div className="border-t border-gray-200 mt-16 pt-8 flex flex-col md:flex-row justify-between items-center gap-6">
      <div className="text-center md:text-left">
        <p className="text-gray-700 font-semibold">
          © 2024 Smoky Perfection LLC. All rights reserved.
        </p>
        <p className="text-gray-500">A family-owned business serving America since 1985</p>
      </div>
      <div className="flex flex-wrap gap-6 text-gray-600 text-lg">
        <Link href="/privacy" className="hover:text-[#DC841E] hover:underline">
          Privacy Policy
        </Link>
        <Link href="/terms" className="hover:text-[#DC841E] hover:underline">
          Terms of Service
        </Link>
        <Link href="/accessibility" className="hover:text-[#DC841E] hover:underline">
          Accessibility
        </Link>
        <Link href="/nutrition" className="hover:text-[#DC841E] hover:underline">
          Nutrition Info
        </Link>
      </div>
    </div>
  </div>
</footer>

  )
}
