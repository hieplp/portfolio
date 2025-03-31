import { ThemeProvider } from "next-themes";
import { Navbar } from "../navbar/navbar";

export default function HomeLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <ThemeProvider
      attribute="class"
      defaultTheme="system"
      enableSystem
      disableTransitionOnChange
    >
      <div className="container mx-auto max-w-screen-lg">
        <Navbar />
        <main className="flex-grow">{children}</main>
        {/* <Footer /> */}
      </div>
    </ThemeProvider>
  );
}
