"use client";

import {
    AlertCircle,
    ArrowLeft,
    Check,
    Eye,
    EyeOff,
    KeyRound,
    LockKeyhole,
} from "lucide-react";
import { useTranslations } from "next-intl";
import { useSearchParams } from "next/navigation";
import {
    FormEvent,
    useMemo,
    useState,
} from "react";

import { Link } from "@/i18n/navigation";

import { AuthShell } from "./auth-shell";

export function ResetPasswordForm() {
    const t = useTranslations("ResetPassword");
    const searchParams = useSearchParams();

    const token = searchParams.get("token");

    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] =
        useState("");

    const [showPassword, setShowPassword] =
        useState(false);

    const [
        showConfirmPassword,
        setShowConfirmPassword,
    ] = useState(false);

    const [isSubmitting, setIsSubmitting] =
        useState(false);

    const [isSubmitted, setIsSubmitted] =
        useState(false);

    const [error, setError] = useState("");

    const passwordRequirements = useMemo(
        () => ({
            minimumLength: password.length >= 8,
            containsLetter: /[A-Za-z]/.test(password),
            containsNumber: /\d/.test(password),
        }),
        [password]
    );

    const passwordIsValid =
        passwordRequirements.minimumLength &&
        passwordRequirements.containsLetter &&
        passwordRequirements.containsNumber;

    const passwordsMatch =
        password.length > 0 &&
        password === confirmPassword;

    function handleSubmit(
        event: FormEvent<HTMLFormElement>
    ) {
        event.preventDefault();
        setError("");

        if (!token) {
            setError(t("invalidTokenError"));
            return;
        }

        if (!passwordIsValid) {
            setError(t("weakPasswordError"));
            return;
        }

        if (!passwordsMatch) {
            setError(t("passwordMismatchError"));
            return;
        }

        setIsSubmitting(true);

        /*
         * Temporary frontend simulation.
         *
         * Replace this block later with:
         *
         * await apiClient.post("/auth/reset-password", {
         *   token,
         *   password,
         *   confirmPassword
         * });
         */
        window.setTimeout(() => {
            setIsSubmitting(false);
            setIsSubmitted(true);
        }, 800);
    }

    if (!token) {
        return (
            <AuthShell>
                <section className="relative mx-auto w-full max-w-xl">
                    <CardBackground />

                    <div className="relative rounded-xl border-2 border-foreground bg-card p-6 text-center sm:p-8 lg:p-10">
                        <div className="mx-auto grid size-16 place-items-center rounded-full border-2 border-foreground bg-red-100 text-red-700 automart-shadow-sm">
                            <AlertCircle
                                size={30}
                                strokeWidth={2.5}
                                aria-hidden="true"
                            />
                        </div>

                        <p className="mt-7 text-xs font-black uppercase tracking-[0.16em] text-foreground/50">
                            {t("invalidEyebrow")}
                        </p>

                        <h1 className="mt-3 text-3xl font-black tracking-[-0.035em] sm:text-4xl">
                            {t("invalidTitle")}
                        </h1>

                        <p className="mx-auto mt-4 max-w-md text-sm font-medium leading-7 text-foreground/65">
                            {t("invalidDescription")}
                        </p>

                        <div className="mt-8 grid gap-3 sm:grid-cols-2">
                            <Link
                                href="/forgot-password"
                                className="inline-flex min-h-[52px] items-center justify-center gap-2 rounded-md border-2 border-foreground bg-primary px-5 py-3 text-sm font-black text-black automart-shadow-sm transition-transform hover:-translate-y-0.5"
                            >
                                <KeyRound
                                    size={18}
                                    aria-hidden="true"
                                />

                                {t("requestNewLink")}
                            </Link>

                            <Link
                                href="/login"
                                className="inline-flex min-h-[52px] items-center justify-center gap-2 rounded-md border-2 border-foreground bg-card px-5 py-3 text-sm font-black automart-shadow-sm transition-transform hover:-translate-y-0.5"
                            >
                                <ArrowLeft
                                    size={17}
                                    className="rtl:rotate-180"
                                    aria-hidden="true"
                                />

                                {t("backToLogin")}
                            </Link>
                        </div>
                    </div>
                </section>
            </AuthShell>
        );
    }

    if (isSubmitted) {
        return (
            <AuthShell>
                <section className="relative mx-auto w-full max-w-xl">
                    <CardBackground />

                    <div className="relative rounded-xl border-2 border-foreground bg-card p-6 text-center sm:p-8 lg:p-10">
                        <div className="mx-auto grid size-16 place-items-center rounded-full border-2 border-foreground bg-primary text-black automart-shadow-sm">
                            <Check
                                size={30}
                                strokeWidth={3}
                                aria-hidden="true"
                            />
                        </div>

                        <p className="mt-7 text-xs font-black uppercase tracking-[0.16em] text-foreground/50">
                            {t("successEyebrow")}
                        </p>

                        <h1 className="mt-3 text-3xl font-black tracking-[-0.035em] sm:text-4xl">
                            {t("successTitle")}
                        </h1>

                        <p className="mx-auto mt-4 max-w-md text-sm font-medium leading-7 text-foreground/65">
                            {t("successDescription")}
                        </p>

                        <Link
                            href="/login"
                            className="mt-8 inline-flex min-h-[52px] w-full items-center justify-center gap-2 rounded-md border-2 border-foreground bg-primary px-5 py-3 text-sm font-black text-black automart-shadow transition-transform hover:-translate-y-0.5"
                        >
                            <ArrowLeft
                                size={17}
                                className="rtl:rotate-180"
                                aria-hidden="true"
                            />

                            {t("continueToLogin")}
                        </Link>

                        <p className="mt-6 text-xs leading-6 text-foreground/50">
                            {t("successSecurityNotice")}
                        </p>
                    </div>
                </section>
            </AuthShell>
        );
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

                {/* Form */}
                <section className="relative mx-auto w-full max-w-xl">
                    <CardBackground />

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

                        {error && (
                            <div
                                role="alert"
                                className="mt-6 flex items-start gap-3 rounded-lg border-2 border-red-700 bg-red-50 p-4 text-red-800"
                            >
                                <AlertCircle
                                    size={20}
                                    className="mt-0.5 shrink-0"
                                    aria-hidden="true"
                                />

                                <p className="text-sm font-bold leading-6">
                                    {error}
                                </p>
                            </div>
                        )}

                        <form
                            onSubmit={handleSubmit}
                            className="mt-8 space-y-5"
                        >
                            <PasswordField
                                label={t("passwordLabel")}
                                placeholder={t("passwordPlaceholder")}
                                value={password}
                                name="password"
                                visible={showPassword}
                                showLabel={t("showPassword")}
                                hideLabel={t("hidePassword")}
                                onValueChange={setPassword}
                                onVisibilityChange={() =>
                                    setShowPassword(
                                        (current) => !current
                                    )
                                }
                            />

                            {/* Requirements */}
                            <div className="rounded-lg border-2 border-border bg-background p-4">
                                <p className="text-xs font-black uppercase tracking-[0.12em] text-foreground/50">
                                    {t("requirementsTitle")}
                                </p>

                                <ul className="mt-3 space-y-2.5">
                                    <RequirementItem
                                        complete={
                                            passwordRequirements.minimumLength
                                        }
                                        text={t("minimumLength")}
                                    />

                                    <RequirementItem
                                        complete={
                                            passwordRequirements.containsLetter
                                        }
                                        text={t("containsLetter")}
                                    />

                                    <RequirementItem
                                        complete={
                                            passwordRequirements.containsNumber
                                        }
                                        text={t("containsNumber")}
                                    />
                                </ul>
                            </div>

                            <PasswordField
                                label={t("confirmPasswordLabel")}
                                placeholder={t(
                                    "confirmPasswordPlaceholder"
                                )}
                                value={confirmPassword}
                                name="confirmPassword"
                                visible={showConfirmPassword}
                                showLabel={t("showPassword")}
                                hideLabel={t("hidePassword")}
                                onValueChange={setConfirmPassword}
                                onVisibilityChange={() =>
                                    setShowConfirmPassword(
                                        (current) => !current
                                    )
                                }
                            />

                            {confirmPassword.length > 0 && (
                                <div
                                    className={[
                                        "flex items-center gap-2 text-xs font-bold",
                                        passwordsMatch
                                            ? "text-green-700"
                                            : "text-red-700",
                                    ].join(" ")}
                                >
                                    {passwordsMatch ? (
                                        <Check
                                            size={15}
                                            strokeWidth={3}
                                            aria-hidden="true"
                                        />
                                    ) : (
                                        <AlertCircle
                                            size={15}
                                            aria-hidden="true"
                                        />
                                    )}

                                    <span>
                                        {passwordsMatch
                                            ? t("passwordsMatch")
                                            : t("passwordsDoNotMatch")}
                                    </span>
                                </div>
                            )}

                            <button
                                type="submit"
                                disabled={isSubmitting}
                                className="min-h-[52px] w-full rounded-md border-2 border-foreground bg-primary px-5 py-3 text-sm font-black text-black automart-shadow transition-transform hover:-translate-y-0.5 disabled:cursor-not-allowed disabled:opacity-60 disabled:hover:translate-y-0"
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
                    </div>
                </section>
            </div>
        </AuthShell>
    );
}

