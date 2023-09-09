type ProductAddToCartProps = {
  quantity: number;
  substract: () => void;
  add: () => void;
  addToCart: () => void;
};

const ProductAddToCart = ({
  quantity,
  substract,
  add,
  addToCart,
}: ProductAddToCartProps) => {
  const substractionButtonStateClass =
    quantity <= 1 ? 'cursor-not-allowed' : 'hover:text-bg-accent';
  return (
    <>
      <div>
        <button
          className={`change-quantity-btn  ${substractionButtonStateClass}`}
          onClick={substract}
        >
          -
        </button>
        <span className='change-quantity-btn'>{quantity}</span>
        <button
          className='change-quantity-btn hover:text-bg-accent'
          onClick={add}
        >
          +
        </button>
      </div>
      <button
        className='button bg-bg-accent hover:bg-bg-accent-hover active:bg-bg-accent-hover
text-text-light'
        onClick={addToCart}
      >
        add to cart
      </button>
    </>
  );
};
export default ProductAddToCart;
