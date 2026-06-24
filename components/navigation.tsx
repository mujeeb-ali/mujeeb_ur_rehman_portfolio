"use client"

import * as React from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { motion } from "framer-motion"
import { cn } from "@/lib/utils"
import { ThemeToggle } from "@/components/theme-toggle"
import { Button } from "@/components/ui/button"
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuList,
} from "@/components/ui/navigation-menu"
import { Menu, X } from "lucide-react"

const navigation = [
  { name: "Home", href: "/" },
  { name: "About", href: "/about" },
  { name: "Skills", href: "/skills" },
  { name: "Projects", href: "/projects" },
  { name: "Resume", href: "/resume" },
  { name: "Contact", href: "/contact" },
]

export function Navigation() {
  const pathname = usePathname()
  const [isOpen, setIsOpen] = React.useState(false)
  const [scrolled, setScrolled] = React.useState(false)

  React.useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener("scroll", onScroll, { passive: true })
    return () => window.removeEventListener("scroll", onScroll)
  }, [])

  React.useEffect(() => {
    setIsOpen(false)
  }, [pathname])

  return (
    <header
      className={cn(
        "fixed top-0 z-50 w-full transition-all duration-300",
        scrolled
          ? "border-b border-border/40 bg-background/80 backdrop-blur-xl shadow-sm"
          : "bg-transparent"
      )}
    >
      <div className="container flex h-16 max-w-screen-2xl items-center">
        <div className="mr-4 hidden md:flex">
          <Link href="/" className="mr-6 flex items-center space-x-2 group">
            <div className="relative">
              <img
                src="/Profile.png"
                alt="Mujeeb Ur Rehman"
                className="h-9 w-9 rounded-full border-2 border-border/40 object-cover transition-transform duration-300 group-hover:scale-110"
              />
              <div className="absolute -inset-0.5 rounded-full bg-gradient-to-r from-primary to-purple-500 opacity-0 group-hover:opacity-75 transition-opacity -z-10 blur-sm" />
            </div>
            <span className="font-bold text-lg gradient-text">
              Mujeeb Ur Rehman
            </span>
          </Link>
          <NavigationMenu>
            <NavigationMenuList>
              {navigation.map((item) => (
                <NavigationMenuItem key={item.href}>
                  <Link
                    href={item.href}
                    className={cn(
                      "group relative inline-flex h-9 w-max items-center justify-center rounded-md bg-transparent px-4 py-2 text-sm font-medium transition-colors hover:text-primary",
                      pathname === item.href
                        ? "text-primary"
                        : "text-muted-foreground"
                    )}
                  >
                    {item.name}
                    <span
                      className={cn(
                        "absolute bottom-0 left-1/2 h-0.5 -translate-x-1/2 rounded-full transition-all duration-300",
                        pathname === item.href
                          ? "w-4 bg-primary"
                          : "w-0 bg-primary/50 group-hover:w-4"
                      )}
                    />
                  </Link>
                </NavigationMenuItem>
              ))}
            </NavigationMenuList>
          </NavigationMenu>
        </div>

        <Button
          variant="ghost"
          className="mr-2 px-0 text-base hover:bg-transparent focus-visible:bg-transparent focus-visible:ring-0 focus-visible:ring-offset-0 md:hidden"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          <span className="sr-only">Toggle Menu</span>
        </Button>

        <div className="flex flex-1 items-center justify-between space-x-2 md:justify-end">
          <div className="w-full flex-1 md:w-auto md:flex-none">
            <Link href="/" className="flex items-center space-x-2 md:hidden group">
              <img
                src="/Profile.png"
                alt="Mujeeb Ur Rehman"
                className="h-8 w-8 rounded-full border border-border/40 object-cover"
              />
              <span className="font-bold gradient-text">Mujeeb Ur Rehman</span>
            </Link>
          </div>
          <nav className="flex items-center">
            <ThemeToggle />
          </nav>
        </div>
      </div>

      {isOpen && (
        <div className="fixed inset-0 top-16 z-50 md:hidden">
          <div className="absolute inset-0 bg-background/80 backdrop-blur-xl" onClick={() => setIsOpen(false)} />
          <div className="relative z-20 mx-4 mt-2 rounded-xl border bg-popover p-4 shadow-2xl">
            <nav className="grid grid-flow-row auto-rows-max text-sm">
              {navigation.map((item, i) => (
                <motion.div
                  key={item.href}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.05 }}
                >
                  <Link
                    href={item.href}
                    className={cn(
                      "flex w-full items-center rounded-lg p-3 text-sm font-medium transition-all hover:bg-accent hover:text-accent-foreground",
                      pathname === item.href
                        ? "bg-accent text-accent-foreground"
                        : "text-muted-foreground"
                    )}
                    onClick={() => setIsOpen(false)}
                  >
                    {item.name}
                  </Link>
                </motion.div>
              ))}
            </nav>
          </div>
        </div>
      )}
    </header>
  )
}
