import BestGearCard from '@/components/shared/BestGearCard';
import ShopCategoryCardsList from '@/components/shop-links/ShopCategoryCardsList';

const layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div>
      <div className='custom-container sm:px-12 px-8  m-auto'>
        {children}
        <ShopCategoryCardsList />
        <BestGearCard />
      </div>
    </div>
  );
};
export default layout;
