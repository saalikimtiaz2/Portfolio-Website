"use client";

function Loader() {
  return (
    <div
      className="fixed inset-0 z-[999] flex items-center justify-center bg-ink-50 dark:bg-ink-950"
      role="status"
      aria-live="polite"
    >
      <div className="flex flex-col items-center gap-6">
        <span className="relative flex h-3 w-3">
          <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-accent opacity-75" />
          <span className="relative inline-flex h-3 w-3 rounded-full bg-accent" />
        </span>
        <p className="font-mono text-xs uppercase tracking-[0.3em] text-ink-500">
          Loading
        </p>
      </div>
    </div>
  );
}

export default Loader;
