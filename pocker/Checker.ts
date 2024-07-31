import Card from './Card';

class Checker {

    public static sortCards: (cards: Card[]) => Card[] = (cards: Card[]): Card[] => {
        return cards.sort((cardOne: Card, cardTwo: Card) => cardOne.points > cardTwo.points ? -1 : 1);
    };

    public static checkCombination: (cards: Card[]) => string = (cards: Card[]): string => {
        cards = this.sortCards(cards);
        let suits: number[] = this.getQuantityOfSameSuits(cards);
        let cardsPoints: number[] = this.getCardsPoints(cards);

        if (this.isRoyalFlush(suits, cardsPoints)) return 'У Вас "Роял-флеш", 10 очков';

        if (Math.max.apply(null, suits) === 5) {
            if (this.isStraight(cardsPoints)) return 'У Вас "Стрит-флеш", 9 очков';
            return 'У Вас "Флеш", 6 очков';
        };

        if (this.isDifferentStraight(suits, cardsPoints)) {
            return 'У Вас "Cтрит" с младшей карты, 5 очков';
        };

        if (this.isFourOfKind(cardsPoints)) return 'У Вас "Каре", 8 очков';

        if (this.isThreeOfKind(cardsPoints)) {
            if (this.isFullHouse(cardsPoints)) return 'У Вас "Фулл-хаус", 7 очков';
            return 'У Вас "Тройка", 4 очка';
        };

        if (this.isTwoPairs(cardsPoints)) return 'У Вас "Две пары", 3 очка';

        if (this.isAPair(cardsPoints)) return 'У Вас "Пара", 2 очка';

        if (cardsPoints[0] > 10) return 'У Вас "Старшая карта", 1 очко';

        return 'У Вас 0 очков';
    };

    public static isDifferentStraight: (suits: number[], cards: number[]) => boolean =
        (suits: number[], cards: number[]): boolean => {
            if (this.isDifferentSuits(suits) && this.isStraight(cards) && cards[cards.length - 1] === 2) return true;
            return false;
        };

    public static isRoyalFlush: (suits: number[], cards: number[]) => boolean =
        (suits: number[], cards: number[]): boolean => {
            if (Math.max.apply(null, suits) === 5 && cards[0] === 14 && cards[cards.length - 1] === 10) return true;
            return false;
        };

    public static getQuantityOfSameSuits: (cards: Card[]) => number[] = (cards: Card[]): number[] => {
        let array: number[] = [];
        let spades = 0;
        let hearts = 0;
        let diamonds = 0;
        let clubs = 0;

        for (let i = 0; i < cards.length; i++) {
            switch (cards[i].suit) {
                case "♠":
                    spades += 1;
                    break;
                case "♥":
                    hearts += 1;
                    break;
                case "♦":
                    diamonds += 1;
                    break;
                default:
                    clubs += 1;
                    break;
            };
        };
        array = [spades, hearts, diamonds, clubs];
        return array;
    };

    public static getCardsPoints: (cards: Card[]) => number[] = (cards: Card[]): number[] => {
        let array: number[] = [];
        for (let i = 0; i < cards.length; i++) {
            array.push(cards[i].points);
        };
        return array;
    };

    public static isStraight: (cards: number[]) => boolean = (cards: number[]): boolean => {
        for (let i = 0; i < cards.length - 1; i++) {
            if (cards[i] - cards[i + 1] !== 1) return false;
        };
        return true;
    };

    public static isDifferentSuits: (suits: number[]) => boolean = (suits: number[]): boolean => {
        if (Math.min.apply(null, suits) > 0) return true;
        return false;
    };

    public static countRepeats: (cards: number[], points: number) => number =
        (cards: number[], points: number): number => {
            let count: number = 0;
            for (let i = 0; i < cards.length; i++) {
                if (cards[i] === points) count += 1;
            };
            return count;
        };

    public static isFourOfKind: (cards: number[]) => boolean = (cards: number[]): boolean => {
        for (let i = 0; i < cards.length; i++) {
            if (this.countRepeats(cards, cards[i]) === 4) return true;
        };
        return false;
    };

    public static isThreeOfKind: (cards: number[]) => boolean = (cards: number[]): boolean => {
        for (let i = 0; i < cards.length; i++) {
            if (this.countRepeats(cards, cards[i]) === 3) return true;
        };
        return false;
    };

    public static isFullHouse: (cards: number[]) => boolean = (cards: number[]): boolean => {
        switch (true) {
            case cards[0] === cards[1] && cards[0] === cards[2] && cards[3] === cards[4]:
            case cards[0] === cards[1] && cards[3] === cards[2] && cards[3] === cards[4]:
                return true;
            default:
                return false;
        };
    };

    public static isTwoPairs: (cards: number[]) => boolean = (cards: number[]): boolean => {
        switch (true) {
            case this.countRepeats(cards, cards[0]) >= 2 && this.countRepeats(cards, cards[2]) >= 2:
            case this.countRepeats(cards, cards[0]) >= 2 && this.countRepeats(cards, cards[3]) >= 2:
            case this.countRepeats(cards, cards[1]) >= 2 && this.countRepeats(cards, cards[3]) >= 2:
                return true;
            default:
                return false;
        };
    };

    public static isAPair: (cardsPoints: number[]) => boolean = (cardsPoints: number[]): boolean => {
        switch (true) {
            case this.countRepeats(cardsPoints, cardsPoints[0]) === 2:
            case this.countRepeats(cardsPoints, cardsPoints[1]) === 2:
            case this.countRepeats(cardsPoints, cardsPoints[2]) === 2:
            case this.countRepeats(cardsPoints, cardsPoints[3]) === 2:
                return true;
            default:
                return false;
        };
    };
};

export default Checker;