import "./globals.css";
import Navbar from "./_components/Navbar";
import PopOut from "./_components/PopOut";
export const metadata = {
  title: "KUARTZ",
  description: "Kuartz Beauty Salon",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="bg-pink-300 open-sans-1 text-white">
        {/*<PopOut/>*/}
        <Navbar />
        {children}
      </body>
    </html>
  );
}
