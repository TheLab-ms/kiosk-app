import React from 'react';
import styles from '@/styles/ticket.module.css';
import Head from 'next/head';
import { Button } from '@nextui-org/react';

//<aside></aside>

export default function ticket() {
	return (
		<>
			<Head>
				<title>Support Ticket</title>
				<meta name="viewport" content="width=device-width, initial-scale=1" />
			</Head>

			<main className={styles.main}>
				<div className={styles.black_box}>
					<input name="reason"></input>
				</div>
				<div className={styles.bottom_box}>
					<Button className={`${styles.button_back} ${styles.button_text}`}>
						Go Back
					</Button>
				</div>
			</main>
		</>
	);
}
