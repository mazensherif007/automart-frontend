"use client";

import {
    Building2,
    Eye,
    EyeOff,
    LockKeyhole,
    Mail,
    Phone,
    Store,
    UserRound,
    Warehouse,
} from "lucide-react";
import { useTranslations } from "next-intl";
import { useSearchParams } from "next/navigation";
import {
    FormEvent,
    useState,
} from "react";

import { Link } from "@/i18n/navigation";

import { AuthShell } from "./auth-shell";

type BusinessRole = "trader" | "supplier";

export function RegisterForm() {
    const t = useTranslations("Register");
    const searchParams = useSearchParams();

    const initialRole =
        searchParams.get("role") === "supplier"
            ? "supplier"
            : "trader";

    const [role, setRole] =
        useState<BusinessRole>(initialRole);

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
            <section className="relative mx-auto w-full max-w-3xl">
                <div
                    aria-hidden="true"
                    className="absolute inset-0 translate-x-3 translate-y-3 rounded-xl border-2 border-foreground bg-primary rtl:-translate-x-3"
                />

                <div className="relative rounded-xl border-2 border-foreground bg-card p-6 sm:p-8 lg:p-10">
                    <div className="max-w-2xl">
                        <p className="text-xs font-black uppercase tracking-[0.16em] text-foreground/50">
                            {t("eyebrow")}
                        </p>

                        <h1 className="mt-3 text-3xl font-black tracking-[-0.035em] sm:text-4xl">
                            {t("title")}
                        </h1>

                        <p className="mt-3 text-sm font-medium leading-7 text-foreground/60">
                            {t("description")}
                        </p>
                    </div>

                    {/* Role selection */}
                    <div className="mt-8">
                        <p className="text-sm font-black">
                            {t("businessType")}
                        </p>

                        <div className="mt-3 grid gap-3 sm:grid-cols-2">
                            <RoleButton
                                active={role === "trader"}
                                icon={<Store size={21} />}
                                title={t("traderTitle")}
                                description={t(
                                    "traderDescription"
                                )}
                                onClick={() => setRole("trader")}
                            />

                            <RoleButton
                                active={role === "supplier"}
                                icon={<Warehouse size={21} />}
                                title={t("supplierTitle")}
                                description={t(
                                    "supplierDescription"
                                )}
                                onClick={() =>
                                    setRole("supplier")
                                }
                            />
                        </div>
                    </div>

                    <form
                        onSubmit={handleSubmit}
                        className="mt-8"
                    >
                        <input
                            type="hidden"
                            name="role"
                            value={role}
                        />

                        <div className="grid gap-5 sm:grid-cols-2">
                            <FormField
                                label={t("representativeName")}
                                name="representativeName"
                                type="text"
                                placeholder={t(
                                    "representativePlaceholder"
                                )}
                                autoComplete="name"
                                icon={<UserRound size={18} />}
                            />

                            <FormField
                                label={t("businessName")}
                                name="businessName"
                                type="text"
                                placeholder={t(
                                    "businessPlaceholder"
                                )}
                                autoComplete="organization"
                                icon={<Building2 size={18} />}
                            />

                            <FormField
                                label={t("email")}
                                name="email"
                                type="email"
                                placeholder={t(
                                    "emailPlaceholder"
                                )}
                                autoComplete="email"
                                icon={<Mail size={18} />}
                            />

                            <FormField
                                label={t("phone")}
                                name="phone"
                                type="tel"
                                placeholder={t(
                                    "phonePlaceholder"
                                )}
                                autoComplete="tel"
                                icon={<Phone size={18} />}
                                direction="ltr"
                            />
                        </div>

                        <label className="mt-5 block">
                            <span className="text-sm font-black">
                                {t("password")}
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
                                    minLength={8}
                                    autoComplete="new-password"
                                    placeholder={t(
                                        "passwordPlaceholder"
                                    )}
                                    className="h-13 w-full rounded-md border-2 border-border bg-background py-3 pe-12 ps-12 text-sm outline-none transition focus:border-foreground focus:ring-2 focus:ring-primary"
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
                                        <EyeOff size={18} />
                                    ) : (
                                        <Eye size={18} />
                                    )}
                                </button>
                            </div>

                            <p className="mt-2 text-xs leading-5 text-foreground/50">
                                {t("passwordHint")}
                            </p>
                        </label>

                        <label className="mt-6 flex items-start gap-3">
                            <input
                                type="checkbox"
                                name="termsAccepted"
                                required
                                className="mt-1 size-4 shrink-0 accent-[hsl(var(--primary))]"
                            />

                            <span className="text-sm leading-6 text-foreground/65">
                                {t("acceptTerms")}{" "}
                                <Link
                                    href="/terms"
                                    className="font-black text-foreground underline decoration-2 underline-offset-4"
                                >
                                    {t("terms")}
                                </Link>
                            </span>
                        </label>

                        <button
                            type="submit"
                            disabled={isSubmitting}
                            className="mt-7 min-h-13 w-full rounded-md border-2 border-foreground bg-primary px-5 py-3 text-sm font-black text-black automart-shadow transition-transform hover:-translate-y-0.5 disabled:cursor-not-allowed disabled:opacity-60"
                        >
                            {isSubmitting
                                ? t("submitting")
                                : role === "supplier"
                                    ? t("supplierSubmit")
                                    : t("traderSubmit")}
                        </button>
                    </form>

                    <div className="mt-7 border-t-2 border-border pt-6 text-center">
                        <p className="text-sm text-foreground/60">
                            {t("existingAccount")}{" "}
                            <Link
                                href="/login"
                                className="font-black text-foreground underline decoration-2 underline-offset-4"
                            >
                                {t("signIn")}
                            </Link>
                        </p>
                    </div>
                </div>
            </section>
        </AuthShell>
    );
}

