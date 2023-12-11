import React from 'react';
import { useRouter } from 'next/router';
import DefaultLayout from '@/layouts/default';
import MenuCard from '@/components/MenuCard';

export default function App() {
    const router = useRouter();
    const list1 = [
        {
            title: 'NEW HERE?',
            img: '/images/about.jpg',
            onPress: () => router.push('/about_us'),
        },
        {
            title: 'EVENTS',
            img: '/images/calender.jpg',
            onPress: () => router.push('/reservation'),
        },
        {
            title: 'HERE FOR DELIVERY',
            img: '/images/delivery.jpg',
            onPress: () => router.push('/tour'),
        },
        {
            title: 'NEED ASSISTANCE',
            img: '/images/ticket.jpg',
            onPress: () => router.push('/ticket'),
        },
    ];
    const list2 = [
        {
            title: 'DONATE TO MAKERSPACE',
            img: '/images/donate.jpg',
            onPress: () => router.push('/ticket'),
        },
        {
            title: 'REPORT AN EMERGENCY',
            img: '/images/emergency.jpg',
            onPress: () => router.push('/ticket'),
        },
        {
            title: 'REQUEST A TOUR',
            img: '/images/tour.jpg',
            onPress: () => router.push('/tour'),
        },
        {
            title: 'ALREADY A MEMBER?',
            img: '/images/3D printer.jpg',
            onPress: () => router.push('/test'),
        },
    ];


    return (
        <DefaultLayout>
            <div className="w-full flex flex-wrap gap-4 p-5">
                {list1.map((item, index) => (
                    <MenuCard item={item} key={index} />
                ))}
            </div>
            <div className="w-full flex flex-wrap gap-4 p-5">
                {list2.map((item, index) => (
                    <MenuCard item={item} key={index} />
                ))}
            </div>
        </DefaultLayout>
    );
}
