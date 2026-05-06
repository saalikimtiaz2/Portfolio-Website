import Footer from "@/components/Navigation/Footer";
import Header from "@/components/Navigation/Header";
import type { socialLinkTypes } from "@/interfaces/sanity";

const Layout = ({
  children,
  socialLinks,
}: {
  children: React.ReactNode;
  socialLinks: socialLinkTypes[];
}) => {
  return (
    <main className="relative min-h-screen bg-ink-50 text-ink-950 dark:bg-ink-950 dark:text-ink-50">
      <Header />
      {children}
      <Footer socialLinks={socialLinks} />
    </main>
  );
};

export default Layout;
