class Game {
  constructor(turnLeft = 10, gameOver = false, characters = []) {
    this.turnLeft = turnLeft;
    this.gameOver = gameOver;
    this.characters = characters;
  };

  allPlayers = () => {
    let grace = new Fighter("Grace");
    let ulder = new Paladin("Ulder");
    let moana = new Monk("Moana");
    let draven = new Berzerker("Draven");
    let carl = new Assassin("Carl");
    this.characters.push(grace, ulder, moana, draven, carl);
  };

  skipTurn = () => {
    this.turnLeft -= 1;
    this.isGameOver();
  };

  isGameOver = () => {
    if (this.turnLeft === 0 || this.characters.length === 1) {
      console.log("gameOver");
      this.gameOver = true;
    }
  };

  startTurn = () => {
    console.log(`-------------------it's turn ${11 - this.turnLeft}--------------------`);
    let random_call = [];
    random_call = this.characters.sort(function(a, b){return 0.5 - Math.random()});
    random_call.map(player => {
      if (player.hp > 0) {
        console.log("it's time for " + player.name + " to play !");
        console.log("choose an ennemy to attack :");
        console.log(this.characters);
        let targetIndex = prompt(`${player.name}, who do you attack ? 0/1...`);
        let target = this.characters[targetIndex];
        console.log(target.name + " selected");
        console.log("now choose your attack : type 0 for standard attack and 1 for the special one");
        let attack = prompt("your attack : ");
        console.log(attack);
        if (attack === "0") {
          player.dealDamage(target);
        } else if (attack === "1") {
          player.special(target);
        } else {
          console.log("wrong entry, your turn is skiped. Beware next time !")
        }
        if (target.hp < 1) {
          this.mana += 20;
          console.log(`${target.name} is dead !`);
          console.log(`${player.name} earned 20 points of mana`);
        }
      } else {
        console.log(`${player.name} is already dead ... next player !`)
      }
    });
    console.log("----------------End of this turn------------------");
    console.log("players that are still alive :")
    let playerAlive = this.characters.filter(player => player.hp > 0);
    this.characters = playerAlive;
    console.log(this.characters);
    this.skipTurn();
  };

  startGame = () => {
    this.allPlayers();
    console.log("welcome to this RPG game ! There are 10 turns");
    console.log("at any time you can watch stats by pressing the space bar");
    console.log("here are the players :")
    console.log(this.characters);
    while (this.gameOver === false) {
      this.startTurn();
    }
    this.endGame(this.characters);
  };

  endGame = (winners) => {
    console.log("------------------this game is over -----------------")
    if (this.turnLeft === 0 && winners.length > 1) {
      winners.sort((a, b) => a.hp - b.hp);
      console.log(`players ranking : ${winners}`);
    }
    if (winners.length === 1) {
      console.log(`the winner is ${winners}`);
    }
    console.log(`winners ranking : ${winners}`)
  };

  watchStats = () => {
    this.characters.map(player => {
      console.log(`*********** ${player.name} is a ${player.constructor.name} **************`);
      player.details();
      console.log(`hp = ${player.hp}, mana = ${player.mana}, dmg = ${player.dmg}, protection = ${player.protection}`);
    })
  };
}
