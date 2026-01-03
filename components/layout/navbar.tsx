import Link from "next/link"
import { LuHeartHandshake, LuPhone } from 'react-icons/lu';
import {
    NavigationMenu,
    NavigationMenuItem,
    NavigationMenuLink,
    NavigationMenuList,
} from "@/components/ui/navigation-menu"
import { Button } from "@/components/ui/button"
import Image from "next/image"

export default function Navbar() {
    return (
        <header className="border-b">
            <div className="mx-auto max-w-8xl px-6 py-2 flex items-center justify-between">

                <Link href="/" className="w-70" >
                    <Image src='/logo.png' alt="logo" height={40} width={40} />
                </Link>

                <NavigationMenu>
                    <NavigationMenuList className="gap-8">

                        <NavigationMenuItem>
                            <NavigationMenuLink className="text-md" asChild>
                                <Link href="/">Inquilab</Link>
                            </NavigationMenuLink>
                        </NavigationMenuItem>

                        <NavigationMenuItem>
                            <NavigationMenuLink className="text-md" asChild>
                                <Link href="/campaign">Campaign</Link>
                            </NavigationMenuLink>
                        </NavigationMenuItem>

                        <NavigationMenuItem>
                            <NavigationMenuLink className="text-md" asChild>
                                <Link href="/updates">Updates</Link>
                            </NavigationMenuLink>
                        </NavigationMenuItem>

                        <NavigationMenuItem>
                            <NavigationMenuLink className="text-md" asChild>
                                <Link href="/join">Be a Part</Link>
                            </NavigationMenuLink>
                        </NavigationMenuItem>

                    </NavigationMenuList>
                </NavigationMenu>

                <div className="flex gap-12">
                    <a href="tel:+911212121212" className="flex gap-1 items-center text-md"> <LuPhone size={18} /> +91 1234567891</a>
                    <Button size='lg' asChild>
                        <Link href="/donate">
                            <LuHeartHandshake />
                            Donate
                        </Link>
                    </Button>
                </div>

            </div>
        </header>
    )
}
