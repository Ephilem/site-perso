export function formatDate(date: Date, locale: Intl.LocalesArgument = 'fr-FR'): string {
    return new Intl.DateTimeFormat(locale).format(date);
}