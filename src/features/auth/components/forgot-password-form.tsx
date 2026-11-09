"use client";

import {
    ArrowLeft,
    Check,
    Mail,
    RotateCcw,
} from "lucide-react";
import { useTranslations } from "next-intl";
import {
    FormEvent,
    useState,
} from "react";

import { Link } from "@/i18n/navigation";

import { AuthShell } from "./auth-shell";

export function ForgotPasswordForm() {
    const t = useTranslations("ForgotPassword");

    const [email, setEmail] = useState("");
    const [submittedEmail, setSubmittedEmail] =
        useState("");
    const [isSubmitting, setIsSubmitting] =
        useState(false);
    const [isSubmitted, setIsSubmitted] =
        useState(false);

    function handleSubmit(
        event: FormEvent<HTMLFormElement>
    ) {
        event.preventDefault();

        const normalizedEmail = email
            .trim()
            .toLowerCase();

        if (!normalizedEmail) {
            return;
        }

        setIsSubmitting(true);

        // Temporary frontend simulation.
        // Replace this with the backend request later.
        window.setTimeout(() => {
            setSubmittedEmail(normalizedEmail);
            setIsSubmitted(true);
            setIsSubmitting(false);
        }, 800);
    }

    function handleTryAnotherEmail() {
        setEmail("");
        setSubmittedEmail("");
        setIsSubmitted(false);
    }

    if (isSubmitted) {
        return (
            <AuthShell>
                <section className="relative mx-auto w-full max-w-xl">
                    <div
                        aria-hidden="true"
                        className="absolute inset-0 translate-x-3 translate-y-3 rounded-xl border-2 border-foreground bg-primary rtl:-translate-x-3"
                    />

                    <div className="relative rounded-xl border-2 border-foreground bg-card p-6 sm:p-8 lg:p-10">
                        <div className="mx-auto grid size-16 place-items-center rounded-full border-2 border-foreground bg-primary text-black automart-shadow-sm">
                            <Check
                                size={30}
                                strokeWidth={3}
                                aria-hidden="true"
                            />
                        </div>

                        <div className="mt-7 text-center">
                            <p className="text-xs font-black uppercase tracking-[0.16em] text-foreground/50">
                                {t("successEyebrow")}
                            </p>

                            <h1 className="mt-3 text-3xl font-black tracking-[-0.035em] sm:text-4xl">
                                {t("successTitle")}
                            </h1>

                            <p className="mx-auto mt-4 max-w-md text-sm font-medium leading-7 text-foreground/65">
                                {t("successDescription")}
                            </p>

                            <div
                                dir="ltr"
                                className="mx-auto mt-5 max-w-md overflow-hidden rounded-md border-2 border-border bg-background px-4 py-3 font-mono text-sm font-black"
                            >
                                {submittedEmail}
                            </div>
                        </div>

                        <div className="mt-7 rounded-lg border-2 border-border bg-background p-4">
                            <p className="text-sm font-black">
                                {t("nextStepsTitle")}
                            </p>

                            <ol className="mt-3 space-y-3 text-sm leading-6 text-foreground/65">
                                <li className="flex gap-3">
                                    <span className="font-black text-foreground">
                                        1.
                                    </span>

                                    <span>{t("nextStepOne")}</span>
                                </li>

                                <li className="flex gap-3">
                                    <span className="font-black text-foreground">
                                        2.
                                    </span>

                                    <span>{t("nextStepTwo")}</span>
                                </li>

                                <li className="flex gap-3">
                                    <span className="font-black text-foreground">
                                        3.
                                    </span>

                                    <span>{t("nextStepThree")}</span>
                                </li>
                            </ol>
                        </div>

                        <div className="mt-7 grid gap-3 sm:grid-cols-2">
                            <Link
                                href="/login"
                                className="inline-flex min-h-12 items-center justify-center gap-2 rounded-md border-2 border-foreground bg-primary px-5 py-3 text-sm font-black text-black automart-shadow-sm transition-transform hover:-translate-y-0.5"
                            >
                                <ArrowLeft
                                    size={17}
                                    className="rtl:rotate-180"
                                    aria-hidden="true"
                                />

                                {t("backToLogin")}
                            </Link>

                            <button
                                type="button"
                                onClick={handleTryAnotherEmail}
                                className="inline-flex min-h-12 items-center justify-center gap-2 rounded-md border-2 border-foreground bg-card px-5 py-3 text-sm font-black automart-shadow-sm transition-transform hover:-translate-y-0.5"
                            >
                                <RotateCcw
                                    size={17}
                                    aria-hidden="true"
                                />

                                {t("tryAnotherEmail")}
                            </button>
                        </div>

                        <p className="mt-6 text-center text-xs leading-6 text-foreground/50">
                            {t("securityNotice")}
                        </p>
                    </div>
                </section>
            </AuthShell>
        );
    }

    return (
        <AuthShell>
            <div className="grid w-full max-w-6xl items-center gap-12 lg:grid-cols-[0.85fr_1.15fr]">
                {/* Information column */}
                <section className="hidden max-w-xl lg:block">
                    <p className="text-xs font-black uppercase tracking-[0.18em] text-foreground/55">
                        {t("eyebrow")}
                    </p>

                    <h1 className="mt-5 text-5xl font-black leading-[0.98] tracking-[-0.045em]">
                        {t("sideTitle")}
                    </h1>

                    <p className="mt-7 max-w-lg text-lg font-medium leading-9 text-foreground/65">
                        {t("sideDescription")}
                    </p>

                    <div className="mt-9 space-y-4">
                        <FeatureItem text={t("featureOne")} />
                        <FeatureItem text={t("featureTwo")} />
                        <FeatureItem text={t("featureThree")} />
                    </div>
                </section>

                {/* Forgot-password form */}
                <section className="relative mx-auto w-full max-w-xl">
                    <div
                        aria-hidden="true"
                        className="absolute inset-0 translate-x-3 translate-y-3 rounded-xl border-2 border-foreground bg-primary rtl:-translate-x-3"
                    />

                    <div className="relative rounded-xl border-2 border-foreground bg-card p-6 sm:p-8 lg:p-10">
                        <div>
                            <p className="text-xs font-black uppercase tracking-[0.16em] text-foreground/50">
                                {t("eyebrow")}
                            </p>

                            <h2 className="mt-3 text-3xl font-black tracking-[-0.035em] sm:text-4xl">
                                {t("title")}
                            </h2>

                            <p className="mt-4 text-sm font-medium leading-7 text-foreground/65">
                                {t("description")}
                            </p>
                        </div>

                        <form
                            onSubmit={handleSubmit}
                            className="mt-8"
                        >
                            <label className="block">
                                <span className="text-sm font-black">
                                    {t("emailLabel")}
                                </span>

                                <div className="relative mt-2">
                                    <Mail
                                        size={18}
                                        aria-hidden="true"
                                        className="pointer-events-none absolute start-4 top-1/2 -translate-y-1/2 text-foreground/45"
                                    />

                                    <input
                                        type="email"
                                        name="email"
                                        value={email}
                                        onChange={(event) =>
                                            setEmail(event.target.value)
                                        }
                                        required
                                        autoComplete="email"
                                        inputMode="email"
                                        placeholder={t("emailPlaceholder")}
                                        className="h-[52px] w-full rounded-md border-2 border-border bg-background py-3 pe-4 ps-12 text-sm font-medium outline-none transition focus:border-foreground focus:ring-2 focus:ring-primary"
                                    />
                                </div>

                                <p className="mt-2 text-xs leading-5 text-foreground/50">
                                    {t("emailHint")}
                                </p>
                            </label>

                            <button
                                type="submit"
                                disabled={isSubmitting}
                                className="mt-7 min-h-[52px] w-full rounded-md border-2 border-foreground bg-primary px-5 py-3 text-sm font-black text-black automart-shadow transition-transform hover:-translate-y-0.5 disabled:cursor-not-allowed disabled:opacity-60 disabled:hover:translate-y-0"
                            >
                                {isSubmitting
                                    ? t("submitting")
                                    : t("submit")}
                            </button>
                        </form>

                        <div className="mt-7 border-t-2 border-border pt-6 text-center">
                            <Link
                                href="/login"
                                className="inline-flex items-center gap-2 text-sm font-black underline decoration-2 underline-offset-4"
                            >
                                <ArrowLeft
                                    size={17}
                                    className="rtl:rotate-180"
                                    aria-hidden="true"
                                />

                                {t("backToLogin")}
                            </Link>
                        </div>

                        <div className="mt-6 rounded-lg border-2 border-border bg-background p-4">
                            <p className="text-xs font-black uppercase tracking-[0.12em] text-foreground/50">
                                {t("supportTitle")}
                            </p>

                            <p className="mt-2 text-xs leading-6 text-foreground/60">
                                {t("supportDescription")}
                            </p>
                        </div>
                    </div>
                </section>
            </div>
        </AuthShell>
    );
}

function FeatureItem({
    text,
}: {
    text: string;
}) {
    return (
        <div className="flex items-start gap-3">
            <span className="mt-1 grid size-6 shrink-0 place-items-center rounded-full border-2 border-foreground bg-primary text-xs font-black text-black">
                ✓
            </span>

            <span className="font-bold leading-7 text-foreground/70">
                {text}
            </span>
        </div>
    );
}