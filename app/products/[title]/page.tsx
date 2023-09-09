'use client';
import ProductCard from '@/components/productCard/ProductCard';
import GoBackBtn from '@/components/shared/GoBackBtn';

import productData from '@/data/products.json';

const Product = ({ params }: { params: { title: string } }) => {
  const { title } = params;
  const product = productData.find((item) => item.slug === title);
  return (
    <section>
      <GoBackBtn />
      {product ? (
        <ProductCard product={product} />
      ) : (
        <div>Product not found</div>
      )}
    </section>
  );
};
export default Product;
