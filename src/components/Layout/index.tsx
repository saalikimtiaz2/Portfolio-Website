import Header from "@/components/Navigation/Header";

const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <main className="text-black dark:text-white">
      <Header />
      <div className="bg-grey-300 z-50 dark:bg-black">{children}</div>
    </main>
  );
};

export default Layout;