type RoleButtonProps = {
    active: boolean;
    icon: React.ReactNode;
    title: string;
    description: string;
    onClick: () => void;
};

function RoleButton({
    active,
    icon,
    title,
    description,
    onClick,
}: RoleButtonProps) {
    return (
        <button
            type="button"
            onClick={onClick}
            className={[
                "flex items-start gap-3 rounded-lg border-2 p-4 text-start transition",
                active
                    ? "border-foreground bg-primary text-black automart-shadow-sm"
                    : "border-border bg-background hover:border-foreground",
            ].join(" ")}
        >
            <span
                className={[
                    "grid size-10 shrink-0 place-items-center rounded-md border-2",
                    active
                        ? "border-black bg-secondary text-white"
                        : "border-foreground bg-card",
                ].join(" ")}
            >
                {icon}
            </span>

            <span>
                <span className="block text-sm font-black">
                    {title}
                </span>

                <span
                    className={[
                        "mt-1 block text-xs leading-5",
                        active
                            ? "text-black/65"
                            : "text-foreground/55",
                    ].join(" ")}
                >
                    {description}
                </span>
            </span>
        </button>
    );
}

type FormFieldProps = {
    label: string;
    name: string;
    type: string;
    placeholder: string;
    autoComplete: string;
    icon: React.ReactNode;
    direction?: "ltr" | "rtl";
};

function FormField({
    label,
    name,
    type,
    placeholder,
    autoComplete,
    icon,
    direction,
}: FormFieldProps) {
    return (
        <label className="block">
            <span className="text-sm font-black">
                {label}
            </span>

            <div className="relative mt-2">
                <span className="pointer-events-none absolute start-4 top-1/2 -translate-y-1/2 text-foreground/45">
                    {icon}
                </span>

                <input
                    type={type}
                    name={name}
                    required
                    autoComplete={autoComplete}
                    placeholder={placeholder}
                    dir={direction}
                    className="h-13 w-full rounded-md border-2 border-border bg-background py-3 pe-4 ps-12 text-sm outline-none transition focus:border-foreground focus:ring-2 focus:ring-primary"
                />
            </div>
        </label>
    );
}