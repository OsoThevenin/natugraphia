import type { Metadata } from "next";
import { getTranslations } from "@/i18n/server";

export async function generateMetadata(): Promise<Metadata> {
	const t = await getTranslations("Legal");

	return {
		title: `${t("terms.title" as never)} · Natugraphia`,
		description: t("terms.description" as never),
	};
}

export default async function TermsPage() {
	const t = await getTranslations("Legal");

	return (
		<>
			<h1 className="text-3xl font-bold mb-4">{t("terms.title" as never)}</h1>
			<p className="text-lg text-neutral-600 mb-8">{t("terms.description" as never)}</p>
			<div className="space-y-6">
				<section>
					<h2 className="text-xl font-semibold mb-3">{t("terms.sections.acceptance" as never)}</h2>
					<p>{t("terms.sections.acceptanceContent" as never)}</p>
				</section>

				<section>
					<h2 className="text-xl font-semibold mb-3">{t("terms.sections.license" as never)}</h2>
					<p>{t("terms.sections.licenseContent" as never)}</p>
				</section>

				<section>
					<h2 className="text-xl font-semibold mb-3">{t("terms.sections.disclaimer" as never)}</h2>
					<p>{t("terms.sections.disclaimerContent" as never)}</p>
				</section>

				<section>
					<h2 className="text-xl font-semibold mb-3">{t("terms.sections.limitations" as never)}</h2>
					<p>{t("terms.sections.limitationsContent" as never)}</p>
				</section>

				<section>
					<h2 className="text-xl font-semibold mb-3">{t("terms.sections.revisions" as never)}</h2>
					<p>{t("terms.sections.revisionsContent" as never)}</p>
				</section>

				<section>
					<h2 className="text-xl font-semibold mb-3">{t("terms.sections.links" as never)}</h2>
					<p>{t("terms.sections.linksContent" as never)}</p>
				</section>

				<section>
					<h2 className="text-xl font-semibold mb-3">{t("terms.sections.modifications" as never)}</h2>
					<p>{t("terms.sections.modificationsContent" as never)}</p>
				</section>

				<section>
					<h2 className="text-xl font-semibold mb-3">{t("terms.sections.governingLaw" as never)}</h2>
					<p>{t("terms.sections.governingLawContent" as never)}</p>
				</section>
			</div>
		</>
	);
}
