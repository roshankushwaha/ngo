import { Button } from "@/components/ui/button"
import { H1, P } from "@/components/ui/typography"
import Image from "next/image"
import Link from "next/link"

export default function InquilabHero() {
    return (
        <section className="relative min-h-[calc(100vh-64px)] flex items-center">

            <Image
                src="/inquilab_hero.png"
                alt="Inquilab background"
                fill
                priority
                className="object-cover"
            />

            <div className="absolute inset-0 bg-black/50" />

            <div className="relative z-10 mx-auto max-w-6xl px-6">

                <div className="max-w-4xl text-left text-white">

                    <H1 className="leading-tight text-white">
                            Padma Shri for Shaheed Bhagat Singh
                    </H1>

                    <P className="mt-6 text-lg text-white/90">
                        A national movement to honor the revolutionary who gave everything for India,
                        yet remains unrecognized.
                    </P>

                    <div className="mt-10 flex gap-4">
                        <Button size="lg" asChild>
                            <Link href="/join">Join the Movement</Link>
                        </Button>

                        <Button size="lg" variant="outline" asChild>
                            <Link href="/donate">Donate</Link>
                        </Button>
                    </div>

                </div>
            </div>
        </section>
    )
}
