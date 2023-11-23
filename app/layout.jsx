import { Poppins } from "next/font/google";
import "./globals.scss";
import { Footer, Header } from "./components/pages/global";
import Script from "next/script";

const poppins = Poppins({ subsets: ["latin"], weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"] });

export const metadata = {
  metadataBase: new URL('https://kupppir.vercel.app/'),
  alternates: {
    canonical: '/',
  },
  title: {
    template: "%s | kupppir",
    default: "kupppir",
  },
  description: "kupppir'a ait sosyal medya bağlantıları",
  openGraph: {
    title: "kupppir",
    description: "kupppir'a ait sosyal medya bağlantıları",
    url: "https://www.kupppir.vercel.app/",
    siteName: "kupppir",
    images: [
      {
        url: "https://kupppir.vercel.app/logo500.png",
        width: 500,
        height: 500,
      },
    ],
    type: "website",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={poppins.className}>
        <main className="mainContainer">
          <Header />
          <section>{children}</section>
          <Footer />
        </main>
        <Script src="https://www.googletagmanager.com/gtag/js?id=G-L2XXREWN6J" />
          <Script id="google-analytics">
            {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
          
            gtag('config', 'G-L2XXREWN6J');
            `}
          </Script>
      </body>
    </html>
  );
}
