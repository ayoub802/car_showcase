import { format } from "date-fns";

import prismadb from "@/lib/prismadb";
import { formatter } from "@/lib/utils";

import { OrderColumn } from "./components/columns"
import { OrderClient } from "./components/client";


const OrdersPage = async () => {
  const orders = await prismadb.order.findMany({
    include: {
      orderItems: {
        include: {
          product: true
        }
      }
    },
    orderBy: {
      createdAt: 'desc'
    }

    
  }
  );
  


  const formattedOrders: OrderColumn[] = orders.map((item, index) => ({
    id: item.id,
    phone: item.phone,
    nomComplet: item.nomComplet,
    address: item.address,
    ville: item.ville,
    products: item.orderItems.map((orderItem) => orderItem.product.name).join(` , ${"\n"}`),
    totalPrice: formatter.format(item.orderItems.reduce((total, obj) => {
      return total + (Number(obj.product.price) * item.quantity)
    }, 0)),
    isPaid: item.isPaid,
    createdAt: format(item.createdAt, 'MMMM do, yyyy'),
  }));

  return (
    <div className="flex-col">

      <div className="flex-1 space-y-4 p-8 pt-6">
        <OrderClient data={formattedOrders} />
      </div>
    </div>
  );
};

export default OrdersPage;