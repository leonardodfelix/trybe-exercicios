const mage = {
  healthPoints: 130,
  intelligence: 45,
  mana: 125,
  damage: undefined,
};

const warrior = {
  healthPoints: 200,
  strength: 30,
  weaponDmg: 2,
  damage: undefined,
};

const dragon = {
  healthPoints: 500,
  strength: 50,
  damage: undefined,
};

const battleMembers = { mage, warrior, dragon };

const randomNum = (min, max) => Math.floor(Math.random() * (max - min)) + min;

const dragonAttack = () => randomNum(15, dragon.strength);

const warriorAttack = () => randomNum(warrior.strength, (warrior.strength * warrior.weaponDmg));

const mageAttack = () => (mage.mana < 15) ? 'Não possui mana suficiente' : {
  dano: randomNum(mage.intelligence, mage.intelligence * 2),
  mana: 15,
};

// Parte II
const gameActions = {
  warriorTurn: (attack) => {
    const damage = attack();
    warrior.damage = damage;
    dragon.healthPoints -= damage;
  },
  mageTurn: (attack) => {
    const mageAtt = attack();
    if (typeof mageAtt === 'object') {
      const damage = mageAtt.dano;
      mage.damage = damage;
      mage.mana -= 15;
      dragon.healthPoints -= damage;
    } else {
      console.log(mageAtt);
    }
  },
  dragonTurn: (attack) => {
    const damage = attack();
    dragon.damage = damage;
    warrior.healthPoints -= damage;
    mage.healthPoints -= damage;
  },
  runTurn: function () {
    this.warriorTurn(warriorAttack);
    this.mageTurn(mageAttack);
    this.dragonTurn(dragonAttack);
    console.table(battleMembers);
  },
}

while (mage.healthPoints > 0 && dragon.healthPoints > 0) {
  gameActions.runTurn();
}
