import Header from "@/components/common/Header";
import "./globals.css";
import { MSWComponent } from "@/components/MSWComponent";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <MSWComponent>
          <Header />
          {children}
        </MSWComponent>
      </body>
    </html>
  );
}
