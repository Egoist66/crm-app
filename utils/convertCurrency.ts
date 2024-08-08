    /**
     * Returns the corresponding currency code based on the provided format.
     *
     * @return {string} The currency code corresponding to the format.
     * @throws {Error} If the format is not supported.
     */

export const convertCurrency = (format: 'en-US' | 'en-GB' | 'ru-RU' | 'de-DE', value: number | string): string => {
    const resCurrency = () => {
        switch (format) {
            case 'en-US':
                return 'USD';
            case 'en-GB':
                return 'GBP';
            case 'ru-RU':
                return 'RUB';
            case 'de-DE':
                return 'EUR';
            default:
                throw new Error(`Unsupported format: ${format}`);

        }
     
    }
    return new Intl.NumberFormat(format, {
        style: 'currency',
        currency: resCurrency(),
    }).format(+value);
}