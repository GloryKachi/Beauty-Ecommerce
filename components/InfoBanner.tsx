const InfoBanner = () => {
    return (
        <div className="relative w-full overflow-hidden bg-[#e8f05f] py-3">
            <div className="flex">
                <div className="animate-marquee flex whitespace-nowrap">
                    {Array.from({ length: 20 }).map((_, i) => (
                        <span key={i} className="inline-flex items-center text-sm font-semibold text-black md:text-base">
                            free shipping on orders over ₦30000
                            <span className="mx-4">✿</span>
                        </span>
                    ))}
                </div>
                <div className="animate-marquee flex whitespace-nowrap" aria-hidden="true">
                    {Array.from({ length: 20 }).map((_, i) => (
                        <span key={i} className="inline-flex items-center text-sm font-semibold text-black md:text-base">
                            free shipping on orders over ₦30000
                            <span className="mx-4">✿</span>
                        </span>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default InfoBanner;