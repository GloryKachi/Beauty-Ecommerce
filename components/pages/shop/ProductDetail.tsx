"use client";

import { useState } from "react";
import { useParams } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import { Minus, Plus, Heart } from "lucide-react";
import { Button } from "@/components/ui/button";
import Footer from "@/components/Footer";

import productSerum from "@/assets/product-serum.jpg";
import productMoisturizer from "@/assets/product-moisturizer.jpg";
import productCream from "@/assets/product-cream.jpg";
import productOil from "@/assets/product-oil.jpg";
import productToner from "@/assets/product-toner.jpg";

const products = [
    { id: "radiant-renewal-serum", name: "radiant renewal serum", price: 27.0, image: productSerum, category: "face care", description: "I'm a product description. I'm a great place to add more details about your product such as sizing, material, care instructions and cleaning instructions." },
    { id: "hydraglow-moisturizer", name: "hydraglow moisturizer", price: 32.0, image: productMoisturizer, category: "face care", description: "I'm a product description. I'm a great place to add more details about your product such as sizing, material, care instructions and cleaning instructions." },
    { id: "radiance-cleanser", name: "radiance cleanser", price: 35.0, image: productOil, category: "body care", description: "I'm a product description. I'm a great place to add more details about your product such as sizing, material, care instructions and cleaning instructions." },
    { id: "glow-face-cream", name: "glow face cream", price: 29.0, image: productCream, category: "face care", description: "I'm a product description. I'm a great place to add more details about your product such as sizing, material, care instructions and cleaning instructions." },
    { id: "revive-facial-oil", name: "revive facial oil", price: 38.0, image: productOil, category: "hair care", description: "I'm a product description. I'm a great place to add more details about your product such as sizing, material, care instructions and cleaning instructions." },
    { id: "calming-toner-mist", name: "calming toner mist", price: 24.0, image: productToner, category: "body care", description: "I'm a product description. I'm a great place to add more details about your product such as sizing, material, care instructions and cleaning instructions." },
];

const accordionSections = [
    { title: "product info", content: "This product is made with natural ingredients and is suitable for all skin types. Apply daily for best results." },
    { title: "return & refund policy", content: "We accept returns within 30 days of purchase. Items must be unopened and in original packaging for a full refund." },
    { title: "shipping info", content: "Standard shipping takes 3-5 business days. Express shipping is available at checkout for 1-2 business day delivery." },
];

