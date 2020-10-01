class Game {
  constructor(turnLeft = 10, gameOver = false, characters = []) {
    this.turnLeft = turnLeft;
    this.gameOver = gameOver;
    this.characters = characters;
  };

  allPlayers = (nbPlayer) => {
    let grace = new Fighter("Grace");
    let ulder = new Paladin("Ulder");
    let moana = new Monk("Moana");
    let draven = new Berzerker("Draven");
    let carl = new Assassin("Carl");
    let zedd = new Wizard("Zedd");
    let bot = new Bot("Bot");
    this.characters.push(grace, ulder, moana, draven, carl, zedd, bot);
    for (var i = 0; i < 7-nbPlayer; i++) {
      this.characters.splice(Math.floor(Math.random() * Math.floor(8 - i)), 1);
    }
  };

  skipTurn = () => {
    this.turnLeft -= 1;
    this.isGameOver();
  };

  isGameOver = () => {
    if (this.turnLeft === 0 || this.characters.length === 1) {
      this.displayGame("<br>game over !");
      this.gameOver = true;
    }
  };

  startTurn = () => {
    this.displayGame(`<br>---------------------- Turn ${11 - this.turnLeft}-----------------------`);
    let random_call = [];
    random_call = this.characters.sort(function(a, b){return 0.5 - Math.random()});
    random_call.map(player => {
      if (player.hp > 0) {
        this.watchStats();
        this.displayGame("<br> ==> it's time for " + player.name + " to play ! <==");
        this.displayGame("<br>choose an ennemy to attack :");
        this.displayGame(`<br>${this.characters.map(player => this.characters.indexOf(player) + ". " + player.name + " ")}`);
        let targetIndex = prompt(`${player.name}, who do you attack ? 0/1...`);
        let target = this.characters[targetIndex];
        this.displayGame(`<br>${target.name} selected`);
        this.displayGame("<br>now choose your attack : type 0 for standard attack and 1 for the special one");
        let attack = prompt("your attack : ");
        if (attack === "0") {
          player.dealDamage(target);
        } else if (attack === "1") {
          player.special(target);
        } else {
          this.displayGame("<br>wrong entry, your turn is skiped. Beware next time !")
        }
        if (target.hp < 1) {
          this.mana += 20;
          this.displayGame(`<br>${target.name} is dead !`);
          this.displayGame(`<br>${player.name} earned 20 points of mana`);
        }
      } else {
        this.displayGame(`<br>${player.name} is already dead ... next player !`)
      }
    });
    this.displayGame("<br>----------------End of this turn------------------");
    this.displayGame("<br>players that are still alive :")
    let playerAlive = this.characters.filter(player => player.hp > 0);
    this.characters = playerAlive;
    this.displayGame(t<br>his.characters);
    this.skipTurn();
  };

  startGame = () => {
    this.gameInit();
    this.displayGame("welcome to this RPG game ! There are 10 turns");
    this.watchStats();
    while (this.gameOver === false) {
      this.startTurn();
    }
    this.endGame(this.characters);
  };

  endGame = (winners) => {
    this.displayGame("<br>------------------this game is over -----------------")
    if (this.turnLeft === 0 && winners.length > 1) {
      winners.sort((a, b) => a.hp - b.hp);
      this.displayGame(`<br>players ranking : ${winners}`);
    }
    if (winners.length === 1) {
      this.displayGame(`<br>the winner is ${winners}`);
    }
    this.displayGame(`<br>winners ranking : ${winners}`)
  };

  watchStats = () => {
    let stats = document.getElementById("stats");
    stats.innerHTML = "";
    this.characters.map(player => {
      stats.innerHTML += `<br>*********** ${player.name} is a ${player.constructor.name} **************`;
      stats.innerHTML += `<br> ${player.details()}`;
      stats.innerHTML += `<br> hp = ${player.hp}, mana = ${player.mana}, dmg = ${player.dmg}, protection = ${player.protection}`;
      stats.innerHTML += "<br> ----------------------------------------------------------------------";
    })
  };

  displayGame = (text) => {
    let display = document.getElementById("game");
    display.innerHTML += text;
  };

  gameInit = () => {
    let nbPlayer = prompt("please enter the number of player for this game")
    this.allPlayers(nbPlayer);
  };
}
