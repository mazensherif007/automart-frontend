import {
    ArrowLeft,
    CalendarDays,
    Scale,
} from "lucide-react";

import { Link } from "@/i18n/navigation";

type LegalSection = {
    title: string;
    content: string;
};

type LegalPageProps = {
    eyebrow: string;
    title: string;
    description: string;
    updatedLabel: string;
    updatedDate: string;
    notice: string;
    sections: LegalSection[];
    backHome: string;
};

export function LegalPage({
    eyebrow,
    title,
    description,
    updatedLabel,
    updatedDate,
    notice,
    sections,
    backHome,
}: LegalPageProps) {
    return (
        <main className="relative min-h-screen overflow-hidden bg-background text-foreground">
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
                className="pointer-events-none absolute -end-48 -top-48 size-[560px] rounded-full bg-primary/25 blur-3xl"
            />

            <header className="relative z-10 border-b-2 border-foreground bg-background/90 backdrop-blur">
                <div className="mx-auto flex min-h-20 max-w-7xl items-center justify-between gap-4 px-5 sm:px-8 lg:px-10">
                    <Link
                        href="/"
                        className="flex items-center gap-3"
                    >
                        <span className="grid size-11 place-items-center rounded-md border-2 border-foreground bg-primary font-black text-black automart-shadow-sm">
                            A
                        </span>

                        <span className="text-xl font-black">
                            automart
                        </span>
                    </Link>

                    <Link
                        href="/"
                        className="inline-flex items-center gap-2 rounded-md border-2 border-foreground bg-card px-4 py-2 text-sm font-black automart-shadow-sm"
                    >
                        <ArrowLeft
                            size={16}
                            className="rtl:rotate-180"
                            aria-hidden="true"
                        />

                        {backHome}
                    </Link>
                </div>
            </header>

            <div className="relative z-10 mx-auto max-w-5xl px-5 py-14 sm:px-8 sm:py-20 lg:px-10">
                <div className="max-w-3xl">
                    <div className="inline-flex items-center gap-2 rounded-full border-2 border-foreground bg-card px-4 py-2 automart-shadow-sm">
                        <Scale
                            size={17}
                            aria-hidden="true"
                        />

                        <span className="text-xs font-black uppercase tracking-[0.14em]">
                            {eyebrow}
                        </span>
                    </div>

                    <h1 className="mt-8 text-4xl font-black leading-tight tracking-[-0.04em] sm:text-5xl lg:text-6xl">
                        {title}
                    </h1>

                    <p className="mt-6 text-base font-medium leading-8 text-foreground/65 sm:text-lg">
                        {description}
                    </p>

                    <div className="mt-6 flex items-center gap-2 text-sm font-bold text-foreground/55">
                        <CalendarDays
                            size={17}
                            aria-hidden="true"
                        />

                        <span>
                            {updatedLabel}: {updatedDate}
                        </span>
                    </div>
                </div>

                <div className="mt-10 rounded-lg border-2 border-foreground bg-primary p-5 text-sm font-bold leading-7 text-black automart-shadow-sm">
                    {notice}
                </div>

                <div className="mt-12 space-y-6">
                    {sections.map(
                        (section, index) => (
                            <article
                                key={section.title}
                                className="rounded-xl border-2 border-foreground bg-card p-6 automart-shadow-sm sm:p-8"
                            >
                                <div className="flex items-start gap-4">
                                    <span className="grid size-10 shrink-0 place-items-center rounded-md border-2 border-foreground bg-primary font-mono text-sm font-black text-black">
                                        {String(index + 1).padStart(
                                            2,
                                            "0"
                                        )}
                                    </span>

                                    <div>
                                        <h2 className="text-xl font-black sm:text-2xl">
                                            {section.title}
                                        </h2>

                                        <p className="mt-4 whitespace-pre-line text-sm font-medium leading-8 text-foreground/65 sm:text-base">
                                            {section.content}
                                        </p>
                                    </div>
                                </div>
                            </article>
                        )
                    )}
                </div>
            </div>
        </main>
    );
}