import Checker from '../pocker/Checker';
import Card from '../pocker/Card';

let cardOne: Card = new Card("A", "♠");
let cardTwo: Card = new Card("K", "♠");
let cardThree: Card = new Card("Q", "♠");
let cardFour: Card = new Card("J", "♠");
let cardFive: Card = new Card("10", "♠");

let unsortedCards: Card[] = [
    cardFive,
    cardTwo,
    cardFour,
    cardThree,
    cardOne
];

let royalFlush: Card[] = [
    cardOne,
    cardTwo,
    cardThree,
    cardFour,
    cardFive
];

const suits: number[] = Checker.getQuantityOfSameSuits(royalFlush);
const cardsPoints: number[] = Checker.getCardsPoints(royalFlush);
const array: number[] = [10, 10, 8, 3, 2];
const stright: number[] = [10, 9, 8, 7, 6];
const differentSuits: number[] = [1, 1, 1, 2];
const differentStraightMin: number[] = [6, 5, 4, 3, 2];
const fourOfKind: number[] = [14, 14, 14, 14, 5];
const threeOfKind: number[] = [10, 10, 9, 9, 9];

describe('Check Checker methods', () => {

    describe('Sort\'s cards from high value to low', () => {
        test('sortCards', () => {
            const cards: Card[] = Checker.sortCards(unsortedCards);
            expect(cards).toEqual(royalFlush);
        })
    });
    
    describe('Get quantity of the same suits', () => {
        test('getQuantityOfSameSuits', () => {
            const array: number[] = Checker.getQuantityOfSameSuits(royalFlush);
            expect(array).toEqual([5, 0, 0, 0]);
        })
    });

    describe('Get cards points (values of each)', () => {
        test('getCardsPoints', () => {
            const array: number[] = Checker.getCardsPoints(royalFlush);
            expect(array).toEqual([14, 13, 12, 11, 10]);
        })
    });
    
    describe('Cheсk\'s is it Royal Flush', () => {
        test('isRoyalFlush', () => {
            const isRoyalFlush: boolean = Checker.isRoyalFlush(suits, cardsPoints);
            expect(isRoyalFlush).toBe(true);
        })
    });

    describe('Cheсk\'s are all different suits', () => {
        test('isDifferentSuits', () => {
            const isDifferentSuits: boolean = Checker.isDifferentSuits(differentSuits);
            expect(isDifferentSuits).toBe(true);
        })
    });

    describe('Cheсk\'s is it different Straight from 2', () => {
        test('isDifferentStraight', () => {
            const isDifferentStraight: boolean = Checker.isDifferentStraight(differentSuits, differentStraightMin);
            expect(isDifferentStraight).toBe(true);
        })
    });

    describe('Count repeats of number in array', () => {
        test('countRepeats', () => {
            const number: number = Checker.countRepeats(array, 10);
            expect(number).toBe(2)
        })
    });
    
    describe('Cheсk\'s is it Straight', () => {
        test('isStraight', () => {
            const isStraight: boolean = Checker.isStraight(stright);
            expect(isStraight).toBe(true);
        })
    });

    describe('Cheсk\'s are there Four Of kind', () => {
        test('isFourOfKind', () => {
            const isFourOfKind: boolean = Checker.isFourOfKind(fourOfKind);
            expect(isFourOfKind).toBe(true);
        })
    });

    describe('Cheсk\'s are there Three of kind', () => {
        test('isThreeOfKind', () => {
            const isThreeOfKind: boolean = Checker.isThreeOfKind(threeOfKind);
            expect(isThreeOfKind).toBe(true);
        })
    });

    describe('Cheсk\'s is it Full House', () => {
        test('isFullHouse', () => {
            const isFullHouse: boolean = Checker.isFullHouse(threeOfKind);
            expect(isFullHouse).toBe(true);
        })
    });

    describe('Cheсk\'s are there two pairs', () => {
        test('isTwoPairs', () => {
            const isTwoPairs: boolean = Checker.isTwoPairs(threeOfKind);
            expect(isTwoPairs).toBe(true);
        })
    });

    describe('Сheсk\'s is there a pair', () => {
        test('isAPair', () => {
            const isAPair: boolean = Checker.isAPair(threeOfKind);
            expect(isAPair).toBe(true);
        })
    });
});