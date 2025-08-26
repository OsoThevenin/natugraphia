"use server";

import { cookies } from "next/headers";
import { env } from "@/env.mjs";
import { formatMessage } from "./core";
import type { IntlNamespaceKeys } from "./types";

export const getLocale = async () => (await cookies()).get("locale")?.value ?? env.NEXT_PUBLIC_LANGUAGE;

export const getMessages = async () => {
	const locale = await getLocale();
	return (await import(`../../messages/${locale}.json`)).default as IntlMessages;
};

export const getTranslations = async <TNamespaceKey extends IntlNamespaceKeys = never>(
	namespaceKey: TNamespaceKey,
) => {
	const [locale, messages] = await Promise.all([getLocale(), getMessages()]);
	return formatMessage(namespaceKey, locale, messages);
};
