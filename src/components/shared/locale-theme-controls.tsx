"use client";

import { Moon, Sun } from "lucide-react";
import { useLocale, useTranslations } from "next-intl";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";

import { Link, usePathname } from "@/i18n/navigation";

export function LocaleThemeControls() {
    const t = useTranslations("LocaleControls");
    const locale = useLocale();
    const pathname = usePathname();

    const { resolvedTheme, setTheme } = useTheme();
    const [mounted, setMounted] = useState(false);

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
        <div className="flex items-center gap-2">
            <Link
                href={pathname}
                locale={oppositeLocale}
                aria-label={t("changeLanguage")}
                title={t("changeLanguage")}
                className="grid size-10 place-items-center rounded-md border-2 border-border bg-card text-sm font-black transition-colors hover:border-foreground"
            >
                {languageLabel}
            </Link>

            <button
                type="button"
                onClick={toggleTheme}
                aria-label={t("changeTheme")}
                title={t("changeTheme")}
                className="grid size-10 place-items-center rounded-md border-2 border-border bg-card transition-colors hover:border-foreground"
            >
                {mounted ? (
                    resolvedTheme === "dark" ? (
                        <Sun size={18} aria-hidden="true" />
                    ) : (
                        <Moon size={18} aria-hidden="true" />
                    )
                ) : (
                    <span
                        className="size-[18px]"
                        aria-hidden="true"
                    />
                )}
            </button>
        </div>
    );
}