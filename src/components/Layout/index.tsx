import Footer from "@/components/Navigation/Footer";
import Header from "@/components/Navigation/Header";

const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <main className="text-black dark:text-white">
      <Header />
      <div className="bg-grey-300 z-50  dark:bg-neutral-900 ">{children}</div>
      <Footer />
    </main>
  );
};

export default Layout;
