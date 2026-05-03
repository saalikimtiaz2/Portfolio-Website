import { Dialog, Transition } from "@headlessui/react";
import { Fragment } from "react";
import { HiXMark } from "react-icons/hi2";

const Modal = ({
  open,
  closeModal,
  title,
  children,
}: {
  open: boolean;
  title?: string;
  closeModal: () => void;
  children: React.ReactNode;
}) => {
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
              <Dialog.Panel className="relative w-full max-w-xl transform overflow-hidden rounded-3xl border border-ink-200 bg-white p-8 text-left shadow-lift transition-all dark:border-ink-800 dark:bg-ink-900">
                {title && (
                  <Dialog.Title
                    as="h3"
                    className="font-heading text-xl font-semibold tracking-tight text-ink-950 dark:text-ink-50"
                  >
                    {title}
                  </Dialog.Title>
                )}

                <button
                  onClick={closeModal}
                  aria-label="Close modal"
                  className="absolute right-4 top-4 inline-flex h-9 w-9 cursor-pointer items-center justify-center rounded-full text-ink-500 transition-colors duration-200 hover:bg-ink-100 hover:text-ink-950 dark:hover:bg-ink-800 dark:hover:text-ink-50"
                >
                  <HiXMark aria-hidden />
                </button>

                <div className={title ? "mt-6" : ""}>{children}</div>
              </Dialog.Panel>
            </Transition.Child>
          </div>
        </div>
      </Dialog>
    </Transition>
  );
};

export default Modal;
