import Header from "@/components/common/Header";
import MSWComponent from "@/components/common/MSWComponent";
import TanstackQueryProvider from "@/components/common/TanstackQueryProvider";

import "./globals.css";
import { initMsw } from "@/mocks";

initMsw();

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <MSWComponent>
          <TanstackQueryProvider>
            <Header />
            {children}
          </TanstackQueryProvider>
        </MSWComponent>
      </body>
    </html>
  );
}
