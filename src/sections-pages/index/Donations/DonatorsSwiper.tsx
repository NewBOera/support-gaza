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
    amount: any;
    message: string;
    donator: string;
    dateTime: string;
}

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

    function formatAmount(amount: number): string {
        return amount.toLocaleString('en-US');
    }

    function generateCurrentDateTime() {
        const now = new Date();
        const date = now.toLocaleDateString();
        const time = now.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit', second: '2-digit' });
        return `${date} ${time}`;
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

        // Generar tres donaciones iniciales
        const initialDonations = Array.from({ length: 3 }, (_, index) => ({
            message: newMessages[index],
            donator: newDonators[index],
            amount: generateAmount(),
            dateTime: generateCurrentDateTime(),
        }));

        setDonations(initialDonations);
        localStorage.setItem('donationsGaza', JSON.stringify(initialDonations));

        let index = 3; // Continuar después de las tres donaciones iniciales

        const addRandomDonation: any = () => {
            const newDonation = {
                message: newMessages[index],
                donator: newDonators[index],
                amount: generateAmount(),
                dateTime: generateCurrentDateTime(),
            };

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
                    <DonationCard amount={formatAmount(donation.amount)} message={donation.message} donator={donation.donator} dateTime={donation.dateTime} />
                </SwiperSlide>
            ))}
        </Swiper>
    );
}
