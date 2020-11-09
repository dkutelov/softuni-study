let result = (function(){
    const Suits = {
        SPADES: '♠',
        HEARTS: '♥',
        DIAMONDS: '♦',
        CLUBS: '♣'
    };

    class Card {
        #face;
        #suit;

        constructor(face, suit) {
            this.face = face;
            this.suit = suit;
        }

        get face() { return this.#face }

        set face(value){
            const validFaces = ["2", "3", "4", "5", "6", "7", "8", "9", "10", "J", "Q", "K", "A"];
            if (!validFaces.includes(value)) {
                throw new Error();
            }
            this.#face = value;
        }

        get suit() { return this.#suit }

        set suit(value) {
            if (!Object.values(Suits).includes(value)){
                throw new Error();
            }
            this.#suit = value;
        }
    }

    return {
        Suits: Suits,
        Card: Card
    }
}());

let Card = result.Card;
let Suits = result.Suits;
let card = new Card('Q', Suits.CLUBS);
card.face = 'A';
card.suit = Suits.DIAMONDS;
//let card2 = new Card('1', Suits.DIAMONDS);