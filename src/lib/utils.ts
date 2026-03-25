/**
 * Formats a date string into a human-readable format.
 * 
 * @param date - ISO date string e.g. '2024-01-15'
 * @param dateStyle - How verbose the output is. Defaults to 'medium' e.g. 'Jan 15, 2024'
 * @param locales - Language/region for formatting. Defaults to 'en'
 * 
 * Note: Safari chokes on dashes in date strings, so we
 * replace them with slashes before parsing.
 */
type DateStyle = Intl.DateTimeFormatOptions['dateStyle']

export function formatDate(date: string, dateStyle: DateStyle = 'medium', locales = 'en') {
	const dateToFormat = new Date(date.replaceAll('-', '/'))
	const dateFormatter = new Intl.DateTimeFormat(locales, { dateStyle })
	return dateFormatter.format(dateToFormat)
}