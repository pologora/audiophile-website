const ProductFeatures = ({ features }: { features: string }) => {
  const featureTextParagrafs = features.split('\n\n');

  return (
    <div>
      <h3 className='h5 font-bold mb-6'>features</h3>
      <div className='text-text-secondary'>
        {featureTextParagrafs.map((paragraph, index) => (
          <p className='my-6' key={index}>
            {paragraph}
          </p>
        ))}
      </div>
    </div>
  );
};
export default ProductFeatures;
