import Link from "next/link";

import { PageShell } from "@/components/page-shell";
import { routeGroups } from "@/lib/navigation";

export default function Home() {
  return (
    <PageShell
      eyebrow="Phase 1 foundation"
      title="E-Commerce AI"
      description="Base frontend routes are in place for the public storefront, checkout path, and admin incident-response workspace."
    >
      <div className="grid gap-4 md:grid-cols-2">
        {routeGroups.map((group) => (
          <section
            key={group.title}
            className="rounded-lg border border-slate-200 bg-white p-5 shadow-sm dark:border-slate-800 dark:bg-slate-900"
          >
            <h2 className="text-base font-semibold text-slate-950 dark:text-white">
              {group.title}
            </h2>
            <div className="mt-4 grid gap-2">
              {group.routes.map((route) => (
                <Link
                  key={route.href}
                  href={route.href}
                  className="rounded-md border border-slate-200 px-3 py-2 text-sm font-medium text-slate-700 transition-colors hover:border-slate-300 hover:bg-slate-50 dark:border-slate-800 dark:text-slate-200 dark:hover:border-slate-700 dark:hover:bg-slate-800"
                >
                  {route.label}
                </Link>
              ))}
            </div>
          </section>
        ))}
      </div>
    </PageShell>
  );
}
