import NewProduct from '@/components/home/NewProduct';
import ShopCategoryCardsList from '@/components/shop-links/ShopCategoryCardsList';

export default function Home() {
  return (
    <main>
      {<NewProduct />}
      {<ShopCategoryCardsList />}
    </main>
  );
}
