import Navbar from "@components/navbar";
import { useRouter } from "next/router";


export const metadata = {
  title: 'Fusiocoat Dashboard',
  description: 'fusiocoat E-Commerce Dashboard',
}

export default async function DashboardLayout({
    children,
  }: {
    children: React.ReactNode
  }) {

   

    return (
      <>  
          <Navbar />
          {children}
      </>
      );
  }