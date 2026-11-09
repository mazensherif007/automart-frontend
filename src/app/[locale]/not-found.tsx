"use client";

import {
    ArrowLeft,
    Home,
    SearchX,
} from "lucide-react";
import { useTranslations } from "next-intl";

import { Link } from "@/i18n/navigation";

export default function NotFoundPage() {
    const t = useTranslations("NotFound");

    return (
        <main className="relative grid min-h-screen place-items-center overflow-hidden bg-background px-5 py-12 text-foreground">
            <div
                aria-hidden="true"
                className="pointer-events-none absolute inset-0 opacity-[0.035]"
                style={{
                    backgroundImage:
                        "linear-gradient(to right, currentColor 1px, transparent 1px), linear-gradient(to bottom, currentColor 1px, transparent 1px)",
                    backgroundSize: "32px 32px",
                }}
            />

            <div
                aria-hidden="true"
                className="pointer-events-none absolute -end-48 -top-48 size-[560px] rounded-full bg-primary/30 blur-3xl"
            />

            <section className="relative z-10 w-full max-w-2xl text-center">
                <div className="relative">
                    <p
                        aria-hidden="true"
                        className="select-none text-[140px] font-black leading-none tracking-[-0.08em] text-foreground/5 sm:text-[210px]"
                    >
                        404
                    </p>

                    <div className="absolute inset-0 grid place-items-center">
                        <div className="grid size-20 place-items-center rounded-full border-2 border-foreground bg-primary text-black automart-shadow">
                            <SearchX
                                size={36}
                                strokeWidth={2.5}
                                aria-hidden="true"
                            />
                        </div>
                    </div>
                </div>

                <p className="mt-6 text-xs font-black uppercase tracking-[0.18em] text-foreground/50">
                    {t("eyebrow")}
                </p>

                <h1 className="mt-3 text-4xl font-black tracking-[-0.04em] sm:text-5xl">
                    {t("title")}
                </h1>

                <p className="mx-auto mt-5 max-w-xl text-base font-medium leading-8 text-foreground/65">
                    {t("description")}
                </p>

                <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
                    <Link
                        href="/"
                        className="inline-flex min-h-[52px] items-center justify-center gap-2 rounded-md border-2 border-foreground bg-primary px-6 py-3 text-sm font-black text-black automart-shadow transition-transform hover:-translate-y-0.5"
                    >
                        <Home size={18} aria-hidden="true" />

                        {t("home")}
                    </Link>

                    <button
                        type="button"
                        onClick={() => window.history.back()}
                        className="inline-flex min-h-[52px] items-center justify-center gap-2 rounded-md border-2 border-foreground bg-card px-6 py-3 text-sm font-black automart-shadow-sm transition-transform hover:-translate-y-0.5"
                    >
                        <ArrowLeft
                            size={17}
                            className="rtl:rotate-180"
                            aria-hidden="true"
                        />

                        {t("goBack")}
                    </button>
                </div>
            </section>
        </main>
    );
}