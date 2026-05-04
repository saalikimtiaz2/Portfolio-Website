"use client";

import {
  CALENDLY_IFRAME_TITLE,
  CALENDLY_PAGE_SETTINGS,
} from "@/config/calendly";
import { useEffect, useState } from "react";
import { PopupButton } from "react-calendly";

type CalendlyPopupButtonProps = {
  url: string;
  label?: string;
  className?: string;
};

function CalendlyPopupButton({
  url,
  label = "Schedule a call",
  className,
}: CalendlyPopupButtonProps) {
  const [rootElement, setRootElement] = useState<HTMLElement | null>(null);

  useEffect(() => {
    setRootElement(document.body);
  }, []);

  if (!rootElement) {
    return (
      <button type="button" disabled className={className} aria-busy="true">
        {label}
      </button>
    );
  }

  return (
    <PopupButton
      url={url}
      text={label}
      rootElement={rootElement}
      className={className}
      pageSettings={CALENDLY_PAGE_SETTINGS}
      iframeTitle={CALENDLY_IFRAME_TITLE}
    />
  );
}

export default CalendlyPopupButton;
