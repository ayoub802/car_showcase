import { auth } from "@clerk/nextjs";
import Navbar from "@components/navbar";
import { redirect } from "next/navigation";
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

    const { userId } = auth();
 
    if (!userId) {
      redirect('/sign-in');
    }
    return (
      <>  
          <Navbar />
          {children}
      </>
      );
  }