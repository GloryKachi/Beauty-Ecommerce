"use client";

import Image from "next/image";
import { Button } from "@/components/ui/button";

import newArrivalBg from "@/assets/new-arrival-bg.png";

const NewArrival = () => {
    return (
        <section className="relative w-full overflow-hidden px-4 sm:px-6 lg:px-12">
            {/* Background Image */}
            <div className="absolute inset-0 -z-10">
                <Image
                    src={newArrivalBg}
                    alt="New arrival background"
                    fill
                    priority
                    className="object-cover"
                />
            </div>

            <div className="container relative z-10 mx-auto py-16 md:py-24 lg:py-32">
                <div className="grid grid-cols-1 items-center gap-8 lg:grid-cols-2">
                    {/* Left content */}
                    <div className="max-w-lg">
                        <h1 className="font-serif text-4xl font-normal leading-tight tracking-tight text-foreground md:text-5xl lg:text-6xl">
                            effortless beauty,
                            <br />
                            timeless charm.
                        </h1>
                        <p className="mt-4 text-lg text-muted-foreground md:text-xl">
                            new arrivals now in stock
                        </p>
                        <Button
                            variant="outline"
                            size="lg"
                            className="mt-8 rounded-full border-foreground px-8 text-foreground hover:bg-foreground hover:text-primary-foreground"
                        >
                            shop now
                        </Button>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default NewArrival;
