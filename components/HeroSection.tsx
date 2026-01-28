import Image from "next/image";

export function HeroSection() {
    return (
        <section
            className="relative min-h-screen w-full overflow-hidden"
            style={{
                backgroundImage: "url(/images/models2.png)",
                backgroundSize: "cover",
                backgroundPosition: "center",
            }}
        >

            <div className="absolute bottom-12 left-6 md:left-16">
                <h1 className="text-6xl md:text-7xl lg:text-8xl font-bold text-white mb-4 leading-tight lowercase">
                    shine on
                </h1>

                <p className="text-xl md:text-2xl lg:text-3xl text-white mb-8 font-serif">
                    beauty that reflects your spirit
                </p>

                <button className="border-2 border-white text-white px-8 py-3 rounded-md hover:bg-white hover:text-[#d15325] transition-colors duration-300 text-lg font-medium">
                    shop now
                </button>
            </div>
        </section>
    );
}

export default HeroSection;
