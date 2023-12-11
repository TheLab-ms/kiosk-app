import React from 'react';
import styles from '@/styles/reservation.module.css';
import Head from 'next/head';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import { Button, Card } from '@nextui-org/react';
import { useRouter } from 'next/router';
import DefaultLayout from '@/layouts/default';

export default function ReservationCalendar() {
	const router = useRouter();
	const events = [
		{ id: 1, title: 'Event 1', description: 'Description for Event 1' },
		{ id: 2, title: 'Event 2', description: 'Description for Event 2' },
		{ id: 3, title: 'Event 3', description: 'Description for Event 3' },
		{ id: 4, title: 'Event 4', description: 'Description for Event 4' },
	];

	return (
		<DefaultLayout>
			<div className={styles.black_box}>
				<div className={styles.title}>Events Calendar</div>
				<div className={styles.inner_left}>
					<div
						style={{
							flex: 1,
							justifyContent: 'center',
							alignItems: 'center',
							padding: '10px',
							float: 'left',
							backgroundColor: '#fff',
							marginLeft: '130px',
						}}
					>
						<Card
							style={{
								float: 'left',
								padding: '13px',
								width: '400px',
								height: '350px',
							}}
						>
							<div
								style={{
									flex: 1,
									justifyContent: 'center',
									alignItems: 'center',
									padding: '10px',
								}}
							>
								<Calendar />
							</div>
						</Card>

						<Button className={`${styles.reservation_button} ${styles.text}`}>
							<p>
								Need a Tour?
								<br />
								Click Here
							</p>
						</Button>
					</div>
				</div>

				<div className={styles.inner_right}>
					{events.length > 0 ? (
						events.map((event) => (
							<Button
								key={event.id}
								className={styles.events_container}
								color="primary"
							>
								{event.title}
							</Button>
						))
					) : (
						<div className={styles.events_container}>
							No events available. Coming Soon!!
						</div>
					)}
				</div>
			</div>
		</DefaultLayout>
	);
}
