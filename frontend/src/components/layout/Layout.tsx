import { FC, ReactNode } from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";
import { ThemeProvider } from "../../context/ThemeContext";

interface LayoutProps {
  children: ReactNode;
}

const Layout: FC<LayoutProps> = ({ children }) => {
  return (
    <ThemeProvider>
      <div className="min-h-screen bg-gray-50 dark:bg-gray-900 transition-colors duration-300 relative">
        <div className="relative z-20">
          <Navbar />
        </div>
        <main className="relative z-10">{children}</main>
        <Footer />
      </div>
    </ThemeProvider>
  );
};

export default Layout;
