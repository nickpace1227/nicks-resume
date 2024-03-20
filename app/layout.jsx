import Header from "./components/header.jsx";
import "./globals.css";

export const metadata = {
  title: "Nick's Resume",
  description:
    "An app for you to get to know Nicholas Pace and see, loosely what I'm capable of. By the way, while I've got you here, did you ever hear the tradgedy of Darth Plagueis, the Wise? I thought not. It's not a story the Jedi would tell you.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="h-full min-h-screen relative pt-24 pb-24">
        <Header />
        {children}
      </body>
    </html>
  );
}
