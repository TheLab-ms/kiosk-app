import React from "react";
import { Card, CardBody, CardFooter, Image } from "@nextui-org/react";
import { useRouter } from 'next/router';
import DefaultLayout from "@/layouts/default";

export default function App() {
    const router = useRouter();
    const list1 = [
        {
            title: "ABOUT US",
            img: "/images/about.jpg",
            onPress: () => router.push('/about_us'),
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
    }]
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
                            />
                        </CardBody>
                        <CardFooter className="text-small justify-between">
                            <b>{item.title}</b>
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
                                alt={item.title}
                                className="w-full object-cover h-[140px]"
                                src={item.img}
                            />
                        </CardBody>
                        <CardFooter className="text-small justify-between">
                            <b>{item.title}</b>
                        </CardFooter>
                    </Card>
                ))}
            </div>
        </DefaultLayout >
    );
}
