let player;

function Player(classType, health, mana, stamina, rage, strength, dexterity, constitution, wisdom, charisma, intelligence) {
    this.classType = classType;
    this.health = health;
    this.mana = mana;
    this.stamina = stamina;
    this.rage = rage;
    this.strength = strength;
    this.dexterity = dexterity;
    this.constitution = constitution;
    this.wisdom = wisdom;
    this.charisma = charisma;
    this.intelligence = intelligence;
};

let PlayerMoves = {
    calcAttack: function () {
        let getPlayerDex = player.dexterity;
        let getEnemyDex = enemy.dexterity;

        let playerAttack = function () {
            let calcBaseDamage;
            if (player.mana > 0) {
                calcBaseDamage = player.strength * player.mana / 1000;
            } else {
                calcBaseDamage = player.strength * player.dexterity / 1000;
            }
            let offSetDamage = Math.floor(Math.random() * Math.floor(10));
            let calcOutputDamage = calcBaseDamage + offSetDamage;

            let numberOfHits = Math.floor(Math.random() * Math.floor(player.dexterity / 10) / 2) + 1;

            let attackValues = [calcOutputDamage, numberOfHits];
            return attackValues;
        }
        let getPlayerHealth = document.querySelector(".health-player");
        let getEnemyHealth = document.querySelector(".health-enemy");

        if (getPlayerDex >= getEnemyDex) {
            let playerAttackValues = playerAttack();
            let totalDamage = playerAttackValues[0] * playerAttackValues[1];
            enemy.health = enemy.health - totalDamage;
            alert("You hit" + playerAttackValues[0] + "damage" + playerAttackValues[1] + "times.");

            if (enemy.health <= 0) {
                alert("Enemy Vanquished!");
                getPlayerHealth.innerHTML = 'Health: ' + player.health;
                getEnemyHealth.innerHTML = 'Health: 0';
            } else {
                getEnemyHealth.innerHTML = 'Health: ' + enemy.health;
                let enemyAttackValues = enemyAttack();
                let totalDamage = enemyAttackValues[0] * enemyAttackValues[1];
                player.health = player.health - totalDamage;
                alert("You were hit for " + enemyAttackValues[0] + "damage " + enemyAttackValues[1] + "times.");
                if (player.health <= 0) {
                    alert("Game Over!");
                    getPlayerHealth.innerHTML = 'Health: = 0';
                } else {
                    getPlayerHealth.innerHTML = 'Health: ' + player.health;
                }
            }
        } else if (getEnemyDex >= getPlayerDex) {
            let enemyAttackValues = enemyAttack();
            let totalDamage = enemyAttackValues[0] * enemyAttackValues[1];
            player.health = player.health - totalDamage;
            alert("You were hit for " + enemyAttackValues[0] + "damage " + enemyAttackValues[1] + "times.");
            if (player.health <= 0) {
                alert("Game Over!");
                getPlayerHealth.innerHTML = 'Health: = 0';
            } else {
            let playerAttackValues = playerAttack();
            let totalDamage = playerAttackValues[0] * playerAttackValues[1];
            enemy.health = enemy.health - totalDamage;
            alert("You hit" + playerAttackValues[0] + "damage" + playerAttackValues[1] + "times.");
            if (enemy.health <= 0) {
                alert("Enemy Vanquished!");
                getPlayerHealth.innerHTML = 'Health: ' + player.health;
                getEnemyHealth.innerHTML = 'Health: 0';
            }
            }
        }
    }
}
