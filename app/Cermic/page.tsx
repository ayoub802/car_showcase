import React from 'react'
import Cermic from './Cermic'


export const metadata = {
  title: 'Fusiocoat – Permanent Protective Coatings',
  description: 'fusiocoat E-Commerce Dashboard',
}

export default function CermicLayout({
  children,
}: {
  children: React.ReactNode
}) {


  return (  
    <>
    <Cermic />
    </>
  )
}

