"use client";

import Image, { StaticImageData } from "next/image";

import productSerum from "@/assets/product-serum.jpg";
import productEyeCream from "@/assets/product-eyecream.jpg";
import productMoisturizer from "@/assets/product-moisturizer.jpg";
import productCleanser from "@/assets/product-cleanser.jpg";

interface Product {
    id: number;
    name: string;
    price: number;
    image: StaticImageData;
}

const products: Product[] = [
    { id: 1, name: "radiant renewal serum", price: 27.0, image: productSerum },
    { id: 2, name: "luminous eye cream", price: 25.0, image: productEyeCream },
    { id: 3, name: "hydraglow moisturizer", price: 32.0, image: productMoisturizer },
    { id: 4, name: "radiance cleanser", price: 35.0, image: productCleanser },
];

const BestSellers = () => {
    return (
        <section className="w-full px-6 py-12 md:px-12 lg:px-20">
            {/* Header */}
            <div className="mb-8 flex items-center justify-between">
                <h2 className="text-2xl font-medium tracking-tight text-gray-900 md:text-3xl">
                    best sellers
                </h2>
                <button className="rounded-full border border-gray-900 px-6 py-2.5 text-sm font-medium text-gray-900 transition-colors hover:bg-gray-900 hover:text-white">
                    view more
                </button>
            </div>

            {/* Product Grid */}
            <div className="grid grid-cols-2 gap-4 sm:gap-6 lg:grid-cols-4">
                {products.map((product) => (
                    <div key={product.id} className="group cursor-pointer">
                        {/* Product Image */}
                        <div className="relative mb-4 aspect-[4/5] overflow-hidden rounded-lg bg-gray-100">
                            <Image
                                src={product.image}
                                alt={product.name}
                                fill
                                className="object-cover transition-transform duration-300 group-hover:scale-105"
                            />
                            {/* Best Seller Badge */}
                            <span className="absolute left-3 top-3 rounded-full bg-amber-100 px-3 py-1 text-xs font-medium text-amber-800">
                best seller
              </span>
                        </div>

                        {/* Product Info */}
                        <div className="space-y-1">
                            <h3 className="text-sm font-normal text-gray-900">{product.name}</h3>
                            <p className="text-sm text-gray-500">${product.price.toFixed(2)}</p>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default BestSellers;
