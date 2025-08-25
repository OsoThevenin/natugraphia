import type { Metadata } from "next";
import { getTranslations } from "@/i18n/server";

export async function generateMetadata(): Promise<Metadata> {
	const t = await getTranslations("Legal");

	return {
		title: `${t("shipping.title" as never)} · Natugraphia`,
		description: t("shipping.description" as never),
	};
}

export default async function ShippingPage() {
	const t = await getTranslations("Legal");

	return (
		<>
			<h1 className="text-3xl font-bold mb-4">{t("shipping.title" as never)}</h1>
			<p className="text-lg text-neutral-600 mb-8">{t("shipping.description" as never)}</p>
			<div className="space-y-6">
				<section>
					<h2 className="text-xl font-semibold mb-3">{t("shipping.sections.shippingMethods")}</h2>
					<p>{t("shipping.sections.shippingMethodsContent")}</p>
					<ul className="list-disc pl-6 mt-2 space-y-1">
						<li>
							<strong>{t("shipping.sections.shippingMethods.standardShipping")}:</strong> 3-5{" "}
							{t("shipping.sections.businessDays")}
						</li>
						<li>
							<strong>{t("shipping.sections.shippingMethods.expressShipping")}:</strong> 1-2{" "}
							{t("shipping.sections.businessDays")}
						</li>
						<li>
							<strong>{t("shipping.sections.shippingMethods.internationalShipping")}:</strong> 7-14{" "}
							{t("shipping.sections.businessDays")}
						</li>
					</ul>
				</section>

				<section>
					<h2 className="text-xl font-semibold mb-3">{t("shipping.sections.shippingCosts")}</h2>
					<p>{t("shipping.sections.shippingCostsContent")}</p>
				</section>

				<section>
					<h2 className="text-xl font-semibold mb-3">{t("shipping.sections.processingTime")}</h2>
					<p>{t("shipping.sections.processingTimeContent")}</p>
				</section>

				<section>
					<h2 className="text-xl font-semibold mb-3">{t("shipping.sections.deliveryAreas")}</h2>
					<p>{t("shipping.sections.deliveryAreasContent")}</p>
				</section>

				<section>
					<h2 className="text-xl font-semibold mb-3">{t("shipping.sections.trackingInfo")}</h2>
					<p>{t("shipping.sections.trackingInfoContent")}</p>
				</section>

				<section>
					<h2 className="text-xl font-semibold mb-3">{t("shipping.sections.deliveryIssues")}</h2>
					<p>{t("shipping.sections.deliveryIssuesContent")}</p>
				</section>

				<section>
					<h2 className="text-xl font-semibold mb-3">{t("shipping.sections.internationalShipping")}</h2>
					<p>{t("shipping.sections.internationalShippingContent")}</p>
				</section>

				<section>
					<h2 className="text-xl font-semibold mb-3">{t("shipping.sections.signatureRequired")}</h2>
					<p>{t("shipping.sections.signatureRequiredContent")}</p>
				</section>

				<section>
					<h2 className="text-xl font-semibold mb-3">{t("shipping.sections.contactInfo")}</h2>
					<p>{t("shipping.sections.contactInfoContent")}</p>
				</section>
			</div>
		</>
	);
}
