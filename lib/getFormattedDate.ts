export default function getFormattedDate(dateString: string): string {
	return new Intl.DateTimeFormat("en-GB", { dateStyle: "long" }).format(
		new Date(dateString)
	);
}
