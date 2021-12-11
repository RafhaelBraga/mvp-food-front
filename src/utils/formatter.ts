export default class Formatter {
    public static currencyFormat(number: number) {
        const formater = new Intl.NumberFormat('PT-BR', {style: 'currency', currency: 'BRL'});

        return formater.format(number);
    }
}