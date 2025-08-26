"use client";

import { usePathname } from "next/navigation";
import { useTransition } from "react";
import { setLocale } from "@/actions/set-locale";
import { useTranslations } from "@/i18n/client";
import { AVAILABLE_LOCALES } from "@/i18n/types";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/ui/shadcn/select";
import { FlagIcon } from "./flag-icon";

export function LocaleSwitcher({ current }: { current: string }) {
	const pathname = usePathname();
	const [pending, startTransition] = useTransition();
	const t = useTranslations("Global.languages");

	return (
		<div className="w-[120px]">
			<Select
				value={current}
				onValueChange={(value) =>
					startTransition(() => setLocale(value as (typeof AVAILABLE_LOCALES)[number], pathname))
				}
				disabled={pending}
			>
				<SelectTrigger>
					<div className="flex items-center gap-2">
						<SelectValue placeholder="Lang" />
					</div>
				</SelectTrigger>
				<SelectContent>
					{AVAILABLE_LOCALES.map((loc) => (
						<SelectItem key={loc} value={loc}>
							<div className="flex items-center gap-2">
								<FlagIcon locale={loc} />
								<span>{t(loc as keyof typeof t)}</span>
							</div>
						</SelectItem>
					))}
				</SelectContent>
			</Select>
		</div>
	);
}
