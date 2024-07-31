import Deck from "./Deck";
import Hand from "./Hand";
import Checker from "./Checker";

const consoleRead = require('readline');
const { stdin: input, stdout: output } = require('process');
const readline = consoleRead.createInterface({ input, output });

class Application {
    run: () => void = (): void => {
        console.log('-- Видео-покер --');
        const deck = new Deck();
        console.log('Распакована новая колода...');
        deck.shuffleDeck();
        console.log('Карты перетасованы...');
        const hand = new Hand();
        console.log('Ваши 5 карт:');
        for (let i = 0; i < 5; i++) {
            hand.takeACard(deck.giveACard());
        };
        hand.showCards();

        let questionChangeCards: string = 'Если хотите заменить карту/карты,\n' +
            'введите номер или номера карт через пробел;\n' +
            'Если не желаете менять - нажмите Enter\n';
        let question: string = 'Чтобы завершить игру, введите "n",\n' +
            'Чтобы сыграть снова, нажмите Enter\n' +
            'или введите любой символ...\n';

        readline.question(questionChangeCards, (answer: string) => {

            let inputArray: number[] = this._validateInputNumbers(answer);
            if (inputArray.length !== 0) {
                for (let i = 0; i < inputArray.length; i++) {
                    hand.changeCard(inputArray[i] - 1, deck.giveACard());
                };
                hand.showCards();
            };

            console.log(`Результат:\n${Checker.checkCombination(hand.cardsInHand)}\n`);

            readline.question(question, (outAnswer: string) => {
                if (outAnswer === '' || outAnswer !== 'n' && outAnswer !== 'no') {
                    this.run();
                } else {
                    console.log('До свидания!');
                    readline.close();
                };
            });
        });
    };

    private _validateInputNumbers: (input: string) => number[] = (input: string): number[] => {
        let array: number[] = [];
        if (input === '') return array;

        let stringArray: string[] = input.split(' ').map(number => number.trim());
        stringArray = stringArray.filter(string => (string !== ''));
        if (stringArray.length > 0) {
            if (stringArray.length <= 5 && stringArray.every(this._isValidArray)) {
                for (let i = 0; i < stringArray.length; i++) {
                    array.push(parseInt(stringArray[i]));
                };
                let arrayWithoutDoubles: number[] = array.filter((number: number, index: number) => {
                    return array.indexOf(number) === index;
                });
                array = arrayWithoutDoubles;
            } else {
                console.log('Некорректный ввод, карты остались те же.');
            };
        };
        return array;
    };

    private _isValidArray: (number: string, index: number, array: string[]) => boolean =
        (number: string, index: number, array: string[]): boolean => {
            return parseInt(number) >= 1 && parseInt(number) <= 5;
        };
};

export default Application;