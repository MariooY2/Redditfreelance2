
import "./globals.css";

export const metadata = {
  title: "KUARTZ",
  description: "Kuartz Beauty Salon",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body >{children}</body>
    </html>
  );
}
