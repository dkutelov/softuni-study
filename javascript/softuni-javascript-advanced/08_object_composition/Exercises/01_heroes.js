function solve() {
    const protoFighterObj = {
        health: 100,
        stamina: 100,
        fight() {
            this.stamina--;
            console.log(`${this.name} slashes at the foe!`);
        }
    };

    const protoMageObj = {
        health: 100,
        mana: 100,
        cast(spell) {
            this.mana--;
            console.log(`${this.name} cast ${spell}!`);
        }
    };

    return {
        mage(name) {
            const newMage = Object.create(protoMageObj);
            newMage.name = name;
            return newMage;
        },
        fighter(name) {
            const newFighter = Object.create(protoFighterObj);
            newFighter.name = name;
            return newFighter;
        }
    }
}
let create = solve();
const scorcher = create.mage("Scorcher");
scorcher.cast("fireball");
scorcher.cast("thunder");
scorcher.cast("light");

const scorcher2 = create.fighter("Scorcher 2");
scorcher2.fight();

console.log(scorcher2.stamina);
console.log(scorcher.mana);

