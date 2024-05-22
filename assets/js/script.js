
class SmallSword {
    name = "Espada Pequena";
    type = "weapon";
    attack = 2;
    sellingPrice = 5;
    specialAttackName = "Estocada";
    specialAttackCost = 10;
    img = "../assets/img/wooden-sword-01.png";
    info = "Ataque: 2 - Estocada: Garante acerto e da o dobro de dano ao custo de 20 de mana";

    specialAttack(herop){
        const random = Math.random() * 100;
        const damage = Math.ceil(herop.strength + this.attack + (this.attack) * Math.random() * 2) * 2;
        if(herop.mana >= this.specialAttackCost) {
            herop.mana -= this.specialAttackCost;
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
class TestSword {
    name = "Espada de Teste";
    type = "weapon";
    attack = 2;
    sellingPrice = 5;
    specialAttackName = "Estocada";
    specialAttackCost = 10;
    img = "../assets/img/wooden-sword-01.png";
    info = "Espada de teste - Ataque: 2 - Estocada: Garante acerto e da o dobro de dano ao custo de 20 de mana";

    specialAttack(herop){
        const random = Math.random() * 100;
        const damage = Math.ceil(herop.strength + this.attack + (this.attack) * Math.random() * 2) * 2;
        if(herop.mana >= this.specialAttackCost) {
            herop.mana -= this.specialAttackCost;
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
    specialAttackCost = 15;
    img = "../assets/img/iron-sword-01.png";
    info = "Ataque: 5 - Cruzado: Garante acerto e da o dobro de dano ao custo de 25 de mana";

    specialAttack(herop){
        const random = Math.random() * 100;
        const damage = Math.ceil(herop.strength + this.attack + (this.attack) * Math.random() * 2) * 2;
        if(herop.mana >= this.specialAttackCost) {
            herop.mana -= this.specialAttackCost;
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
    img = "../assets/img/leather-armor-01.png";
    info = "Armadura: 2 - Diminui o dano que voce recebe";
}
class ChainArmor {
    name = "Armadura de Malha";
    type = "armor";
    armor = 4;
    sellingPrice = 13;
    img = "../assets/img/chain-armor-01.png";
    info = "Armadura: 4 - Diminui o dano que voce recebe";
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
    gold: 20,
    lifePotion: 1,
    manaPotion: 1,
    equippedWeappon: new SmallSword(),
    equippedArmor: new LeatherArmor(),
    inventario: [new TestSword()],

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
        const damageTaken = Math.max(0, (damage - this.equippedArmor.armor));
        this.life = Math.max(0, (this.life - damageTaken));
    },
    levelUp(xp) {
        if (this.experience >= 1300) {
            
            if(this.experience - xp < 1300) {
                battleStats4.innerHTML += " - Parabens! Voce subiu para o nivel 8!"
                this.life = Math.min(this.life + 15, this.maxLife);
                this.mana = Math.min(this.mana + 5, this.maxMana);

            }
            this.level = 8;
            this.strength = 19;
            this.maigcPower = 9;
            this.maxLife = 205;
            this.maxMana = 85;
        } else if (this.experience >= 1000) {
            if(this.experience - xp < 1000) {
                battleStats4.innerHTML += " - Parabens! Voce subiu para o nivel 7!"
                this.life = Math.min(this.life + 15, this.maxLife);
                this.mana = Math.min(this.mana + 5, this.maxMana);

            }
            this.level = 7;
            this.strength = 17;
            this.maigcPower = 8;
            this.maxLife = 190;
            this.maxMana = 80;
        } else if (this.experience >= 750) {
            if(this.experience - xp < 750) {
                battleStats4.innerHTML += " - Parabens! Voce subiu para o nivel 6!"
                this.life = Math.min(this.life + 15, this.maxLife);
                this.mana = Math.min(this.mana + 5, this.maxMana);

            }
            this.level = 6;
            this.strength = 15;
            this.maigcPower = 7;
            this.maxLife = 175;
            this.maxMana = 75;
        } else if (this.experience >= 540) {
            if(this.experience - xp < 540) {
                battleStats4.innerHTML += " - Parabens! Voce subiu para o nivel 5!"
                this.life = Math.min(this.life + 15, this.maxLife);
                this.mana = Math.min(this.mana + 5, this.maxMana);

            }
            this.level = 5;
            this.strength = 13;
            this.maigcPower = 6;
            this.maxLife = 160;
            this.maxMana = 70;
        } else if (this.experience >= 365) {
            if(this.experience - xp < 365) {
                battleStats4.innerHTML += " - Parabens! Voce subiu para o nivel 4!"
                this.life = Math.min(this.life + 15, this.maxLife);
                this.mana = Math.min(this.mana + 5, this.maxMana);
            }
            this.level = 4;
            this.strength = 11;
            this.maigcPower = 5;
            this.maxLife = 145;
            this.maxMana = 65;
        } else if (this.experience >= 220) {
            if(this.experience - xp < 220) {
                battleStats4.innerHTML += " - Parabens! Voce subiu para o nivel 3!"
                this.life = Math.min(this.life + 15, this.maxLife);
                this.mana = Math.min(this.mana + 5, this.maxMana);
            }
            this.level = 3;
            this.strength = 9;
            this.maigcPower = 4;
            this.maxLife = 130;
            this.maxMana = 60;
        } else if (this.experience >= 100) {
            if(this.experience - xp < 100) {
                battleStats4.innerHTML += " - Parabens! Voce subiu para o nivel 2!"
                this.life = Math.min(this.life + 15, this.maxLife);
                this.mana = Math.min(this.mana + 5, this.maxMana);
            }
            this.level = 2;
            this.strength = 7;
            this.maigcPower = 3;
            this.maxLife = 115;
            this.maxMana = 55;
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
    deadImg = "../assets/img/goblin-dead-01.png";

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
    img = "../assets/img/orc-01.png";
    hitImg = "../assets/img/orc-hit-01.png";
    deadImg = "../assets/img/orc-dead-01.png";

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
let selectedItem;
const bgImgList = [" ", "../assets/img/goblin-forest-bg.png", "../assets/img/orc-fortress-bg-ani.gif"]

const startScreen = document.getElementById("create-char-screen");
const villageScreen = document.getElementById("village-screen");
const shopScreen = document.getElementById("shop-screen")
const mapScreen = document.getElementById("map-screen")
const battleScreen = document.getElementById("battle-screen")
const inventoryScreen = document.getElementById("inventory-screen")

const nameInput = document.getElementById("name-input");
const nameButton = document.getElementById("name-button");
const villageStats1 = document.querySelector(".stats-01")
const villageStats2 = document.querySelector(".stats-02");
const villageStats3 = document.querySelector(".stats-03")
const villageStats4 = document.querySelector(".stats-04");
const lifeBar = document.querySelector(".life-bar")
const manaBar = document.querySelector(".mana-bar")
const lifeBarStats = document.querySelector(".life-bar-stats")
const manaBarStats = document.querySelector(".mana-bar-stats")

const mpBuyingQuant = document.querySelector(".mp-input")
const lpBuyingQuant = document.querySelector(".lp-input")
const shopMessage = document.querySelector(".shop-message")
const shopStats1 = document.querySelector(".shop-stats-01")
const shopStats2 = document.querySelector(".shop-stats-02")

const mapMessage = document.querySelector(".map-message");
const mapStats2 = document.querySelector(".map-stats-02");

const battleStats1 = document.querySelector(".battle-stats-01");
const battleStats2 = document.querySelector(".battle-stats-02");
const battleStats3 = document.querySelector(".battle-stats-03");
const battleStats4 = document.querySelector(".battle-stats-04");
const attackButton = document.querySelector(".attack-button");
const specialAttackButton = document.querySelector(".special-attack-button");
const battleExitButton = document.querySelector(".battle-exit-button")
const battleContinueButton = document.querySelector(".battle-continue-button")
const battleLPButton = document.querySelector(".battle-lp-button")
const battleMPButton = document.querySelector(".battle-mp-button")
const battleBox = document.querySelector(".battle-box")

const monsterImage = document.querySelector(".monster-battle-img")
const heroImage = document.querySelector(".char-battle-img")
const lifeBarStatsBtl = document.querySelector(".life-bar-stats-btl")
const manaBarStatsBtl = document.querySelector(".mana-bar-stats-btl")
const lifeBarBtl = document.querySelector(".life-bar-btl")
const manaBarBtl = document.querySelector(".mana-bar-btl")
const lifeBarStatsMonster = document.querySelector(".life-bar-stats-monster")
const lifeBarMonster = document.querySelector(".life-bar-monster")

const inventoryBox = document.querySelector(".inventory-box")
const inventoryMessage = document.querySelector(".inventory-stats-01")
const equippedWeapponImg = document.querySelector(".equipped-weapon-img")
const equippedArmorImg = document.querySelector(".equipped-armor-img")



const setStats = () => {
    villageStats1.innerHTML = `${hero.name} - Lvl: ${hero.level} - Experiencia: ${hero.experience}/${experienceList[hero.level]} - Forca: ${hero.strength}`
    villageStats2.innerHTML = `Pocoes de vida: ${hero.lifePotion} - Pocoes de mana: ${hero.manaPotion} - Gold: ${hero.gold}`
    villageStats3.innerHTML = `${hero.equippedWeappon.name} - Atq: ${hero.equippedWeappon.attack}`
    villageStats4.innerHTML = `${hero.equippedArmor.name} - Arm: ${hero.equippedArmor.armor}`

    lifeBarStats.innerHTML = `${hero.life}/${hero.maxLife}`
    manaBarStats.innerHTML = `${hero.mana}/${hero.maxMana}`
    lifeBar.setAttribute("style", `width: ${100/hero.maxLife * hero.life}%;`)
    manaBar.setAttribute("style", `width: ${100/hero.maxMana * hero.mana}%;`)
}
const setVillage = () => {
    hero.name = nameInput.value;
    startScreen.setAttribute("style", "display: none")
    shopScreen.setAttribute("style", "display: none")
    mapScreen.setAttribute("style", "display: none")
    inventoryScreen.setAttribute("style", "display: none")
    villageScreen.setAttribute("style", "display: flex")
    battleScreen.setAttribute("style", "display: none")
    setStats()
}

const setShop = () => {
    shopMessage.innerHTML = "Bem vindo aventureiro! O que deseja comprar?"
    villageScreen.setAttribute("style", "display: none")
    shopScreen.setAttribute("style", "display: flex")
    shopStats1.innerHTML = `Pocoes de vida: ${hero.lifePotion} - Pocoes de mana: ${hero.manaPotion} - Gold: ${hero.gold}`
    shopStats2.innerHTML = `${hero.equippedWeappon.name} - Atq: ${hero.equippedWeappon.attack} -- ${hero.equippedArmor.name} - Arm: ${hero.equippedArmor.armor}`
}
const setInventory = () => {
    villageScreen.setAttribute("style", "display: none")
    inventoryScreen.setAttribute("style", "display: flex")
    setInventoryStats()
}
const setMap = () => {
    villageScreen.setAttribute("style", "display: none")
    mapScreen.setAttribute("style", "display: flex")

}
const setBattleStats = () => {
    battleStats1.innerHTML = `${hero.name} - Lvl: ${hero.level} - Experiencia: ${hero.experience}/${experienceList[hero.level]}`
    battleStats2.innerHTML = `Pocoes de vida: ${hero.lifePotion} - Pocoes de mana: ${hero.manaPotion}`
    specialAttackButton.innerHTML = `${hero.equippedWeappon.specialAttackName} - ${hero.equippedWeappon.specialAttackCost}`
    lifeBarStatsBtl.innerHTML = `${hero.life}/${hero.maxLife}`
    manaBarStatsBtl.innerHTML = `${hero.mana}/${hero.maxMana}`
    lifeBarBtl.setAttribute("style", `width: ${100/hero.maxLife * hero.life}%;`)
    manaBarBtl.setAttribute("style", `width: ${100/hero.maxMana * hero.mana}%;`)
    lifeBarStatsMonster.innerHTML = `${monster.life}/${monster.maxLife}`
    lifeBarMonster.setAttribute("style", `width: ${100/monster.maxLife * monster.life}%;`)
}
const setBattle = () => {
    mapScreen.setAttribute("style", "display: none")
    battleScreen.setAttribute("style", "display: flex")
    attackButton.removeAttribute("disabled")
    battleStats4.innerHTML = `Ataque para comecar`
    battleBox.setAttribute("style", `background-image: url(${bgImgList[chosenRespawn]});`)
    
    if(hero.mana >= hero.equippedWeappon.specialAttackCost) {
        specialAttackButton.removeAttribute("disabled")
    }
    battleContinueButton.setAttribute("disabled", "true")
    battleLPButton.setAttribute("disabled", "true")
    battleMPButton.setAttribute("disabled", "true")
}
const selectRespawn = (resp) => {
    chosenRespawn = resp;
    if(resp == 1) {
        mapMessage.innerHTML = "Ir para o acampamento dos goblins";
        mapStats2.innerHTML = "O acampamento dos goblins eh um otimo lugar para um aventureiro iciante adquirir experiencia"
    }
    if(resp == 2) {
        mapMessage.innerHTML = "Ir para o forte dos orcs";
        mapStats2.innerHTML = "O forte dos orcs pode ser desafiador se voce esta comecando, mas quando que voce sentir que o acampamento dos goblins esta facil pode ser uma boa opcao."
    }
}
const goToRespawn = () => {
    
    if(chosenRespawn == 1) {
        monster = new Goblin();
        if(monster.life != 0){
            monsterImage.setAttribute("src", monster.img)
        }
        
        if(monster.life == 0) {
            monsterImage.setAttribute("src", monster.deadImg)
        }
        setBattle()
        setBattleStats()
        battleExitButton.setAttribute("disabled", "true")
    }else if(chosenRespawn == 2) {
        monster = new Orc();

        if(monster.life != 0){
            monsterImage.setAttribute("src", monster.img)
        }
        if(monster.life == 0) {
            monsterImage.setAttribute("src", monster.deadImg)
        }
        setBattle()
        setBattleStats()
        battleExitButton.setAttribute("disabled", "true")
    } else {
        mapMessage.innerHTML = "Opcao invalida. Selecione um local para ir"
    }
}

const figth = (atackOption) => {
    if(monster.life == 0) {
        monsterImage.setAttribute("src", monster.deadImg)
    }
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
            if(monster.life == 0) {
                monsterImage.setAttribute("src", monster.deadImg)
            }
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
                    monsterImage.setAttribute("src", monster.deadImg)
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
        monsterImage.setAttribute("src", monster.deadImg)
        const goldDropped = monster.dropGold();
        hero.gold += goldDropped;
        hero.experience += monster.experience;
        battleStats4.innerHTML = `Vitoria! voce ganhou ${monster.experience} de xp e ${goldDropped} de gold!`
        hero.levelUp(monster.experience);
        battleContinueButton.removeAttribute("disabled")
        battleLPButton.removeAttribute("disabled")
        battleMPButton.removeAttribute("disabled")
        
        battleExitButton.removeAttribute("disabled")
        setBattleStats()
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
    setBattleStats()
}
const drinkMP = () => {
    hero.drinkManaPotion()
    setStats()
    setBattleStats()
}
const buyEquipment = (equipment) => {
    
    if(equipment == 1) {
        buyLifePotion()
    }
    if(equipment == 2) {
        buyManaPotion()
    }
    if(equipment == 3) {
        if(hero.gold >= 60) {
            hero.inventario.push(new SteelSword())
            hero.gold -= 60;
            shopMessage.innerHTML = "Voce comprou uma espada de aco por 60 gold"
        } else  {
            shopMessage.innerHTML = "Voce nao tem gold suficiente"
        }
    }
    if(equipment == 4) {
        if(hero.gold >= 50) {
            hero.inventario.push(new ChainArmor())
            hero.gold -= 50;
            shopMessage.innerHTML = "Voce comprou uma Armadura de malha por 50 gold"
        } else  {
            shopMessage.innerHTML = "Voce nao tem gold suficiente"
        }
    }
    shopStats1.innerHTML = `Pocoes de vida: ${hero.lifePotion} - Pocoes de mana: ${hero.manaPotion} - Gold: ${hero.gold}`
    shopStats2.innerHTML = `${hero.equippedWeappon.name} - Atq: ${hero.equippedWeappon.attack} -- ${hero.equippedArmor.name} - Arm: ${hero.equippedArmor.armor}`
}

const showItemData = (item) => {
    if(item == 1) {
        shopMessage.innerHTML = "Recupera 50 de vida - 10 gold"
    }
    if(item == 2) {
        shopMessage.innerHTML = "Recupera 50 de mana - 10 gold"
    }
    if(item == 3) {
        shopMessage.innerHTML = `Ataque: 5 - Cruzado: Dano dobrado - 25 de mana - 60 gold`
    }
    if(item == 4) {
        shopMessage.innerHTML = `Armadura: 4 - 50 gold`
    }
}

const exitGame = () => {
    location.reload()
}

const setInventoryStats = () => {
    inventoryBox.innerText = "";
    for (let i = 0; i < hero.inventario.length; i++) {
        equippedWeapponImg.setAttribute("src", hero.equippedWeappon.img)
        equippedArmorImg.setAttribute("src", hero.equippedArmor.img)
        const inventoryItemBox = document.createElement("div")
        const inventoryItemImg = document.createElement("img")
        const invetoryItemName = document.createElement("p")
        invetoryItemName.innerHTML = hero.inventario[i].name;
        inventoryItemImg.setAttribute("src", hero.inventario[i].img)
        inventoryItemImg.setAttribute("class", "inventory-item-img")
        invetoryItemName.setAttribute("class", "inv-item-name")
        inventoryItemBox.appendChild(inventoryItemImg)
        inventoryItemBox.appendChild(invetoryItemName)
        // inventoryItemBox.innerHTML += hero.inventario[i].name;
        inventoryItemBox.setAttribute("class", "inventory-item-name")
        inventoryItemBox.setAttribute("onclick", `selectShowItem(${i})`)
        inventoryBox.appendChild(inventoryItemBox)
        
    }
    
    
}
// const setInventoryStats = () => {
//     inventoryBox.innerText = "";
//     for (let i = 0; i < hero.inventario.length; i++) {
//         const inventoryItemBox = document.createElement("div")
//         inventoryItemBox.innerHTML = hero.inventario[i].name;
//         inventoryItemBox.setAttribute("class", "inventory-item-name")
//         inventoryItemBox.setAttribute("onclick", `selectShowItem(${i})`)
//         inventoryBox.appendChild(inventoryItemBox)
        
//     }
    
    
// }
const selectShowItem = (indice) => {
    if(indice == -1) {
        inventoryMessage.innerHTML = hero.equippedWeappon.name + " - " + hero.equippedWeappon.info
    } else if (indice == -2) {
        inventoryMessage.innerHTML = hero.equippedArmor.name + " - " + hero.equippedArmor.info
    } else {
        selectedItem = indice
        inventoryMessage.innerHTML = hero.inventario[indice].info
    }
    
}

const equipItem = () => {
    
    if(hero.inventario[selectedItem].type == "weapon") {
        hero.inventario.push(hero.equippedWeappon)
        hero.equippedWeappon = hero.inventario[selectedItem]
        hero.inventario.splice(selectedItem, 1)
    } else if (hero.inventario[selectedItem].type == "armor") {
        hero.inventario.push(hero.equippedArmor)
        hero.equippedArmor = hero.inventario[selectedItem]
        hero.inventario.splice(selectedItem, 1)
    }
    setInventoryStats()
}