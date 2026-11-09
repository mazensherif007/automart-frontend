"use client";

import {
    Eye,
    EyeOff,
    LockKeyhole,
    Mail,
} from "lucide-react";
import { useTranslations } from "next-intl";
import {
    FormEvent,
    useState,
} from "react";

import { Link } from "@/i18n/navigation";

import { AuthShell } from "./auth-shell";

export function LoginForm() {
    const t = useTranslations("Login");

    const [showPassword, setShowPassword] =
        useState(false);

    const [isSubmitting, setIsSubmitting] =
        useState(false);

    function handleSubmit(
        event: FormEvent<HTMLFormElement>
    ) {
        event.preventDefault();

        setIsSubmitting(true);

        window.setTimeout(() => {
            setIsSubmitting(false);
        }, 800);
    }

    return (
        <AuthShell>
            <div className="grid w-full max-w-6xl items-center gap-12 lg:grid-cols-[0.85fr_1.15fr]">
                {/* Information */}
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

                {/* Login card */}
                <section className="relative mx-auto w-full max-w-xl">
                    <div
                        aria-hidden="true"
                        className="absolute inset-0 translate-x-3 translate-y-3 rounded-xl border-2 border-foreground bg-primary rtl:-translate-x-3"
                    />

                    <div className="relative rounded-xl border-2 border-foreground bg-card p-6 sm:p-8">
                        <div>
                            <p className="text-xs font-black uppercase tracking-[0.16em] text-foreground/50">
                                {t("eyebrow")}
                            </p>

                            <h2 className="mt-3 text-3xl font-black tracking-[-0.035em] sm:text-4xl">
                                {t("title")}
                            </h2>

                            <p className="mt-3 text-sm font-medium leading-7 text-foreground/60">
                                {t("description")}
                            </p>
                        </div>

                        <form
                            onSubmit={handleSubmit}
                            className="mt-8 space-y-5"
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
                                        required
                                        autoComplete="email"
                                        placeholder={t("emailPlaceholder")}
                                        className="h-13 w-full rounded-md border-2 border-border bg-background py-3 pe-4 ps-12 text-sm font-medium outline-none transition focus:border-foreground focus:ring-2 focus:ring-primary"
                                    />
                                </div>
                            </label>

                            <label className="block">
                                <span className="text-sm font-black">
                                    {t("passwordLabel")}
                                </span>

                                <div className="relative mt-2">
                                    <LockKeyhole
                                        size={18}
                                        aria-hidden="true"
                                        className="pointer-events-none absolute start-4 top-1/2 -translate-y-1/2 text-foreground/45"
                                    />

                                    <input
                                        type={
                                            showPassword
                                                ? "text"
                                                : "password"
                                        }
                                        name="password"
                                        required
                                        autoComplete="current-password"
                                        placeholder={t(
                                            "passwordPlaceholder"
                                        )}
                                        className="h-13 w-full rounded-md border-2 border-border bg-background py-3 pe-12 ps-12 text-sm font-medium outline-none transition focus:border-foreground focus:ring-2 focus:ring-primary"
                                    />

                                    <button
                                        type="button"
                                        onClick={() =>
                                            setShowPassword(
                                                (current) => !current
                                            )
                                        }
                                        aria-label={
                                            showPassword
                                                ? t("hidePassword")
                                                : t("showPassword")
                                        }
                                        className="absolute end-3 top-1/2 grid size-8 -translate-y-1/2 place-items-center"
                                    >
                                        {showPassword ? (
                                            <EyeOff
                                                size={18}
                                                aria-hidden="true"
                                            />
                                        ) : (
                                            <Eye
                                                size={18}
                                                aria-hidden="true"
                                            />
                                        )}
                                    </button>
                                </div>
                            </label>

                            <div className="flex flex-wrap items-center justify-between gap-3">
                                <label className="flex items-center gap-2 text-sm font-bold">
                                    <input
                                        type="checkbox"
                                        name="remember"
                                        className="size-4 accent-[hsl(var(--primary))]"
                                    />

                                    {t("rememberMe")}
                                </label>

                                <Link
                                    href="/forgot-password"
                                    className="text-sm font-black underline decoration-2 underline-offset-4"
                                >
                                    {t("forgotPassword")}
                                </Link>
                            </div>

                            <button
                                type="submit"
                                disabled={isSubmitting}
                                className="min-h-13 w-full rounded-md border-2 border-foreground bg-primary px-5 py-3 text-sm font-black text-black automart-shadow transition-transform hover:-translate-y-0.5 disabled:cursor-not-allowed disabled:opacity-60"
                            >
                                {isSubmitting
                                    ? t("submitting")
                                    : t("submit")}
                            </button>
                        </form>

                        <div className="mt-7 border-t-2 border-border pt-6 text-center">
                            <p className="text-sm font-medium text-foreground/60">
                                {t("noAccount")}{" "}
                                <Link
                                    href="/register"
                                    className="font-black text-foreground underline decoration-2 underline-offset-4"
                                >
                                    {t("createAccount")}
                                </Link>
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