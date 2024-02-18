import Header from "./components/header.jsx";
import Footer from "./components/footer.jsx";
import "./globals.css";

export const metadata = {
  title: "Nick's Resume",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="h-full min-h-screen relative pt-24 pb-24">
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
