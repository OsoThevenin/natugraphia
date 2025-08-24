import EstiuImage from "@/images/estiu.webp";
import HivernImage from "@/images/hivern.webp";

export const config = {
	categories: [
		{ name: "Apparel", slug: "apparel", image: EstiuImage },
		{ name: "Hivern", slug: "hivern", image: HivernImage },
		{ name: "Estiu", slug: "estiu", image: EstiuImage },
	],

	social: {
		instagram: "https://instagram.com/natugraphia_grau",
	},

	contact: {
		email: "support@yourstore.com",
		phone: "+1 (555) 111-4567",
		address: "123 Store Street, City, Country",
	},
};

export type StoreConfig = typeof config;
export default config;
