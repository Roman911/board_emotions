export function getDayPart(): 'morning' | 'noon' | 'night' {
	const hour = new Date().getHours();

	if (hour >= 5 && hour < 12) return 'morning';
	if (hour >= 12 && hour < 18) return 'noon';
	return 'night';
}