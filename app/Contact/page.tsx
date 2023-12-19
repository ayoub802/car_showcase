import React from 'react'
import Contact from './Contact'


export const metadata = {
  title: 'Fusiocoat – Permanent Protective Coatings',
  description: 'fusiocoat E-Commerce Dashboard',
}

export default function ContactLayout({
  children,
}: {
  children: React.ReactNode
}) {


  return (  
    <>
    <Contact />
    </>
  )
}

