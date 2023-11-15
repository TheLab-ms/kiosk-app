import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { DateCalendar } from '@mui/x-date-pickers/DateCalendar';
import dayjs from 'dayjs';

const disablePastDates = (
	date: string | number | dayjs.Dayjs | Date | null | undefined
) => {
	// Calculate the date two months ago
	const twoMonthsAgo = dayjs().subtract(1, 'months');

	// Disable dates that are before two months ago
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
