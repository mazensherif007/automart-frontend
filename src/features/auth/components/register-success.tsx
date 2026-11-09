import {
    ArrowRight,
    Check,
    Clock3,
    FileCheck2,
    LogIn,
    MailCheck,
} from "lucide-react";
import { useTranslations } from "next-intl";

import { Link } from "@/i18n/navigation";

import { AuthShell } from "./auth-shell";

type RegisterSuccessProps = {
    accountType: "trader" | "supplier";
};

export function RegisterSuccess({
    accountType,
}: RegisterSuccessProps) {
    const t = useTranslations("RegisterSuccess");

    const isSupplier =
        accountType === "supplier";

    const steps = isSupplier
        ? [
            {
                icon: MailCheck,
                title: t("supplierSteps.emailTitle"),
                description: t(
                    "supplierSteps.emailDescription"
                ),
            },
            {
                icon: FileCheck2,
                title: t(
                    "supplierSteps.documentsTitle"
                ),
                description: t(
                    "supplierSteps.documentsDescription"
                ),
            },
            {
                icon: Clock3,
                title: t("supplierSteps.reviewTitle"),
                description: t(
                    "supplierSteps.reviewDescription"
                ),
            },
        ]
        : [
            {
                icon: MailCheck,
                title: t("traderSteps.emailTitle"),
                description: t(
                    "traderSteps.emailDescription"
                ),
            },
            {
                icon: FileCheck2,
                title: t(
                    "traderSteps.profileTitle"
                ),
                description: t(
                    "traderSteps.profileDescription"
                ),
            },
            {
                icon: LogIn,
                title: t("traderSteps.loginTitle"),
                description: t(
                    "traderSteps.loginDescription"
                ),
            },
        ];

    return (
        <AuthShell>
            <section className="relative mx-auto w-full max-w-3xl">
                <div
                    aria-hidden="true"
                    className="absolute inset-0 translate-x-3 translate-y-3 rounded-xl border-2 border-foreground bg-primary rtl:-translate-x-3"
                />

                <div className="relative rounded-xl border-2 border-foreground bg-card p-6 sm:p-8 lg:p-10">
                    <div className="mx-auto grid size-20 place-items-center rounded-full border-2 border-foreground bg-primary text-black automart-shadow-sm">
                        <Check
                            size={38}
                            strokeWidth={3}
                            aria-hidden="true"
                        />
                    </div>

                    <div className="mt-8 text-center">
                        <p className="text-xs font-black uppercase tracking-[0.16em] text-foreground/50">
                            {isSupplier
                                ? t("supplierEyebrow")
                                : t("traderEyebrow")}
                        </p>

                        <h1 className="mt-3 text-3xl font-black tracking-[-0.035em] sm:text-4xl lg:text-5xl">
                            {isSupplier
                                ? t("supplierTitle")
                                : t("traderTitle")}
                        </h1>

                        <p className="mx-auto mt-5 max-w-2xl text-sm font-medium leading-7 text-foreground/65 sm:text-base">
                            {isSupplier
                                ? t("supplierDescription")
                                : t("traderDescription")}
                        </p>
                    </div>

                    <div className="mt-10 grid gap-4 md:grid-cols-3">
                        {steps.map(
                            (
                                {
                                    icon: Icon,
                                    title,
                                    description,
                                },
                                index
                            ) => (
                                <article
                                    key={title}
                                    className="rounded-lg border-2 border-border bg-background p-5"
                                >
                                    <div className="flex items-center justify-between gap-3">
                                        <span className="grid size-11 place-items-center rounded-md border-2 border-foreground bg-primary text-black">
                                            <Icon
                                                size={21}
                                                aria-hidden="true"
                                            />
                                        </span>

                                        <span className="font-mono text-2xl font-black text-foreground/15">
                                            0{index + 1}
                                        </span>
                                    </div>

                                    <h2 className="mt-5 text-base font-black">
                                        {title}
                                    </h2>

                                    <p className="mt-2 text-sm leading-6 text-foreground/60">
                                        {description}
                                    </p>
                                </article>
                            )
                        )}
                    </div>

                    {isSupplier && (
                        <div className="mt-7 rounded-lg border-2 border-foreground bg-secondary p-5 text-white">
                            <p className="font-black text-primary">
                                {t("supplierNoticeTitle")}
                            </p>

                            <p className="mt-2 text-sm leading-7 text-white/70">
                                {t("supplierNoticeDescription")}
                            </p>
                        </div>
                    )}

                    <div className="mt-8 grid gap-3 sm:grid-cols-2">
                        <Link
                            href="/login"
                            className="inline-flex min-h-[52px] items-center justify-center gap-2 rounded-md border-2 border-foreground bg-primary px-5 py-3 text-sm font-black text-black automart-shadow transition-transform hover:-translate-y-0.5"
                        >
                            {t("signIn")}

                            <ArrowRight
                                size={17}
                                className="rtl:rotate-180"
                                aria-hidden="true"
                            />
                        </Link>

                        <Link
                            href="/"
                            className="inline-flex min-h-[52px] items-center justify-center rounded-md border-2 border-foreground bg-card px-5 py-3 text-sm font-black automart-shadow-sm transition-transform hover:-translate-y-0.5"
                        >
                            {t("backHome")}
                        </Link>
                    </div>
                </div>
            </section>
        </AuthShell>
    );
}