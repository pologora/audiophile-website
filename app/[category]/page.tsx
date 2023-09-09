import CategoryProductCard from '@/components/categoryCard/CategoryProductCard';
import data from '@/data/categories.json';

const Category = ({ params }: { params: { category: string } }) => {
  const { category } = params;
  const selectedCategory = data.find((item) => item.name === category);

  const renderedItemsCards = selectedCategory?.products.map(
    (item, i: number) => (
      <CategoryProductCard key={item.name} cardData={item} index={i} />
    )
  );

  return (
    <section className='pt-40'>
      <h2
        className='h5 font-normal bg-bg-dark text-text-light absolute top-0 left-0 right-0 text-center py-8 lg:top-20
      lg:py-16'
      >
        {category}
      </h2>
      {renderedItemsCards}
    </section>
  );
};
export default Category;
