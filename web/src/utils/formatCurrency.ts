export const formatCurrency = (value: number): string => {
    return Intl.NumberFormat('pt-BR', {
        currency: 'BRL',
        maximumFractionDigits: 2,
        style: 'currency'
    }).format(value);
}