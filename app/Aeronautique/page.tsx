"use client"

import { Footer } from '@/components/Footer'
import { Header } from '@/components/Header'
import React from 'react'
import BannerImage from "../../public/header-aeronautique.jpg"
import Aero from "../../public/FC-AÉRO.webp"
import Scaled1 from "../../public/scaled1.jpg"
import Scaled2 from "../../public/scaled2.jpg"
import { Banner } from '@/components/Banner'
import Image from 'next/image'

import "../App.css"
import { useTranslation } from 'react-i18next'
function Aeronautique() {

  const {t}  = useTranslation("global")

  return (
    <div className='w-full overflow-hidden bg-[#000]'>
    <Header />
    <div className='mt-[88px] lg:mt-[98px]'>
        <Banner image={BannerImage} chemin="FUSIOCOAT®" title={t("AÉRONAUTIQUE : FC – AÉRO")}/>
        <section className='bg-white'>
            <div className="container">
              <h3 className="font-bold text-[45px] mb-8">FC – AÉRO : {t("Le Pionnier de la Protection Esthétique des")}
                <br className="hidden sm:block" /> 
                {t("Avions de Loisirs et Sports Aériens")}
              </h3>
              <p className="text__18 mb-8 text-[#525252]">
                {t("FC – AÉRO est à ce jour le seul revêtement nanocéramique qui sublime l’esthétique des surfaces aéronautiques peintes et métalliques, tout en les protégeant durablement contre les effets climatiques et les contaminants chimiques.")}                 
              </p>
              <p className="text__18 mb-8 mt-4 text-[#525252]">
              {t("Utilisé dans l’industrie aéronautique civile pour la protection anticorrosion des surfaces métalliques, FC – AÉRO est aujourd’hui le produit pionner pour l’aéronautique sportive et de loisir, pour lesquelles la durabilité esthétique et fonctionnelle ainsi que la facilité d’entretien sont primordiales.")}                  
              </p>

              <div className='row mt-5 items-center'>
                  <div className="col-md-9">
                    <h3 className="font-bold text-[18px] mb-2 text-black">{t("Pourquoi utiliser FC-AÉRO")}</h3>

                    <div className="my-4">
                        <h3 className='font-medium leading-6'>
                          <span className='font-bold text-black'>{t("Sublimation des Surfaces")} :</span> {t("FC – AÉRO apporte une brillance éclatante et une profondeur de couleur spectaculaire. Les surfaces deviennent durablement brillantes et les couleurs sont préservées et amplifiées.")}
                        </h3>
                    </div>
                    <div className="my-3">
                        <h3 className='font-medium leading-6'>
                          <span className='font-bold text-black'>{t("Protection Durable")} :</span>  {t("Une fois appliqué, FC – AÉRO forme des liaisons chimiques fortes avec les surfaces, permettant une durabilité minimale de 5 ans contre la corrosion, les effets climatiques et les fluides non hydrauliques, tels que le kérosène, les huiles et les détergents.")}                            
                          </h3>
                    </div>
                    <div className="my-3">
                        <h3 className='font-medium leading-6'>
                          <span className='font-bold text-black'>{t("Déperlance & Entretien")} :</span>  {t("La formulation unique de FC – AÉRO exalte l’hydrophobicité. L’eau glisse merveilleusement sur les surfaces et l’adhésion des insectes et autres contaminants environnementaux est fortement minimisée, facilitant les entretiens réguliers.")}
                          </h3>
                    </div>
                    <div className="my-3">
                        <h3 className='font-medium leading-6'>
                          <span className='font-bold text-black'>{t("Application Monocouche")} :</span>  {t("Notre formule avancée permet une application rapide en un seul passage par simple essuyage pour former une couche de plusieurs microns. La couche est sèche au toucher seulement 45 min après application et entièrement stabilisée après 24 h.")}
                          </h3>
                    </div>
                    <div className="my-3">
                        <h3 className='font-medium leading-6'>
                          <span className='font-bold text-black'>{t("Formulation Non Toxique")} :</span>  {t("Notre priorité est la sécurité des utilisateurs et le respect de l’environnement. Notre formule est non toxique et respectueuse de la réglementation Européenne REACH.")}
                          </h3>
                    </div>
                  </div>

                  <div className="col-md-3">
                    <Image alt='' src={Aero} className='w-[350px] h-[400px]'/>
                  </div>
              </div>

              <div className="!mt-16 row ">
                <div className="col-md-6 md:!mb-0 mb-2">
                   <Image alt='' src={Scaled1}/>
                </div>
                <div className="col-md-6">
                   <Image alt='' src={Scaled2}/>
                </div>
              </div>
            </div>
        </section>
        <Footer />
    </div>
</div>
  )
}

export default Aeronautique