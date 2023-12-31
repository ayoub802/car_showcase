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

const getProduct = async (id: string): Promise<Product> => {
  const res = await fetch(`${URL}/${id}`);

  return res.json();
};

export default getProduct;