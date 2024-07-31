import Card from './Card';

class Hand {

    cardsInHand: Card[];

    constructor() {
        this.cardsInHand = [];
    };

    public takeACard: (card: Card) => void = (card: Card): void => {
        this.cardsInHand.push(card);
    };

    public showCards: () => void = (): void => {
        let topAndBottom: string = '';
        let result: string = '';
        let numbers: string = '';

        for (let i = 0; i < this.cardsInHand.length; i++) {
            topAndBottom += `${'-'.repeat(7)} `;
            result += `${this.cardsInHand[i].toString()} `;
            numbers += `   ${`${i + 1}`.padEnd(4, ' ')} `;
        };
        console.log(`${topAndBottom}\n${result}\n${topAndBottom}\n${numbers}`);
    };

    public changeCard: (index: number, card: Card) => void = (index: number, card: Card): void => {
        this.cardsInHand[index] = card;
    };
};

export default Hand;