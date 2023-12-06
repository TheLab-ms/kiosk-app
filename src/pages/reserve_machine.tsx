import {
  Card,
  CardBody,
  CardFooter,
  Divider,
  Link,
  Image,
  Navbar,
  Button,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  Radio,
  RadioGroup,
} from '@nextui-org/react';
import Calendar from 'react-calendar';
import React, { useState } from 'react';
import 'react-calendar/dist/Calendar.css';
import DefaultLayout from '@/layouts/default';

type ValuePiece = Date | null;
type Value = ValuePiece | [ValuePiece, ValuePiece];

const SelectedDateCard: React.FC<{ dateString: string }> = ({ dateString }) => (
  <div>
    <b>Chosen Date:</b>
    <p>{dateString}</p>
  </div>
);

export default function ReserveMachine(): JSX.Element {
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  const [selectedMachine, setSelectedMachine] = useState<string | null>(null);

  const list = [
    {
      title: 'Woodworking',
      img: '/images/dominik-scythe-3cIvvzjE6Lk-unsplash.webp',
    },
    {
      title: 'Fibers',
      img: '/images/sewingmachines-lowres-6791.jpg',
    },
    {
      title: 'Printing Tools',
      img: '/images/how-does-a-3d-printer-work.webp',
    },
  ];

  const listWood = [
    {
      title: 'Belt Sander',
      img: '/images/carpenter-uses-power-sander-as-powerful-tool-wood-finishing_1_.jpg',
    },
    {
      title: 'Planer',
      img: '/images/thickness.webp',
    },
  ];

  const listFiber = [
    {
      title: 'Sewing Machine',
      img: '/images/download.jpg',
    },
    {
      title: 'Heat Press',
      img: '/images/38-38CM-T-Shirt-Heat-Press-Machine-High-Pressure-Sublimation-Heat-Transfer-Flat-Plate-Pressing-For.jpg',
    },
  ];

  const listPrint = [
    {
      title: 'Resin 3D Printer',
      img: '/images/ap_wrongtheory_1_4x3purpleball.webp',
    },
    {
      title: '3D Printer',
      img: '/images/image-92.jpg',
    },
  ];

  const [value, onChange] = useState<Value>(new Date());

  const [selectedDateString, setSelectedDateString] = useState<string>('');

  const handleDateChange = (date: Value) => {
    onChange(date);
    if (date instanceof Date) {
      const dateString = date.toLocaleDateString();
      setSelectedDateString(dateString);
    }
  };
  const [selectedTime, setSelectedTime] = useState<string | null>(null);

  const handleTimeChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSelectedTime(event.target.value);
  };

  const handleClick = (title: string) => {
    setSelectedCategory(title);
  };

  return (
    <DefaultLayout>
      <h2 style={{ fontSize: 33, fontWeight: '600', margin: '20px 100px  ' }}>
        {' '}
        Reserve a Machine
      </h2>
      <h2 style={{ fontSize: 20, margin: '20px 100px  ' }}>
        {' '}
        1. Select a Machine
      </h2>
      <div
        style={{ margin: '20px 100px  ' }}
        className="w-full flex flex-grow gap-4  p-5 "
      >
        {list.map((item, index) => (
          <Card
            onClick={() => {
              setSelectedCategory(item.title);
            }}
            style={{
              width: '400px',
              height: '300px',
              border:
                selectedCategory === item.title ? '4px solid black' : 'none',
            }}
            isPressable
            key={index}
          >
            <CardBody className="overflow-visible p-0">
              <Image
                shadow="sm"
                radius="lg"
                width="flex"
                height="200px"
                alt={item.title}
                className="w-full object-cover h-[140px]"
                src={item.img}
              />
            </CardBody>
            <CardFooter className="text-small justify-between">
              <b>{item.title}</b>
            </CardFooter>
          </Card>
        ))}
      </div>

      <div>
        {selectedCategory === 'Woodworking' && (
          <>
            {
              <div
                style={{ margin: '20px 100px  ' }}
                className="w-full flex flex-grow gap-4  p-5 "
              >
                {listWood.map((item, index) => (
                  <Card
                    onClick={() => {
                      setSelectedMachine(item.title);
                    }}
                    style={{
                      width: '400px',
                      height: '300px',
                      border:
                        selectedMachine === item.title
                          ? '4px solid black'
                          : 'none',
                    }}
                    isPressable
                    key={index}
                  >
                    <CardBody className="overflow-visible p-0">
                      <Image
                        shadow="sm"
                        radius="lg"
                        width="flex"
                        height="200px"
                        alt={item.title}
                        className="w-full object-cover h-[140px]"
                        src={item.img}
                      />
                    </CardBody>
                    <CardFooter className="text-small justify-between">
                      <b>{item.title}</b>
                    </CardFooter>
                  </Card>
                ))}
              </div>
            }
          </>
        )}
      </div>

      <div>
        {selectedCategory === 'Fibers' && (
          <>
            {
              <div
                style={{ margin: '20px 100px  ' }}
                className="w-full flex flex-grow gap-4  p-5 "
              >
                {listFiber.map((item, index) => (
                  <Card
                    onClick={() => {
                      setSelectedMachine(item.title);
                    }}
                    style={{
                      width: '400px',
                      height: '300px',
                      border:
                        selectedMachine === item.title
                          ? '4px solid black'
                          : 'none',
                    }}
                    isPressable
                    key={index}
                  >
                    <CardBody className="overflow-visible p-0">
                      <Image
                        shadow="sm"
                        radius="lg"
                        width="flex"
                        height="200px"
                        alt={item.title}
                        className="w-full object-cover h-[140px]"
                        src={item.img}
                      />
                    </CardBody>
                    <CardFooter className="text-small justify-between">
                      <b>{item.title}</b>
                    </CardFooter>
                  </Card>
                ))}
              </div>
            }
          </>
        )}
      </div>

      <div>
        {selectedCategory === 'Printing Tools' && (
          <>
            {
              <div
                style={{ margin: '20px 100px  ' }}
                className="w-full flex flex-grow gap-4  p-5 "
              >
                {listPrint.map((item, index) => (
                  <Card
                    onClick={() => {
                      setSelectedMachine(item.title);
                    }}
                    style={{
                      width: '400px',
                      height: '300px',
                      border:
                        selectedMachine === item.title
                          ? '4px solid black'
                          : 'none',
                    }}
                    isPressable
                    key={index}
                  >
                    <CardBody className="overflow-visible p-0">
                      <Image
                        shadow="sm"
                        radius="lg"
                        width="flex"
                        height="200px"
                        alt={item.title}
                        className="w-full object-cover h-[140px]"
                        src={item.img}
                      />
                    </CardBody>
                    <CardFooter className="text-small justify-between">
                      <b>{item.title}</b>
                    </CardFooter>
                  </Card>
                ))}
              </div>
            }
          </>
        )}
      </div>

      <h2 style={{ fontSize: 20, margin: '20px 100px  ' }}>
        2. Select a Date
      </h2>
      <div style={{ margin: '20px 100px  ' }}>
        <div style={{ flex: 1, marginRight: '10px', padding: '10px' }}>
          <Card style={{ padding: '13px', width: '400px', height: '325px' }}>
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
        </div>

        <div style={{ flex: 1, padding: '10px' }}>
          {selectedDateString && (
            <SelectedDateCard dateString={selectedDateString} />
          )}
        </div>
      </div>

      <h2 style={{ fontSize: 20, margin: '20px 100px  ' }}>
        {' '}
        3. Select a Time
      </h2>
      <RadioGroup
        style={{ margin: '20px 100px  ' }}
        color="success"
        value={selectedTime || ''}
        onChange={handleTimeChange}
      >
        <Radio value="11:00am">11:00am</Radio>
        <Radio value="3:00pm">3:00pm</Radio>
        <Radio value="4:00pm">4:00pm</Radio>
        <Radio value="6:00pm">6:00pm</Radio>
        <Radio value="7:00pm">7:00pm</Radio>
      </RadioGroup>

      <h2 style={{ fontSize: 20, margin: '20px 100px  ' }}>
        4. Confirm Reservation
      </h2>
      <div
        style={{ margin: '20px 100px  ', padding: '10px', marginTop: '10px' }}
      >
        <Card style={{ padding: '10px', width: '500px', height: '300px' }}>
          <CardBody>
            <h2 style={{ fontSize: 25, fontWeight: '300' }}>
              Reservation Details
            </h2>
            <Divider />
            <b>Machine:</b>
            {selectedMachine && <p>{selectedMachine}</p>}
            <Divider />
            <b>Date: </b>
            {selectedDateString && <p>{selectedDateString}</p>}
            <Divider />
            <b>Selected Time:</b>
            {selectedTime && <p>{selectedTime}</p>}
          </CardBody>
        </Card>
      </div>

      <div style={{ margin: '20px 100px  ' }}>
        <Button
          style={{ padding: '10px 5px', width: '250px', height: '70px' }}
          color="success"
        >
          <b style={{ fontSize: 20 }}>Confirm Reservation</b>
        </Button>
      </div>
    </DefaultLayout>
  );
}