type PasswordFieldProps = {
    label: string;
    placeholder: string;
    value: string;
    name: string;
    visible: boolean;
    showLabel: string;
    hideLabel: string;
    onValueChange: (value: string) => void;
    onVisibilityChange: () => void;
};

function PasswordField({
    label,
    placeholder,
    value,
    name,
    visible,
    showLabel,
    hideLabel,
    onValueChange,
    onVisibilityChange,
}: PasswordFieldProps) {
    return (
        <label className="block">
            <span className="text-sm font-black">
                {label}
            </span>

            <div className="relative mt-2">
                <LockKeyhole
                    size={18}
                    aria-hidden="true"
                    className="pointer-events-none absolute start-4 top-1/2 -translate-y-1/2 text-foreground/45"
                />

                <input
                    type={visible ? "text" : "password"}
                    name={name}
                    value={value}
                    onChange={(event) =>
                        onValueChange(event.target.value)
                    }
                    required
                    minLength={8}
                    autoComplete="new-password"
                    placeholder={placeholder}
                    className="h-[52px] w-full rounded-md border-2 border-border bg-background py-3 pe-12 ps-12 text-sm font-medium outline-none transition focus:border-foreground focus:ring-2 focus:ring-primary"
                />

                <button
                    type="button"
                    onClick={onVisibilityChange}
                    aria-label={
                        visible ? hideLabel : showLabel
                    }
                    className="absolute end-3 top-1/2 grid size-8 -translate-y-1/2 place-items-center"
                >
                    {visible ? (
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
    );
}

function RequirementItem({
    complete,
    text,
}: {
    complete: boolean;
    text: string;
}) {
    return (
        <li
            className={[
                "flex items-center gap-2 text-xs font-bold",
                complete
                    ? "text-green-700"
                    : "text-foreground/50",
            ].join(" ")}
        >
            <span
                className={[
                    "grid size-5 shrink-0 place-items-center rounded-full border",
                    complete
                        ? "border-green-700 bg-green-100"
                        : "border-border bg-card",
                ].join(" ")}
            >
                {complete && (
                    <Check
                        size={11}
                        strokeWidth={3}
                        aria-hidden="true"
                    />
                )}
            </span>

            <span>{text}</span>
        </li>
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

function CardBackground() {
    return (
        <div
            aria-hidden="true"
            className="absolute inset-0 translate-x-3 translate-y-3 rounded-xl border-2 border-foreground bg-primary rtl:-translate-x-3"
        />
    );
}