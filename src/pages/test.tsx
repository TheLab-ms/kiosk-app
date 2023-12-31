import React, { useState } from "react";
import { NextApiRequest, NextApiResponse } from 'next';
import { getServerSession } from 'next-auth';
import { authOptions } from '../pages/api/auth/[...nextauth]';
import { Card, CardBody, CardFooter, Image } from "@nextui-org/react";
import { useRouter } from 'next/router';
import DefaultLayout from "@/layouts/default";
import MenuCard from '@/components/MenuCard';

export default function App(
    // req: NextApiRequest,
	// res: NextApiResponse
) {
    
	// if (!req.method || (req.method !== 'POST' && req.method !== 'DELETE')) {
	// 	res.status(405).json({ message: 'Method not allowed' });
	// 	return;
	// }

	// const session = await getServerSession(req, res, authOptions);
	// if (!session) {
	// 	alert("2nd condition");
	// 	res.status(401).json({ message: 'Unauthorized' });
	// 	return;
	// }
    const router = useRouter();
    const list1 = [
        {
            title: "ABOUT US",
            img: "/images/about.jpg",
            onPress: () => router.push('/AboutUs'),
        },
        {
            title: "EVENTS",
            img: "/images/calender.jpg",
            onPress: () => router.push('/reservation'),
        },
        {
            title: "RESERVE MACHINE",
            img: "/images/3D printer.jpg",
            onPress: () => router.push('/reserve_machine'),
        },
        {
            title: "TICKET",
            img: "/images/ticket.jpg",
            onPress: () => router.push('/ticket'),
        }
    ];
    const list2 = [{
        title: "DONATE TO MAKERSPACE",
        img: "/images/donate.jpg",
        onPress: () => router.push('/ticket'),
    },
    {
        title: "PAYMENT OPTIONS",
        img: "/images/payment.jpg",
        onPress: () => router.push('/ticket'),
    },
    {
        title: "REPORT AN EMERGENCY",
        img: "/images/emergency.jpg",
        onPress: () => router.push('/ticket'),
    },
    {
        title: "REQUEST A TOUR",
        img: "/images/tour.jpg",
        onPress: () => router.push('/tour'),
    }];

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
