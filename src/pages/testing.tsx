import * as React from 'react';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { DateCalendar } from '@mui/x-date-pickers/DateCalendar';
import dayjs from 'dayjs';

const disablePastDates = (
	date: string | number | dayjs.Dayjs | Date | null | undefined
) => {
	const twoMonthsAgo = dayjs().subtract(1, 'months');

	return dayjs(date).isBefore(twoMonthsAgo, 'day');
};

export default function BasicDateCalendar() {
	return (
		<LocalizationProvider dateAdapter={AdapterDayjs}>
			<DateCalendar
				views={['month', 'day']}
				shouldDisableDate={disablePastDates}
			/>
		</LocalizationProvider>
	);
}
