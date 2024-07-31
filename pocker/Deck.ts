import Card from './Card';

class Deck {

    cards: Card[];

    constructor() {
        this.cards = this._createDeck();
    };

    public shuffleDeck: () => void = (): void => {
        for (let i = 0; i < this.cards.length; i++) {
            let indexOne: number = Math.floor(Math.random() * this.cards.length);
            let indexTwo: number = Math.floor(Math.random() * this.cards.length);
            let temp: Card = this.cards[indexOne];
            this.cards[indexOne] = this.cards[indexTwo];
            this.cards[indexTwo] = temp;
        };
    };

    private _createDeck: () => Card[] = (): Card[] => {
        const ranks: string[] = ["2", "3", "4", "5", "6", "7", "8", "9", "10", "J", "Q", "K", "A"];
        const suits: string[] = ["♠", "♥", "♦", "♣"];

        const array: Card[] = [];

        for (let i = 0; i < ranks.length; i++) {
            for (let j = 0; j < suits.length; j++) {
                array.push(new Card(ranks[i], suits[j]));
            };
        };
        return array;
    };

    public giveACard: () => Card = (): Card => {
        let card: Card = this.cards[0];
        this.cards.splice(0, 1);
        return card;
    };
};

export default Deck;