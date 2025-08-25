import type { Metadata } from "next";
import { getTranslations } from "@/i18n/server";

export async function generateMetadata(): Promise<Metadata> {
	const t = await getTranslations("Legal");

	return {
		title: `${t("gdpr.title")} · Natugraphia`,
		description: t("gdpr.description"),
	};
}

export default async function GDPRPage() {
	const t = await getTranslations("Legal");

	return (
		<>
			<h1 className="text-3xl font-bold mb-4">{t("gdpr.title")}</h1>
			<p className="text-lg text-neutral-600 mb-8">{t("gdpr.description")}</p>
			<div className="space-y-6">
				<section>
					<h2 className="text-xl font-semibold mb-3">{t("gdpr.sections.yourRights")}</h2>
					<p>{t("gdpr.sections.yourRightsContent")}</p>
				</section>

				<section>
					<h2 className="text-xl font-semibold mb-3">{t("gdpr.sections.rightToAccess")}</h2>
					<p>{t("gdpr.sections.rightToAccessContent")}</p>
				</section>

				<section>
					<h2 className="text-xl font-semibold mb-3">{t("gdpr.sections.rightToRectification")}</h2>
					<p>{t("gdpr.sections.rightToRectificationContent")}</p>
				</section>

				<section>
					<h2 className="text-xl font-semibold mb-3">{t("gdpr.sections.rightToErasure")}</h2>
					<p>{t("gdpr.sections.rightToErasureContent")}</p>
				</section>

				<section>
					<h2 className="text-xl font-semibold mb-3">{t("gdpr.sections.rightToRestrict")}</h2>
					<p>{t("gdpr.sections.rightToRestrictContent")}</p>
				</section>

				<section>
					<h2 className="text-xl font-semibold mb-3">{t("gdpr.sections.rightToPortability")}</h2>
					<p>{t("gdpr.sections.rightToPortabilityContent")}</p>
				</section>

				<section>
					<h2 className="text-xl font-semibold mb-3">{t("gdpr.sections.rightToObject")}</h2>
					<p>{t("gdpr.sections.rightToObjectContent")}</p>
				</section>

				<section>
					<h2 className="text-xl font-semibold mb-3">{t("gdpr.sections.rightToWithdraw")}</h2>
					<p>{t("gdpr.sections.rightToWithdrawContent")}</p>
				</section>

				<section>
					<h2 className="text-xl font-semibold mb-3">{t("gdpr.sections.howToExercise")}</h2>
					<p>{t("gdpr.sections.howToExerciseContent")}</p>
				</section>

				<section>
					<h2 className="text-xl font-semibold mb-3">{t("gdpr.sections.dataProtectionOfficer")}</h2>
					<p>{t("gdpr.sections.dataProtectionOfficerContent")}</p>
				</section>

				<section>
					<h2 className="text-xl font-semibold mb-3">{t("gdpr.sections.rightToComplain")}</h2>
					<p>{t("gdpr.sections.rightToComplainContent")}</p>
				</section>

				<section>
					<h2 className="text-xl font-semibold mb-3">{t("gdpr.sections.contactInfo")}</h2>
					<p>{t("gdpr.sections.contactInfoContent")}</p>
				</section>
			</div>
		</>
	);
}
