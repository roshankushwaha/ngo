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

                <Link href="/">
                    <Image src='/logo.png' alt="logo" height={50} width={50} />
                </Link>

                <NavigationMenu>
                    <NavigationMenuList className="gap-8">

                        <NavigationMenuItem>
                            <NavigationMenuLink className="text-lg" asChild>
                                <Link href="/">Inquilab</Link>
                            </NavigationMenuLink>
                        </NavigationMenuItem>

                        <NavigationMenuItem>
                            <NavigationMenuLink className="text-lg" asChild>
                                <Link href="/campaign">Campaign</Link>
                            </NavigationMenuLink>
                        </NavigationMenuItem>

                        <NavigationMenuItem>
                            <NavigationMenuLink className="text-lg" asChild>
                                <Link href="/updates">Updates</Link>
                            </NavigationMenuLink>
                        </NavigationMenuItem>

                        <NavigationMenuItem>
                            <NavigationMenuLink className="text-lg" asChild>
                                <Link href="/join">Be a Part</Link>
                            </NavigationMenuLink>
                        </NavigationMenuItem>

                    </NavigationMenuList>
                </NavigationMenu>

                <view className="flex gap-12">
                    <a href="tel:+911212121212" className="flex gap-1 items-center text-lg"> <LuPhone size={20} /> +91 1234567891</a>
                    <Button size='lg' asChild>
                        <Link href="/donate">
                            <LuHeartHandshake />
                            Donate
                        </Link>
                    </Button>
                </view>

            </div>
        </header>
    )
}
