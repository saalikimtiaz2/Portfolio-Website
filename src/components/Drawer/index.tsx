import Meteore from "@/components/Meteore";
import { Transition } from "@headlessui/react";

function Drawer({
  isOpen,
  closeDrawer,
  children,
}: {
  isOpen: boolean;
  closeDrawer: () => void;
  children: React.ReactNode;
}) {
  if (isOpen)
    return (
      <div className="h-screen w-screen fixed left-0 top-0 bottom-0 right-0 bg-black bg-opacity-10 dark:bg-white dark:bg-opacity-20 backdrop-blur-sm">
        <Meteore />
        <Transition
          show={isOpen}
          enter="transition ease-in-out duration-300 transform"
          enterFrom="translate-x-[1000px]"
          enterTo="translate-x-0"
          leave="transition ease-in-out duration-300 transform"
          leaveFrom="translate-x-0"
          leaveTo="translate-x-[1000px]"
        >
          <div className="bg-white dark:bg-black p-4 h-screen z-50">
            {children}
          </div>
        </Transition>
      </div>
    );
}

export default Drawer;
