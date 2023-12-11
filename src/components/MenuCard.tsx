import { Card, CardBody, CardFooter, Image } from "@nextui-org/react";

const cardStyle = {
    width: '100%', // This will make sure each card tries to fill the container
    maxWidth: '24%', // This will set the maximum width for each card
    flex: '1 0 auto' // This will allow the card to grow and shrink but not exceed its maximum width
};

const cardBodyStyle = {
    height: '250px', // Fixed height for the card body
    overflow: 'hidden', // This will hide the overflowing image
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center'
};

interface MenuCardProps {
    item: {
        title: string;
        img: string;
        onPress: () => void;
    };
}

export default function MenuCard({ item }: MenuCardProps): JSX.Element {
    return (
        <Card
            shadow="sm"
            isPressable
            onPress={item.onPress}
            style={cardStyle} // Apply the custom card style here
        >
            <CardBody style={cardBodyStyle} className="p-0">
                <Image
                    shadow="sm"
                    radius="lg"
                    alt={item.title}
                    className="w-full object-cover h-full"
                    src={item.img}
                />
            </CardBody>
            <CardFooter className="text-small justify-between">
                <b>{item.title}</b>
            </CardFooter>
        </Card>)
}