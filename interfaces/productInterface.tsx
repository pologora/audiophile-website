interface ImageSet {
  mobile: string;
  tablet: string;
  desktop: string;
}

interface Gallery {
  first: ImageSet;
  second: ImageSet;
  third: ImageSet;
}

interface IncludesItem {
  quantity: number;
  item: string;
}

interface OtherProducts {
  slug: string;
  name: string;
  image: ImageSet;
}

interface Product {
  id: number;
  slug: string;
  name: string;
  image: ImageSet;
  category: string;
  categoryImage: ImageSet;
  newProduct: boolean;
  price: number;
  description: string;
  features: string;
  includes: IncludesItem[];
  gallery: Gallery;
  others: OtherProducts[];
  abbr: string;
}

export default Product;
