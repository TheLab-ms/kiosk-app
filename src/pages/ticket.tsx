import React, { useState } from 'react';
import styles from '@/styles/ticket.module.css';
import { Button, Input, Select, SelectItem, Spacer, Textarea } from '@nextui-org/react';
import DefaultLayout from '@/layouts/default';
import { useSession } from 'next-auth/react';
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
	}
];

export default function SupportTicket() {
	const session = useSession();
	const [reason, setReason] = useState('');
	const [message, setMessage] = useState('');

	const handleSubmit = (event: { preventDefault: () => void; }) => {
		event.preventDefault();
		// Handle the form submission logic here
		console.log({ reason, message });
	};

	return (
		<DefaultLayout>

			<h1 className={styles.bigText}>Create Support Ticket</h1>
			<form onSubmit={handleSubmit}>
				<Select label="Select a reason" className={styles.bigSelect}>
					{reasons.map((reasons) => (
						<SelectItem key={reasons.value} className={styles.bigText}>{reasons.label}</SelectItem>
					))}
				</Select>

				<Spacer y={3} />

				<Input
					type="text"
					label="Your Name"
					placeholder="Discord Handle, First and Last Name, or Email Address"
					onChange={(e) => setMessage(e.target.value)}
					required={false}
					className={styles.bigText}
					hidden={!session}
				/>

				<Spacer y={3} />
				<Textarea
					type="text"
					label="Your Message"
					placeholder="Describe your issue or question"
					onChange={(e) => setMessage(e.target.value)}
					required={false}
					className={styles.bigText}
				/>

				<Spacer y={3} />

				<Button type="submit" className={styles.bigButton}>Submit Ticket</Button>
			</form>

		</DefaultLayout >
	);
}
