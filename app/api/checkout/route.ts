import { NextResponse } from "next/server";

import prismadb from "@/lib/prismadb";

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Methods": "GET, POST, PUT, DELETE, OPTIONS",
  "Access-Control-Allow-Headers": "Content-Type, Authorization",
};

export async function OPTIONS() {
  return NextResponse.json({}, { headers: corsHeaders });
}

export async function POST(
  req: Request,
  { params }: { params: { storeId: string } }
) {
  try{
    const { productIds, quantity, volume, nomComplet, ville, email, phone, address } = await req.json();
    
    console.log("My Request ",req.json());
    console.log('Received data:', { productIds, quantity, volume, nomComplet, ville, email, phone });

  
    if (!productIds || productIds.length === 0) {
      return new NextResponse("Product ids are required", { status: 400 });
    }
  
  
  
    const order = await prismadb.order.create({
      data: {
        quantity: quantity,
        volume: volume,
        phone: phone,
        nomComplet: nomComplet,
        ville: ville,
        address: address,
        email: email,
        isPaid: false,
        orderItems: {
          create: productIds.map((productId: string) => ({
            product: {
              connect: {
                id: productId
              }
            }
          }))
        }
      }
    });
  
    return NextResponse.json({}, {
      headers: corsHeaders
    });

  }
  catch (error) {
    console.error('Error processing order:', error);
    console.log('Received data:', { req });

    return new NextResponse('Internal Server Error', { status: 500, });
  }
};