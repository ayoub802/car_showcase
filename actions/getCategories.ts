interface Category {
    id: string;
    name: string;
};

const URL=`${process.env.NEXT_PUBLIC_API_URL}/api/stores`;

const getCategories = async (): Promise<Category[]> => {
  const res = await fetch(URL);

  return res.json();
};

export default getCategories;