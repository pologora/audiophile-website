'use client';

import { useState } from 'react';
import ProductCardGallary from './ProductCardGallary';
import ProductIncludes from './ProductIncludes';
import ProductFeatures from './ProductFeatures';
import ProductAddToCart from './ProductAddToCart';
import OtherProducts from './OtherProducts';
import { useCartContext } from '@/contexts/CartContext';
import CartProduct from '@/interfaces/CartProductInterface';
import Product from '@/interfaces/ProductInterface';

const getProductNameAndCategory = (productName: string) => {
  const index = productName.lastIndexOf(' ');
  const category = productName.slice(index + 1);
  const name = productName.slice(0, index);
  return [name, category];
};

interface ProductCardProps {
  product: Product;
}

const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  const [productQuantity, setProductQuantity] = useState(1);

  const { setCart } = useCartContext();

  const handleSubstract = () => {
    if (productQuantity > 1) {
      setProductQuantity((prev) => prev - 1);
    }
  };

  const handleAdd = () => {
    setProductQuantity((prev) => prev + 1);
  };

  const {
    description,
    features,
    gallery,
    image,
    includes,
    name,
    others,
    price,
    slug,
    newProduct,
    abbr,
  } = product;

  const handleAddToCart = () => {
    const addedProduct: CartProduct = {
      slug,
      productQuantity,
      name,
      price,
      abbr,
    };

    setCart((prev: CartProduct[]) => {
      const copyArray = [...prev];
      const itemInCart = copyArray.find((item) => item.name === name);
      if (itemInCart) {
        itemInCart.productQuantity += productQuantity;
        return copyArray;
      }
      return [...prev, addedProduct];
    });
  };

  return (
    <article>
      <div className='sm:flex sm:justify-between gap-10 items-center'>
        <div className='sm:w-2/3 block'>
          <picture>
            <source media='(min-width:1024px)' srcSet={image.desktop} />
            <source media='(min-width:640px)' srcSet={image.tablet} />
            <img
              src={image.mobile}
              alt={name}
              className='rounded-lg w-full h-full'
            />
          </picture>
        </div>
        <div className='sm:w-2/3 lg:w-full'>
          {newProduct && (
            <h5 className='overline-text text-bg-accent my-6'>New product</h5>
          )}
          <h2 className='h4 font-bold mb-6'>
            {getProductNameAndCategory(name)[0]}
            <p>{getProductNameAndCategory(name)[1]}</p>
          </h2>
          <p className='text-text-secondary my-6'>{description}</p>
          <p className='my-6 font-bold'>
            <span>$</span>
            {price}
          </p>
          <div className='flex gap-4 mb-20'>
            <ProductAddToCart
              add={handleAdd}
              substract={handleSubstract}
              quantity={productQuantity}
              addToCart={handleAddToCart}
            />
          </div>
        </div>
      </div>
      <div className='lg:flex gap-20 my-20'>
        <div className='sm:mt-20 lg:w-3/5 lg:m-0'>
          <ProductFeatures features={features} />
        </div>
        <div className='my-20 lg:m-0'>
          <ProductIncludes includes={includes} />
        </div>
      </div>
      <div>
        <ProductCardGallary gallery={gallery} name={name} />
      </div>
      <div className='my-32'>
        <OtherProducts others={others} />
      </div>
    </article>
  );
};
export default ProductCard;
