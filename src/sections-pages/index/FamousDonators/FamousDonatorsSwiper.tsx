import React, { useEffect } from 'react';
import { z } from 'zod';
import { getCollection } from 'astro:content';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/autoplay';
import 'swiper/css/mousewheel';

import { FamousDonatorSchema } from '../../../d';

type FamousDonator = z.infer<typeof FamousDonatorSchema>;

interface FamousDonatorSwiperProps {
    collection: string;
    data: FamousDonator;
    id: string;
}

interface FamousDonatorCardProps {
    data: FamousDonator;
}

export const swiperFamousDonatorsProps = {
    loop: true,
    grabCursor: true,
    modules: [Autoplay],
    autoplay: {
        delay: 4000,
        disableOnInteraction: true,
    },
    slidesPerView: 1,

    breakpoints: {
        480: {
            slidesPerView: 1.5,
            spaceBetween: 20,
        },
        640: {
            slidesPerView: 2,
            spaceBetween: 20,
        },
        1024: {
            slidesPerView: 3,
            spaceBetween: 120,
        },
    },
};

export const FamousDonatorCard: React.FC<FamousDonatorCardProps> = ({ data }) => {
    const [visibleQuote, setVisibleQuote] = React.useState(true);

    const handleShowQuote = () => {
        setVisibleQuote(!visibleQuote);
    };

    return (
        <article className="bg-white p-6 py-20 flex flex-col items-center gap-2 justify-center h-[560px] w-full max-w-[340px] shadow-md rounded-[10px]">
            <div className={`flex-col gap-2 transition-all duration-300 ${visibleQuote ? 'flex z-20 opacity-100' : 'opacity-0 h-0 z-0'}`}>
                <div className="w-full">
                    <img src={data.mainImage} className="object-contain h-full w-full" alt="" />
                </div>
                <div className="flex flex-col items-center">
                    <button onClick={handleShowQuote}>
                        <img className="more-btn w-[35px] bottom-11 mx-auto left-0 right-0 h-[35px]" src="/public/assets/donators/up.png" alt="" />
                    </button>
                    <h5 className="font-bold text-center text-2xl">More info</h5>
                </div>
            </div>

            <div className={`gap-2 items-center text-center flex-col ${visibleQuote ? 'hidden' : 'flex relative z-20'}`}>
                <button onClick={handleShowQuote}>
                    <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 24 24">
                        <path
                            fill="#FF4714"
                            d="M12 22C6.477 22 2 17.523 2 12S6.477 2 12 2s10 4.477 10 10s-4.477 10-10 10m0-11.414L9.172 7.757L7.757 9.172L10.586 12l-2.829 2.828l1.415 1.415L12 13.414l2.828 2.829l1.415-1.415L13.414 12l2.829-2.828l-1.415-1.415z"
                        />
                    </svg>
                </button>
                <h3 className="text-3xl font-bold">{data.famousName}</h3>
                <p className="text-lg">{data.quote}</p>
                <a className="bg-[#FF4714] text-center mt-3 font-2xl text-white font-bold py-3 px-10 rounded-[50px]">DONATE NOW</a>
            </div>
        </article>
    );
};

const FamousDonatorsSwiper = () => {
    const [donators, setDonators] = React.useState<FamousDonatorSwiperProps[]>([]);

    useEffect(() => {
        getDonators();
    }, []);

    async function getDonators() {
        const famousDonatorCollection = await getCollection('famousDonators');

        setDonators(famousDonatorCollection);
    }

    return (
        <div className="w-full">
            <Swiper {...swiperFamousDonatorsProps}>
                {donators.map(donator => {
                    return (
                        <SwiperSlide key={donator.id} className="rounded-[10px]">
                            <FamousDonatorCard data={donator.data} />
                        </SwiperSlide>
                    );
                })}
            </Swiper>
        </div>
    );
};

export default FamousDonatorsSwiper;
