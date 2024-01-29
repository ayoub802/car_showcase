"use client";

import { ShoppingCart } from "lucide-react";
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
    price: string;
    priceBig: string;
    isFeatured: boolean;
    description: string;
    images: Image[]
  };
import { Button } from "./ui/button";
import { useEffect, useState } from "react";
import useCart from "@/hooks/use-cart";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "./ui/select";
import Currency from "./currency";

interface InfoProps {
  data: Product
};

const Info: React.FC<InfoProps> = ({ data }) => {

  const [Volume, setVolume] = useState<number>(0)
  const [scrollY, setScrollY] = useState(0);
  const [quanity, setQuantity] = useState(1);
  const [showStickyButton, setShowStickyButton] = useState(false);

  const cart = useCart();

  const Increment = () => {
    return setQuantity(quanity + 1)
  }
  const Decrement = () => {
    if(quanity > 1){
      return setQuantity(quanity - 1)
    }
  }

  const handleScroll = () => {
    setScrollY(window.scrollY);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    // Clean up the event listener on component unmount
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  useEffect(() => {
    // Adjust the threshold value as needed
    setShowStickyButton(scrollY > 500);
  }, [scrollY]);

  const onAddToCart = (data:any, quanity: any, Volume: any) => {
    cart.addItem(data, quanity, Volume)
  };

  console.log("Volume:",Volume);
  
    const StickyCartButton = () => {
      return (
        <div className={`fixed bottom-0 z-20 max-w-max mx-auto py-2 pl-2 transition-all duration-100 ${showStickyButton ? 'opacity-100' : 'opacity-0'}`}>
          {/* Adjust the styling based on your design */}
          <Button
            onClick={() => onAddToCart(data, quanity, Volume)}
            variant={"info"}
            size={"info"}
            className="flex items-center gap-x-2 w-[350px] z-[1000] border-[#000] border hover:!bg-[#000] hover:text-white transition-all duration-300"
          >
            Add To Cart
            <ShoppingCart size={20} />
          </Button>
        </div>
      );
    };

  return ( 
    <div>
      <h1 className="md:text-3xl tex-[18px] font-bold text-gray-900 hidden md:block">{data.name}</h1>
      <div className="mt-3 flex items-end justify-between">
        <p className="text-[18px] text-gray-900" dangerouslySetInnerHTML={{ __html: data.description}}>
          {/* {data.description} */}
        </p>
      </div>

      {/* VOLUME */}
      <div className="flex items-center gap-2">
          <div className='my-3 max-w-max'>
            <Select onValueChange={(val: any) => setVolume(val)}>
              <SelectTrigger  className="placeholder:text-[#000] gap-2 !focus:ring-inset !ring-offset-0 !focus:ring-offset-0 !focus:ring-offset-[#fff]">
                <SelectValue placeholder="Volume" className="placeholder:text-[#000] pr-2" />
              </SelectTrigger>
            <SelectContent>
                <SelectItem value="30">30 ML</SelectItem>
                <SelectItem value="50">50 ML</SelectItem>
            </SelectContent>
          </Select>
          </div>
          
          {
            Volume != 0
            ?
            <>
              {
                Volume == 30 
                ?
                <Currency value={data.price}/>
                :
                <Currency value={data.priceBig}/>
              }
            </>
            :
            <></>
          }

      </div>

      <hr className="my-2" />
      <div className="mt-10 hidden md:flex items-center gap-x-3">
      <div className="inline-flex items-center px-2 font-semibold text-gray-500 border border-[#000] rounded-md ">
            <button onClick={() => Decrement()} className="py-1 pr-2 border-r border-[#000]  dark:text-gray-400 hover:text-gray-700">
                      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-dash text-[#000]" viewBox="0 0 16 16">
                      <path d="M4 8a.5.5 0 0 1 .5-.5h7a.5.5 0 0 1 0 1h-7A.5.5 0 0 1 4 8z">
                      </path>
                      </svg>
              </button>
              <span className="w-12 px-2 py-2 text-center border-0 rounded-md bg-gray-50 text-[#000]">{quanity}</span>
            <button onClick={() => Increment()} className="py-1 pl-2 border-l border-[#000]  hover:text-gray-700 dark:text-gray-400">
                      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-plus text-[#000]" viewBox="0 0 16 16">
                      <path d="M8 4a.5.5 0 0 1 .5.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3A.5.5 0 0 1 8 4z">
                      </path>
                      </svg>
              </button>
      </div>
        <Button variant={"info"} size={"info"} onClick={() => onAddToCart(data, quanity, Volume)} className="flex px-4 py-2 items-center gap-x-2 border-[#000] border hover:!bg-[#000] hover:text-white transition-all duration-300">
          Add To Cart
          <ShoppingCart size={20} />
        </Button>
      </div>

      <div className="flex md:hidden items-center gap-y-3 mt-10 flex-col">
      <div className="inline-flex items-center px-8 md:px-2 font-semibold text-gray-500 border border-[#000] rounded-md w-full justify-between">
            <button onClick={() => Decrement()} className="md:py-1 md:pr-2 pr-16  border-r border-[#000]  dark:text-gray-400 hover:text-gray-700">
                      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-dash text-[#000]" viewBox="0 0 16 16">
                      <path d="M4 8a.5.5 0 0 1 .5-.5h7a.5.5 0 0 1 0 1h-7A.5.5 0 0 1 4 8z">
                      </path>
                      </svg>
              </button>
              <span className="w-12 px-2 py-2 text-center border-0 rounded-md bg-gray-50 text-[#000]">{quanity}</span>
            <button onClick={() => Increment()} className="md:py-1 md:pl-2 pl-16 border-l border-[#000]  hover:text-gray-700 dark:text-gray-400">
                      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-plus text-[#000]" viewBox="0 0 16 16">
                      <path d="M8 4a.5.5 0 0 1 .5.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3A.5.5 0 0 1 8 4z">
                      </path>
                      </svg>
              </button>
      </div>
        <Button onClick={() => onAddToCart(data, quanity, Volume)} className="flex items-center gap-x-2 w-full border-[#000] border hover:!bg-[#000] hover:text-white transition-all duration-300">
          Add To Cart
          <ShoppingCart size={20} />
        </Button>
      </div>



      <div className="block md:hidden">
        <StickyCartButton />
      </div>
    </div>
  );

}

 
export default Info;