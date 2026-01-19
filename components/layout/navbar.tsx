import Link from "next/link"
import {
    NavigationMenu,
    NavigationMenuItem,
    NavigationMenuLink,
    NavigationMenuList,
} from "@/components/ui/navigation-menu"
import { Button } from "@/components/ui/button"
import Image from "next/image"
import { Flag, HeartHandshake, Home, Route, User } from "lucide-react";

export default function Navbar() {
    const routes = [
        { href: '/', label: 'Inquilab', logo: Home },
        { href: '/about-us', label: 'About Us', logo: User },
        { href: '/actions', label: 'Actions', logo: Flag },
        { href: '/contact-us', label: 'Contact Us', logo: Route },
        // there is donate route on the bottom
    ]
    return (
        <header className="border-b">
            <div className="mx-auto max-w-8xl px-6 py-2 flex items-center justify-between">

                <Link href="/" className="w-70" >
                    <Image src='/logo.png' alt="logo" height={40} width={40} />
                </Link>

                <NavigationMenu>
                    <NavigationMenuList className="gap-8">
                        {routes.map((r) => (
                            <NavigationMenuItem key={r.href}>
                                <NavigationMenuLink className="text-md" asChild>
                                    <Link href={r.href}>{r.label}</Link>
                                </NavigationMenuLink>
                            </NavigationMenuItem>
                        ))}
                    </NavigationMenuList>
                </NavigationMenu>

                <div className="flex gap-12">
                    <Button asChild>
                        <Link href='/donate'>
                            < HeartHandshake />
                            Donate
                        </Link>
                    </Button>
                </div>

            </div>
        </header>
    )
}
