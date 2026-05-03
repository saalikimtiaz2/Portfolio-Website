"use client";

const TechCard = ({ url, title }: { url: string; title: string }) => {
  return (
    <div className="group flex shrink-0 items-center gap-3 rounded-2xl cursor-default border border-ink-200 bg-white px-5 py-3 transition-all duration-300 hover:-translate-y-0.5 hover:border-ink-950 hover:shadow-card dark:border-ink-800 dark:bg-ink-900  dark:hover:border-ink-50">
      <span className="flex h-8 w-8 items-center justify-center">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={url}
          alt={`${title} logo`}
          className="h-7 w-7 object-contain transition-transform duration-300 group-hover:scale-110"
          loading="lazy"
        />
      </span>
      <span className="font-medium text-sm text-ink-800 dark:text-ink-200 whitespace-nowrap">
        {title}
      </span>
    </div>
  );
};

export default TechCard;
