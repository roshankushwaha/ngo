"use client"

import {
    NavigationMenu,
    NavigationMenuItem,
    NavigationMenuLink,
    NavigationMenuList,
} from "@/components/ui/navigation-menu"
import Image from "next/image"
import Link from "next/link"
import { P } from "../ui/typography"
import { Input } from "../ui/input"
import { Button } from "../ui/button"
import { useState } from "react"
import { FaFacebookSquare, FaInstagramSquare, FaYoutube } from "react-icons/fa"
import { FaSquareXTwitter } from "react-icons/fa6"
import { toast } from "sonner"

export default function Footer() {
    const [email, setEmail] = useState("")

    function handleSubscribe() {

        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
        if (!emailRegex.test(email.trim())) {
            toast.error("Please enter a valid email address")
            return
        }

        console.log("Subscribed:", email)
        toast.success("You have successfully subscribed to the newsletter")
        setEmail("")
    }


    return (
        <footer className="border-t pb-4">

            <div className="mx-auto max-w-8xl px-6 py-6 flex items-center justify-between">

                <Link href="/" className="flex items-center gap-2">
                    <Image src="/logo.png" alt="logo" height={40} width={40} />
                </Link>

                <NavigationMenu>
                    <NavigationMenuList className="gap-6">
                        <NavigationMenuItem>
                            <NavigationMenuLink asChild>
                                <Link href="/about">About</Link>
                            </NavigationMenuLink>
                        </NavigationMenuItem>

                        <NavigationMenuItem>
                            <NavigationMenuLink asChild>
                                <Link href="/contact">Contact</Link>
                            </NavigationMenuLink>
                        </NavigationMenuItem>

                        <NavigationMenuItem>
                            <NavigationMenuLink asChild>
                                <Link href="/terms">Terms</Link>
                            </NavigationMenuLink>
                        </NavigationMenuItem>

                        <NavigationMenuItem>
                            <NavigationMenuLink asChild>
                                <Link href="/privacy">Privacy</Link>
                            </NavigationMenuLink>
                        </NavigationMenuItem>
                    </NavigationMenuList>
                </NavigationMenu>

                <div className="flex gap-4 text-muted-foreground">
                    <a href="https://www.facebook.com/Shaheedeazaminquilabfoundation/" target="_blank">
                        <FaFacebookSquare size={18} />
                    </a>
                    <a href="#" target="_blank">
                        <FaInstagramSquare size={18} />
                    </a>
                    <a href="#" target="_blank">
                        <FaYoutube size={18} />
                    </a>
                    <a href="#" target="_blank">
                        <FaSquareXTwitter size={18} />
                    </a>
                </div>
            </div>


            <div className="mx-auto max-w-7xl px-6 py-4 flex flex-col md:flex-row items-center justify-between gap-4">

                <P className="text-sm text-muted-foreground">
                    © 2026 All Rights Reserved
                </P>

                <div className="flex w-full max-w-sm gap-2">
                    <Input
                        className="h-8"
                        type="email"
                        placeholder="Email for updates"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                    />
                    <Button size='sm' variant="outline" onClick={handleSubscribe}>
                        Subscribe
                    </Button>
                </div>
            </div>

        </footer>
    )
}
