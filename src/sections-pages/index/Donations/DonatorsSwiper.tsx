import React, { useEffect, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Mousewheel } from 'swiper/modules';
import DonationCard from './DonationCard';
import 'swiper/css';
import 'swiper/css/autoplay';
import 'swiper/css/mousewheel';
import './swiperStyles.css';

import { donators } from '../../../data/donators';
import { messages } from '../../../data/messages';

import { getCookie, setCookie } from '../../../../public/scripts/cookies';

interface Donations {
    amount: number;
    message: string;
    donator: string;
}

export const swiperDonator = {
    loop: true,
    slidesPerView: 1,
    modules: [Autoplay],
    autoplay: {
        delay: 4000,
        disableOnInteraction: true,
    },

    breakpoints: {
        480: {
            slidesPerView: 2,
            spaceBetween: 20,
        },
        640: {
            slidesPerView: 2,
            spaceBetween: 20,
        },
        1024: {
            slidesPerView: 3,
            spaceBetween: 10,
        },
    },
};

export default function DonatorsSwiper() {
    const [donations, setDonations] = useState<Donations[]>([]);

    function getFromLocaleStorage() {
        const data = localStorage.getItem('donationsGaza');
        return data ? JSON.parse(data) : [];
    }

    function mixArray(array: string[]): string[] {
        return array
            .map(value => ({ value, sort: Math.random() }))
            .sort((a, b) => a.sort - b.sort)
            .map(({ value }) => value);
    }

    function generateAmount() {
        return Math.floor(Math.random() * (1250 - 250 + 1)) + 250;
    }

    useEffect(() => {
        const cookie = getCookie('supportGaza');

        if (!cookie) {
            setCookie('supportGaza', 'true', 1);
            return;
        }

        const data = getFromLocaleStorage();
        if (data) setDonations(data);
    }, []);

    useEffect(() => {
        const newDonators = mixArray(donators);
        const newMessages = mixArray(messages);
        let index = 0;

        const newDonations = newDonators.map((donator, index) => ({
            message: newMessages[index],
            donator,
            amount: generateAmount(),
        }));

        const donations = getFromLocaleStorage();
        if (donations && donations.length <= 3) {
            setDonations(prevDonations => [...prevDonations, ...newDonations].slice(0, 2));
        }

        const addRandomDonation = () => {
            const newDonation = newDonations[index];
            const totalDonations = localStorage.getItem('donationsGaza');
            if (totalDonations && JSON.parse(totalDonations).length >= 50) return;

            index += 1;

            setDonations(prevDonations => {
                const updatedDonations = [...prevDonations, newDonation];
                localStorage.setItem('donationsGaza', JSON.stringify(updatedDonations));
                return updatedDonations;
            });

            const nextInterval = Math.floor(Math.random() * (120000 - 10000 + 1)) + 10000;
            setTimeout(addRandomDonation, nextInterval);
        };

        addRandomDonation();

        return () => clearTimeout(addRandomDonation);
    }, []);

    useEffect(() => {}, [donations]);

    return (
        <Swiper
            loop={true}
            slidesPerView={1}
            modules={[Autoplay]}
            autoplay={{
                delay: 4000,
                disableOnInteraction: true,
            }}
            breakpoints={{
                480: {
                    slidesPerView: 2,
                    spaceBetween: 20,
                },
                640: {
                    slidesPerView: 2,
                    spaceBetween: 20,
                },
                1024: {
                    slidesPerView: 3,
                    spaceBetween: 10,
                },
            }}
            className="w-full"
        >
            {donations.map((donation, index) => (
                <SwiperSlide key={index} className="flex justify-center">
                    <DonationCard amount={donation.amount} message={donation.message} donator={donation.donator} />
                </SwiperSlide>
            ))}
        </Swiper>
    );
}
