"use client";

import { Menu, Moon, Sun } from "lucide-react";
import { useLocale, useTranslations } from "next-intl";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import { LocaleThemeControls } from "@/components/shared/locale-theme-controls";

import { Link, usePathname } from "@/i18n/navigation";

export function WelcomeHeader() {
    const t = useTranslations("WelcomeHeader");
    const locale = useLocale();
    const pathname = usePathname();

    const { resolvedTheme, setTheme } = useTheme();

    const [mounted, setMounted] = useState(false);
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

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

    function closeMobileMenu() {
        setMobileMenuOpen(false);
    }

    return (
        <header className="sticky top-0 z-50 border-b-2 border-foreground bg-background/95 backdrop-blur">
            <div className="mx-auto flex min-h-20 max-w-7xl items-center justify-between gap-4 px-4 sm:px-6 lg:px-8">
                {/* Brand and desktop navigation */}
                <div className="flex min-w-0 items-center gap-6 lg:gap-10">
                    <Link
                        href="/"
                        aria-label={t("home")}
                        onClick={closeMobileMenu}
                        className="flex shrink-0 items-center gap-3"
                    >
                        <div className="grid size-11 shrink-0 place-items-center rounded-md border-2 border-foreground bg-primary font-black text-black automart-shadow-sm">
                            A
                        </div>

                        <div className="leading-none">
                            <p className="text-xl font-black tracking-[-0.04em] sm:text-2xl">
                                automart
                            </p>

                            <p className="mt-1.5 text-[8px] font-black uppercase tracking-[0.16em] text-foreground/55 sm:text-[9px]">
                                {t("tagline")}
                            </p>
                        </div>
                    </Link>

                    <nav
                        aria-label={t("mainNavigation")}
                        className="hidden items-center gap-7 md:flex"
                    >
                        <Link
                            href="/#how-it-works"
                            className="whitespace-nowrap text-sm font-bold underline-offset-4 transition-colors hover:text-foreground/60 hover:underline"
                        >
                            {t("howItWorks")}
                        </Link>

                        <Link
                            href="/#for-sellers"
                            className="whitespace-nowrap text-sm font-bold underline-offset-4 transition-colors hover:text-foreground/60 hover:underline"
                        >
                            {t("forSellers")}
                        </Link>
                    </nav>
                </div>

                {/* Header actions */}
                <div className="flex shrink-0 items-center gap-2">
                    <LocaleThemeControls />

                    <Link
                        href="/login"
                        className="hidden whitespace-nowrap px-3 py-2 text-sm font-bold underline-offset-4 transition-colors hover:text-foreground/60 hover:underline sm:inline-flex"
                    >
                        {t("signIn")}
                    </Link>

                    <Link
                        href="/register"
                        className="hidden min-h-11 items-center justify-center whitespace-nowrap rounded-md border-2 border-foreground bg-primary px-5 py-2 text-sm font-black text-black automart-shadow-sm transition-transform hover:-translate-y-0.5 sm:inline-flex"
                    >
                        {t("createAccount")}
                    </Link>

                    <button
                        type="button"
                        aria-label={t("openMenu")}
                        aria-expanded={mobileMenuOpen}
                        onClick={() => {
                            setMobileMenuOpen((current) => !current);
                        }}
                        className="grid size-10 place-items-center rounded-md border-2 border-foreground bg-card md:hidden"
                    >
                        <Menu size={20} aria-hidden="true" />
                    </button>
                </div>
            </div>

            {/* Mobile navigation */}
            {mobileMenuOpen && (
                <div className="border-t-2 border-foreground bg-background px-4 py-4 md:hidden">
                    <nav
                        aria-label={t("mobileNavigation")}
                        className="mx-auto grid max-w-7xl gap-3"
                    >
                        <Link
                            href="/#how-it-works"
                            onClick={closeMobileMenu}
                            className="rounded-md border-2 border-border bg-card px-4 py-3 text-sm font-bold"
                        >
                            {t("howItWorks")}
                        </Link>

                        <Link
                            href="/#for-sellers"
                            onClick={closeMobileMenu}
                            className="rounded-md border-2 border-border bg-card px-4 py-3 text-sm font-bold"
                        >
                            {t("forSellers")}
                        </Link>

                        <Link
                            href="/login"
                            onClick={closeMobileMenu}
                            className="rounded-md border-2 border-border bg-card px-4 py-3 text-center text-sm font-bold"
                        >
                            {t("signIn")}
                        </Link>

                        <Link
                            href="/register"
                            onClick={closeMobileMenu}
                            className="rounded-md border-2 border-foreground bg-primary px-4 py-3 text-center text-sm font-black text-black automart-shadow-sm"
                        >
                            {t("createAccount")}
                        </Link>
                    </nav>
                </div>
            )}
        </header>
    );
}