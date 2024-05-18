
class SmallSword {
    name = "Espada Pequena";
    type = "weapon";
    attack = 2;
    sellingPrice = 5;
    specialAttackName = "Estocada";
    specialAttackCost = 20;
    info = "Ataque: 2 - Estocada: Garante acerto e da o dobro de dano ao custo de 20 de mana"

    specialAttack(herop){
        const random = Math.random() * 100;
        const damage = Math.ceil(herop.strength + this.attack + (this.attack) * Math.random() * 2) * 2;
        if(herop.mana >= 20) {
            herop.mana -= 20;
            if(random < 80) {
                console.log(damage)
                return damage;
            } else {
                console.log(damage * 2)
                return damage * 2;
            } 
        }
        
    }
}
class SteelSword {
    name = "Espada de Aco";
    type = "weapon";
    attack = 5;
    sellingPrice = 15;
    specialAttackName = "Cruzado";
    specialAttackCost = 25;
    info = "Ataque: 5 - Cruzado: Garante acerto e da o dobro de dano ao custo de 25 de mana"

    specialAttack(herop){
        const random = Math.random() * 100;
        const damage = Math.ceil(herop.strength + this.attack + (this.attack) * Math.random() * 2) * 2;
        if(herop.mana >= 25) {
            herop.mana -= 25;
            if(random < 80) {
                return damage;
            } else {
                return damage * 2;
            } 
        }
        
    }
}
class LeatherArmor {
    name = "Armadura de Couro";
    type = "armor";
    armor = 2;
    sellingPrice = 7;
}
class ChainArmor {
    name = "Armadura de Malha";
    type = "armor";
    armor = 4;
    sellingPrice = 13;
}
const hero = {
    name: "Haralan",
    level: 1,
    experience: 0,
    life: 100,
    maxLife: 100,
    mana: 50,
    maxMana: 50,
    strength: 5,
    magicPower: 3,
    gold: 10,
    lifePotion: 1,
    manaPotion: 1,
    equippedWeappon: new SmallSword(),
    equippedArmor: new LeatherArmor(),
    inventario: [],

    drinkLifePotion() {
        if(this.lifePotion > 0) {
            this.life = Math.min(this.maxLife, (this.life + 50));
            this.lifePotion --;
        }
        
    },
    drinkManaPotion() {
        if(this.manaPotion > 0) {
            this.mana = Math.min(this.maxMana, (this.mana + 50));
            this.manaPotion--;
        }
        
    },
    attack() {
        const random = Math.random() * 100;
        const damage = Math.ceil(this.strength + this.equippedWeappon.attack + (this.equippedWeappon.attack) * Math.random() * 2);
        if(random < 80) {
            return damage;
        } else if(random < 90) {
            return damage * 2;
        } else {
            return 0;
        }
    },
    takeDamage(damage) {
        const damageTaken = damage - this.equippedArmor.armor;
        this.life = Math.max(0, (this.life - damageTaken));
    },
    levelUp(xp) {
        if (this.experience >= 1300) {
            
            if(this.experience - xp < 1300) {
                battleStats4.innerHTML += " - Parabens! Voce subiu para o nivel 8!"
                this.life = Math.min(this.life + 15, this.maxLife);

            }
            this.level = 8;
            this.strength = 19;
            this.maigcPower = 9;
            this.maxLife = 205;
        } else if (this.experience >= 1000) {
            if(this.experience - xp < 1000) {
                battleStats4.innerHTML += " - Parabens! Voce subiu para o nivel 7!"
                this.life = Math.min(this.life + 15, this.maxLife);

            }
            this.level = 7;
            this.strength = 17;
            this.maigcPower = 8;
            this.maxLife = 190;
        } else if (this.experience >= 750) {
            if(this.experience - xp < 750) {
                battleStats4.innerHTML += " - Parabens! Voce subiu para o nivel 6!"
                this.life = Math.min(this.life + 15, this.maxLife);

            }
            this.level = 6;
            this.strength = 15;
            this.maigcPower = 7;
            this.maxLife = 175;
        } else if (this.experience >= 540) {
            if(this.experience - xp < 540) {
                battleStats4.innerHTML += " - Parabens! Voce subiu para o nivel 5!"
                this.life = Math.min(this.life + 15, this.maxLife);

            }
            this.level = 5;
            this.strength = 13;
            this.maigcPower = 6;
            this.maxLife = 160;
        } else if (this.experience >= 365) {
            if(this.experience - xp < 365) {
                battleStats4.innerHTML += " - Parabens! Voce subiu para o nivel 4!"
                this.life = Math.min(this.life + 15, this.maxLife);
            }
            this.level = 4;
            this.strength = 11;
            this.maigcPower = 5;
            this.maxLife = 145;
        } else if (this.experience >= 220) {
            if(this.experience - xp < 220) {
                battleStats4.innerHTML += " - Parabens! Voce subiu para o nivel 3!"
                this.life = Math.min(this.life + 15, this.maxLife);
            }
            this.level = 3;
            this.strength = 9;
            this.maigcPower = 4;
            this.maxLife = 130;
        } else if (this.experience >= 100) {
            if(this.experience - xp < 100) {
                battleStats4.innerHTML += " - Parabens! Voce subiu para o nivel 2!"
                this.life = Math.min(this.life + 15, this.maxLife);
            }
            this.level = 2;
            this.strength = 7;
            this.maigcPower = 3;
            this.maxLife = 115;
        }

    }
};
class Goblin {
    name = "Goblin";
    life = 50;
    maxLife = 50;
    experience = 20;
    img = "../assets/img/goblin-01.png";
    hitImg = "../assets/img/goblin-hit-01.png";

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
class Orc {
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
const buyManaPotion = () => {
    const quant = parseInt(mpBuyingQuant.value);
    if(quant > 0) {
        
        if(hero.gold >= (quant * 10)) {
            hero.gold = hero.gold - (quant * 10);
            hero.manaPotion += quant;
            shopMessage.innerHTML = `Voce comprou ${quant} pocoes de mana por ${quant * 10} gold`
            mpBuyingQuant.value = 0;
        } else {
            shopMessage.innerHTML = "Voce nao tem gold suficiente"
            mpBuyingQuant.value = 0;
        }
    } else {
        shopMessage.innerHTML = "Selecione uma quantidade maior que zero"
        mpBuyingQuant.value = 0;
    }
}
const buyLifePotion = () => {
    const quant = parseInt(lpBuyingQuant.value);
    if(quant > 0) {
        
        if(hero.gold >= (quant * 10)) {
            hero.gold = hero.gold - (quant * 10);
            hero.lifePotion += quant;
            shopMessage.innerHTML = `Voce comprou ${quant} pocoes de vida por ${quant * 10} gold`
            lpBuyingQuant.value = 0;
        } else {
            shopMessage.innerHTML = "Voce nao tem gold suficiente"
            lpBuyingQuant.value = 0;
        }
    } else {
        shopMessage.innerHTML = "Selecione uma quantidade maior que zero"
        lpBuyingQuant.value = 0;
    }
}
const experienceList = [0, 100, 220, 365, 540, 750, 1000, 1300];
let monster;
let chosenRespawn = 0;

const startScreen = document.getElementById("create-char-screen");
const villageScreen = document.getElementById("village-screen");
const shopScreen = document.getElementById("shop-screen")
const mapScreen = document.getElementById("map-screen")
const battleScreen = document.getElementById("battle-screen")

const nameInput = document.getElementById("name-input");
const nameButton = document.getElementById("name-button");
const villageStats1 = document.querySelector(".stats-01")
const villageStats2 = document.querySelector(".stats-02");
const villageStats3 = document.querySelector(".stats-03")
const villageStats4 = document.querySelector(".stats-04");
const mpBuyingQuant = document.querySelector(".mp-input")
const lpBuyingQuant = document.querySelector(".lp-input")
const shopMessage = document.querySelector(".shop-message")
// const shopItem1 = document.querySelector(".shop-item-1");
// const shopItem2 = document.querySelector(".shop-item-2");
// const shopItem3 = document.querySelector(".shop-item-3");
// const shopItem4 = document.querySelector(".shop-item-4");

const mapMessage = document.querySelector(".map-message")

const battleStats1 = document.querySelector(".battle-stats-01");
const battleStats2 = document.querySelector(".battle-stats-02");
const battleStats3 = document.querySelector(".battle-stats-03");
const battleStats4 = document.querySelector(".battle-stats-04");
const attackButton = document.querySelector(".attack-button");
const specialAttackButton = document.querySelector(".special-attack-button");
const battleExitButton = document.querySelector(".battle-exit-button")
const monsterImage = document.querySelector(".monster-battle-img")
const heroImage = document.querySelector(".char-battle-img")



const setStats = () => {
    villageStats1.innerHTML = `${hero.name} - Lvl: ${hero.level} - Vida: ${hero.life}/${hero.maxLife} - XP: ${hero.experience}/${experienceList[hero.level]}`
    villageStats2.innerHTML = `Pocoes de vida: ${hero.lifePotion} - Pocoes de mana: ${hero.manaPotion} - Gold: ${hero.gold}`
    villageStats3.innerHTML = `${hero.equippedWeappon.name} - Atq: ${hero.equippedWeappon.attack}`
    villageStats4.innerHTML = `${hero.equippedArmor.name} - Arm: ${hero.equippedArmor.armor}`
}
const setVillage = () => {
    hero.name = nameInput.value;
    startScreen.setAttribute("style", "display: none")
    shopScreen.setAttribute("style", "display: none")
    mapScreen.setAttribute("style", "display: none")
    villageScreen.setAttribute("style", "display: flex")
    battleScreen.setAttribute("style", "display: none")
    setStats()
}

const setShop = () => {
    villageScreen.setAttribute("style", "display: none")
    shopScreen.setAttribute("style", "display: flex")
}
const setMap = () => {
    villageScreen.setAttribute("style", "display: none")
    mapScreen.setAttribute("style", "display: flex")

}
const setBattleStats = () => {
    battleStats1.innerHTML = `Vida: ${hero.life}/${hero.maxLife} - Mana: ${hero.mana}/${hero.maxMana} *** ${monster.name} - Vida: ${monster.life}/${monster.maxLife}`
    specialAttackButton.innerHTML = `${hero.equippedWeappon.specialAttackName} - ${hero.equippedWeappon.specialAttackCost}`
}
const setBattle = () => {
    mapScreen.setAttribute("style", "display: none")
    battleScreen.setAttribute("style", "display: flex")
    attackButton.removeAttribute("disabled")
    battleStats4.innerHTML = `Ataque para comecar`
    if(hero.mana >= hero.equippedWeappon.specialAttackCost) {
        specialAttackButton.removeAttribute("disabled")
    }
}
const selectRespawn = (resp) => {
    chosenRespawn = resp;
    if(resp == 1) {
        mapMessage.innerHTML = "Ir para o acampamento dos goblins"
    }
    if(resp == 2) {
        mapMessage.innerHTML = "Ir para o forte dos orcs"
    }
}
const goToRespawn = () => {
    if(chosenRespawn == 1) {
        monster = new Goblin();
        monsterImage.setAttribute("src", monster.img)
        setBattle()
        setBattleStats()
        battleExitButton.setAttribute("disabled", "true")
    }else if(chosenRespawn == 2) {
        monster = new Orc();
        setBattle()
        setBattleStats()
        battleExitButton.setAttribute("disabled", "true")
    } else {
        mapMessage.innerHTML = "Opcao invalida. Selecione um local para ir"
    }
}

const figth = (atackOption) => {
    if (hero.life > 0 && monster.life > 0) {
        let damage
        if (atackOption == 1) {
            damage = hero.attack();
        }
        if (atackOption == 2) {
            damage = hero.equippedWeappon.specialAttack(hero);
            if(hero.mana < hero.equippedWeappon.specialAttackCost) {
                specialAttackButton.setAttribute("disabled", "true")
            }
        }
        
        monster.takeDamage(damage);
        battleStats4.innerHTML = `Voce acertou um dano de ${damage}`
        attackButton.setAttribute("disabled", "true")
        specialAttackButton.setAttribute("disabled", "true")
        monsterImage.setAttribute("src", monster.hitImg)
        setTimeout(() => {
            monsterImage.setAttribute("src", monster.img)
        }, 200)
        setBattleStats()
        if(monster.life > 0){
            setTimeout((() => {
                damage = monster.attack()
                hero.takeDamage(damage);
                battleStats4.innerHTML = `Voce levou um dano de ${damage}`
                attackButton.removeAttribute("disabled")
                if(hero.mana >= hero.equippedWeappon.specialAttackCost) {
                    specialAttackButton.removeAttribute("disabled")
                }
                setBattleStats()
                if(monster.life == 0) {
                    attackButton.setAttribute("disabled", "true")
                    specialAttackButton.setAttribute("disabled", "true")
                    
                }
                heroImage.setAttribute("src", "../assets/img/warrior-hit-01-128.png")
                setTimeout(() => {
                    heroImage.setAttribute("src", "../assets/img/warrior-01-128.png")
                }, 200)
            }
            ), 1000)
        }
        
        
    } else {
        attackButton.setAttribute("disabled", "true")
        battleExitButton.removeAttribute("disabled")
        battleStats4.innerHTML = "Voce morreu! Precisa recomecar."
        battleExitButton.innerHTML = "Recomecar"
    }
    if(monster.life == 0) {
        const goldDropped = monster.dropGold();
        hero.gold += goldDropped;
        hero.experience += monster.experience;
        battleStats4.innerHTML = `Vitoria! voce ganhou ${monster.experience} de xp e ${goldDropped} de gold!`
        hero.levelUp(monster.experience);
        
        battleExitButton.removeAttribute("disabled")
    }
    
}

const exitBattle = () => {
    if(hero.life <= 0) {
        location.reload()
    } else {
        setVillage()
    }
}

const drinkLP = () => {
    hero.drinkLifePotion()
    setStats()
}
const drinkMP = () => {
    hero.drinkManaPotion()
    setStats()
}
const buyEquipment = (equipment) => {
    if(equipment == 1) {
        if(hero.gold >= 100) {
            hero.inventario.push(new SmallSword())
            hero.gold -= 100;
            shopMessage.innerHTML = "Voce comprou uma espada de aco por 100 gold"
        } else  {
            shopMessage.innerHTML = "Voce nao tem gold suficiente"
        }
    }
    if(equipment == 2) {
        if(hero.gold >= 80) {
            hero.inventario.push(new ChainArmor())
            hero.gold -= 80;
            shopMessage.innerHTML = "Voce comprou uma Armadura de malha por 80 gold"
        } else  {
            shopMessage.innerHTML = "Voce nao tem gold suficiente"
        }
    }
}

const showItemData = (item) => {
    if(item == 1) {
        shopMessage.innerHTML = "Recupera 50 de vida - 10 gold"
    }
    if(item == 2) {
        shopMessage.innerHTML = "Recupera 50 de mana - 10 gold"
    }
    if(item == 3) {
        shopMessage.innerHTML = `Ataque: 5 - Cruzado: Dano dobrado - 25 de mana - 100 gold`
    }
    if(item == 4) {
        shopMessage.innerHTML = `Armadura: 4 - 80 gold`
    }
}