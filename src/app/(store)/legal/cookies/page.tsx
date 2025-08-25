import type { Metadata } from "next";
import { getTranslations } from "@/i18n/server";

export async function generateMetadata(): Promise<Metadata> {
	const t = await getTranslations("Legal");

	return {
		title: `${t("cookies.title")} · Natugraphia`,
		description: t("cookies.description"),
	};
}

export default async function CookiesPage() {
	const t = await getTranslations("Legal");

	return (
		<>
			<h1 className="text-3xl font-bold mb-4">{t("cookies.title")}</h1>
			<p className="text-lg text-neutral-600 mb-8">{t("cookies.description")}</p>
			<div className="space-y-6">
				<section>
					<h2 className="text-xl font-semibold mb-3">{t("cookies.sections.whatAreCookies")}</h2>
					<p>{t("cookies.sections.whatAreCookiesContent")}</p>
				</section>

				<section>
					<h2 className="text-xl font-semibold mb-3">{t("cookies.sections.typesOfCookies")}</h2>
					<div className="space-y-3">
						<div>
							<h3 className="font-semibold">{t("cookies.sections.essentialCookies")}</h3>
							<p>{t("cookies.sections.essentialCookiesContent")}</p>
						</div>
						<div>
							<h3 className="font-semibold">{t("cookies.sections.analyticsCookies")}</h3>
							<p>{t("cookies.sections.analyticsCookiesContent")}</p>
						</div>
						<div>
							<h3 className="font-semibold">{t("cookies.sections.functionalCookies")}</h3>
							<p>{t("cookies.sections.functionalCookiesContent")}</p>
						</div>
					</div>
				</section>

				<section>
					<h2 className="text-xl font-semibold mb-3">{t("cookies.sections.thirdPartyCookies")}</h2>
					<p>{t("cookies.sections.thirdPartyCookiesContent")}</p>
				</section>

				<section>
					<h2 className="text-xl font-semibold mb-3">{t("cookies.sections.cookieLifespan")}</h2>
					<p>{t("cookies.sections.cookieLifespanContent")}</p>
				</section>

				<section>
					<h2 className="text-xl font-semibold mb-3">{t("cookies.sections.managingCookies")}</h2>
					<p>{t("cookies.sections.managingCookiesContent")}</p>
				</section>

				<section>
					<h2 className="text-xl font-semibold mb-3">{t("cookies.sections.cookieConsent")}</h2>
					<p>{t("cookies.sections.cookieConsentContent")}</p>
				</section>

				<section>
					<h2 className="text-xl font-semibold mb-3">{t("cookies.sections.policyUpdates")}</h2>
					<p>{t("cookies.sections.policyUpdatesContent")}</p>
				</section>

				<section>
					<h2 className="text-xl font-semibold mb-3">{t("cookies.sections.contactUs")}</h2>
					<p>{t("cookies.sections.contactUsContent")}</p>
				</section>
			</div>
		</>
	);
}
