const OurStory = () => {
    return (
        <section className="w-full bg-[#b8d4f1] py-20 px-6 md:px-12 lg:px-20">
            <div className="max-w-5xl mx-auto text-center">
                {/* Title */}
                <h2 className="text-4xl md:text-5xl font-bold text-[#4a5f52] mb-8 lowercase">
                    our story
                </h2>

                {/* Main tagline */}
                <p className="text-3xl md:text-4xl lg:text-5xl font-normal text-[#4a5f52] leading-96 mb-6">
                    born from a passion for beauty rituals, we celebrate individuality and bring radiant confidence to everyone
                </p>

                {/* Subtitle */}
                <p className="text-base md:text-lg text-[#4a5f52]/80 lowercase">
                    for every body, anywhere
                </p>
            </div>
        </section>
    );
};

export default OurStory;