import { getTranslations } from "next-intl/server";

import { LegalPage } from "@/components/legal/legal-page";

export default async function PrivacyPage() {
    const t = await getTranslations("Privacy");

    const sections = [
        {
            title: t("sections.collected.title"),
            content: t(
                "sections.collected.content"
            ),
        },
        {
            title: t("sections.usage.title"),
            content: t("sections.usage.content"),
        },
        {
            title: t("sections.sharing.title"),
            content: t(
                "sections.sharing.content"
            ),
        },
        {
            title: t("sections.security.title"),
            content: t(
                "sections.security.content"
            ),
        },
        {
            title: t("sections.retention.title"),
            content: t(
                "sections.retention.content"
            ),
        },
        {
            title: t("sections.rights.title"),
            content: t("sections.rights.content"),
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