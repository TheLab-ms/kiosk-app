//import '@/styles/globals.css';
import type { AppProps } from 'next/app';
import Button from './Button';
import AboutUsComponent from './AboutUs';
import Box from './box';
import { NextUIProvider } from '@nextui-org/react';

export default function App({ Component, pageProps }: AppProps) {
	return (
		<NextUIProvider>
			<AboutUsComponent /> 
			
			
		</NextUIProvider>
	);
}