const ProductDetail = () => {
    // Next.js: useParams returns an object; productId comes from the folder name [productId]
    const params = useParams<{ slug: string }>();
    const productId = params?.slug;

    const [quantity, setQuantity] = useState(1);
    const [openSections, setOpenSections] = useState<Record<string, boolean>>({});
    const [wishlisted, setWishlisted] = useState(false);

    const product = products.find((p) => p.id === productId);

    if (!product) {
        return (
            <div className="min-h-screen bg-background flex items-center justify-center">
                <div className="text-center">
                    <h1 className="text-2xl font-bold text-foreground mb-4">Product not found</h1>
                    {/* Next.js Link: href is a string, no "to" prop */}
                    <Link href="/shop" className="text-primary underline">
                        Back to shop
                    </Link>
                </div>
            </div>
        );
    }

    const toggleSection = (title: string) => {
        setOpenSections((prev) => ({ ...prev, [title]: !prev[title] }));
    };

    return (
        <div className="min-h-screen bg-card-surface">
            <section className="w-full py-12 px-6 md:px-12 lg:px-20">
                <div className="max-w-6xl mx-auto">
                    {/* Back link — Next.js Link uses href */}
                    <Link
                        href="/shop"
                        className="text-sm text-muted-foreground hover:text-foreground mb-8 inline-block lowercase"
                    >
                        ← back to shop
                    </Link>

                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16">
                        {/* Product Image — Next.js Image component */}
                        <div className="rounded-2xl overflow-hidden bg-product-card aspect-[3/4] relative">
                            <Image
                                src={product.image}
                                alt={product.name}
                                fill
                                className="object-cover"
                                sizes="(max-width: 1024px) 100vw, 50vw"
                            />
                        </div>

                        {/* Product Info */}
                        <div className="flex flex-col py-2">
                            <h1 className="text-3xl md:text-4xl font-bold text-foreground lowercase">
                                {product.name}
                            </h1>
                            <p className="text-xl text-foreground mt-2">
                                ${product.price.toFixed(2)}
                            </p>
                            <p className="text-base text-foreground mt-6 leading-relaxed">
                                {product.description}
                            </p>

                            {/* Quantity Selector */}
                            <div className="flex items-center border border-border rounded-md w-fit mt-8">
                                <button
                                    onClick={() => setQuantity(Math.max(1, quantity - 1))}
                                    className="px-3 py-2 text-foreground hover:bg-muted transition-colors"
                                    aria-label="Decrease quantity"
                                >
                                    <Minus className="w-4 h-4" />
                                </button>
                                <span className="px-4 py-2 text-foreground font-medium min-w-[40px] text-center">
                  {quantity}
                </span>
                                <button
                                    onClick={() => setQuantity(quantity + 1)}
                                    className="px-3 py-2 text-foreground hover:bg-muted transition-colors"
                                    aria-label="Increase quantity"
                                >
                                    <Plus className="w-4 h-4" />
                                </button>
                            </div>

                            {/* Action Buttons */}
                            <div className="flex items-center gap-3 mt-6">
                                <Button className="flex-1 h-12 rounded-md bg-[hsl(65,80%,65%)] text-foreground font-medium text-base hover:bg-[hsl(65,80%,55%)] lowercase">
                                    add to cart
                                </Button>
                                <Button
                                    variant="outline"
                                    className="flex-1 h-12 rounded-md border-foreground text-foreground font-medium text-base hover:bg-muted lowercase"
                                >
                                    buy now
                                </Button>
                                <Button
                                    variant="outline"
                                    size="icon"
                                    onClick={() => setWishlisted(!wishlisted)}
                                    className={`h-12 w-12 shrink-0 rounded-md border-foreground ${wishlisted ? "bg-foreground text-background" : "text-foreground hover:bg-muted"}`}
                                    aria-label="Add to wishlist"
                                >
                                    <Heart className={`w-5 h-5 ${wishlisted ? "fill-current" : ""}`} />
                                </Button>
                            </div>

                            {/* Accordion Sections */}
                            <div className="mt-10 space-y-0">
                                {accordionSections.map((section) => (
                                    <div key={section.title}>
                                        <button
                                            onClick={() => toggleSection(section.title)}
                                            className="flex items-center justify-between w-full py-4 border-t border-border"
                                        >
                      <span className="text-lg font-semibold text-foreground lowercase">
                        {section.title}
                      </span>
                                            {openSections[section.title] ? (
                                                <Minus className="w-5 h-5 text-foreground" />
                                            ) : (
                                                <Plus className="w-5 h-5 text-foreground" />
                                            )}
                                        </button>
                                        {openSections[section.title] && (
                                            <p className="text-sm text-muted-foreground pb-4 leading-relaxed">
                                                {section.content}
                                            </p>
                                        )}
                                    </div>
                                ))}
                                <div className="border-t border-border" />
                            </div>

                            {/* Social Icons */}
                            <div className="flex items-center gap-4 mt-6">
                                {["WhatsApp", "Facebook", "Pinterest", "X"].map((platform) => (
                                    <button
                                        key={platform}
                                        className="text-foreground hover:text-muted-foreground transition-colors"
                                        aria-label={`Share on ${platform}`}
                                    >
                                        <SocialIcon name={platform} />
                                    </button>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <Footer />
        </div>
    );
};

const SocialIcon = ({ name }: { name: string }) => {
    const size = "w-5 h-5";
    switch (name) {
        case "WhatsApp":
            return (
                <svg className={size} viewBox="0 0 24 24" fill="currentColor">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                </svg>
            );
        case "Facebook":
            return (
                <svg className={size} viewBox="0 0 24 24" fill="currentColor">
                    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                </svg>
            );
        case "Pinterest":
            return (
                <svg className={size} viewBox="0 0 24 24" fill="currentColor">
                    <path d="M12.017 0C5.396 0 .029 5.367.029 11.987c0 5.079 3.158 9.417 7.618 11.162-.105-.949-.199-2.403.041-3.439.219-.937 1.406-5.957 1.406-5.957s-.359-.72-.359-1.781c0-1.668.967-2.914 2.171-2.914 1.023 0 1.518.769 1.518 1.69 0 1.029-.655 2.568-.994 3.995-.283 1.194.599 2.169 1.777 2.169 2.133 0 3.772-2.249 3.772-5.495 0-2.873-2.064-4.882-5.012-4.882-3.414 0-5.418 2.561-5.418 5.207 0 1.031.397 2.138.893 2.738a.36.36 0 01.083.345l-.333 1.36c-.053.22-.174.267-.402.161-1.499-.698-2.436-2.889-2.436-4.649 0-3.785 2.75-7.262 7.929-7.262 4.163 0 7.398 2.967 7.398 6.931 0 4.136-2.607 7.464-6.227 7.464-1.216 0-2.359-.631-2.75-1.378l-.748 2.853c-.271 1.043-1.002 2.35-1.492 3.146C9.57 23.812 10.763 24 12.017 24c6.624 0 11.99-5.367 11.99-11.988C24.007 5.367 18.641 0 12.017 0z" />
                </svg>
            );
        case "X":
            return (
                <svg className={size} viewBox="0 0 24 24" fill="currentColor">
                    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                </svg>
            );
        default:
            return null;
    }
};

export default ProductDetail;