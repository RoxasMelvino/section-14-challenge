function Player(name, lvl = 1, points = 0) {
    this.name = name;
    this.lvl = lvl;
    this.points = points;
}

Player.prototype = {
    constructor: Player,
    gainXp(points) {
        this.points += points;
        if (this.points >= 10) {
            this.lvl++;
            this.points -= 10;
        }
    },
    describe() {
        return `${this.name} is level ${this.lvl} with ${this.points} experience points`;
    }
}


const playerOne = new Player('Melvino');
const playerTwo = new Player('Hassy');

playerOne.gainXp(5);
playerTwo.gainXp(7);
playerOne.gainXp(3);
playerTwo.gainXp(2);
playerOne.gainXp(8);
playerTwo.gainXp(4);

console.log(playerOne.describe());
console.log(playerTwo.describe());