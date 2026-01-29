import Image, { StaticImageData } from "next/image";
import categoryFace from "@/assets/category-face.jpg";
import categoryBody from "@/assets/category-body.jpg";
import categoryHair from "@/assets/category-hair.jpg";

interface Category {
    name: string;
    image: StaticImageData;
    hoverColor: string;
}

const categories: Category[] = [
    { name: "face", image: categoryFace, hoverColor: "group-hover:bg-blue-200" },
    { name: "body", image: categoryBody, hoverColor: "group-hover:bg-orange-200" },
    { name: "hair", image: categoryHair, hoverColor: "group-hover:bg-yellow-200" },
];

const ShopByCategory = () => {
    return (
        <section className="w-full py-12 px-6 md:px-12 lg:px-20 bg-white">
            <div className="max-w-6xl mx-auto">
                {/* Header */}
                <div className="flex items-center justify-between mb-8">
                    <h2 className="text-2xl md:text-3xl font-medium text-gray-900 lowercase">
                        shop by category
                    </h2>
                    <button className="px-6 py-2.5 border-2 border-gray-900 rounded-full text-sm font-medium hover:bg-gray-900 hover:text-white transition">
                        shop now
                    </button>
                </div>

                {/* Cards */}
                <div className="flex flex-col md:flex-row gap-6">
                    {categories.map((category) => (
                        <div
                            key={category.name}
                            className="group flex-1 bg-gray-100 rounded-3xl p-6 cursor-pointer transition"
                        >
                            {/* Image Card with Thick Border */}
                            <div
                                className={`
                                    p-[20px] 
                                    rounded-3xl 
                                    bg-gray-200 
                                    transition-colors 
                                    duration-300
                                    ${category.hoverColor}
                                `}
                            >
                                <div className="overflow-hidden rounded-2xl">
                                    <Image
                                        src={category.image}
                                        alt={category.name}
                                        width={300}
                                        height={400}
                                        className="w-full h-[400px] object-cover"
                                        priority
                                    />
                                </div>
                            </div>

                            {/* Label */}
                            <div className="flex justify-center mt-6">
                                <span className="px-8 py-2 bg-white border border-gray-300 rounded-full text-lg font-medium text-gray-900 lowercase">
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
