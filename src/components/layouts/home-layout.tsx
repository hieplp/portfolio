import { ThemeProvider } from "next-themes";
import { Navbar } from "../navbar/navbar";
import { Footer } from "@/app/_components/footer";
import { ScrollToTop } from "@/app/_components/scroll-to-top";

interface HomeLayoutProps {
  children: React.ReactNode;
}

export default function HomeLayout({ children }: HomeLayoutProps) {
  return (
    <ThemeProvider
      attribute="class"
      defaultTheme="system"
      enableSystem
      disableTransitionOnChange
    >
      <div className="container mx-auto max-w-screen-lg px-4">
        <Navbar />
        <main className="flex-grow">{children}</main>
        <Footer />
        <ScrollToTop />
      </div>
    </ThemeProvider>
  );
}
