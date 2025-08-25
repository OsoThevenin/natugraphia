export default function LegalLayout({ children }: { children: React.ReactNode }) {
	return (
		<div className="container mx-auto max-w-4xl px-4 py-8">
			<div className="prose prose-neutral mx-auto max-w-none">
				<div className="text-base leading-relaxed space-y-4">{children}</div>
			</div>
		</div>
	);
}
