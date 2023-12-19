import prismadb from "@/lib/prismadb";

export const getSalesCount = async () => {
  const salesCount = await prismadb.order.count({
    where: {
      isPaid: false
    },
  });

  return salesCount;
};
