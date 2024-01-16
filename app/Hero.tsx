"use client"

import { Footer } from '@/components/Footer'
import { Header } from '@/components/Header'
import React, { useRef } from 'react'
import { useEffect, useState } from 'react';
import HeroBanner from "../public/Fusiocoat banner.svg"
import Image from 'next/image';
import Item1 from "../public/how_work1.svg"
import Item2 from "../public/how_work2.svg"
import Item3 from "../public/how_work3.svg"
import Item4 from "../public/how_work4.svg"
import Product from "../public/FC Glass.png"
import Product1 from "../public/FC Ultimate.png"
import Product2 from "../public/FC Smart.png"
import Product3 from "../public/FC Boost.png"
import { Button } from '@/components/Button';
import Gellery1 from "../public/zit pic.png"
import Gellery2 from "../public/Fusiocoat2.webp"
import Gellery3 from "../public/gel pic.png"
import Gellery4 from "../public/Fusiocoat1.webp"
import Gellery5 from "../public/Pic1.png"
import Gellery6 from "../public/pic2.png"
import Gellery7 from "../public/pic3.png"
import Gellery8 from "../public/pic4.png"
import Gellery9 from "../public/pic5.webp"
import Gellery10 from "../public/pic6.webp"
import Gellery11 from "../public/pic7.webp"
import Gellery12 from "../public/pic8.webp"
import Carsction from "../public/Fusio coat.png"
import BackgroundImage from "../public/pdct background.png"
import Product3D from "../public/product_banner.png"
import Pattern from "../public/patern.svg"
import { HoverCard, HoverCardContent, HoverCardTrigger } from '@/components/ui/hover-card';
import { useTranslation } from 'react-i18next';
import "./App.css"
import { Testimonial } from '@components/Testimonial';
import { FAQ } from '@components/FAQ';
import { ProductForm } from '@components/ProductForm';
import  ProductCard  from '@/components/ProductCard';
import Link from 'next/link';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { url } from 'inspector';

