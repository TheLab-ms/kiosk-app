import React from "react";
import {Button} from "@nextui-org/react";
//import {Card, CardBody, CardFooter, Image} from "@nextui-org/react";

// import styles from '@/styles/Home.module.css';
import {Navbar, NavbarBrand, NavbarContent, NavbarItem, Link} from "@nextui-org/react";
import Image from 'next/image';

export default function App() {
  return (
    <div>
      <Navbar isBordered>
      <NavbarBrand>
        <p>  <Image
                src="/Screenshot 2023-11-01 153213.png"
                alt="Vercel Logo"
                // className={styles.vercelLogo}
                width={100}
                height={24}
                priority
              /></p>
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
          <main  
          // className={`${styles.main}`}
          >
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

    <div className="flex gap-4 items-center justify-center py-15">
      <Button radius="full" className="bg-gradient-to-tr from-pink-500 to-yellow-500 text-white shadow-lg" size="lg" color ="primary">
        Default
      </Button>
      <Button radius="full" className="bg-gradient-to-tr from-pink-500 to-yellow-500 text-white shadow-lg" size="lg" color="primary">
        Tour
      </Button>  
      </div>
      <div className="flex gap-4 items-center justify-center">

      <Button radius="full" className="bg-gradient-to-tr from-pink-500 to-yellow-500 text-white shadow-lg" size="lg" color="primary">
        Reserve a Machine
      </Button>  
      <Button radius="full" className="bg-gradient-to-tr from-pink-500 to-yellow-500 text-white shadow-lg" size="lg" color="primary">
        Help
      </Button>
      </div>  
      <div className="flex gap-4 items-center justify-center">

      <Button radius="full" className="bg-gradient-to-tr from-pink-500 to-yellow-500 text-white shadow-lg" size="lg" color="primary">
        Events 
      </Button>  
      <Button radius="full" className="bg-gradient-to-tr from-pink-500 to-yellow-500 text-white shadow-lg" size="lg" color="primary" >
        Sign Out
      </Button>  
      </div>


      </main>
    </div>
  )};