import React from "react";
import { Card, CardBody, CardFooter, Image } from "@nextui-org/react";
import Navbar from '../components/navbar';

export default function App() {
    const list1 = [
        {
            title: "ABOUT US",
            img: "https://nextui.org/images/fruit-1.jpeg",
            //price: "$5.50",
        },
        {
            title: "EVENTS",
            img: "https://nextui.org/images/fruit-2.jpeg",
           // price: "$3.00",
        },
        {
            title: "RESERVE MACHINE",
            img: "https://nextui.org/images/fruit-3.jpeg",
            //price: "$10.00",
        },
        {
            title: "TICKET",
            img: "https://nextui.org/images/fruit-4.jpeg",
            //price: "$5.30",
        },
        
    ];
    const list2 = [{
        title: "Avocado",
        img: "https://nextui.org/images/fruit-5.jpeg",
       // price: "$15.70",
    },
    {
        title: "Lemon 2",
        img: "https://nextui.org/images/fruit-6.jpeg",
       // price: "$8.00",
    },
    {
        title: "Banana",
        img: "https://nextui.org/images/fruit-7.jpeg",
       // price: "$7.50",
    },
    {
        title: "Watermelon",
        img: "https://nextui.org/images/fruit-8.jpeg",
       // price: "$12.20",
    },]
    return (
<div className="p-4">
<Navbar/>
        <div className="w-full flex flex-grow gap-4  p-5">
         
            {list1.map((item, index) => (
                <Card className="" shadow="sm" key={index} isPressable onPress={() => console.log("item pressed")}>
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
                        <p className="text-default-500">{item.price}</p>
                    </CardFooter>
                </Card>
            ))}
        </div>
        <div className=" w-full flex flex-grow gap-4  p-5">
            {list2.map((item, index) => (
                <Card className="" shadow="sm" key={index} isPressable onPress={() => console.log("item pressed")}>
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
                        <p className="text-default-500">{item.price}</p>
                    </CardFooter>
                </Card>
            ))}
        </div>
        </div>
    );
}
