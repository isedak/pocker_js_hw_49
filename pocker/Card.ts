class Card {
    rank: string;
    suit: string;
    points: number;

    constructor(rank: string, suit: string) {
        this.rank = rank;
        this.suit = suit;
        this.points = this._setPoints();
    };

    public toString: () => string = (): string => {
        return `| ${`${this.rank}`.padEnd(2, ' ')}${this.suit} |`;
    };

    private _setPoints: () => number = (): number => {
        switch (this.rank) {
            case 'J':
                return 11;
            case 'Q':
                return 12;
            case 'K':
                return 13;
            case 'A':
                return 14;
            default:
                return parseInt(this.rank);
        };
    };
};

export default Card;