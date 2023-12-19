"use client"

import getProduct from '@/actions/getProduct';
import { Header } from '@/components/Header';
import Gallery from '@/components/gallery'; 
import Info from '@/components/info';
import '../../App.css'
import  ProductSimlair   from '@/components/ProductSimlair';
import Currency from '@/components/currency';
import { Footer } from '@components/Footer';
import React, { useEffect, useState } from 'react';
import ProductDetailPage from "./productDetail"
export const revalidate = 0;

// interface ProductPageProps {
//   params: {
//     productId: string;
//   },
// }

const ProductPage = async ({ params }: { params: { productId: string } }) => {

  const product = await getProduct(params.productId);

  
  if (!product) {
    return null;
  }

  return (
    <div className="w-full overflow-hidden bg-[#fff]">
        <Header />
        <div className='mt-[88px] lg:mt-[28px]'>
            <section>
                <div className="container">
                <nav className="flex">
                    <ol role="list" className="flex items-center">
                        <li className="text-left">
                        <div className="-m-1">
                            <a href="/" className="rounded-md p-1 text-sm font-medium text-gray-600 focus:text-gray-900 focus:shadow hover:text-gray-800"> Home </a>
                        </div>
                        </li>

                        <li className="text-left">
                        <div className="flex items-center">
                            <span className="mx-2 text-gray-400">/</span>
                            <div className="-m-1">
                            <a href="#" className="rounded-md p-1 text-sm font-medium text-gray-600 focus:text-gray-900 focus:shadow hover:text-gray-800">{product.category.name} </a>
                            </div>
                        </div>
                        </li>

                    </ol>
            </nav>
                    <div className="px-4 py-10 sm:px-6 lg:px-8">
                    <div className="lg:grid lg:grid-cols-2 lg:items-start lg:gap-x-8">
                        <Gallery images={product.images} />
                        <div className="mt-10 px-4 sm:mt-16 sm:px-0 lg:mt-0">
                            <div className='flex gap-3 items-center mb-2'>
                                <h3><Currency value={product.price}/></h3>
                                <h3>-</h3>
                                <h3><Currency value={product.priceBig}/></h3>
                            </div>
                        <Info data={product} />
                        </div>
                    </div>
                    <hr className="my-10" />
                    <ProductSimlair product={product}/>
                    </div>
                </div>
            </section>

           <Footer />

        </div>
    </div>  

  )
}



export default ProductPage;