import Link from "next/link";
import type { ReactNode } from "react";

import { primaryNavigation } from "@/lib/navigation";

type PageShellProps = {
  eyebrow: string;
  title: string;
  description: string;
  children?: ReactNode;
};

export function PageShell({
  eyebrow,
  title,
  description,
  children,
}: PageShellProps) {
  return (
    <main className="min-h-screen">
      <header className="border-b border-slate-200 bg-white dark:border-slate-800 dark:bg-slate-950">
        <div className="mx-auto flex max-w-6xl flex-col gap-4 px-4 py-5 sm:px-6 lg:px-8">
          <Link
            href="/"
            className="text-lg font-semibold text-slate-950 dark:text-white"
          >
            E-Commerce AI
          </Link>
          <nav aria-label="Primary navigation" className="flex flex-wrap gap-2">
            {primaryNavigation.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="rounded-md px-3 py-2 text-sm font-medium text-slate-600 transition-colors hover:bg-slate-100 hover:text-slate-950 dark:text-slate-300 dark:hover:bg-slate-900 dark:hover:text-white"
              >
                {item.label}
              </Link>
            ))}
          </nav>
        </div>
      </header>
      <section className="mx-auto flex max-w-6xl flex-col gap-8 px-4 py-10 sm:px-6 lg:px-8">
        <div className="max-w-3xl">
          <p className="text-sm font-semibold uppercase tracking-wide text-teal-700 dark:text-teal-300">
            {eyebrow}
          </p>
          <h1 className="mt-3 text-3xl font-semibold text-slate-950 dark:text-white sm:text-4xl">
            {title}
          </h1>
          <p className="mt-4 text-base leading-7 text-slate-600 dark:text-slate-300">
            {description}
          </p>
        </div>
        {children}
      </section>
    </main>
  );
}
