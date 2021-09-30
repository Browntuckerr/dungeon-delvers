let GameManager = {

    setGameStart: function (classType) {
        this.resetPlayer(classType);
        this.setPreFight();
    },


    resetPlayer: function (classType) {
        switch (classType) {
            case "fighter":
                player =  new player(classType, 10, 0, 0, 50, 18, 10, 15, 5, 8, 5);
            break;

            case "ranger":
                player =  new player(classType, 10, 0, 15, 0, 10, 20, 10, 18, 12, 10);
            break;

            case "cleric":
                player =  new player(classType, 8, 15, 0, 0, 15, 10, 8, 18, 12, 10);
            break;

            case "rogue":
                player =  new player(classType, 8, 0, 20, 0, 8, 20, 7, 10, 11, 15);
            break;

            case "paladin":
                player =  new player(classType, 10, 12, 0, 0, 10, 10, 12, 15, 15, 8);
            break;

            case "monk":
                player =  new player(classType, 8, 12, 0, 0, 15, 18, 8, 8, 10, 11);
            break;

            case "sorcerer":
                player =  new player(classType, 6, 20, 0, 0, 8, 8, 15, 12, 15,12);
            break;
        }
           // health, mana, stamina, rage, strength, dexterity, constitution, wisdom, charisma, intelligence)
        let getInterface = document.querySelector(".interface");
        getInterface.innerHTML = '<img src= "assets/player-avater/ ' + classType.toLowerCase() 
        + '.png" class= "img-avatar"><div><h3>' + classType + '</h3><p class = "health-player">Health: ' + player.health + 
        '</p><p>Mana: ' + player.mana + '</p> <p>Stamina: ' + player.stamina + 
        '</p><p>Rage: ' + player.rage + '</p> <p>Strength: ' + player.strength +
        '</p> <p>Dexterity: ' + player.dexterity + '</p> <p>Contitution: ' + player.constitution +
         '</p> <p>Wisdom: ' + player.wisdom + '</p> <p>Charisma: ' + player.charisma + 
         '</p> <p>Intelligence:' + player.intelligence +'</p></div>';

    },

    setPreFight: function () {
        let getHeader = document.querySelector(".header");
        let getActions = document.querySelector(".actions");
        let getArena = document.querySelector(".arena");
        getHeader.innerHTML = '<p>Task: Look for an enemy!</p>';
        getActions.innerHTML = '<a href ="#" class="btn-prefight" onclick="GameManager.setFight()">Search for Enemy</a>';
        getArena.style.visibility = "visable";
    },
    setFight: function() {
        let getHeader = document.querySelector(".header");
        let getActions = document.querySelector(".actions");
        let getEnemy = document.querySelector(".enemy");

        let enemy00 = new Enemy("Goblin", 2, 0, 5, 0, 3, 3, 2, 0, 0, 1);
        let enemy01 = new Enemy("Tin Soldier", 5, 0, 30, 0, 8, 5, 10, 3, 2, 0);
        let enemy03 = new Enemy("Bandit Chief", 10, 0, 10, 0, 10, 5, 12, 3, 2, 4);

        let chooseRandomEnemy = Math.floor(Math.random() * Math.floor(3));
        switch (chooseRandomEnemy) {
            case 0:
                enemy =enemy00;
                break;
            case 1:
                enemy = enemy01;
                break;
            case 3:
                enemy = enemy03;
                break; 
        }
        getHeader.innerHTML = '<p>Task: Choose your move!</p>';
        getActions.innerHTML = '<a href ="#" class="btn-prefight" onclick="PlayerMoves.calcAttack()">Attack</a>';
        getEnemy.innerHTML = '<img src= "assets/enemy/ ' + enemy.enemyType.toLowerCase() 
        + '.png" alt= " ' + enemy.enemyType + '" class= "img-avatar"><div><h3>' + enemy.enemyType + '</h3><p>Health: ' + enemy.health + 
        '</p><p>Mana: ' + enemy.mana + '</p> <p>Stamina: ' + enemy.stamina + 
        '</p><p>Rage: ' + enemy.rage + '</p> <p>Strength: ' + enemy.strength +
        '</p> <p>Dexterity: ' + enemy.dexterity + '</p> <p>Contitution: ' + enemy.constitution +
         '</p> <p>Wisdom: ' + enemy.wisdom + '</p> <p>Charisma: ' + enemy.charisma + 
         '</p> <p>Intelligence:' + enemy.intelligence +'</p></div>'; 
    },
}