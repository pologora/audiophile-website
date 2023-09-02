import NewProduct from '@/components/home/NewProduct';
import YX1Earphones from '@/components/home/YX1Earphones';
import ZX7Speaker from '@/components/home/ZX7Speaker';
import ZX9Speaker from '@/components/home/ZX9Speaker';
import BestGearCard from '@/components/shared/BestGearCard';
import ShopCategoryCardsList from '@/components/shop-links/ShopCategoryCardsList';

export default function Home() {
  return (
    <main>
      <NewProduct />
      <div className='custom-container sm:px-12 px-8  m-auto'>
        <ShopCategoryCardsList />
        <BestGearCard />
        <ZX9Speaker />
        <ZX7Speaker />
        <YX1Earphones />
      </div>
    </main>
  );
}
