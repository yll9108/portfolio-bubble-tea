import { Exo_2 } from "next/font/google";
import "./globals.css";
import Contact from "./common/Contact";
import { HeaderLG, HeaderSmall } from "./common/Header";

const exo_2 = Exo_2({ weight: "400", subsets: ["latin"] });

export const metadata = {
    title: "Yen's portfolio",
    description: "Welcome to Yen's portfolio",
};

export default function RootLayout({ children }) {
    return (
        <html lang="en">
            <body className={exo_2.className}>
                <div className="sm:flex">
                    <div className="hidden sm:block">
                        <HeaderLG />
                    </div>

                    <div className="sm:hidden">
                        <HeaderSmall />
                    </div>
                    {children}
                    <div>
                        <Contact />
                    </div>
                </div>
            </body>
        </html>
    );
}
