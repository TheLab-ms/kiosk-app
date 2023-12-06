import { Button } from "@nextui-org/react";

export default function Footer(): JSX.Element {
    return (
        <footer className="w-full flex items-center justify-center py-3">
            {['New Here?', 'Short Visit?', 'Member Already?', "Need Help?"].map((btnLabel, index) => (
                <div key={index} className="flex-1" style={{
                    height: '8rem',
                }}>
                    <Button fullWidth style={{
                        height: "100%",
                        fontSize: "3.5rem"
                    }}>{btnLabel}</Button>
                </div>
            ))}
        </footer>
    );
}
