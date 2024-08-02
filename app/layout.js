
import "./globals.css";
import Navbar from "./_components/Navbar";
export const metadata = {
  title: "KUARTZ",
  description: "Kuartz Beauty Salon",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="bg-pink-300" >
        <Navbar/>
        {children}
        </body>
    </html>
  );
}
