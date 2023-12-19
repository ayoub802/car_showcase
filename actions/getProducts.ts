
interface Category {
    id: string;
    name: string;
  };

  interface Image {
    id: string;
    url: string;
  }
interface Product {
    id: string;
    category: Category;
    name: string;
    description: string;
    price: string;
    priceBig: string,
    isFeatured: boolean;
    images: Image[]
  };
  
//   interface Query {
//     categoryId?: string;
//   }
const URL=`${process.env.NEXT_PUBLIC_API_URL}/api/product`;

const getProducts = async (): Promise<Product[]> => {

  const res = await fetch(URL);

  return res.json();
};

export default getProducts;