
import { HeaderPublic } from "./_components/header";
import "./globals.css";


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={` antialiased`}
      >
        <HeaderPublic />
        {children}
      </body>
    </html>
  );
}
