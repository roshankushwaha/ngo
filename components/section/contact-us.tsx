import Image from "next/image";

export function ContactUsSection() {
    return (
        <section className="min-h-[calc(100vh-64px)] bg-background flex items-center">
            <div className="mx-auto max-w-7xl px-6 w-full">

                {/* Heading */}
                <div className="max-w-3xl mb-14">
                    <h2 className="text-4xl font-bold leading-tight">
                        Get in Touch
                    </h2>
                    <p className="mt-4 text-lg text-muted-foreground">
                        Have questions, ideas, or want to collaborate with us?
                        We’d love to hear from you.
                    </p>
                </div>

                {/* Main Grid */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">

                    {/* Left: Contact Info */}
                    <div className="space-y-8">
                        <p className="text-muted-foreground leading-relaxed">
                            Whether you’re interested in volunteering, partnering,
                            or simply learning more about our mission, feel free
                            to reach out. Our team will respond as soon as possible.
                        </p>

                        <div className="space-y-4">
                            <div>
                                <p className="text-sm text-muted-foreground">Email</p>
                                <p className="text-base font-medium">
                                    contact@yourngo.org
                                </p>
                            </div>

                            <div>
                                <p className="text-sm text-muted-foreground">Phone</p>
                                <p className="text-base font-medium">
                                    +91 98765 43210
                                </p>
                            </div>

                            <div>
                                <p className="text-sm text-muted-foreground">Address</p>
                                <p className="text-base font-medium">
                                    123 Community Street,<br />
                                    New Delhi, India
                                </p>
                            </div>
                        </div>

                        {/* Office Hours */}
                        <div className="pt-4">
                            <p className="text-sm text-muted-foreground">Office Hours</p>
                            <p className="text-base font-medium">
                                Monday – Friday, 10:00 AM – 6:00 PM
                            </p>
                        </div>
                    </div>

                    {/* Right: Images */}
                    <div className="grid grid-cols-2 gap-4">
                        <div className="relative h-56 rounded-xl overflow-hidden">
                            <Image
                                src="https://images.unsplash.com/photo-1521737604893-d14cc237f11d"
                                alt="NGO office"
                                fill
                                className="object-cover"
                                unoptimized
                            />
                        </div>

                        <div className="relative h-56 rounded-xl overflow-hidden mt-8">
                            <Image
                                src="https://images.unsplash.com/photo-1551836022-d5d88e9218df"
                                alt="Team discussion"
                                fill
                                className="object-cover"
                                unoptimized
                            />
                        </div>

                        <div className="relative h-56 rounded-xl overflow-hidden col-span-2">
                            <Image
                                src="https://images.unsplash.com/photo-1517248135467-4c7edcad34c4"
                                alt="Community meeting"
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
