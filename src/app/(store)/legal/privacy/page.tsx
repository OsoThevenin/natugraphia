import type { Metadata } from "next";
import { getTranslations } from "@/i18n/server";

export async function generateMetadata(): Promise<Metadata> {
	const t = await getTranslations("Legal");

	return {
		title: `${t("privacy.title")} · Natugraphia`,
		description: t("privacy.description"),
	};
}

export default async function PrivacyPage() {
	const t = await getTranslations("Legal");

	return (
		<>
			<h1 className="text-3xl font-bold mb-4">{t("privacy.title")}</h1>
			<p className="text-lg text-neutral-600 mb-8">{t("privacy.description")}</p>
			<div className="space-y-6">
				<section>
					<h2 className="text-xl font-semibold mb-3">{t("privacy.sections.informationCollection")}</h2>
					<p>{t("privacy.sections.informationCollectionContent")}</p>
				</section>

				<section>
					<h2 className="text-xl font-semibold mb-3">{t("privacy.sections.informationUsage")}</h2>
					<p>{t("privacy.sections.informationUsageContent")}</p>
				</section>

				<section>
					<h2 className="text-xl font-semibold mb-3">{t("privacy.sections.informationSharing")}</h2>
					<p>{t("privacy.sections.informationSharingContent")}</p>
				</section>

				<section>
					<h2 className="text-xl font-semibold mb-3">{t("privacy.sections.dataSecurity")}</h2>
					<p>{t("privacy.sections.dataSecurityContent")}</p>
				</section>

				<section>
					<h2 className="text-xl font-semibold mb-3">{t("privacy.sections.cookiesTracking")}</h2>
					<p>{t("privacy.sections.cookiesTrackingContent")}</p>
				</section>

				<section>
					<h2 className="text-xl font-semibold mb-3">{t("privacy.sections.thirdPartyServices")}</h2>
					<p>{t("privacy.sections.thirdPartyServicesContent")}</p>
				</section>

				<section>
					<h2 className="text-xl font-semibold mb-3">{t("privacy.sections.yourRights")}</h2>
					<p>{t("privacy.sections.yourRightsContent")}</p>
				</section>

				<section>
					<h2 className="text-xl font-semibold mb-3">{t("privacy.sections.policyChanges")}</h2>
					<p>{t("privacy.sections.policyChangesContent")}</p>
				</section>

				<section>
					<h2 className="text-xl font-semibold mb-3">{t("privacy.sections.contactUs")}</h2>
					<p>{t("privacy.sections.contactUsContent")}</p>
				</section>
			</div>
		</>
	);
}
