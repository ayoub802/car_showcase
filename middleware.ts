import { authMiddleware } from "@clerk/nextjs";

export default authMiddleware({
  publicRoutes: ["/", "/boutique",'/api/product', "/api/:path*", "/Cermic", "/Contact", "/Automobile", "/Applique", "/Aeronautique", "/Legal", "/Marine","/checkout","/product/:path*", "/Revetements", "/Partenaire"],
  ignoredRoutes: ['/api/product', "/api/:path*"],
  
});



export const config = {
  matcher: ["/((?!.*\\..*|_next).*)", "/", "/(api|trpc)(.*)", "/api/product"],
};