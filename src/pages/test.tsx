import React from "react";
import { Card, CardBody, CardFooter, Image } from "@nextui-org/react";
import { useRouter } from 'next/router';
import DefaultLayout from "@/layouts/default";


//import theme from '../themes/theme'; // Adjust the path accordingly
//import '../styles/globals.css'; // Your global styles


export default function App() {
    const router = useRouter();
    const list1 = [
        {
            title: "ABOUT US",
            // img: "https://nextui.org/images/fruit-1.jpeg",
            img: "/images/about.jpg",
            onPress: () => router.push('/about_us'),
            //price: "$5.50",
        },
        {
            title: "EVENTS",
            //img: "https://nextui.org/images/fruit-2.jpeg",
            img: "/images/calender.jpg",
            onPress: () => router.push('/reservation'),
            // price: "$3.00",
        },
        {
            title: "RESERVE MACHINE",
            // img: "https://nextui.org/images/fruit-3.jpeg",
            img: "/images/3D printer.jpg",
            onPress: () => router.push('/reserve_machine'),
            //price: "$10.00",
        },
        {
            title: "TICKET",
            // img: "https://nextui.org/images/fruit-4.jpeg",
            img: "/images/ticket.jpg",
            onPress: () => router.push('/ticket'),
            //price: "$5.30",
        },

    ];
    const list2 = [{
        title: "DONATE TO MAKERSPACE",
        //img: "https://nextui.org/images/fruit-5.jpeg",
        img: "/images/donate.jpg",
        onPress: () => router.push('/ticket'),
        // price: "$15.70",
    },
    {
        title: "PAYMENT OPTIONS",
        // img: "https://nextui.org/images/fruit-6.jpeg",
        img: "/images/payment.jpg",
        onPress: () => router.push('/ticket'),
        // price: "$8.00",
    },
    {
        title: "REPORT AN EMERGENCY",
        // img: "https://nextui.org/images/fruit-7.jpeg",
        img: "/images/emergency.jpg",
        onPress: () => router.push('/ticket'),
        // price: "$7.50",
    },
    {
        title: "REQUEST A TOUR",
        // img: "https://nextui.org/images/fruit-8.jpeg",
        img: "/images/tour.jpg",
        onPress: () => router.push('/tour'),
        // price: "$12.20",
    },]
    return (
        <DefaultLayout>

            <div className="w-full flex flex-grow gap-4  p-5">

                {list1.map((item, index) => (
                    <Card className="" shadow="sm" key={index} isPressable onPress={item.onPress}>
                        <CardBody className="overflow-visible p-0">
                            <Image
                                shadow="sm"
                                radius="lg"
                                //  width={270}
                                alt={item.title}
                                className="w-full object-cover h-[140px]"
                                src={item.img}
                            //src="/images/3D printer.jpg" 
                            />
                        </CardBody>
                        <CardFooter className="text-small justify-between">
                            <b>{item.title}</b>
                            {/* <p className="text-default-500">{item.price}</p> */}
                        </CardFooter>
                    </Card>
                ))}
            </div>
            <div className=" w-full flex flex-grow gap-4  p-5">
                {list2.map((item, index) => (
                    <Card className="" shadow="sm" key={index} isPressable onPress={item.onPress}>
                        <CardBody className="overflow-visible p-0">
                            <Image
                                shadow="sm"
                                radius="lg"
                                //  width={270}
                                alt={item.title}
                                className="w-full object-cover h-[140px]"
                                src={item.img}

                            //src="/images/calender.jpg" 
                            />
                        </CardBody>
                        <CardFooter className="text-small justify-between">
                            <b>{item.title}</b>
                            {/* <p className="text-default-500">{item.price}</p> */}
                        </CardFooter>
                    </Card>

                ))}

            </div>
        </DefaultLayout >

    );
}
