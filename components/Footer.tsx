import { Facebook, Instagram, Youtube } from 'iconsax-react'
import Image from 'next/image'
import React from 'react'
import Logo from "../public/Morocco.png"
import { useRouter } from 'next/navigation'
import Link from 'next/link'
import { useTranslation } from 'react-i18next'


export const Footer = () => {

    const router = useRouter();
    const {t}  = useTranslation("global")

  return (

    <section className="pb-6 bg-Mblack">
        <div className="container">
            <div className="mb-10 gap-y-8 row">
                <div className="col-md-3">
                    <Image width={100} height={100} quality={100} src={Logo} className='w-[150px] h-[35px] mb-2 mx-auto md:!mx-0' alt="" />
                    <p className="text__16 text-[#D4D4D4] mb-4 text-center md:!text-left">{t('Revêtements céramiques pour voitures, avions, bâteaux, vitrages')}</p>
                    <div className="flex items-center gap-3 justify-center md:justify-normal">
                        <a href="#!" className='border border-Mgreen w-10 h-10 flex justify-center items-center rounded-full'>
                        <Facebook
                            size="18"
                            color="#FFF"
                            variant="Bold"
                            />
                        </a>
                        <a href="#!" className='border border-Mgreen w-10 h-10 flex justify-center items-center rounded-full'>
                        <Instagram
                            size="18"
                            color="#FFF"
                            />
                        </a>
                        <a href="#!" className='border border-Mgreen w-10 h-10 flex justify-center items-center rounded-full'>
                            <Youtube
                            size="18"
                            color="#FFF"
                            variant="Bold"
                            />
                        </a>

                    </div>
                </div>
                <div className="col-12 col-md-2 col-sm-6 offset-md-1 text-center md:!text-left">
                    <h5 className="font-medium text-[#A3A3A3] text__16 mb-3">NAVIGATION</h5>
                    <div className="flex flex-wrap gap-3 font-medium text__16">
                        <a className="inline-block w-full text-Mwhite uppercase" href="/">{t("Accueil")}</a>
                        <a className="inline-block w-full text-Mwhite uppercase" href="/Automobile">{t("Automobile")}</a>
                        <a className="inline-block w-full text-Mwhite uppercase" href="/Aeronautique">{t("Aéronautique")}</a>
                        <a className="inline-block w-full text-Mwhite uppercase" href="/Marine">MARINE</a>
                    </div>
                </div>
                <div className="col-12 col-md-3 col-sm-6 text-center md:!text-left">
                    <h5 className="font-medium text-[#A3A3A3] text__16 mb-3">MENU</h5>
                    <div className="flex flex-wrap gap-3 font-medium text__16">
                        <a className="inline-block w-full text-Mwhite uppercase" href="/Boutique">{t("Boutique")}</a>
                        <a className="inline-block w-full text-Mwhite uppercase" href="/Cermic">{t("En savoir plus")}</a>
                        <a className="inline-block w-full text-Mwhite uppercase" href="/Partenaire">{t("Devenir Revendeur")}</a>
                        <a className="inline-block w-full text-Mwhite uppercase" href="/Contact">Contact</a>
                    </div>
                </div>
                <div className="col-12 col-md-3 col-sm-6 text-center md:!text-left">
                    <h5 className="font-medium text-[#A3A3A3] text__16 mb-3">INFORMATIONS</h5>
                    <div className="flex flex-wrap gap-3 font-medium text__16">
                        <a className="inline-block w-full text-Mwhite">Morocco —
                        Bd Mohamed Jamal Addorra, Imm BR1B, N3 2eme etage, Lot Al Hamd Ain Sebaa
                        Casablanca, 20250</a>
                        <a className="inline-block w-full text-Mwhite">info@fusiocoat.ma</a>
                    </div>
                </div>
            </div>
            <div className="flex flex-wrap sm:flex-nowrap justify-center sm:justify-between gap-y-2 items-center px-4 py-2 bg-[#262626] rounded-full">
                <p className="text-center text__14 text-[#A3A3A3] sm:!order-1 order-2">© 2023 FUSIOCOAT® <Link href="https://whd.ma/" >WHD AGENCY.</Link> </p>
                <div className="flex items-center justify-center sm:justify-end gap-6 order-1 sm:!order-2">
                    <a className="inline-block sm:text__16 text__14 text-Mwhite flex-shrink-0" href="/Legal">{t("Mentions légales")}</a>
                    <a className="inline-block sm:text__16  text__14 text-Mwhite flex-shrink-0" href="/terms">{t("Conditions générales de vente")}</a>
                </div>
            </div>
       </div>
   </section>
  )
}
