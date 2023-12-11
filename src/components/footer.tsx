import { Button } from "@nextui-org/react";
import { useRouter } from 'next/router';

export default function Footer(): JSX.Element {
    const router = useRouter();

    const handleButtonClick = () => {
        // Navigate to the unsigned user page (replace '/unsigned-user' with your actual route)
        router.push('/unsigned_user');
      };
    
    return (
        <footer className="w-full flex items-center justify-center py-3">
            {['New Here?', 'Short Visit?', 'Member Already?', "Need Help?"].map((btnLabel, index) => (
                <div key={index} className="flex-1" style={{
                    height: '8rem',
                }}>
                    <Button fullWidth style={{
                        height: "100%",
                        fontSize: "3.5rem"
                        
                        
                    }}
                    // onClick={btnLabel === 'New Here?' ? handleNewHereClick : undefined}
                    onClick={handleButtonClick}
                    >{btnLabel}</Button>
                </div>
            ))}
        </footer>
    );
}
