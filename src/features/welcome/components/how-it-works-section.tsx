import {
    BadgeCheck,
    CarFront,
    PackageCheck,
    Search,
} from "lucide-react";
import { useTranslations } from "next-intl";

const steps = [
    {
        key: "vehicle",
        number: "01",
        icon: CarFront,
    },
    {
        key: "part",
        number: "02",
        icon: Search,
    },
    {
        key: "offers",
        number: "03",
        icon: BadgeCheck,
    },
    {
        key: "delivery",
        number: "04",
        icon: PackageCheck,
    },
] as const;

export function HowItWorksSection() {
    const t = useTranslations("HowItWorks");

    return (
        <section
            id="how-it-works"
            className="relative scroll-mt-24 overflow-hidden border-b-2 border-foreground bg-background"
        >
            <div
                aria-hidden="true"
                className="pointer-events-none absolute inset-0 opacity-[0.035]"
                style={{
                    backgroundImage:
                        "linear-gradient(to right, currentColor 1px, transparent 1px), linear-gradient(to bottom, currentColor 1px, transparent 1px)",
                    backgroundSize: "32px 32px",
                }}
            />

            <div
                aria-hidden="true"
                className="pointer-events-none absolute -start-48 -bottom-48 size-[560px] rounded-full bg-primary/25 blur-3xl"
            />

            <div className="relative z-10 mx-auto max-w-7xl px-5 py-20 sm:px-8 sm:py-24 lg:px-10 lg:py-28">

                {/* Steps */}
                <div className="relative mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
                    {/* Desktop connecting line */}
                    <div
                        aria-hidden="true"
                        className="absolute start-[12.5%] end-[12.5%] top-[50px] hidden border-t-2 border-dashed border-foreground/25 lg:block"
                    />

                    {steps.map((step) => {
                        const Icon = step.icon;

                        return (
                            <article
                                key={step.key}
                                className="group relative flex h-full flex-col rounded-xl border-2 border-foreground bg-background p-6 automart-shadow-sm transition-transform duration-200 hover:-translate-y-1"
                            >
                                {/* Step icon */}
                                <div className="relative z-10 flex items-center justify-between gap-4">
                                    <div className="grid size-14 place-items-center rounded-lg border-2 border-foreground bg-primary text-black">
                                        <Icon
                                            size={25}
                                            strokeWidth={2.3}
                                            aria-hidden="true"
                                        />
                                    </div>

                                    <span
                                        aria-hidden="true"
                                        className="font-mono text-3xl font-black text-foreground/15"
                                    >
                                        {step.number}
                                    </span>
                                </div>

                                {/* Step content */}
                                <div className="mt-7">
                                    <p className="text-[10px] font-black uppercase tracking-[0.16em] text-foreground/50">
                                        {t("stepLabel", {
                                            number: Number(step.number),
                                        })}
                                    </p>

                                    <h3 className="mt-2 text-xl font-black leading-7">
                                        {t(`steps.${step.key}.title`)}
                                    </h3>

                                    <p className="mt-3 text-sm font-medium leading-7 text-foreground/65">
                                        {t(`steps.${step.key}.description`)}
                                    </p>
                                </div>

                                {/* Bottom indicator */}
                                <div className="mt-auto pt-7">
                                    <div className="h-1.5 w-16 rounded-full bg-primary transition-all duration-200 group-hover:w-24" />
                                </div>
                            </article>
                        );
                    })}
                </div>

                {/* Bottom message */}
                <div className="mx-auto mt-12 flex max-w-3xl items-start gap-4 rounded-xl border-2 border-foreground bg-secondary px-5 py-5 text-white automart-shadow sm:items-center sm:px-6">
                    <span className="grid size-10 shrink-0 place-items-center rounded-full border-2 border-black bg-primary text-black">
                        <BadgeCheck
                            size={20}
                            strokeWidth={2.5}
                            aria-hidden="true"
                        />
                    </span>

                    <div>
                        <p className="font-black">
                            {t("noticeTitle")}
                        </p>

                        <p className="mt-1 text-sm leading-6 text-white/70">
                            {t("noticeDescription")}
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
}