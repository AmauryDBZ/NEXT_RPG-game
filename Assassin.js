class Assassin extends Character {
  constructor(name, hp = 6, dmg = 6, mana = 20, status = "playing", protection){
    super(name, hp, dmg, mana, status);
    this.protection = protection;
  };

  details = () => {
    return "the Assassin can do a shadow hit that deals 7 dmg to the target, it costs 20 mana. It allows the assassin to be totally protected the next turn from any damages. If the victim doesn't dies, the assassin also gets -7 hp.";
  };

  special = (victim) => {
    if (this.mana >= 20) {
      game.displayGame(`<br>shadow hit special feature ! ${victim.name} gets 7 damages and ${this.name} has absolute protection for next turn`);
      game.displayGame("<br>it costs 20 mana");
      this.protection = true;
      if (!isNaN(victim.protection)) {
        victim.isProtected(7);
      } else {
        victim.hp -= 7;
      }
      if (victim.hp > 0) {
        this.hp -= 7;
        game.displayGame(`<br>the target doesn't die, ${this.name} got 7 damages in return`);
        if (this.hp < 1) {
          game.displayGame(`<br>${this.name} died ... too bad !`)
        }
      }
      this.mana -= 20;
    } else {
      game.displayGame("<br>insufficient mana, standard attack choosen")
      this.dealDamage(victim);
    }
  };
};
