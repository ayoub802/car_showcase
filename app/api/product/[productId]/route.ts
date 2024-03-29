import prismadb from "@/lib/prismadb";
import { NextResponse } from "next/server";

interface IParams {
  productId?: string;
}

export async function DELETE(
  req: Request,
  { params }: { params: IParams }
    ) {

      try {

        console.log('Received delete request for product with ID:', params.productId);

        if (!params.productId) {
          return new NextResponse("Product id is required", { status: 400 });
        }
        const { productId } = params;
    
        if (!productId || typeof productId !== 'string') {
          throw new Error('Invalid ID');
        }
        const product= await prismadb.product.delete({
          where: {
            id: productId,
          },
          include: {
            orderItems: {
              include: {
                order: true,
              },
            }, // Include associated orderItems
          },
        });
        // const product = await prismadb.product.delete({
        //   where: {
        //     id: params.id
        //   },
        // });
        for (const orderItem of product.orderItems) {
          await prismadb.orderItem.deleteMany({
            where: {
              productId: productId,
            },
          });
        }
            // Now, delete the associated order

      
        return NextResponse.json(product);
      } catch (error) {
        console.error('Error deleting user:', error);
        return new NextResponse("Internal error", { status: 500});
      }
    };
export async function GET(
  req: Request,
  { params }: { params: IParams }
    ) {
      const { searchParams } = new URL(req.url)
      try {

        
        if (!params.productId) {
          return new NextResponse("Product id is required", { status: 400 });
        }
        const { productId } = params;
    
        if (!productId || typeof productId !== 'string') {
          throw new Error('Invalid ID');
        }
        const product= await prismadb.product.findUnique({
          where: {
            id: productId,
          },
          include: {
            images: true,
            category: true,
          }
        });

        // const product = await prismadb.product.delete({
        //   where: {
        //     id: params.id
        //   },
        // });
      
        return NextResponse.json(product);
      } catch (error) {
        console.error('Error deleting user:', error);
        return new NextResponse("Internal error", { status: 500 });
      }
};
export async function PATCH(
  req: Request,
  { params }: { params: { productId: string, } }
) {
  try {

    const body = await req.json();

    const { name, price, categoryId, images, description, priceBig} = body;



    if (!params.productId) {
      return new NextResponse("Product id is required", { status: 400 });
    }

    if (!name) {
      return new NextResponse("Name is required", { status: 400 });
    }

    if (!images || !images.length) {
      return new NextResponse("Images are required", { status: 400 });
    }

    if (!price) {
      return new NextResponse("Price is required", { status: 400 });
    }

    if (!categoryId) {
      return new NextResponse("Category id is required", { status: 400 });
    }

    await prismadb.product.update({
      where: {
        id: params.productId
      },
      data: {
        name,
        price,
        priceBig,
        categoryId,
        description,
        images: {
          deleteMany: {},
        },
      },
    });

    const product = await prismadb.product.update({
      where: {
        id: params.productId
      },
      data: {
        images: {
          createMany: {
            data: [
              ...images.map((image: { url: string }) => image),
            ],
          },
        },
      },
    })
  
    return NextResponse.json(product);
  } catch (error) {
    console.log('[PRODUCT_PATCH]', error);
    return new NextResponse("Internal error", { status: 500 });
  }
};
