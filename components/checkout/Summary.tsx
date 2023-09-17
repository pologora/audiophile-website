import './summary.css';
import { useCartContext } from '@/contexts/CartContext';
import Image from 'next/image';
import Link from 'next/link';
import SummaryElement from './SummaryElement';

const TAX = 0.23;

const Summary = ({ onSubmit }: { onSubmit: () => void }) => {
  const { cart } = useCartContext();

  const total = cart.reduce(
    (acc, product) => acc + product.price * product.productQuantity,
    0
  );
  const shipping = 50;
  const vat = (total * TAX).toFixed(0);
  const grandTotal = total + shipping;

  const renderedElelments = cart.map((product) => {
    return <SummaryElement key={product.abbr} product={product} />;
  });

  return (
    <section className='rounded-lg my-10 bg-bg-light-primary px-4 py-6'>
      <h2 className='h6 font-medium mb-6'>summary</h2>
      <div>{renderedElelments}</div>
      <div className='mt-6'>
        <div className='summary-item-container'>
          <span className='summary-label'>total</span>
          <span className='summary-value'>{total}</span>
        </div>
        <div className='summary-item-container'>
          <span className='summary-label'>shipping</span>
          <span className='summary-value'>{shipping}</span>
        </div>
        <div className='summary-item-container'>
          <span className='summary-label'>vat (included)</span>
          <span className='summary-value'>{vat}</span>
        </div>
        <div className='summary-item-container'>
          <span className='summary-label'>grand total</span>
          <span className='summary-grand-total'>{grandTotal}</span>
        </div>
      </div>
      <button
        className='button bg-bg-accent hover:bg-bg-accent-hover focus:bg-bg-accent-hover text-text-light
      w-full'
        onClick={onSubmit}
      >
        continue & pay
      </button>
    </section>
  );
};
export default Summary;
