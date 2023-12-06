import Calendar from 'react-calendar';
import React, { useState } from 'react';
import 'react-calendar/dist/Calendar.css';
import {
    Button,
    Card,
    Divider,
    Image,
    Navbar,
    NavbarContent,
    NavbarItem,
    NavbarBrand,
    Link,
} from '@nextui-org/react';
import DefaultLayout from '@/layouts/default';

type ValuePiece = Date | null;
type Value = ValuePiece | [ValuePiece, ValuePiece];

export default function NeedTour(): JSX.Element {
    const [value, onChange] = useState<Value>(new Date());

    const [selectedDateString, setSelectedDateString] = useState<string>('');

    const handleDateChange = (date: Value) => {
        onChange(date);
        if (date instanceof Date) {
            const dateString = date.toLocaleDateString();
            setSelectedDateString(dateString);
        }
    };
    return (
        <DefaultLayout>
            <h2 style={{ fontSize: 33, fontWeight: '600', margin: '20px 100px  ' }}>
                {' '}
                Need a Tour?
            </h2>
            <h2 style={{ fontSize: 25, fontWeight: '300', margin: '20px 100px  ' }}>
                {' '}
                Please choose a date from the calendar
            </h2>

            <div style={{ flex: 1, margin: '20px 100px  ' }}>
                <div style={{ flex: 1, marginRight: '500px', padding: '10px' }}>
                    <Card
                        style={{
                            float: 'left',
                            padding: '13px',
                            width: '400px',
                            height: '325px',
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
                            <Calendar onChange={handleDateChange} value={value} />
                        </div>
                    </Card>

                    <Card
                        style={{
                            float: 'right',
                            padding: '15px',
                            width: '250px',
                            height: '150px',
                            margin: '0px 0px 20px  ',
                        }}
                    >
                        <h2 style={{ fontSize: 20 }}>Chosen Date:</h2>
                        <Divider />
                        <div style={{ padding: '15px 0px' }}>
                            {selectedDateString && <p>{selectedDateString}</p>}
                        </div>
                        <Button style={{ fontSize: 15 }} color="success">
                            Book Tour
                        </Button>
                    </Card>

                    <Button
                        style={{
                            float: 'right',
                            padding: '15px',
                            width: '250px',
                            height: '50px',
                            fontSize: 15,
                        }}
                    >
                        Need Assistance?
                    </Button>
                </div>
            </div>
        </DefaultLayout>
    );
}
