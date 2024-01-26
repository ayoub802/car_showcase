"use client"

import * as z from "zod"
import axios from "axios"
import { useEffect, useState } from "react"
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { toast } from "react-hot-toast"
import { useParams, useRouter } from "next/navigation"
import { City } from 'country-state-city';

import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form"
import { Select, SelectContent, SelectGroup, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Textarea } from "./ui/textarea"
import { useTranslation } from "react-i18next"
import useCart from "@hooks/use-cart"
import usePreviewModalCheckout from "@hooks/use-preview-checkout"

const formSchema = z.object({
  nomComplet: z.string().min(1),
  address: z.string().min(1),
  email: z.string().min(1),
  phone: z.string().min(1),
  ville: z.string(),
});

type ProductFormValues = z.infer<typeof formSchema>



export const CheckoutModale = ({
}) => {
  const params = useParams();
  const router = useRouter();
  const previewModal = usePreviewModalCheckout();
  const [open, setOpen] = useState(false);
  const [loading, setLoading] = useState(false);

  const title = 'Create product';
  const description = 'Add a new product';
  const toastMessage = 'Your message is sent Successfully.';
  const action =  'Create';
  const [cities, setCities] = useState<string[]>([]);
  const [loadingCities, setLoadingCities] = useState(true);
  const defaultValues = {
    nomComplet: '',
    address: "",
    email: "",
    phone: "",
    ville: ""
  }
  const items = useCart((state) => state.items);
  const cart = useCart();

  const form = useForm<ProductFormValues>({
    resolver: zodResolver(formSchema),
    defaultValues
  });
  const totalPrice = items.reduce((total: any, item: any) => {
    return total + (Number(item.price) * item.quantity)
  }, 0);

  const QuantityTotal = items.reduce((total: any, item: any) => {
    return total + item.quantity
  }, 0)
  const onSubmit = async (data: ProductFormValues) => {
    try {
        console.log("The Name is ", data.nomComplet , "\n Email ", data.email ," Phone ", data.phone , "\n Ville ", data.ville , "\n Address ", data.address);
        setLoading(true);
        const response = await axios.post(`${process.env.NEXT_PUBLIC_API_URL}/api/checkout`, {
          productIds: items.map((item) => item.id),
          quantity: QuantityTotal,
          volume: 30,
          nomComplet: data.nomComplet,
          phone: data.phone,
          address: data.address,
          email: data.email,
          ville: data.ville
        });
        toast.success("Your Command is Ordered");
        cart.removeAll();
        previewModal.onClose();
    } catch (error: any) {
      toast.error('Something went wrong.');
      console.log("The Error is ", error);
    } finally {
      setLoading(false);
    }
  };


  
  useEffect(() => {
    const fetchCities = async () => {
      try {
       const moroccoCities = City.getCitiesOfCountry('MA') || []; // 'MA' is the ISO 3166-1 alpha-2 code for Morocco
       const cityNames = moroccoCities.map((city) => city.name);
        setCities(cityNames);
      } catch (error) {
        console.error('Error fetching cities:', error);
      } finally {
        setLoadingCities(false);
      }
    };

    fetchCities();
  }, []);
  const [t, i18n] = useTranslation("global");

  console.log("The New cities =>", cities);
  
  return (
    <>
        
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8 w-full max-w-[450px] mx-auto">
            <div className="grid grid-cols-1 gap-3">
              <FormField
                control={form.control}
                name="nomComplet"
                render={({ field }) => (
                  <FormItem>
                    <FormControl>
                      <Input disabled={loading} className='!border-[#000] placeholder:text-[#000] bg-transparent' placeholder={t("Nom* et Prénom")} {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            <FormField
            control={form.control}
            name="ville"
            render={({ field }) => (
              <FormItem>
                <Select onValueChange={field.onChange}>
                  <FormControl>
                    <SelectTrigger placeholder={t("Ville*")} className="placeholder:text-[#000] !border-[#000]">
                      <SelectValue placeholder={t("Ville*")} className="placeholder:text-[#000] !border-[#000]" />
                    </SelectTrigger>
                  </FormControl>
                  <SelectContent className="!bg-[#020817] !text-[#fff] !appearance-none hover:!bg-[#020817] cursor-pointer">
                          {loadingCities ? (
                            <div>Loading cities...</div>
                          ) : (
                              cities.map((city, index) => (
                              <SelectItem key={index} className="hover:!bg-[#020817] cursor-pointer" value={city}>
                                {city}
                              </SelectItem>
                            ))
                          )}
                        </SelectContent>
                </Select>
                <FormMessage />
              </FormItem>
            )}
          />
              <FormField
                control={form.control}
                name="address"
                render={({ field }) => (
                  <FormItem>
                    <FormControl>
                      <Input type="text" disabled={loading} className='!border-[#000] placeholder:text-[#000] bg-transparent' placeholder={t("Adresse")} {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="email"
                render={({ field }) => (
                  <FormItem>
                    <FormControl>
                      <Input type="text" disabled={loading} className='!border-[#000] placeholder:text-[#000] bg-transparent' placeholder={t("Email*")} {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="phone"
                render={({ field }) => (
                  <FormItem>
                    <FormControl>
                      <Input type="text" disabled={loading} className='!border-[#000] placeholder:text-[#000] bg-transparent' placeholder={t("Téléphone*")} {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

            </div>
            <Button disabled={loading} className="max-w-max mx-auto cursor-pointer font-medium text__16 text-Mwhite !rounded-[24px] !border-Mblue bg-Mblue btnClass justify-center !flex uppercase hover:text-[#1e19d8]" type="submit">
            {t('Checkout')}
            </Button>
          </form>
        </Form>
    </>
  );
};