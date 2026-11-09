import { getTranslations } from "next-intl/server";

import { LegalPage } from "@/components/legal/legal-page";

export default async function TermsPage() {
    const t = await getTranslations("Terms");

    const sections = [
        {
            title: t("sections.eligibility.title"),
            content: t(
                "sections.eligibility.content"
            ),
        },
        {
            title: t(
                "sections.businessAccounts.title"
            ),
            content: t(
                "sections.businessAccounts.content"
            ),
        },
        {
            title: t("sections.marketplace.title"),
            content: t(
                "sections.marketplace.content"
            ),
        },
        {
            title: t("sections.prohibited.title"),
            content: t(
                "sections.prohibited.content"
            ),
        },
        {
            title: t("sections.suspension.title"),
            content: t(
                "sections.suspension.content"
            ),
        },
        {
            title: t("sections.contact.title"),
            content: t("sections.contact.content"),
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