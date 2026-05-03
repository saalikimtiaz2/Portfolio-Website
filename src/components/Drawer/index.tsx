"use client";
import { Transition } from "@headlessui/react";
import { Fragment } from "react";

function Drawer({
  isOpen,
  closeDrawer,
  children,
}: {
  isOpen: boolean;
  closeDrawer: () => void;
  children: React.ReactNode;
}) {
  return (
    <Transition show={isOpen} as={Fragment}>
      <div className="fixed inset-0 z-[200]">
        <Transition.Child
          as={Fragment}
          enter="transition-opacity ease-out duration-300"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="transition-opacity ease-in duration-200"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <button
            aria-label="Close menu overlay"
            onClick={closeDrawer}
            className="absolute inset-0 cursor-default bg-ink-950/40 backdrop-blur-sm"
          />
        </Transition.Child>

        <Transition.Child
          as={Fragment}
          enter="transition-transform ease-out duration-300"
          enterFrom="translate-x-full"
          enterTo="translate-x-0"
          leave="transition-transform ease-in duration-200"
          leaveFrom="translate-x-0"
          leaveTo="translate-x-full"
        >
          <div className="absolute right-0 top-0 h-full w-full max-w-md border-l border-ink-200 bg-ink-50 p-6 shadow-lift dark:border-ink-800 dark:bg-ink-950">
            {children}
          </div>
        </Transition.Child>
      </div>
    </Transition>
  );
}

export default Drawer;
