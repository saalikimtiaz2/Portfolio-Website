import Footer from "@/components/Navigation/Footer";
import Header from "@/components/Navigation/Header";

const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <main className="relative min-h-screen bg-ink-50 text-ink-950 dark:bg-ink-950 dark:text-ink-50">
      <Header />
      {children}
      <Footer />
    </main>
  );
};

export default Layout;
