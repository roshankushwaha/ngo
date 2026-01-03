import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"

export default function InquilabHero() {
    return (
        <section className="relative min-h-[calc(100vh-64px)] flex items-center justify-center overflow-hidden">

            <Image
                src="/inquilab_hero.png"
                alt="Inquilab background"
                fill
                priority
                className="object-cover"
            />

            <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/30 to-black/50" />

            <div className="relative z-10 mx-auto max-w-4xl px-6 text-center text-white">

                <p className="mb-4 text-xs tracking-widest uppercase text-white/70">
                    A National Movement
                </p>

                <h1 className="text-4xl md:text-6xl font-bold tracking-tight text-balance">
                    Inquilab Zindabad
                </h1>

                <p className="mt-4 text-lg md:text-xl text-white/85">
                    Padma Shri for Shaheed Bhagat Singh
                </p>

                <div className="mt-10 flex justify-center gap-4">
                    <Button
                        size="lg"
                        className="rounded-full px-8"
                        asChild
                    >
                        <Link href="/join">Join the Movement</Link>
                    </Button>

                    <Button
                        size="lg"
                        variant="outline"
                        className="rounded-full px-8 text-white border-white/40 hover:bg-white/10"
                        asChild
                    >
                        <Link href="/donate">Donate</Link>
                    </Button>
                </div>

            </div>
        </section>
    )
}
