import { Dialog, Transition } from "@headlessui/react";
import { Fragment } from "react";
import { HiXMark } from "react-icons/hi2";

const Modal = ({
  open,
  closeModal,
  eyebrow,
  title,
  subtitle,
  children,
}: {
  open: boolean;
  eyebrow?: string;
  title?: string;
  subtitle?: string;
  closeModal: () => void;
  children: React.ReactNode;
}) => {
  const hasHeader = Boolean(title || subtitle || eyebrow);

  return (
    <Transition appear show={open} as={Fragment}>
      <Dialog as="div" className="relative z-[999]" onClose={closeModal}>
        <Transition.Child
          as={Fragment}
          enter="ease-out duration-300"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="ease-in duration-200"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <div className="fixed inset-0 bg-ink-950/40 backdrop-blur-sm dark:bg-ink-950/70" />
        </Transition.Child>

        <div className="fixed inset-0 overflow-y-auto">
          <div className="flex min-h-full items-center justify-center p-4">
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0 translate-y-4 scale-95"
              enterTo="opacity-100 translate-y-0 scale-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100 translate-y-0 scale-100"
              leaveTo="opacity-0 translate-y-4 scale-95"
            >
              <Dialog.Panel className="relative flex max-h-[85vh] w-full max-w-5xl transform flex-col overflow-hidden rounded-3xl border border-ink-200 bg-white text-left shadow-lift transition-all dark:border-ink-800 dark:bg-ink-900">
                {hasHeader && (
                  <div className="relative border-b border-ink-200 px-6 pb-5 pt-6 dark:border-ink-800 md:px-8 md:pb-6 md:pt-7">
                    {eyebrow && (
                      <p className="font-mono text-[10px] font-medium uppercase tracking-[0.22em] text-ink-500 dark:text-ink-400">
                        {eyebrow}
                      </p>
                    )}
                    {title && (
                      <Dialog.Title
                        as="h3"
                        className="mt-2 pr-12 font-heading text-2xl font-semibold leading-tight tracking-tight text-ink-950 dark:text-ink-50 md:text-[28px]"
                      >
                        {title}
                      </Dialog.Title>
                    )}
                    {subtitle && (
                      <p className="mt-2 max-w-md pr-12 text-sm leading-relaxed text-ink-600 dark:text-ink-400">
                        {subtitle}
                      </p>
                    )}
                  </div>
                )}

                <button
                  onClick={closeModal}
                  aria-label="Close modal"
                  className="absolute right-4 top-4 inline-flex h-9 w-9 cursor-pointer items-center justify-center rounded-full text-ink-500 transition-colors duration-200 hover:bg-ink-100 hover:text-ink-950 dark:hover:bg-ink-800 dark:hover:text-ink-50"
                >
                  <HiXMark aria-hidden />
                </button>

                <div
                  className={`flex-1 overflow-y-auto px-6 py-6 md:px-8 ${
                    hasHeader ? "" : "pt-12"
                  }`}
                >
                  {children}
                </div>
              </Dialog.Panel>
            </Transition.Child>
          </div>
        </div>
      </Dialog>
    </Transition>
  );
};

export default Modal;
