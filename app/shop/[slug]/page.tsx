import ProductDetail from "@/components/pages/shop/ProductDetail";
import ProductListing from "@/components/pages/shop/ProductListing";

const categoryMap: Record<string, string> = {
    face: "face care",
    body: "body care",
    hair: "hair care",
};

export default function ShopPage({ params }: { params: { slug: string } }) {
    const { slug } = params;

    if (categoryMap[slug]) {
        return <ProductListing initialCategory={slug} />;
    }

    return <ProductDetail />;
}