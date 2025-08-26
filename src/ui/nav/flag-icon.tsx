import Image from "next/image";

interface FlagIconProps {
	locale: string;
	className?: string;
}

export function FlagIcon({ locale, className }: FlagIconProps) {
	const getFlagSrc = (locale: string) => {
		switch (locale) {
			case "ca-ES":
				return "/images/flags/es-ct.svg";
			case "en-US":
				return "/images/flags/gb.svg";
			case "es-ES":
				return "/images/flags/es.svg";
			default:
				return "/images/flags/es-ct.svg";
		}
	};

	return (
		<Image src={getFlagSrc(locale)} alt={`${locale} flag`} width={20} height={15} className={className} />
	);
}
