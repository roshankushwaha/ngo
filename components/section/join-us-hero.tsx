import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { H1, P } from "@/components/ui/typography"

export default function JoinUsHero() {
    return (
        <section className="relative min-h-[calc(100vh-64px)] flex items-center justify-center overflow-hidden">

            <Image
                src="/joinus_hero.png"
                alt="Join the Inquilab movement"
                fill
                priority
                className="object-cover"
            />

            <div className="absolute inset-0 bg-black/55" />

            <div className="relative z-10 mx-auto max-w-4xl px-6 text-center text-white">

                <H1 className="leading-tight text-white">
                    Be a Part of Inquilab
                </H1>

                <P className="mt-6 text-lg text-white/90">
                    Not everyone can donate, but everyone can participate.
                    This movement grows when people come together with purpose.
                </P>

                <ul className="mt-10 flex flex-wrap justify-center gap-x-6 gap-y-3 text-sm md:text-base text-white/90">
                    <li className="flex items-center gap-2">
                        <span className="text-white">•</span> Join as a volunteer
                    </li>
                    <li className="flex items-center gap-2">
                        <span className="text-white">•</span> Participate in events
                    </li>
                    <li className="flex items-center gap-2">
                        <span className="text-white">•</span> Spread awareness
                    </li>
                    <li className="flex items-center gap-2">
                        <span className="text-white">•</span> Support digitally
                    </li>
                </ul>

                <div className="mt-12 flex justify-center">
                    <Button size="lg" className="rounded-full px-8" asChild>
                        <Link href="/join">
                            Join the Movement
                        </Link>
                    </Button>
                </div>

            </div>
        </section>
    )
}
