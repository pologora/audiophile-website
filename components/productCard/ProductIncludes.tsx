type ProductIncludesProps = {
  includes: {
    quantity: number;
    item: string;
  }[];
};

const ProductIncludes = ({ includes }: ProductIncludesProps) => {
  return (
    <div className='sm:flex justify-between items-start lg:block'>
      <h3 className='h5 font-bold'>in the box</h3>
      <ul className='my-6 sm:m-0 sm:mr-20 lg:mt-6'>
        {includes?.map((item) => (
          <li key={item.item} className='my-2 sm:first:mt-0'>
            <span className='text-bg-accent mr-6 font-bold'>
              {item.quantity}x
            </span>
            <span className='text-text-secondary'>{item.item}</span>
          </li>
        ))}
      </ul>
    </div>
  );
};
export default ProductIncludes;
