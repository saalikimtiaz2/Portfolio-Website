"use client";
import Drawer from "@/components/Drawer";
import { Logo } from "@/components/SvgIcons";
import ThemeSwitcher from "@/components/ThemeSwitcher";
import { scrolltoHash } from "@/helpers/scrollHash";
import clsx from "clsx";
import { useEffect, useState } from "react";
import { HiArrowUpRight, HiBars3, HiXMark } from "react-icons/hi2";

const NAV_ITEMS = [
  { id: "home", label: "Home" },
  { id: "about", label: "About" },
  { id: "services", label: "Services" },
  { id: "projects", label: "Work" },
  { id: "contact", label: "Contact" },
];

function Header() {
  const [isDrawerOpen, setIsDrawerOpen] = useState<boolean>(false);
  const [scrolled, setScrolled] = useState<boolean>(false);

  const toggleDrawer = () => setIsDrawerOpen((prev) => !prev);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY >= 32);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={clsx(
        "fixed inset-x-0 top-0 z-[150] flex justify-center px-4 pt-4 transition-all duration-300 ease-out md:px-6",
        scrolled ? "pt-3" : "pt-6"
      )}
    >
      <nav
        className={clsx(
          "flex w-full max-w-6xl items-center justify-between rounded-full border px-4 py-2 transition-all duration-300 ease-out md:px-3 md:py-2",
          scrolled
            ? "border-ink-200/80 bg-white/80 shadow-card backdrop-blur-md dark:border-ink-800/80 dark:bg-ink-950/80"
            : "border-transparent bg-transparent"
        )}
        aria-label="Primary"
      >
        <button
          onClick={() => scrolltoHash("home")}
          className="cursor-pointer rounded-full p-1 transition-opacity duration-200 hover:opacity-80"
          aria-label="Go to home"
        >
          <Logo height="36px" />
        </button>

        <ul className="hidden items-center gap-1 md:flex">
          {NAV_ITEMS.map((item) => (
            <li key={item.id}>
              <button
                className="nav-link rounded-full px-4 py-2 hover:bg-ink-100 dark:hover:bg-ink-900"
                onClick={() => scrolltoHash(item.id)}
              >
                {item.label}
              </button>
            </li>
          ))}
        </ul>

        <div className="flex items-center gap-2">
          <ThemeSwitcher />
          <a
            href="mailto:r.salikimtiaz@gmail.com"
            target="_blank"
            rel="noopener noreferrer"
            className="hidden md:inline-flex"
          >
            <button className="btn btn-primary btn-sm">
              Hire me
              <HiArrowUpRight className="text-sm" aria-hidden />
            </button>
          </a>
          <button
            className="inline-flex h-10 w-10 cursor-pointer items-center justify-center rounded-full border border-ink-200 text-ink-950 transition-colors duration-200 hover:bg-ink-100 dark:border-ink-800 dark:text-ink-50 dark:hover:bg-ink-900 md:hidden"
            onClick={toggleDrawer}
            aria-label="Open menu"
            aria-expanded={isDrawerOpen}
          >
            <HiBars3 className="text-xl" aria-hidden />
          </button>
        </div>
      </nav>

      <Drawer isOpen={isDrawerOpen} closeDrawer={toggleDrawer}>
        <div className="flex h-full flex-col justify-between">
          <div>
            <div className="flex items-center justify-between">
              <Logo height="40px" />
              <div className="flex items-center gap-2">
                <ThemeSwitcher />
                <button
                  className="inline-flex h-10 w-10 cursor-pointer items-center justify-center rounded-full border border-ink-200 dark:border-ink-800"
                  onClick={toggleDrawer}
                  aria-label="Close menu"
                >
                  <HiXMark className="text-xl" aria-hidden />
                </button>
              </div>
            </div>

            <ul className="mt-12 space-y-2">
              {NAV_ITEMS.map((item, idx) => (
                <li key={item.id}>
                  <button
                    onClick={() => {
                      scrolltoHash(item.id);
                      toggleDrawer();
                    }}
                    className="group flex w-full cursor-pointer items-center justify-between rounded-2xl px-4 py-5 text-left transition-colors duration-200 hover:bg-ink-100 dark:hover:bg-ink-900"
                  >
                    <span className="flex items-baseline gap-3">
                      <span className="font-mono text-xs text-ink-400">
                        0{idx + 1}
                      </span>
                      <span className="font-heading text-3xl font-semibold tracking-tight">
                        {item.label}
                      </span>
                    </span>
                    <HiArrowUpRight
                      className="text-xl text-ink-400 transition-transform duration-200 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-ink-950 dark:group-hover:text-ink-50"
                      aria-hidden
                    />
                  </button>
                </li>
              ))}
            </ul>
          </div>

          <a
            href="mailto:r.salikimtiaz@gmail.com"
            target="_blank"
            rel="noopener noreferrer"
            onClick={toggleDrawer}
          >
            <button className="btn btn-accent btn-lg w-full">
              Let&apos;s work together
              <HiArrowUpRight aria-hidden />
            </button>
          </a>
        </div>
      </Drawer>
    </header>
  );
}

export default Header;
