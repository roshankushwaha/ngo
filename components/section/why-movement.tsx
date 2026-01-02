import { H2, P } from "@/components/ui/typography"

export default function WhyMovement() {
    return (
        <section className="py-20 bg-background">
            <div className="mx-auto max-w-5xl px-6">
                <H2 className="mb-8">
                    Why This Movement Exists
                </H2>

                <div className="space-y-6 max-w-3xl">

                    <P>
                        Shaheed Bhagat Singh gave his life at the age of 23 for the freedom
                        of India. His sacrifice was not impulsive, but conscious — rooted
                        in courage, intellect, and an unwavering commitment to justice.
                    </P>

                    <P>
                        He was not only a revolutionary by action, but also by thought.
                        Bhagat Singh believed in awakening the conscience of the nation,
                        in questioning injustice, and in building a society based on
                        equality and reason.
                    </P>

                    <P>
                        Despite his immense contribution to India’s freedom struggle,
                        Bhagat Singh has not yet been honored with the Padma Shri.
                        This absence of recognition is not a grievance, but a reminder
                        of an unfinished moral responsibility.
                    </P>

                    <P>
                        Honoring Bhagat Singh with the Padma Shri is not about an award.
                        It is about reaffirming the values he stood for — courage,
                        sacrifice, and truth — and passing them on to future generations.
                    </P>

                    {/* Quote */}
                    <blockquote className="mt-10 border-l-4 border-primary pl-6 italic text-muted-foreground">
                        “They may kill me, but they cannot kill my ideas.”
                        <span className="block mt-2 font-medium text-foreground">
                            — Shaheed Bhagat Singh
                        </span>
                    </blockquote>

                </div>
            </div>
        </section>
    )
}
