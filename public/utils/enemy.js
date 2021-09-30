let enemy;

function Enemy(enemyType, health, mana, stamina, rage, strength, dexterity, constitution, wisdom, charisma, intelligence) {
    this.enemyType = enemyType;
    this.health = health;
    this.mana = mana;
    this.stamina = stamina;
    this.rage = rage;
    this.strength = strength;
    this.dexterity =dexterity;
    this.constitution = constitution;
    this.wisdom = wisdom;
    this.charisma = charisma;
    this.intelligence = intelligence;
}

let PlayerMoves = {
    calcAttack: function () {
        let getPlayerDex = player.dexterity;
        let getEnemyDex = enemy.dexterity;
    }
}
