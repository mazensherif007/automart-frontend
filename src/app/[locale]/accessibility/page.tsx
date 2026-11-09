import { getTranslations } from "next-intl/server";

import { LegalPage } from "@/components/legal/legal-page";

export default async function AccessibilityPage() {
    const t = await getTranslations(
        "Accessibility"
    );

    const sections = [
        {
            title: t("sections.commitment.title"),
            content: t(
                "sections.commitment.content"
            ),
        },
        {
            title: t("sections.features.title"),
            content: t(
                "sections.features.content"
            ),
        },
        {
            title: t("sections.keyboard.title"),
            content: t(
                "sections.keyboard.content"
            ),
        },
        {
            title: t("sections.language.title"),
            content: t(
                "sections.language.content"
            ),
        },
        {
            title: t("sections.feedback.title"),
            content: t(
                "sections.feedback.content"
            ),
        },
    ];

    return (
        <LegalPage
            eyebrow={t("eyebrow")}
            title={t("title")}
            description={t("description")}
            updatedLabel={t("updatedLabel")}
            updatedDate={t("updatedDate")}
            notice={t("notice")}
            sections={sections}
            backHome={t("backHome")}
        />
    );
}