import Image from "next/image";

export function AboutUsSection() {
    return (
        <section className="min-h-[calc(100vh-64px)] bg-background flex items-center">
            <div className="mx-auto max-w-7xl px-6 w-full">

                {/* Heading */}
                <div className="max-w-3xl mb-14">
                    <h2 className="text-4xl font-bold leading-tight">
                        Who We Are
                    </h2>
                    <p className="mt-4 text-lg text-muted-foreground">
                        We are a people-driven movement focused on justice, dignity,
                        and meaningful social change.
                    </p>
                </div>

                {/* Main Content */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">

                    {/* Left Text */}
                    <div className="space-y-6">
                        <p className="text-muted-foreground leading-relaxed">
                            Our work begins at the grassroots level, where real change
                            is needed the most. We collaborate with communities,
                            volunteers, and change-makers to build a fairer future.
                        </p>

                        <p className="text-muted-foreground leading-relaxed">
                            Through awareness campaigns, education initiatives, and
                            on-ground action, we strive to create impact that lasts
                            beyond a moment.
                        </p>

                        {/* Stats */}
                        <div className="grid grid-cols-3 gap-6 pt-6">
                            <div>
                                <p className="text-3xl font-bold">10+</p>
                                <p className="text-sm text-muted-foreground">
                                    Years of Service
                                </p>
                            </div>
                            <div>
                                <p className="text-3xl font-bold">50K+</p>
                                <p className="text-sm text-muted-foreground">
                                    People Impacted
                                </p>
                            </div>
                            <div>
                                <p className="text-3xl font-bold">100+</p>
                                <p className="text-sm text-muted-foreground">
                                    Active Volunteers
                                </p>
                            </div>
                        </div>
                    </div>

                    {/* Right Images */}
                    <div className="grid grid-cols-2 gap-4">
                        <div className="relative h-56 rounded-xl overflow-hidden">
                            <Image
                                src="https://images.unsplash.com/photo-1593113598332-cd288d649433"
                                alt="Community work"
                                fill
                                className="object-cover"
                                unoptimized
                            />
                        </div>

                        <div className="relative h-56 rounded-xl overflow-hidden mt-8">
                            <Image
                                src="https://images.unsplash.com/photo-1488521787991-ed7bbaae773c"
                                alt="Volunteers helping"
                                fill
                                className="object-cover"
                                unoptimized
                            />
                        </div>

                        <div className="relative h-56 rounded-xl overflow-hidden col-span-2">
                            <Image
                                src="https://images.unsplash.com/photo-1526256262350-7da7584cf5eb"
                                alt="Social awareness campaign"
                                fill
                                className="object-cover"
                                unoptimized
                            />
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
}
