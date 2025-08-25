import type { Metadata } from "next";
import { getTranslations } from "@/i18n/server";

export async function generateMetadata(): Promise<Metadata> {
	const t = await getTranslations("Legal");

	return {
		title: `${t("returns.title")} · Natugraphia`,
		description: t("returns.description"),
	};
}

export default async function ReturnsPage() {
	const t = await getTranslations("Legal");

	return (
		<>
			<h1 className="text-3xl font-bold mb-4">{t("returns.title")}</h1>
			<p className="text-lg text-neutral-600 mb-8">{t("returns.description")}</p>
			<div className="space-y-6">
				<section>
					<h2 className="text-xl font-semibold mb-3">{t("returns.sections.returnPeriod")}</h2>
					<p>{t("returns.sections.returnPeriodContent")}</p>
				</section>

				<section>
					<h2 className="text-xl font-semibold mb-3">{t("returns.sections.returnConditions")}</h2>
					<p>{t("returns.sections.returnConditionsContent")}</p>
				</section>

				<section>
					<h2 className="text-xl font-semibold mb-3">{t("returns.sections.returnProcess")}</h2>
					<p>{t("returns.sections.returnProcessContent")}</p>
				</section>

				<section>
					<h2 className="text-xl font-semibold mb-3">{t("returns.sections.returnShipping")}</h2>
					<p>{t("returns.sections.returnShippingContent")}</p>
				</section>

				<section>
					<h2 className="text-xl font-semibold mb-3">{t("returns.sections.refundProcessing")}</h2>
					<p>{t("returns.sections.refundProcessingContent")}</p>
				</section>

				<section>
					<h2 className="text-xl font-semibold mb-3">{t("returns.sections.nonReturnableItems")}</h2>
					<p>{t("returns.sections.nonReturnableItemsContent")}</p>
				</section>

				<section>
					<h2 className="text-xl font-semibold mb-3">{t("returns.sections.damagedItems")}</h2>
					<p>{t("returns.sections.damagedItemsContent")}</p>
				</section>

				<section>
					<h2 className="text-xl font-semibold mb-3">{t("returns.sections.exchangePolicy")}</h2>
					<p>{t("returns.sections.exchangePolicyContent")}</p>
				</section>

				<section>
					<h2 className="text-xl font-semibold mb-3">{t("returns.sections.contactInfo")}</h2>
					<p>{t("returns.sections.contactInfoContent")}</p>
				</section>
			</div>
		</>
	);
}
