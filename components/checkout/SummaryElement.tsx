import CartProduct from '@/interfaces/CartProductInterface';
import Image from 'next/image';

const SummaryElement = ({ product }: { product: CartProduct }) => {
  return (
    <div className='flex justify-between items-center mb-4'>
      <div>
        <Image
          src={`/assets/cart/image-${product.slug}.jpg`}
          alt={'product'}
          width={70}
          height={70}
          className='rounded-md'
        />
      </div>
      <div className='flex justify-between w-full ml-2'>
        <div className='text-left'>
          <p className='font-bold uppercase'>{product.abbr}</p>
          <p className='text-text-secondary'>
            <span>$</span>
            <span>{product.price}</span>
          </p>
        </div>
        <div>
          <p className='text-text-secondary'>
            <span>x</span>
            <span>{product.productQuantity}</span>
          </p>
        </div>
      </div>
    </div>
  );
};
export default SummaryElement;
