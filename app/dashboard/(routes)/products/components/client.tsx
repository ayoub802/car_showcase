"use client";

import { Plus } from "lucide-react";
import { useParams, useRouter } from "next/navigation";
import { zodResolver } from "@hookform/resolvers/zod"

import { Button } from "@/components/ui/button";
import { DataTable } from "@/components/ui/data-table";
import { Heading } from "@/components/ui/heading";
import { Separator } from "@/components/ui/separator";
import { useForm } from "react-hook-form";
import { ProductColumn, columns } from "./columns";
import { ChangeEvent, FormEvent, useEffect, useState } from "react";
import * as z from "zod"
import getCategories from "@/actions/getCategories";


interface ProductsClientProps {
  data: ProductColumn[];

};


type ProductFormValues = z.infer<typeof formSchema>
const formSchema = z.object({
  // name: z.string().min(1),
  images: z.object({ url: z.string() }).array(),
  // price: z.coerce.number().min(1),
  // categoryId: z.string().min(1),
});

export const ProductsClient: React.FC<ProductsClientProps> =  ({
  data,
})  => {
  const params = useParams();
  const router = useRouter();
  const [categories, setCategories] = useState<any>([])
  const [images, setImages] = useState<File | null>(null);



  const form = useForm<ProductFormValues>({
    resolver: zodResolver(formSchema),
    defaultValues:{
      images: [],
    }
  });


  const [loading, setLoading] = useState(false);

  const fetchCategroy = async () => {
    try{
      const response = await getCategories();
      setCategories(response)
    }
    catch(error){
      console.log(error);
      
    }
  }
  useEffect(() => {
    fetchCategroy()
  }, [])



  return (
    <> 
      <div className="flex items-center justify-between">
        <Heading title={`Products (${data.length})`} description="Manage products for your store" />
        <Button  onClick={() => router.push(`/dashboard/products/new`)}>
          <Plus className="mr-2 h-4 w-4" /> Add New
        </Button>
      </div>
      <Separator />
      <DataTable searchKey="name" columns={columns} data={data} />

    </>
  );
};
