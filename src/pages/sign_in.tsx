
import React, { useEffect, useState, FormEvent } from 'react'
import styles from '@/styles/sign_in.module.css';
import { signIn } from "next-auth/react";

import { Card, CardHeader, CardBody, CardFooter } from "@nextui-org/react";
import { Button, ButtonGroup } from "@nextui-org/react";
import { Input } from "@nextui-org/react";
import Link from 'next/link';
import Image from 'next/image';
import QRCodeGenerator from './QRCodeGenerator';

import tapAnimation from '../../public/tapAnimation.gif';


function validateEmail(email: string) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    // Test the email against the regex
    return emailRegex.test(email);
}

const SignInPage = () => {


    let url: string = "https://nextjs.org/docs/app/building-your-application/rendering/client-components";

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");
    const [emailInPutError, setEmailInputError] = useState(false);
    const [passwordInPutError, setPasswordInputError] = useState(false);
    const [isLoading, setIsLoading] = useState(false);

    useEffect(() => {
        validate();
    }, [email, password]);

    async function handleSubmit() {
        // alert(`${process.env.NEXT_PUBLIC_NEXTAUTH_URL}`);

        let res = await signIn("keycloak", {
            email,
            password,
            callbackUrl: `${process.env.NEXT_PUBLIC_NEXTAUTH_URL}`,
            redirect: false,
        });

        if (res?.ok) {
            // toast success
            console.log("success");
            return;
        } else {
            // Toast failed
            setError("Failed! Check you input and try again.");
            // return;
            console.log("Failed", res);
        }
        return res;
    }

    function validate() {
        let emailIsValid = validateEmail(email);

        if (!emailIsValid) {
            setEmailInputError(true);
            return;
        }
        if (password.length < 6) {
            setPasswordInputError(true);
        } else {
            setEmailInputError(false);
            setPasswordInputError(false);
        }
    }
    return (
        <div className='flex justify-center flex-col h-screen'>
            <div className='flex gap-4 justify-center py-15' style={{ height: 90 + 'vh' }}>
                <Card className='p-4' style={{ width: 40 + 'vw' }}>
                    <CardHeader>
                        <h1 style={{ fontSize: 1.6 + 'rem', fontWeight: 'bold' }}>Sign in</h1>
                    </CardHeader>
                    <CardBody className='flex flex-col'>
                        <div style={{ marginTop: '10%' }}>
                            <Button id='login-in-btn' onClick={handleSubmit} className='w-full' style={{ height: 7.5 + 'vh', fontSize: 1.6 + 'rem' }}>Log In Manually</Button>
                            <Link href={"/forgot_password"} className='text-xs underline text-center mx-auto block' style={{ marginTop: 2 + 'vh' }}>Forgot your password?</Link>
                        </div>

                        {/* <form onSubmit={handleSubmit}>
                    <h4>Email</h4>
                    <Input type="email" label="Email" />
                    <h4>Password</h4>
                    <Input type="password" label="Password" /><br/>
                    <Input type="submit" className='w-full mb-2' style={{height: 25 + 'vw', fontSize: 1.6 + 'rem'}} value="Log In"/>
                    <Link href={"/forgot_password"} className='text-xs underline text-center mx-auto block'>Forgot your password?</Link>
                </form> */}
                    </CardBody>
                    <hr />
                    <CardFooter className='flex flex-col flex-grow justify-center'>
                        <h3 style={{ fontSize: 1.6 + 'rem', fontWeight: 'bold', marginBottom: '1rem' }}>Scan QR Code to Sign In</h3>

                        <div>
                            <QRCodeGenerator url={url} />
                        </div>


                    </CardFooter>
                </Card>

                <Card className='p-4 flex flex-col h-full' style={{ width: 25 + 'vw' }}>
                    <div className='flex flex-col justify-center items-center flex-grow'>
                        <div style={{ fontSize: 1.6 + 'rem', fontWeight: 'bold' }}>Scan your key here</div>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={3} stroke="currentColor" className="w-14 h-14">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3" />
                        </svg>
                    </div>
                    <div className='flex-grow'>
                        <Image
                            src={tapAnimation}
                            alt="Green Circle"
                            className='rounded-full'
                            style={{
                                borderWidth: 10 + 'px',
                                borderColor: '#385eb5',
                                marginLeft: 'auto',
                                marginRight: 'auto',
                                width: '20vw',
                                height: 'auto'
                            }} />
                    </div>
                </Card>
            </div>
        </div>

    )
}
export default SignInPage
