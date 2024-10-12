import localFont from "next/font/local";
import "./globals.css";
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata = {
  title: 'Ujjawal - Web Developer Portfolio',
  description: 'Ujjawal\'s web developer portfolio',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="flex flex-col min-h-screen bg-gradient-to-br from-purple-900 via-blue-900 to-teal-900 text-white">
        <Navbar/>
        <main className="flex-grow">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
