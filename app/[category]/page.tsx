import data from '@/data/categories.json';

const page = ({ params }: { params: { category: string } }) => {
  const { category } = params;
  const selectedCategory = data.find((item) => item.name === category);

  const renderedItemsCards = selectedCategory?.products.map((item, i) => (
    <p key={item.name}>{item.about}</p>
  ));

  return (
    <section>
      <h2 className='h3'>{category}</h2>
      {renderedItemsCards}
    </section>
  );
};
export default page;
