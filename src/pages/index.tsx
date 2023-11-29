import Head from 'next/head'
// import Image from 'next/image'
import styles from '@/styles/Home.module.css'
import {Card, CardHeader, CardBody, CardFooter, Image, Input} from "@nextui-org/react";
import {Button, ButtonGroup} from "@nextui-org/react";
import Link from 'next/link';
//import QRCodeGenerator from './QRCodeGenerator';
import React from 'react'


const signInPage = () => {

    let url: string = "https://nextjs.org/docs/app/building-your-application/rendering/client-components";

  return (

    <div className='flow-root'>
        <Card className='flex float-left'>
        <CardHeader>
            <h2>Sign In</h2>
        </CardHeader>
        <CardBody>
            <h4>Username</h4>
            <Input type="username" label="Username" />
            <h4>Password</h4>
            <Input type="password" label="Password" />
            <Link href={"/forgot_password"} className='text-xs'>Forgot your password</Link>
        </CardBody>
            <CardFooter className='flow-root'>
                <div className='float-left'>
                    <h3>Scan QR Code to Sign In</h3>
                    <Image
                    src="/arrow.png"
                    alt="Arrow"
                    width="100"
                    height="100"/>
                </div>
                <div className='float-right'>
                    
                </div>

            </CardFooter>
        </Card>

        <Card className='flex float-right'>
            <h1 className='text-large uppercase'>Scan your key here</h1>
            <Image
                    src="/arrow.png"
                    alt="Arrow"
                    width="100"
                    height="100"/>
            <div className='boarder-radius outline-black outline-8 rounded-full overflow-hidden'>
                <Image  
                        src="/tapAnimation.gif"
                        alt="Green Circle"
                        width="200"
                        height="200"/>
            </div>
        </Card>
    </div>

    
  )
}

export default signInPage