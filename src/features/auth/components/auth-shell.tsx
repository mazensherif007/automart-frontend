"use client";

import {
    ArrowLeft,
    Moon,
    Sun,
} from "lucide-react";
import {
    useLocale,
    useTranslations,
} from "next-intl";
import { useTheme } from "next-themes";
import {
    useEffect,
    useState,
} from "react";

import {
    Link,
    usePathname,
} from "@/i18n/navigation";

type AuthShellProps = {
    children: React.ReactNode;
};

export function AuthShell({
    children,
}: AuthShellProps) {
    const t = useTranslations("AuthShell");

    const locale = useLocale();
    const pathname = usePathname();

    const {
        resolvedTheme,
        setTheme,
    } = useTheme();

    const [mounted, setMounted] =
        useState(false);

    const oppositeLocale: "en" | "ar" =
        locale === "ar" ? "en" : "ar";

    const languageLabel =
        locale === "ar" ? "EN" : "ع";

    useEffect(() => {
        setMounted(true);
    }, []);

    function toggleTheme() {
        setTheme(
            resolvedTheme === "dark"
                ? "light"
                : "dark"
        );
    }

    return (
        <main className="relative min-h-screen overflow-hidden bg-background text-foreground">
            {/* Grid background */}
            <div
                aria-hidden="true"
                className="pointer-events-none absolute inset-0 opacity-[0.035]"
                style={{
                    backgroundImage:
                        "linear-gradient(to right, currentColor 1px, transparent 1px), linear-gradient(to bottom, currentColor 1px, transparent 1px)",
                    backgroundSize: "32px 32px",
                }}
            />

            {/* Top lime glow */}
            <div
                aria-hidden="true"
                className="pointer-events-none absolute -end-48 -top-48 size-[560px] rounded-full bg-primary/30 blur-3xl"
            />

            {/* Bottom lime glow */}
            <div
                aria-hidden="true"
                className="pointer-events-none absolute -bottom-56 -start-56 size-[520px] rounded-full bg-primary/20 blur-3xl"
            />

            <div className="relative z-10 flex min-h-screen flex-col">
                {/* Auth header */}
                <header className="border-b-2 border-foreground bg-background/90 backdrop-blur">
                    <div className="mx-auto flex min-h-20 w-full max-w-7xl items-center justify-between gap-4 px-4 sm:px-8 lg:px-10">
                        {/* Automart brand */}
                        <Link
                            href="/"
                            aria-label={t("home")}
                            className="flex shrink-0 items-center gap-3"
                        >
                            <span className="grid size-11 shrink-0 place-items-center rounded-md border-2 border-foreground bg-primary font-black text-black automart-shadow-sm">
                                A
                            </span>

                            <span className="hidden leading-none xs:block sm:block">
                                <span className="block text-xl font-black tracking-[-0.04em]">
                                    automart
                                </span>

                                <span className="mt-1.5 block text-[8px] font-black uppercase tracking-[0.16em] text-foreground/55">
                                    {t("tagline")}
                                </span>
                            </span>
                        </Link>

                        {/* Header actions */}
                        <div className="flex shrink-0 items-center gap-2">
                            {/* Language switcher */}
                            <Link
                                href={pathname}
                                locale={oppositeLocale}
                                aria-label={t("changeLanguage")}
                                title={t("changeLanguage")}
                                className="grid size-10 place-items-center rounded-md border-2 border-border bg-card text-sm font-black transition-colors hover:border-foreground"
                            >
                                {languageLabel}
                            </Link>

                            {/* Theme switcher */}
                            <button
                                type="button"
                                onClick={toggleTheme}
                                aria-label={t("changeTheme")}
                                title={t("changeTheme")}
                                className="grid size-10 place-items-center rounded-md border-2 border-border bg-card transition-colors hover:border-foreground"
                            >
                                {mounted ? (
                                    resolvedTheme === "dark" ? (
                                        <Sun
                                            size={18}
                                            aria-hidden="true"
                                        />
                                    ) : (
                                        <Moon
                                            size={18}
                                            aria-hidden="true"
                                        />
                                    )
                                ) : (
                                    <span
                                        className="size-[18px]"
                                        aria-hidden="true"
                                    />
                                )}
                            </button>

                            {/* Back to home */}
                            <Link
                                href="/"
                                className="inline-flex min-h-10 items-center justify-center gap-2 rounded-md border-2 border-foreground bg-card px-3 py-2 text-sm font-black automart-shadow-sm transition-transform hover:-translate-y-0.5 sm:px-4"
                            >
                                <ArrowLeft
                                    size={16}
                                    className="rtl:rotate-180"
                                    aria-hidden="true"
                                />

                                <span className="hidden sm:inline">
                                    {t("backHome")}
                                </span>
                            </Link>
                        </div>
                    </div>
                </header>

                {/* Form content */}
                <div className="flex flex-1 items-center justify-center px-5 py-12 sm:px-8 lg:py-16">
                    {children}
                </div>
            </div>
        </main>
    );
}