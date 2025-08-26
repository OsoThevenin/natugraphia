"use server";

import { cookies } from "next/headers";
import { redirect } from "next/navigation";
import type { AVAILABLE_LOCALES } from "@/i18n/types";

export type Locale = (typeof AVAILABLE_LOCALES)[number];

export async function setLocale(locale: Locale, returnTo: string) {
	// 1 year
	(await cookies()).set("locale", locale, { path: "/", maxAge: 60 * 60 * 24 * 365, sameSite: "lax" });
	redirect(returnTo);
}
