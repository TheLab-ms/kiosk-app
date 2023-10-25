
// import React from 'react';
// import Link from 'next/link';

// const Home: React.FC = () => {
//   return (
//     <div>
//       <header>
//         <h1>Welcome to Your Lab.ms Signed in Page</h1>
//       </header>
//       <main>
//         <p>This is the content of your signed in page.</p>
//         <div>
//           <button>
//             <Link href="/help">Help</Link>
//           </button>
//           <button>
//             <Link href="/reserve-machine">Reserve a Machine</Link>
//           </button>
//           <button>
//             <Link href="/tour">Tour</Link>
//           </button>
//           <button>
//             <Link href="/registration">Registration</Link>
//           </button>
//           <button>
//             <Link href="/signout">Sign Out</Link>
//           </button>
//         </div>
//       </main>
//       <footer>
//         &copy; {new Date().getFullYear()} Your Website
//       </footer>
//     </div>
//   );
// };

// export default Home;

import React from "react";
import {Button} from "@nextui-org/react";
import {Card, CardBody, CardFooter, Image} from "@nextui-org/react";

import styles from '@/styles/Home.module.css';
import {Navbar, NavbarBrand, NavbarContent, NavbarItem, Link} from "@nextui-org/react";



export default function App() {
  const list = [
    {
      title: "Reserve a machine",
      img: "<images /barn-images-t5YUoHW6zRo-unsplash.jpg",
      price: "$5.50",
    },
    {
      title: "Tangerine",
      img: "/images/fruit-2.jpeg",
      price: "$3.00",
    },
    {
      title: "Raspberry",
      img: "/images/fruit-3.jpeg",
      price: "$10.00",
    },
    {
      title: "Lemon",
      img: "/images/fruit-4.jpeg",
      price: "$5.30",
    },
    {
      title: "Avocado",
      img: "/images/fruit-5.jpeg",
      price: "$15.70",
    },
    {
      title: "Lemon 2",
      img: "/images/fruit-6.jpeg",
      price: "$8.00",
    },
    {
      title: "Banana",
      img: "/images/fruit-7.jpeg",
      price: "$7.50",
    },
    {
      title: "Watermelon",
      img: "/images/fruit-8.jpeg",
      price: "$12.20",
    },
  ];
  return (
    <div>
      <Navbar isBordered>
      <NavbarBrand>
        <p className="font-bold text-inherit">TheLAB.ms</p>
      </NavbarBrand>
      <NavbarContent className="hidden sm:flex gap-4" justify="center">
        <NavbarItem>
          <Link color="primary" href="#">
            Features
          </Link>
        </NavbarItem>
        <NavbarItem isActive>
          <Link href="#" aria-current="page">
            Customers
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link color="primary" href="#">
            Integrations
          </Link>
        </NavbarItem>
      </NavbarContent>
      <NavbarContent justify="end">
        <NavbarItem className="hidden lg:flex">
          <Link href="#">Login</Link>
        </NavbarItem>
        <NavbarItem>
          
          <Button as={Link} color="primary" href="#" variant="flat">
            Sign Up
          </Button>
          <Button as={Link} color="primary" href="#" variant="flat">
            Need Help?         
          </Button>
        </NavbarItem>
      </NavbarContent>
    </Navbar>
          <header>
            <h1>Welcome to Your Lab.ms Signed in Page</h1>
          </header>
          <main  className={`${styles.main}`}>
            <p>This is the content of your signed in page.</p>
    {/* <div className="flex flex-wrap gap-4 items-center justify-center h-screen">
      {list.map((item, index) => (
        <Card shadow="sm" key={index} isPressable onPress={() => console.log("item pressed")}>
          <CardBody className="overflow-visible p-0">
            <Image
              shadow="sm"
              radius="lg"
              width="100%"
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
    </div> */}
            
    <div className="flex flex-wrap gap-4 items-center justify-center h-screen">
    <div className="flex-grow">
      <Button radius="full" className="bg-gradient-to-tr from-pink-500 to-yellow-500 text-white shadow-lg" size="lg" color ="primary">
        Default
      </Button>
      <Button radius="full" className="bg-gradient-to-tr from-pink-500 to-yellow-500 text-white shadow-lg" size="lg" color="primary">
        Tour
      </Button>  
      <Button radius="full" className="bg-gradient-to-tr from-pink-500 to-yellow-500 text-white shadow-lg" size="lg" color="primary">
        Reserve a Machine
      </Button>  
      <Button radius="full" className="bg-gradient-to-tr from-pink-500 to-yellow-500 text-white shadow-lg" size="lg" color="primary">
        Help
      </Button>  
      <Button radius="full" className="bg-gradient-to-tr from-pink-500 to-yellow-500 text-white shadow-lg" size="lg" color="primary">
        Events 
      </Button>  
      <Button radius="full" className="bg-gradient-to-tr from-pink-500 to-yellow-500 text-white shadow-lg" size="lg" color="primary" >
        Sign Out
      </Button>  
      </div>
      </div>
      

      </main>
    </div>

  );
}