export const Hero = () => {
    const [hoverStates, setHoverStates] = useState(false);
    const [hoverStates1, setHoverStates1] = useState(false);
    const [hoverStates2, setHoverStates2] = useState(false);
    const [hoverStates3, setHoverStates3] = useState(false);
    const product3DSectionRef = useRef(null);
    const product3DSectionRef1 = useRef(null);
    const product3DSectionRef2 = useRef(null);
    const product3DSectionRef3 = useRef(null);
    const product3DSectionRef4 = useRef(null);

    gsap.registerPlugin(ScrollTrigger);
    useEffect(() => {
      const product3DSection = product3DSectionRef.current;
      const product3DSection1 = product3DSectionRef1.current;
      const product3DSection2 = product3DSectionRef2.current;
      const product3DSection3 = product3DSectionRef3.current;
      const product3DSection4 = product3DSectionRef4.current;
    
        gsap.from(product3DSection, {
          opacity: 0,
          y: 100,
          duration: 1,
          ease: 'power2.out', // Add an easing function for a more natural bounce effect
          scrollTrigger: {
            trigger: product3DSection,
            start: 'top 80%',
            end: 'bottom 80%',
            toggleActions: 'play none none reverse',
            onEnter: () => {
              gsap.to(product3DSection, {
                y: 20, // Move down by 20 pixels
                duration: .5,
                ease: 'power2.out',
              });
            },
            onEnterBack: () => {
              gsap.to(product3DSection, {
                y: 0, // Return to the original position
                duration: .5,
                ease: 'power2.out',
              });
            },
          },
        });

        gsap.from('.moistrizing-element', {
          opacity: 0,
          y: 50,
          duration: 1,
          ease: 'power2.out',
          scrollTrigger: {
            trigger: '.moistrizing-element',
            start: 'top 80%',
            end: 'bottom 80%',
            toggleActions: 'play none none reverse',
          },
        });
        gsap.from('.moistrizing-element3', {
          opacity: 0,
          y: 50,
          duration: 1.5,
          ease: 'power2.out',
          scrollTrigger: {
            trigger: '.moistrizing-element3',
            start: 'top 80%',
            end: 'bottom 80%',
            toggleActions: 'play none none reverse',
          },
        });
        gsap.from('.moistrizing-element2', {
          opacity: 0,
          y: 50,
          duration: 2,
          ease: 'power2.out',
          scrollTrigger: {
            trigger: '.moistrizing-element2',
            start: 'top 80%',
            end: 'bottom 80%',
            toggleActions: 'play none none reverse',
          },
        });
        gsap.from('.moistrizing-element4', {
          opacity: 0,
          y: 50,
          duration: 2.2,
          ease: 'power2.out',
          scrollTrigger: {
            trigger: '.moistrizing-element2',
            start: 'top 80%',
            end: 'bottom 80%',
            toggleActions: 'play none none reverse',
          },
        });
    }, []);

    const {t}  = useTranslation("global")
  return (
    <div className='w-full overflow-hidden bg-[#000]'>
      <Header />
      <div className='mt-[88px] lg:mt-[98px]'>
        <section className='relative overflow-hidden min-h-[calc(100vh_-_88px)] lg:min-h-[calc(100vh_-_98px)] bg-[#010101] flex flex-wrap pb-0'>
          <Image width={500} height={500} quality={100} src={HeroBanner} className='absolute left-0 top-0 w-full h-full object-cover object-top' alt="" />
          <div className="relative z-[2] w-full container flex justify-start items-center">
            <h2>
            </h2>
              <div className="row">
                  <div className="col-md-8 col-8">
                      <p className="text__18 text-Mgreen mb-2">FUSIOCOAT</p>
                      <h1 className="font-semibold text__48 text-Mwhite mb-2">{t('La solution ultime pour une protection maximale')}<br className="hidden xl:block" /> {t('et une esthétique renouvelée de votre voiture.')}</h1>
                      <p className="text__18 text-[#A3A3A3] mb-2">{t("Fusiocoat - l'innovation qui offre une protection exceptionnel le et")} 
                      <br className="hidden xl:block" /> {t("une esthétique rafraîchie pour vos véhicules, qu'ils voguent sur l'eau,")}
                      <br className="hidden xl:block" /> {t("volent dans le ciel ou roulent sur la route.")}
                      </p>
                  </div>
              </div>
          </div>
        </section>

        <section className='bg-white'>
        <div className="container">
            <div className="text-center mb-10">
                <p className="mb-2 text__16">{t('HOW IT WORKS')}</p>
                <h2 className="font-semibold text__48">{t('Pourquoi choisir notre solution')}<br className="hidden sm:block" /> {t('pour votre automobile')}
                </h2>
            </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 grid-rows-1 text-center sideLine">
            <div className="relative px-4">
                <Image width={500} height={500} quality={100} src={Item1} className="mb-4 mx-auto w-14 h-14 object-cover" alt="" />
                    <h5 className="font-semibold text__20 mb-2 capitalize">{t("EASY APPLICATIONS")}</h5>
                    <p className="text__14 text-[#525252]">{t('A single coating for a maximum efficiency')}</p>
            </div>
        <div className="relative px-4">
            <Image width={500} height={500} quality={100} src={Item2} className="mb-4 mx-auto w-14 h-14 object-cover" alt="" />
                <h5 className="font-semibold text__20 mb-2 capitalize">{t('SAFE TO USE')}</h5>
                <p className="text__14 text-[#525252]">{t("Non-toxic and eco-friendly products")}</p>
        </div>
        <div className="relative px-4">
            <Image width={500} height={500} quality={100} src={Item3} className="mb-4 mx-auto w-14 h-14 object-cover" alt="" />
            <h5 className="font-semibold text__20 mb-2 capitalize">{t('DURABILITY')}</h5>
            <p className="text__14 text-[#525252]">{t('Unsurpassed chemical and weather resistance')}</p>
        </div>
        <div className="relative px-4">
            <Image width={500} height={500} quality={100} src={Item4} className="mb-4 mx-auto w-14 h-14 object-cover" alt="" />
            <h5 className="font-semibold text__20 mb-2 capitalize">{t('AFTER SALE')}</h5>
            <p className="text__14 text-[#525252]">{t("Shipping within 24 h – Happy or refunded – Immediate support")}</p>
        </div>
        </div>
        </div>
        </section>

          <section className='bg-white'>
            <div className="container">
                <div className="text-center mb-14">
                    <p className="mb-2 text__16">{t('OUR VALUES')}</p>
                    <h2 className="font-bold text__48">{t('LA TECHNOLOGIE')} <br className="hidden sm:block" /> FUSIOCOAT®
                    </h2>
                </div>
              <div className="gap-y-10 row">
                    <div className="col-md-12">
                        <div className="text-center">
                              <h5 className="font-bold text__20 mb-2">{t('FUSIOCOAT® est le fruit de plus de 15 ans de recherches scientifiques dans la chimie des revêtements.')} </h5>
                              <p className="text__18 text-[#525252]">
                              {t('Les produits FUSIOCOAT® apportent une durabilité sans précédent vis-a-vis des effets climatiques et chimiques pour préserver les qualités esthétiques des surfaces, tout en étant non toxiques pour l’Homme et l’ environnement.')}
                              </p>
                              <div className='mt-4'>
                                <Button title={t("En savoir plus")}/>
                              </div>
                        </div>
                    </div>
                </div>
            </div>
         </section>

         <section className='relative overflow-hidden min-h-[60vh] h-[60vh] grid place-content-center bg_withImage'>
            {/* <div ref={product3DSectionRef}> */}
              <Image src={BackgroundImage} width={5000} height={5000} quality={100} alt='' className='absolute top-0 left-0  w-full h-full' />
              <div ref={product3DSectionRef}>
                 <Image src={Product3D}  width={5000} height={5000} quality={100} alt='' className='w-[70%] h-[500px] object-cover relative z-10' />
              </div>
            {/* </div> */}
            <div className='w-20 h-28 flex flex-col justify-center items-center absolute top-24 left-[30%] moistrizing-element'>
                <div className="w-20 h-20 rounded-full bg-Mgreen mx-auto"></div>
               <h3 className='text-center mt-2 text-[#fff]'>Moistrizing</h3>
            </div> 
            <div className='w-20 h-28 flex flex-col justify-center items-center absolute top-[55%] left-[30%] moistrizing-element2'>
                <div className="w-20 h-20 rounded-full bg-Mgreen mx-auto"></div>
               <h3 className='text-center mt-2 text-[#fff]'>Moistrizing</h3>
            </div>
            <div className='w-20 h-28 flex flex-col justify-center items-center absolute top-24 left-[60%] moistrizing-element3'>
                <div className="w-20 h-20 rounded-full bg-Mgreen mx-auto"></div>
               <h3 className='text-center mt-2 text-[#fff]'>Moistrizing</h3>
            </div>
            <div className='w-20 h-28 flex flex-col justify-center items-center absolute top-[55%] left-[60%] moistrizing-element4'>
                <div className="w-20 h-20 rounded-full bg-Mgreen mx-auto"></div>
               <h3 className='text-center mt-2 text-[#fff]'>Moistrizing</h3>
            </div>
            {/* <div className='w-20 h-28 flex flex-col justify-center items-center absolute top-[55%] left-[60%]'>
                <div className="w-20 h-20 rounded-full bg-Mgreen mx-auto"></div>
               <h3 className='text-center mt-2 text-[#fff]'>Moistrizing</h3>
            </div> */}

           {/* <div className="absolute inset-0 w-full h-full bg-[#00000080]"></div> */}
           {/* <div className="absolute flex justify-center items-center z-10 w-full top-44 left-0">
                <div className='flex flex-col items-center text-center'>
                    <h2 className='uppercase text-[35px] font-semibold text_outline'>Fusiocoat is your new <span className='text_outline-span py-2 px-3 bg-Mgreen text-[#000] rounded-full'>Solution</span> </h2>
                    <p className='text-[#fff] max-w-[90ch] mt-3 font-[400]'>
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquam odio voluptatem eum hic, ad quod eveniet dolorum error facilis ut quia sapiente ex, vero distinctio commodi, illo repudiandae ipsa.
                    </p>
                </div>
           </div>

           <div className="absolute h-screen w-full z-10 bottom-8 flex justify-center items-end">
            <div className="flex gap-[150px]">
                <Link href={"/Boutique"} className='py-2 px-3.5 uppercase font-semibold rounded-full bg-Mgreen text-[#000]'>voir le produit</Link>
                <Link href={"/Boutique"} className='py-2 px-3.5 uppercase font-semibold rounded-full border border-Mgreen text-Mgreen'>voir boutique</Link>
            </div>
           </div> */}
    
         </section>

         <section className='bg-white'>
           <div className="container">
            <div className="relative">
               <Image src={Carsction} width={1500} height={1500} quality={100} alt='' className='lg:w-[60rem] md:w-[40rem] md:h-[20rem] w-[30rem] h-[13rem] -rotate-90 md:rotate-0 mx-auto lg:h-[30rem]' />
               <HoverCard open={hoverStates} onOpenChange={(open) => setHoverStates(open)}>
                <HoverCardTrigger asChild
                       onMouseEnter={() => setHoverStates(true)}
                       onTouchStart={() => setHoverStates(true)}
                >
                    <div className='absolute top-[50%] md:left-[20%] left-[33%] md:w-5 md:h-5 w-3 h-3 pulse rounded-full bg-[#fff] cursor-pointer'>
                        
                    </div>
                </HoverCardTrigger>
                <HoverCardContent className="w-80 !bg-[#020817]">
                <div className="flex justify-between items-center space-x-4">
                            <div className="h-20 w-20 flex-shrink-0 overflow-hidden rounded-md border border-gray-200">
                                <Image alt='' src={Product} width={500} height={500} quality={100}/>
                            </div>
                            <div>
                                <h2 className='text-[13px] font-semibold text-[#fff]'>FC-GLASS – REVÊTEMENT HYDROPHOBE POUR VERRES</h2>
                                <p className='text-[11px] font-[400] text-[#fff]'>33,00MAD – 49,00MAD</p>
                            </div>
                        </div>
                </HoverCardContent>
                </HoverCard>

                <HoverCard open={hoverStates1} onOpenChange={(open) => setHoverStates1(open)}>
                <HoverCardTrigger asChild
                       onMouseEnter={() => setHoverStates1(true)}
                       onTouchStart={() => setHoverStates1(true)}
                >
                    <div className='absolute md:top-[20%] top-[105%] left-[50%] md:w-5 md:h-5 w-3 h-3 pulse rounded-full bg-[#fff] cursor-pointer'>
                        
                    </div>
                </HoverCardTrigger>
                <HoverCardContent className="w-80 !bg-[#020817]">
                <div className="flex justify-between items-center space-x-4">
                            <div className="h-20 w-20 flex-shrink-0 overflow-hidden rounded-md border border-gray-200">
                                <Image alt='' src={Product1} width={500} height={500} quality={100}/>
                            </div>
                            <div>
                                <h2 className='text-[13px] font-semibold text-[#fff]'>FC-ONE ULTIMATE – PROTECTION PERMANENTE</h2>
                                <p className='text-[11px] font-[400] text-[#fff]'>94,00MAD – 144,00MAD</p>
                            </div>
                        </div>
                </HoverCardContent>
                </HoverCard>

                <HoverCard open={hoverStates2} onOpenChange={(open) => setHoverStates2(open)}>
                <HoverCardTrigger 
                asChild
                onMouseEnter={() => setHoverStates2(true)}
                onTouchStart={() => setHoverStates2(true)}
                >
                    <div className='absolute md:top-[30%] -top-[27%] left-[45%] md:left-[80%] md:w-5 md:h-5 w-3 h-3 pulse rounded-full bg-[#fff] cursor-pointer'>
                        
                    </div>
                </HoverCardTrigger>
                <HoverCardContent className="w-80 !bg-[#020817]">
                    <div className="flex justify-between items-center space-x-4">
                            <div className="h-20 w-20 flex-shrink-0 overflow-hidden rounded-md border border-gray-200">
                                <Image alt='' src={Product2} width={500} height={500} quality={100}/>
                            </div>
                            <div>
                                <h2 className='text-[13px] font-semibold text-[#fff]'>FC-ONE SMART – PROTECTION POUR PEINTURES 5 ANS</h2>
                                <p className='text-[11px] font-[400] text-[#fff]'>69,00MAD – 89,00MAD</p>
                            </div>
                        </div>
                </HoverCardContent>
                </HoverCard>

                <HoverCard open={hoverStates3} onOpenChange={(open) => setHoverStates3(open)}>
                    <HoverCardTrigger 
                    asChild
                    onMouseEnter={() => setHoverStates3(true)}
                    onTouchStart={() => setHoverStates3(true)}
                    >
                        <div className='absolute md:top-[78%] -top-[11%] left-[65%] md:left-[80%] md:w-5 md:h-5 w-3 h-3  pulse rounded-full bg-[#fff] cursor-pointer'>
                            
                        </div>
                    </HoverCardTrigger>
                    <HoverCardContent className="w-80 !bg-[#020817]">
                        <div className="flex justify-between items-center space-x-4">
                            <div className="h-20 w-20 flex-shrink-0 overflow-hidden rounded-md border border-gray-200">
                                <Image alt='' src={Product3} width={500} height={500} quality={100}/>
                            </div>
                            <div>
                                <h2 className='text-[13px] font-semibold text-[#fff]'>FC-TRIM – PROTECTION GARNITURES</h2>
                                <p className='text-[11px] font-[400] text-[#fff]'>39,00MAD – 59,00MAD</p>
                            </div>
                        </div>
                    </HoverCardContent>
                </HoverCard>
            </div>
           </div>
         </section>
         <ProductCard />


        <section className='bg-black'>
        <div className="container">
        <div className="text-center mb-10">
            <h2 className="font-bold text__48 text-[#fff]">{t('LES AVIS DE NOS UTILISATEURS')}
            </h2>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          <div className="grid gap-4">
              <div>
                  <Image width={500} height={500} quality={100} className="h-auto max-w-full rounded-lg gallery_1" src={Gellery1} alt=""/>
              </div>
              <div>
                  <Image width={500} height={500} quality={100} className="h-auto max-w-full rounded-lg gallery_2" src={Gellery5} alt=""/>
              </div>
              <div>
                  <Image width={500} height={500} quality={100} className="h-auto max-w-full rounded-lg gallery_3" src={Gellery9} alt=""/>
              </div>
          </div>
          <div className="grid gap-4">
              <div>
                  <Image width={500} height={500} quality={100} className="h-auto max-w-full rounded-lg gallery_1" src={Gellery2} alt=""/>
              </div>
              <div>
                  <Image width={500} height={500} quality={100} className="h-auto max-w-full rounded-lg gallery_2" src={Gellery6} alt=""/>
              </div>
              <div>
                  <Image width={500} height={500} quality={100} className="h-auto max-w-full rounded-lg gallery_3" src={Gellery10} alt=""/>
              </div>
          </div>
          <div className="grid gap-4">
              <div>
                  <Image width={500} height={500} quality={100} className="h-auto max-w-full rounded-lg gallery_1" src={Gellery3} alt=""/>
              </div>
              <div>
                  <Image width={500} height={500} quality={100} className="h-auto max-w-full rounded-lg gallery_2" src={Gellery7} alt=""/>
              </div>
              <div>
                  <Image width={500} height={500} quality={100} className="h-auto max-w-full rounded-lg gallery_3" src={Gellery11} alt=""/>
              </div>
          </div>
          <div className="grid gap-4">
              <div>
                  <Image width={500} height={500} quality={100} className="h-auto max-w-full rounded-lg gallery_1" src={Gellery4} alt=""/>
              </div>
              <div>
                  <Image width={500} height={500} quality={100} className="h-auto max-w-full rounded-lg gallery_2" src={Gellery8} alt=""/>
              </div>
              <div>
                  <Image width={500} height={500} quality={100} className="h-auto max-w-full rounded-lg gallery_3" src={Gellery12} alt=""/>
              </div>
          </div>
        </div>


        </div>  
    </section>
    <Testimonial />
    <FAQ />
    
    <section className="bg-Mgreen relative overflow-hidden">
        <Image width={100} height={100} quality={100} src={Pattern} className="absolute left-0 top-0 w-full h-full object-cover" alt="" />
        <div className="text-center relative z-2 container">
            <p className="text__18 mb-2">NEWSLETTER</p>
            <h2 className="font-bold text__48 mb-8">{t('POUR TOUTE QUESTION MERCI DE NOUS')}  <br />{t('CONTACTER VIA LE FORMULAIRE CI-DESSOUS')}</h2>
            <ProductForm />
        </div>
    </section>

       <Footer />
      </div>
    </div>
  )
}

