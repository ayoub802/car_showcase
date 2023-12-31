"use client"

import { Footer } from '@/components/Footer'
import { Header } from '@/components/Header'
import React from 'react'
import BannerImage from "../../public/marine.webp"
import { Banner } from '@/components/Banner'
import Marin from "../../public/marine_aero.webp"
import Marin1 from "../../public/marine_aero1.webp"
import "../App.css"
import Image from 'next/image'
import { useTranslation } from 'react-i18next'
function Marine() {

  const {t}  = useTranslation("global")

  return (
    <div className='w-full overflow-hidden bg-[#000]'>
    <Header />
    <div className='mt-[88px] lg:mt-[98px]'>
        <Banner image={BannerImage} chemin="FUSIOCOAT®" title="MARINE"/>
        <section className='bg-white'>
                <div className="container">
                  <h3 className="font-bold text__48 mb-8">{t("FC – MARINE : La gamme de protection marine la plus")}
                    <br className="hidden sm:block" /> 
                    {t("performante")}
                  </h3>
                  <div className="mt-1">
                    <div className="row">
                        <div className="col-md-6">
                            <div className="my-4">
                                <h3 className='font-medium leading-6 mb-4'>
                                  <span className='font-bold text-black'>FC-MARINE POWER</span> {t("est à ce jour l’ultime revêtement protecteur de surface en milieu marin. Composé d’une formulation unique en nanomatériaux fortement résistants aux milieux salins, il forme une barrière solide, transparente et chimiquement durable pour renforcer la résistance chimique des peintures et vernis de surfaces du type gelcoat et prévenir la corrosion des métaux.")}
                                </h3>
                                <Image alt='' src={Marin1}/> 
                            </div>
                        </div>
                        <div className="col-md-6">
                            <div className="my-4">
                                <h3 className='font-medium leading-6 mb-4'>
                                  <span className='font-bold text-black'>FC-MARINE TOP</span> {t("est un revêtement fontionnel de surface de type TOP COAT qui apporte une brillance éclatante, une résistance aux saletés unique et une douceur au toucher incomparable pour les couches de finitions comme le gelcoat. Doté d’une mobilité de surface unique, il peut corriger les rayures mineures et constitue le produit d’entretien référence pour l’entretien de FC-MARINE POWER.")}
                                </h3>
                                <Image alt='' src={Marin}/> 
                            </div>
                        </div>
                    </div>
                  </div>
                </div>
            </section>
        <Footer />
    </div>
</div>
  )
}

export default Marine