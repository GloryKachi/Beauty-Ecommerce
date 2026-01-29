import Image from "next/image";
// import ourStoryFace from "@/assets/our-story-face.jpg";
// import ourStoryProduct from "@/assets/our-story-product.png";

const OurStory = () => {
    return (
        <section className="relative w-full overflow-hidden bg-blue-200 py-20 px-6 md:px-12 lg:px-20">
            <div className="max-w-7xl mx-auto">
                <div className="relative flex flex-col items-center justify-center text-center min-h-[400px]">
                    {/* Left decorative image - Face with yellow flowers */}
                    <div className="absolute left-0 top-0 w-40 h-40 md:w-56 md:h-56 lg:w-72 lg:h-72 -translate-y-8 md:-translate-y-12 -translate-x-4">
                        {/* Uncomment when you have the image */}
                        {/* <Image
                            src={ourStoryFace}
                            alt="Beauty portrait"
                            width={288}
                            height={288}
                            className="w-full h-full object-cover rounded-full"
                            priority
                        /> */}

                        {/* Temporary placeholder */}
                        <div className="relative w-full h-full">
                            <div className="w-full h-full bg-gradient-to-br from-pink-100 to-pink-200 rounded-full flex items-center justify-center">
                                <span className="text-gray-400 text-sm">Face Image</span>
                            </div>
                            {/* Yellow flower decorations */}
                            <div className="absolute -bottom-2 -left-2 w-20 h-20 bg-yellow-300 rounded-full"></div>
                            <div className="absolute top-4 -left-6 w-16 h-16 bg-yellow-300 rounded-full opacity-70"></div>
                        </div>
                    </div>

                    {/* Right decorative image - Orange tube */}
                    <div className="absolute right-0 top-0 w-28 h-36 md:w-36 md:h-48 lg:w-44 lg:h-56 translate-y-8 md:translate-y-12 translate-x-4">
                        {/* Uncomment when you have the image */}
                        {/* <Image
                            src={ourStoryProduct}
                            alt="Beauty product"
                            width={176}
                            height={224}
                            className="w-full h-full object-contain transform rotate-12"
                            priority
                        /> */}

                        {/* Temporary placeholder */}
                        <div className="w-full h-full bg-gradient-to-b from-orange-400 to-orange-500 rounded-3xl flex items-center justify-center shadow-xl transform rotate-12">
                            <span className="text-white text-xs -rotate-12">Product</span>
                        </div>
                    </div>

                    {/* Content */}
                    <div className="relative z-10 max-w-5xl px-4">
                        <h2 className="text-3xl md:text-4xl lg:text-5xl font-medium text-gray-700 mb-8 lowercase">
                            our story
                        </h2>

                        <p className="text-2xl md:text-3xl lg:text-5xl font-serif leading-relaxed text-gray-700 mb-6">
                            born from a passion for beauty rituals, we celebrate individuality and bring radiant confidence to everyone
                        </p>

                        <p className="text-sm md:text-base lg:text-lg text-gray-600 italic">
                            for every body, anywhere
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default OurStory;