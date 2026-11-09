import {
    ArrowRight,
    Boxes,
    Check,
    ShieldCheck,
    Store,
} from "lucide-react";
import { useTranslations } from "next-intl";

import { Link } from "@/i18n/navigation";

const roles = [
    {
        key: "trader",
        icon: Store,
        href: {
            pathname: "/register",
            query: {
                role: "trader",
            },
        },
        featured: true,
    },
    {
        key: "supplier",
        icon: Boxes,
        href: {
            pathname: "/register",
            query: {
                role: "supplier",
            },
        },
        featured: false,
    },
    {
        key: "staff",
        icon: ShieldCheck,
        href: {
            pathname: "/login",
            query: {
                role: "staff",
            },
        },
        featured: false,
    },
] as const;

export function RoleSelectionSection() {
    const t = useTranslations("RoleSelection");

    return (
        <section
            id="for-sellers"
            className="relative scroll-mt-24 overflow-hidden border-b-2 border-foreground bg-background"
        >
            {/* Same grid used in Hero and How It Works */}
            <div
                aria-hidden="true"
                className="pointer-events-none absolute inset-0 opacity-[0.035]"
                style={{
                    backgroundImage:
                        "linear-gradient(to right, currentColor 1px, transparent 1px), linear-gradient(to bottom, currentColor 1px, transparent 1px)",
                    backgroundSize: "32px 32px",
                }}
            />

            {/* Decorative lime glow */}
            <div
                aria-hidden="true"
                className="pointer-events-none absolute -end-52 -bottom-52 size-[600px] rounded-full bg-primary/25 blur-3xl"
            />

            <div className="relative z-10 mx-auto max-w-7xl px-5 py-20 sm:px-8 sm:py-24 lg:px-10 lg:py-28">
                {/* Section heading */}
                <div className="mx-auto max-w-3xl text-center">
                    <p className="text-xs font-black uppercase tracking-[0.18em] text-foreground/55">
                        {t("eyebrow")}
                    </p>

                    <h2 className="mt-4 text-4xl font-black leading-tight tracking-[-0.035em] sm:text-5xl lg:text-6xl">
                        {t("title")}
                    </h2>

                    <p className="mx-auto mt-6 max-w-2xl text-base font-medium leading-8 text-foreground/65 sm:text-lg">
                        {t("description")}
                    </p>
                </div>

                {/* Role cards */}
                <div className="mt-16 grid items-stretch gap-7 lg:grid-cols-3">
                    {roles.map((role) => {
                        const Icon = role.icon;
                        const features = [
                            t(`roles.${role.key}.features.first`),
                            t(`roles.${role.key}.features.second`),
                            t(`roles.${role.key}.features.third`),
                        ];

                        return (
                            <article
                                key={role.key}
                                className={[
                                    "relative flex h-full flex-col rounded-xl border-2 border-foreground p-6 transition-transform duration-200 hover:-translate-y-1 sm:p-7",
                                    role.featured
                                        ? "bg-secondary text-white automart-shadow"
                                        : "bg-card text-foreground automart-shadow-sm",
                                ].join(" ")}
                            >
                                {/* Recommended label */}
                                {role.featured && (
                                    <span className="absolute -top-4 start-6 rounded-full border-2 border-foreground bg-primary px-4 py-1.5 text-[10px] font-black uppercase tracking-[0.14em] text-black">
                                        {t("recommended")}
                                    </span>
                                )}

                                {/* Icon and role number */}
                                <div className="flex items-start justify-between gap-4">
                                    <div
                                        className={[
                                            "grid size-14 place-items-center rounded-lg border-2",
                                            role.featured
                                                ? "border-black bg-primary text-black"
                                                : "border-foreground bg-primary text-black",
                                        ].join(" ")}
                                    >
                                        <Icon
                                            size={26}
                                            strokeWidth={2.2}
                                            aria-hidden="true"
                                        />
                                    </div>

                                    <span
                                        aria-hidden="true"
                                        className={[
                                            "font-mono text-4xl font-black",
                                            role.featured
                                                ? "text-white/15"
                                                : "text-foreground/10",
                                        ].join(" ")}
                                    >
                                        {role.key === "trader"
                                            ? "01"
                                            : role.key === "supplier"
                                                ? "02"
                                                : "03"}
                                    </span>
                                </div>

                                {/* Role heading */}
                                <div className="mt-8">
                                    <p
                                        className={[
                                            "text-xs font-black uppercase tracking-[0.16em]",
                                            role.featured
                                                ? "text-primary"
                                                : "text-foreground/50",
                                        ].join(" ")}
                                    >
                                        {t(`roles.${role.key}.label`)}
                                    </p>

                                    <h3 className="mt-2 text-2xl font-black leading-tight">
                                        {t(`roles.${role.key}.title`)}
                                    </h3>

                                    <p
                                        className={[
                                            "mt-4 min-h-[84px] text-sm font-medium leading-7",
                                            role.featured
                                                ? "text-white/70"
                                                : "text-foreground/65",
                                        ].join(" ")}
                                    >
                                        {t(`roles.${role.key}.description`)}
                                    </p>
                                </div>

                                {/* Role features */}
                                <ul className="mt-7 space-y-4">
                                    {features.map((feature) => (
                                        <li
                                            key={feature}
                                            className="flex items-start gap-3"
                                        >
                                            <span
                                                className={[
                                                    "mt-0.5 grid size-6 shrink-0 place-items-center rounded-full border-2",
                                                    role.featured
                                                        ? "border-black bg-primary text-black"
                                                        : "border-foreground bg-primary text-black",
                                                ].join(" ")}
                                            >
                                                <Check
                                                    size={13}
                                                    strokeWidth={3}
                                                    aria-hidden="true"
                                                />
                                            </span>

                                            <span
                                                className={[
                                                    "text-sm font-bold leading-6",
                                                    role.featured
                                                        ? "text-white/80"
                                                        : "text-foreground/70",
                                                ].join(" ")}
                                            >
                                                {feature}
                                            </span>
                                        </li>
                                    ))}
                                </ul>

                                {/* Action */}
                                <div className="mt-auto pt-9">
                                    <Link
                                        href={role.href}
                                        className={[
                                            "inline-flex min-h-12 w-full items-center justify-center gap-3 rounded-md border-2 px-5 py-3 text-sm font-black transition-transform hover:-translate-y-0.5",
                                            role.featured
                                                ? "border-black bg-primary text-black automart-shadow-sm"
                                                : role.key === "staff"
                                                    ? "border-foreground bg-secondary text-white automart-shadow-sm"
                                                    : "border-foreground bg-primary text-black automart-shadow-sm",
                                        ].join(" ")}
                                    >
                                        <span>
                                            {t(`roles.${role.key}.action`)}
                                        </span>

                                        <ArrowRight
                                            size={17}
                                            className="rtl:rotate-180"
                                            aria-hidden="true"
                                        />
                                    </Link>
                                </div>
                            </article>
                        );
                    })}
                </div>

                {/* Bottom note */}
                <div className="mx-auto mt-12 max-w-3xl text-center">
                    <p className="text-sm font-medium leading-7 text-foreground/60">
                        {t("accountNotice")}
                    </p>

                    <Link
                        href="/login"
                        className="mt-3 inline-flex items-center gap-2 text-sm font-black underline decoration-2 underline-offset-4"
                    >
                        {t("existingAccount")}

                        <ArrowRight
                            size={16}
                            className="rtl:rotate-180"
                            aria-hidden="true"
                        />
                    </Link>
                </div>
            </div>
        </section>
    );
}