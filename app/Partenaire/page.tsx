import React from 'react'
import Partner from './Partner'



export const metadata = {
  title: 'Fusiocoat – Permanent Protective Coatings',
  description: 'fusiocoat E-Commerce Dashboard',
}

export default function PartnerLayout({
  children,
}: {
  children: React.ReactNode
}) {


  return (  
    <>
    <Partner />
    </>
  )
}

