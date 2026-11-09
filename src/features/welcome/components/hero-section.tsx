import Image from "next/image";
import {
    ArrowRight,
    BadgeCheck,
    Check,
    Store,
    Truck,
} from "lucide-react";
import { useTranslations } from "next-intl";

import { Link } from "@/i18n/navigation";

export function HeroSection() {
    const t = useTranslations("WelcomeHero");

    const features = [
        t("verifiedBusinesses"),
        t("compatibleParts"),
    ];

    return (
        <section className="relative overflow-hidden border-b-2 border-foreground">
            {/* Background grid */}
            <div
                aria-hidden="true"
                className="pointer-events-none absolute inset-0 opacity-[0.035]"
                style={{
                    backgroundImage:
                        "linear-gradient(to right, currentColor 1px, transparent 1px), linear-gradient(to bottom, currentColor 1px, transparent 1px)",
                    backgroundSize: "32px 32px",
                }}
            />

            {/* Lime background glow */}
            <div
                aria-hidden="true"
                className="pointer-events-none absolute -end-48 -top-48 size-[560px] rounded-full bg-primary/30 blur-3xl"
            />

            <div className="relative mx-auto grid max-w-7xl items-center gap-16 px-5 py-16 sm:px-8 sm:py-20 lg:grid-cols-[minmax(0,0.9fr)_minmax(500px,1.1fr)] lg:gap-20 lg:px-10 lg:py-24">
                {/* Text column */}
                <div className="max-w-[650px]">
                    <div className="inline-flex max-w-full items-center gap-2 rounded-full border-2 border-foreground bg-card px-4 py-2.5 automart-shadow-sm">
                        <BadgeCheck
                            size={18}
                            className="shrink-0 text-green-700"
                            aria-hidden="true"
                        />

                        <span className="text-[11px] font-black uppercase leading-5 tracking-[0.12em] sm:text-xs">
                            {t("badge")}
                        </span>
                    </div>

                    <h1 className="mt-10 max-w-[650px] text-[48px] font-black leading-[0.98] tracking-[-0.045em] sm:text-[60px] lg:text-[68px]">
                        {t("title")}
                    </h1>

                    <div
                        aria-hidden="true"
                        className="mt-4 h-3 w-48 -rotate-1 bg-primary sm:w-64"
                    />

                    <p className="mt-8 max-w-[590px] text-base font-medium leading-8 text-foreground/70 sm:text-lg sm:leading-9">
                        {t("description")}
                    </p>

                    {/* Main actions */}
                    <div className="mt-9 flex flex-col gap-4 sm:flex-row sm:flex-wrap">
                        <Link
                            href={{
                                pathname: "/register",
                                query: { role: "trader" },
                            }}
                            className="inline-flex min-h-14 items-center justify-center gap-3 rounded-md border-2 border-foreground bg-primary px-6 py-3 text-sm font-black text-black automart-shadow transition-transform hover:-translate-y-0.5"
                        >
                            <Store size={19} aria-hidden="true" />

                            <span>{t("openShop")}</span>

                            <ArrowRight
                                size={18}
                                className="rtl:rotate-180"
                                aria-hidden="true"
                            />
                        </Link>

                        <Link
                            href={{
                                pathname: "/register",
                                query: { role: "supplier" },
                            }}
                            className="inline-flex min-h-14 items-center justify-center gap-3 rounded-md border-2 border-foreground bg-card px-6 py-3 text-sm font-black automart-shadow-sm transition-transform hover:-translate-y-0.5"
                        >
                            <Truck size={19} aria-hidden="true" />

                            <span>{t("applySupplier")}</span>
                        </Link>
                    </div>

                    {/* Feature points */}
                    <ul className="mt-10 flex flex-col gap-4 sm:flex-row lg:flex-col xl:flex-col">
                        {features.map((feature) => (
                            <li
                                key={feature}
                                className="flex min-w-0 items-start gap-2.5"
                            >
                                <span className="mt-0.5 grid size-6 shrink-0 place-items-center rounded-full border-2 border-foreground bg-primary text-black">
                                    <Check
                                        size={13}
                                        strokeWidth={3}
                                        aria-hidden="true"
                                    />
                                </span>

                                <span className="text-sm font-bold leading-6 text-foreground/70">
                                    {feature}
                                </span>
                            </li>
                        ))}
                    </ul>
                </div>

                {/* Demo image column */}
                <div className="relative mx-auto w-full max-w-[620px] pb-8">
                    <div
                        aria-hidden="true"
                        className="absolute inset-0 translate-x-4 translate-y-4 rounded-2xl border-2 border-foreground bg-primary rtl:-translate-x-4"
                    />

                    <article className="relative overflow-hidden rounded-2xl border-2 border-foreground bg-card">
                        <header className="flex min-h-14 items-center justify-between gap-4 border-b-2 border-foreground bg-secondary px-5 py-3 text-white">
                            <div className="flex min-w-0 items-center gap-3">
                                <span className="size-2.5 shrink-0 rounded-full bg-primary" />

                                <p className="truncate text-[11px] font-black uppercase tracking-[0.16em]">
                                    {t("demoTitle")}
                                </p>
                            </div>

                            <span className="shrink-0 rounded-md border border-white/30 px-3 py-1.5 text-[10px] font-black uppercase tracking-[0.12em] text-white/80">
                                {t("demoLabel")}
                            </span>
                        </header>

                        <div className="bg-[#f7f5ef] p-3 sm:p-4">
                            <Image
                                src="/images/branding/vin-demo.png"
                                alt={t("demoImageAlt")}
                                width={784}
                                height={780}
                                priority
                                sizes="(max-width: 1024px) 100vw, 620px"
                                className="block h-auto w-full rounded-lg object-contain"
                            />
                        </div>
                    </article>

                    <div className="absolute -bottom-1 start-6 flex max-w-[280px] items-center gap-3 rounded-lg border-2 border-foreground bg-card px-4 py-3 automart-shadow-sm sm:start-9">
                        <span className="grid size-9 shrink-0 place-items-center rounded-full bg-green-100 text-green-700">
                            <Check
                                size={18}
                                strokeWidth={3}
                                aria-hidden="true"
                            />
                        </span>

                        <div className="min-w-0">
                            <p className="text-[9px] font-black uppercase tracking-[0.12em] text-foreground/50">
                                {t("demoStatusLabel")}
                            </p>

                            <p className="mt-0.5 text-xs font-black leading-5">
                                {t("demoStatus")}
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}