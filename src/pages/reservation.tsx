import React from 'react';
import styles from '@/styles/reservation.module.css';
import Head from 'next/head';
import BasicDateCalendar from '@/components/calendar';
import { Button } from '@nextui-org/react';

export default function ReservationCalendar() {
	const events = [
		{ id: 1, title: 'Event 1', description: 'Description for Event 1' },
		{ id: 2, title: 'Event 2', description: 'Description for Event 2' },
		{ id: 3, title: 'Event 3', description: 'Description for Event 3' },
		{ id: 4, title: 'Event 4', description: 'Description for Event 4' },
	];

	return (
		<>
			<Head>
				<title>Reservation Page</title>
				<meta name="viewport" content="width=device-width, initial-scale=1" />
			</Head>

			<main className={styles.main}>
				<div className={styles.black_box}>
					<div className={styles.title}>Events Calendar</div>
					<div className={styles.inner_left}>
						<BasicDateCalendar />

						<Button className={`${styles.reservation_button} ${styles.text}`}>
							<p>
								Need a Tour?
								<br />
								Click Here
							</p>
						</Button>
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
				<div className={styles.bottom_box}>
					<Button className={`${styles.button_back} ${styles.button_text}`}>
						Go Back
					</Button>
				</div>
			</main>
		</>
	);
}
