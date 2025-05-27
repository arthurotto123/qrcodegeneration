import type { Metadata } from "next";
import { Poppins, Geist_Mono} from "next/font/google";
import './styles.css';



const poppings = Poppins({
  weight: ["400", "500","600","700"],
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Gerador de QR CODE",
  description: "Gerador de QR CODE",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-br">
      <body className={`${poppings}`}>
        {children}
      </body>
    </html>
  );
}
