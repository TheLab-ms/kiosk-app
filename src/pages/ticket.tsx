import React from 'react';
import styles from '@/styles/ticket.module.css';
import Head from 'next/head';
import { Button, Select, SelectItem } from '@nextui-org/react';

export const reasons = [
	{
		label: 'Issue With Machine',
		value: 'Issue With Machine',
		description: '',
	},
	{
		label: 'Cancel My Membership',
		value: 'Cancel My Membership',
		description: '',
	},
	{
		label: 'Here For Delivery',
		value: 'Here For Delivery',
		description: '',
	},
	{
		label: 'Technical Issues',
		value: 'Technical Issues',
		description: '',
	},
	{
		label: 'Feedback and Suggestions',
		value: 'Feedback and Suggestions',
		description: '',
	},
	{
		label: 'Accessibility Support',
		value: ' Accessibility Support',
		description: '',
	},
	{
		label: '...',
		value: '...',
		description: '',
	},
];

export default function SupportTicket() {
	return (
		<>
			<Head>
				<title>Support Ticket Page</title>
				<meta name="viewport" content="width=device-width, initial-scale=1" />
			</Head>

			<main className={styles.main}>
				<div className={styles.black_box}>
					<h1 className={styles.header1}>Need Assistance</h1>
					<p className={styles.paragraph}>
						Please select an issue you are having; we will happily assist.
					</p>

					<div className={styles.dropdown}>
						<Select label="Select a reason">
							{reasons.map((reasons) => (
								<SelectItem key={reasons.value}>{reasons.label}</SelectItem>
							))}
						</Select>
					</div>

					<Button className={styles.button_submit}>Submit</Button>
				</div>

				<div className={styles.bottom_box}>
					<Button className={styles.button_back}>Go Back</Button>
				</div>
			</main>
		</>
	);
}
