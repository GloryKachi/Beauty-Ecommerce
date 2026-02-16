'use client';

type ProductListingProps = {
    initialCategory?: string | null;
};

const ProductListing = ({ initialCategory = null }: ProductListingProps) => {
    return <div>{initialCategory || 'All Products'}</div>;
};

export default ProductListing;