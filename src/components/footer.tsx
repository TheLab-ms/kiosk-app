import { Button } from "@nextui-org/react";
import { useRouter } from 'next/router';

const buttons = [
    {
        title: "New Here?",
        url: "/unsigned_user"
    },
    {
        title: "About Us",
        url: "/"
    },
    {
        title: "Member Already?",
        url: "/sign_in"
    },
    {
        title: "Need Help?",
        url: "/ticket"
    }
]

export default function Footer(): JSX.Element {
    const router = useRouter();

    const handleButtonClick = () => {
        // Navigate to the unsigned user page (replace '/unsigned-user' with your actual route)
        router.push('/unsigned_user');
    };

    return (
        <footer className="w-full flex items-center justify-center py-3">
            {buttons.map(({ title, url }, index) => (
                <div key={index} className="flex-1" style={{
                    height: '8rem',
                }}>
                    <Button fullWidth style={{
                        height: "100%",
                        fontSize: "3.5rem"
                    }} onClick={() => {
                        router.push(url)
                    }}
                    >{title}</Button>
                </div>
            ))
            }
        </footer >
    );
}
