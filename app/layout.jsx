import { Poppins } from "next/font/google";
import "./globals.scss";
import { Footer, Header } from "./components/pages/global";

const poppins = Poppins({ subsets: ["latin"], weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"] });

export const metadata = {
  title: "kupppir",
  description: "kupppir media",
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
      </body>
    </html>
  );
}
