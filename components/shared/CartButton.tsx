import { AiOutlineShoppingCart } from 'react-icons/ai';

const CartButton = ({ onClick }: { onClick: () => void }) => {
  return (
    <button onClick={onClick}>
      <AiOutlineShoppingCart size={28} color='white' />
    </button>
  );
};
export default CartButton;
