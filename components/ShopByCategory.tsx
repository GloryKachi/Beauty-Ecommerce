import faceImage from "@/assets/category-face.jpg";
import bodyImage from "@/assets/category-body.jpg";
import hairImage from "@/assets/category-hair.jpg";

const categories = [
    { name: "face", image: faceImage },
    { name: "body", image: bodyImage },
    { name: "hair", image: hairImage },
];

const ShopByCategory = () => {
    return (
        <section className="w-full py-16 px-6 md:px-12 lg:px-20 bg-card-surface">
            <div className="max-w-7xl mx-auto">
                <div className="flex items-center justify-between mb-10">
                    <h2 className="text-2xl md:text-3xl font-medium text-foreground lowercase">
                        shop by category
                    </h2>
                    <button className="px-6 py-2.5 rounded-full border border-foreground text-foreground text-sm font-medium hover:bg-foreground hover:text-background transition-colors duration-300">
                        shop now
                    </button>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    {categories.map((category) => (
                        <div
                            key={category.name}
                            className="group relative flex flex-col cursor-pointer"
                        >
                            <div className="relative overflow-hidden rounded-3xl aspect-[3/4] bg-muted">
                                <img
                                    src={category.image.src}
                                    alt={`${category.name} category`}
                                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                                />
                            </div>
                            <div className="flex justify-center mt-4">
              <span className="inline-block px-8 py-3 bg-category-label font-bold rounded-md text-2xl md:text-3xl lowercase">
    {category.name}
</span>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default ShopByCategory;
