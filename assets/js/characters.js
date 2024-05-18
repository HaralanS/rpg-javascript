export class Goblin {
    name = "Goblin";
    life = 50;
    maxLife = 50;
    experience = 20;

    dropGold(){
        return Math.ceil(3 + Math.random() * 12);
    }
    attack() {
        const random = Math.random() * 10;
        if (random < 8) {
            return 5 + Math.ceil(Math.random() * 10);
        } else if (random < 9) {
            return (5 + Math.ceil(Math.random() * 10)) * 2;
        } else {
            return 0;
        }
    }
    takeDamage(damage) {
        this.life = Math.max(0, (this.life - damage));
    }
}

export class Orc {
    name = "Orc";
    life = 75;
    maxLife = 75;
    experience = 30;

    dropGold(){
        return Math.ceil(5 + Math.random() * 15);
    }
    attack() {
        const random = Math.random() * 10;
        if (random < 8) {
            return 7 + Math.ceil(Math.random() * 15);
        } else if (random < 9) {
            return (7 + Math.ceil(Math.random() * 15)) * 2;
        } else {
            return 0;
        }
    }
    takeDamage(damage) {
        this.life = Math.max(0, (this.life - damage));
    }
}

// export default {Goblin, Orc}