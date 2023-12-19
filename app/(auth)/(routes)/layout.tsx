export const metadata = {
  title: 'Fusiocoat – Permanent Protective Coatings',
  description: 'fusiocoat E-Commerce Dashboard',
}

export default function AuthLayout({
    children,
  }: {
    children: React.ReactNode
  }) {
    return (
      <div className="flex items-center justify-center h-full w-full">
        {children}
      </div>
    );
  };