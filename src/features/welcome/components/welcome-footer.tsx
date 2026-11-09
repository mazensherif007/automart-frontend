import {
    ExternalLink,
    Mail,
    MapPin,
} from "lucide-react";
import { useTranslations } from "next-intl";

import { Link } from "@/i18n/navigation";

export function WelcomeFooter() {
    const t = useTranslations("WelcomeFooter");

    const currentYear = new Date().getFullYear();

    return (
        <footer className="relative overflow-hidden bg-secondary text-white">
            {/* Background grid */}
            <div
                aria-hidden="true"
                className="pointer-events-none absolute inset-0 opacity-[0.06]"
                style={{
                    backgroundImage:
                        "linear-gradient(to right, white 1px, transparent 1px), linear-gradient(to bottom, white 1px, transparent 1px)",
                    backgroundSize: "32px 32px",
                }}
            />

            {/* Decorative lime glow */}
            <div
                aria-hidden="true"
                className="pointer-events-none absolute -bottom-56 -start-56 size-[540px] rounded-full bg-primary/15 blur-3xl"
            />

            <div className="relative z-10 mx-auto max-w-7xl px-5 py-14 sm:px-8 sm:py-16 lg:px-10">
                {/* Main footer content */}
                <div className="grid gap-12 border-b border-white/20 pb-12 md:grid-cols-2 lg:grid-cols-[1.4fr_0.8fr_0.8fr_1fr]">
                    {/* Brand */}
                    <div className="max-w-md">
                        <Link
                            href="/"
                            aria-label={t("home")}
                            className="inline-flex items-center gap-3"
                        >
                            <span className="grid size-12 shrink-0 place-items-center rounded-md border-2 border-black bg-primary text-lg font-black text-black">
                                A
                            </span>

                            <span>
                                <span className="block text-2xl font-black tracking-[-0.04em]">
                                    automart
                                </span>

                                <span className="mt-1 block text-[9px] font-black uppercase tracking-[0.18em] text-white/55">
                                    {t("tagline")}
                                </span>
                            </span>
                        </Link>

                        <p className="mt-6 text-sm font-medium leading-7 text-white/65">
                            {t("description")}
                        </p>
                    </div>

                    {/* Platform links */}
                    <FooterGroup title={t("platformTitle")}>
                        <FooterLink href="/#how-it-works">
                            {t("howItWorks")}
                        </FooterLink>

                        <FooterLink href="/#for-sellers">
                            {t("forSellers")}
                        </FooterLink>

                        <FooterLink href="/login">
                            {t("signIn")}
                        </FooterLink>

                        <FooterLink href="/register">
                            {t("createAccount")}
                        </FooterLink>
                    </FooterGroup>

                    {/* Business portals */}
                    <FooterGroup title={t("businessTitle")}>
                        <FooterLink
                            href={{
                                pathname: "/register",
                                query: {
                                    role: "trader",
                                },
                            }}
                        >
                            {t("traderPortal")}
                        </FooterLink>

                        <FooterLink
                            href={{
                                pathname: "/register",
                                query: {
                                    role: "supplier",
                                },
                            }}
                        >
                            {t("supplierPortal")}
                        </FooterLink>

                        <FooterLink
                            href={{
                                pathname: "/login",
                                query: {
                                    role: "staff",
                                },
                            }}
                        >
                            {t("staffPortal")}
                        </FooterLink>
                    </FooterGroup>

                    {/* Contact */}
                    <div>
                        <h2 className="text-xs font-black uppercase tracking-[0.16em] text-primary">
                            {t("contactTitle")}
                        </h2>

                        <p className="mt-5 text-sm leading-7 text-white/65">
                            {t("contactDescription")}
                        </p>

                        <a
                            href="mailto:support@automart.example"
                            className="mt-5 inline-flex items-center gap-2 text-sm font-black underline decoration-primary decoration-2 underline-offset-4"
                        >
                            <Mail size={17} aria-hidden="true" />

                            support@automart.example

                            <ExternalLink
                                size={14}
                                aria-hidden="true"
                            />
                        </a>
                    </div>
                </div>

                {/* Prototype notice */}
                <div className="mt-8 rounded-lg border border-white/20 bg-white/5 px-4 py-4 sm:flex sm:items-center sm:justify-between sm:gap-6">
                    <div>
                        <p className="text-xs font-black uppercase tracking-[0.14em] text-primary">
                            {t("prototypeTitle")}
                        </p>

                        <p className="mt-1 text-xs leading-6 text-white/60">
                            {t("prototypeDescription")}
                        </p>
                    </div>

                    <span className="mt-3 inline-flex shrink-0 rounded-full border border-primary/40 bg-primary/10 px-3 py-1.5 text-[10px] font-black uppercase tracking-[0.12em] text-primary sm:mt-0">
                        {t("demoBadge")}
                    </span>
                </div>

                {/* Copyright */}
                <div className="mt-8 flex flex-col gap-4 text-xs text-white/50 sm:flex-row sm:items-center sm:justify-between">
                    <p>
                        {t("copyright", {
                            year: currentYear,
                        })}
                    </p>

                    <div className="flex flex-wrap items-center gap-x-5 gap-y-2">
                        <Link
                            href="/privacy"
                            className="transition-colors hover:text-white"
                        >
                            {t("privacy")}
                        </Link>

                        <Link
                            href="/terms"
                            className="transition-colors hover:text-white"
                        >
                            {t("terms")}
                        </Link>

                        <Link
                            href="/accessibility"
                            className="transition-colors hover:text-white"
                        >
                            {t("accessibility")}
                        </Link>
                    </div>
                </div>
            </div>
        </footer>
    );
}

type FooterGroupProps = {
    title: string;
    children: React.ReactNode;
};

function FooterGroup({
    title,
    children,
}: FooterGroupProps) {
    return (
        <div>
            <h2 className="text-xs font-black uppercase tracking-[0.16em] text-primary">
                {title}
            </h2>

            <nav className="mt-5 flex flex-col items-start gap-3">
                {children}
            </nav>
        </div>
    );
}

type FooterLinkProps = {
    href:
    | string
    | {
        pathname: string;
        query?: Record<string, string>;
    };
    children: React.ReactNode;
};

function FooterLink({
    href,
    children,
}: FooterLinkProps) {
    return (
        <Link
            href={href}
            className="text-sm font-bold text-white/65 underline-offset-4 transition-colors hover:text-white hover:underline"
        >
            {children}
        </Link>
    );
}