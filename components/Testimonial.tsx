import Image from 'next/image'
import React from 'react'
import { Swiper, SwiperSlide, useSwiper } from 'swiper/react';
import test1 from "../public/test1.webp"
import test2 from "../public/test2.webp"
import test3 from "../public/test3.webp"
import test4 from "../public/test4.webp"
import Stars from "../public/iconmonstr-star-filled.png"
// Import Swiper styles
import "swiper/css";
import { useTranslation } from 'react-i18next';
import { ArrowLeft2, ArrowRight2, Star, Star1 } from 'iconsax-react';
export const Testimonial = () => {

    const {t}  = useTranslation("global")

  return (
    <section className="bg-[#000] ">
        <div className="text-center relative z-2 container">
            <p className="text__18 text-[#fff] mb-2 uppercase">{t('Testimonials')}</p>
            <h2 className="font-bold text__48 text-[#fff] mb-8 uppercase">{t('Échos Élogieux : L’Expérience de')} <br />{t('nos Clients avec Nos Revêtements Céramiques')}</h2>
        </div>
        <div className="container">
            <div className="max-w-[750px] mx-auto mt-5">
                <Swiper
                className="mySwiper"
                spaceBetween={50}
                slidesPerView={1}
                // modules={[Navigation]}
                >
                    <SwiperSlide>
                        <div>
                            <div className="grid md:grid-cols-2 items-center gap-10">
                                <div className='relative'>
                                   <Image alt='' src={test1} width={500} height={500} quality={100} className='md:w-[350px] w-full object-cover h-[450px] rounded-sm'/>
                                   <div className="absolute top-4 -right-4 h-3 w-20 bg-Mgreen"></div>
                                </div>
                                <div>
                                    <h3 className='font-bold leading-6 mb-2 text-[#fff]'>
                                     ABDERRAHMANE L.
                                    </h3>
                                    <p className='leading-6 tracking-[1px] text-[#fff]'>
                                    "{t("FusioCoat a dépassé mes attentes ! Ma voiture n'a jamais été aussi brillante et la protection est vraiment remarquable. Hautement recommandé !")}"
                                    </p>
                                    <div className="flex items-center gap-2 mt-3">
                                        <Image src={Stars} className='w-7 h-7' alt=''/>
                                        <Image src={Stars} className='w-7 h-7' alt=''/>
                                        <Image src={Stars} className='w-7 h-7' alt=''/>
                                        <Image src={Stars} className='w-7 h-7' alt=''/>
                                        <Image src={Stars} className='w-7 h-7' alt=''/>
                                    </div>
                                    <h5 className='text-[15px] leading-6 mt-2 text-[#fff]'>MERCEDES / {t("Ceramic Coating")}</h5>
                                </div>
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div>
                            <div className="grid md:grid-cols-2 items-center gap-10">
                                <div className='relative'>
                                   <Image alt='' src={test2} width={500} height={500} quality={100} className='md:w-[350px] w-full object-cover h-[450px] rounded-sm'/>
                                   <div className="absolute top-4 -right-4 h-3 w-20 bg-Mgreen"></div>
                                </div>
                                <div>
                                    <h3 className='font-bold leading-6 mb-2 text-[#fff]'>
                                     AYOUB Y.
                                    </h3>
                                    <p className='leading-6 tracking-[1px] text-[#fff]'>
                                    "{t("Impressionné par la durabilité de FusioCoat et ses caractéristiques hydrofuges. Facile à appliquer et les résultats parlent d'eux-mêmes. Presque parfait !")}"                                    </p>
                                    <div className="flex items-center gap-2 mt-3">
                                        <Image src={Stars} className='w-7 h-7' alt=''/>
                                        <Image src={Stars} className='w-7 h-7' alt=''/>
                                        <Image src={Stars} className='w-7 h-7' alt=''/>
                                        <Image src={Stars} className='w-7 h-7' alt=''/>
                                        <Image src={Stars} className='w-7 h-7' alt=''/>
                                    </div>
                                    <h5 className='text-[15px] leading-6 mt-2 text-[#fff]'>AUDI / {t("Ceramic Coating")}</h5>
                                </div>
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div>
                            <div className="grid md:grid-cols-2 items-center gap-10">
                                <div className='relative'>
                                   <Image alt='' src={test3} width={500} height={500} quality={100} className='md:w-[350px] w-full object-cover h-[450px] rounded-sm'/>
                                   <div className="absolute top-4 -right-4 h-3 w-20 bg-Mgreen"></div>
                                </div>
                                <div>
                                    <h3 className='font-bold leading-6 mb-2 text-[#fff]'>
                                     SARAH B.
                                    </h3>
                                    <p className='leading-6 tracking-[1px] text-[#fff]'>
                                    "{t('FusioCoat est révolutionnaire ! Ma voiture reste plus propre plus longtemps, et la brillance est tout simplement époustouflante. Chaque centime en vaut la peine.')}"                                    </p>
                                    <div className="flex items-center gap-2 mt-3">
                                        <Image src={Stars} className='w-7 h-7' alt=''/>
                                        <Image src={Stars} className='w-7 h-7' alt=''/>
                                        <Image src={Stars} className='w-7 h-7' alt=''/>
                                        <Image src={Stars} className='w-7 h-7' alt=''/>
                                        <Image src={Stars} className='w-7 h-7' alt=''/>
                                    </div>
                                    <h5 className='text-[15px] leading-6 mt-2 text-[#fff]'>FIAT / {t("Ceramic Coating")}</h5>
                                </div>
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div>
                            <div className="grid md:grid-cols-2 items-center gap-10">
                                <div className='relative'>
                                   <Image alt='' src={test4} width={500} height={500} quality={100} className='md:w-[350px] w-full object-cover h-[450px] rounded-sm'/>
                                   <div className="absolute top-4 -right-4 h-3 w-20 bg-Mgreen"></div>
                                </div>
                                <div>
                                    <h3 className='font-bold leading-6 mb-2 text-[#fff]'>
                                     KHALID A.
                                    </h3>
                                    <p className='leading-6 tracking-[1px] text-[#fff]'>
                                    "{t("FusioCoat a tenu sa promesse. J'ai remarqué une différence significative dans le rejet de l'eau et la finition élégante. Excellent produit !")}"                                    </p>
                                    <div className="flex items-center gap-2 mt-3">
                                        <Image src={Stars} className='w-7 h-7' alt=''/>
                                        <Image src={Stars} className='w-7 h-7' alt=''/>
                                        <Image src={Stars} className='w-7 h-7' alt=''/>
                                        <Image src={Stars} className='w-7 h-7' alt=''/>
                                        <Image src={Stars} className='w-7 h-7' alt=''/>
                                    </div>
                                    <h5 className='text-[15px] leading-6 mt-2 text-[#fff]'>RANGE ROVER / {t("Ceramic Coating")}</h5>
                                </div>
                            </div>
                        </div>
                    </SwiperSlide>

                    <SwiperNavButtons />
                </Swiper>
            </div>
        </div>
</section>
  )
}

const SwiperNavButtons  = () => {
    const item = useSwiper();

    return (
      <div className="flex items-center gap-2 justify-end m-3">
        <button onClick={() => item.slidePrev()} className='flex justify-center items-center border border-[#aaa] w-10 h-10 rounded-full'>
            <ArrowLeft2
                size="20"
                color="#fff"
                />
        </button>
        <button onClick={() => item.slideNext()} className='flex justify-center items-center border border-[#aaa] w-10 h-10 rounded-full'>
        <ArrowRight2
                size="20"
                color="#fff"
                />
        </button>
      </div>
    );
}
