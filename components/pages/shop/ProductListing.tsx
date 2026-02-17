"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Minus } from "lucide-react";
import { Slider } from "@/components/ui/slider";

import productSerum from "@/assets/product-serum.jpg";
import productMoisturizer from "@/assets/product-moisturizer.jpg";
import productCream from "@/assets/product-cream.jpg";
import productOil from "@/assets/product-oil.jpg";
import productToner from "@/assets/product-toner.jpg";

const browseCategories = [
    "All Products",
    "body care",
    "face care",
    "hair care",
    "best sellers",
    "new arrivals",
];

const products = [
    { id: "radiant-renewal-serum", name: "radiant renewal serum", price: 27.0, image: productSerum, badge: "best seller", category: "face care" },
    { id: "hydraglow-moisturizer", name: "hydraglow moisturizer", price: 32.0, image: productMoisturizer, badge: "best seller", category: "face care" },
    { id: "radiance-cleanser", name: "radiance cleanser", price: 35.0, image: productOil, badge: "best seller", category: "face care" },
    { id: "glow-face-cream", name: "glow face cream", price: 29.0, image: productCream, badge: null, category: "face care" },
    { id: "revive-facial-oil", name: "revive facial oil", price: 38.0, image: productOil, badge: "new", category: "body care" },
    { id: "calming-toner-mist", name: "calming toner mist", price: 24.0, image: productToner, badge: null, category: "hair care" },
];

interface ProductListingProps {
    initialCategory?: string | null;
}

const categoryMap: Record<string, string> = {
    face: "face care",
    body: "body care",
    hair: "hair care",
};

const ProductListing = ({ initialCategory }: ProductListingProps) => {
    const mappedCategory = initialCategory
        ? categoryMap[initialCategory] || "All Products"
        : "All Products";
    const [activeCategory, setActiveCategory] = useState(mappedCategory);
    const [priceRange, setPriceRange] = useState([25, 35]);

    const filteredProducts = products.filter((product) => {
        const categoryMatch =
            activeCategory === "All Products" ||
            product.category === activeCategory ||
            (activeCategory === "best sellers" && product.badge === "best seller") ||
            (activeCategory === "new arrivals" && product.badge === "new");

        const priceMatch = product.price >= priceRange[0] && product.price <= priceRange[1];

        return categoryMatch && priceMatch;
    });

    return (
        <section className="w-full py-16 px-6 md:px-12 lg:px-20 bg-card-surface">
            <div className="max-w-7xl mx-auto flex gap-12">
                {/* Sidebar */}
                <aside className="hidden lg:block w-56 shrink-0">
                    {/* Browse By */}
                    <div className="mb-10">
                        <h3 className="text-xl font-bold text-foreground lowercase mb-4">
                            browse by
                        </h3>
                        <div className="w-full h-px bg-border mb-4" />
                        <ul className="space-y-2.5">
                            {browseCategories.map((cat) => (
                                <li key={cat}>
                                    <button
                                        onClick={() => setActiveCategory(cat)}
                                        className={`text-base lowercase transition-colors ${
                                            activeCategory === cat
                                                ? "text-foreground underline underline-offset-4 font-medium"
                                                : "text-muted-foreground hover:text-foreground"
                                        }`}
                                    >
                                        {cat}
                                    </button>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Filter By */}
                    <div>
                        <h3 className="text-xl font-bold text-foreground lowercase mb-4">
                            filter by
                        </h3>
                        <div className="w-full h-px bg-border mb-4" />

                        {/* Price */}
                        <div>
                            <div className="flex items-center justify-between mb-4">
                                <span className="text-base text-foreground">Price</span>
                                <Minus className="w-4 h-4 text-foreground" />
                            </div>
                            <Slider
                                value={priceRange}
                                onValueChange={setPriceRange}
                                min={0}
                                max={50}
                                step={1}
                                className="mb-3"
                            />
                            <div className="flex justify-between text-sm text-foreground">
                                <span>${priceRange[0]}</span>
                                <span>${priceRange[1]}</span>
                            </div>
                        </div>
                    </div>
                </aside>

                {/* Product Grid */}
                <div className="flex-1">
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                        {filteredProducts.map((product) => (
                            <Link
                                key={product.id}
                                href={`/shop/${product.id}`}
                                className="group cursor-pointer"
                            >
                                <div className="relative rounded-3xl overflow-hidden aspect-[3/4] bg-product-card">
                                    <Image
                                        src={product.image}
                                        alt={product.name}
                                        fill
                                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                                        className="object-cover group-hover:scale-105 transition-transform duration-500"
                                    />
                                    {product.badge && (
                                        <span className="absolute top-4 left-4 px-4 py-1.5 bg-product-badge text-foreground text-sm font-medium rounded-md">
                                            {product.badge}
                                        </span>
                                    )}
                                </div>
                                <div className="mt-3 px-1">
                                    <h4 className="text-base font-medium text-foreground lowercase">
                                        {product.name}
                                    </h4>
                                    <p className="text-base text-foreground mt-0.5">
                                        ${product.price.toFixed(2)}
                                    </p>
                                </div>
                            </Link>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ProductListing;