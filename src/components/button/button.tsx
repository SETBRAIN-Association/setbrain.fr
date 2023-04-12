import { ReactNode } from "react";
import { button } from "./button.css";
import { Space_Grotesk } from "next/font/google";

const spaceGrotesk = Space_Grotesk({ subsets: ['latin'] });

export const Button = ({children}: {children: ReactNode}) => {
    return <button className={`${button} ${spaceGrotesk.className}`}>{children}</button>;
};