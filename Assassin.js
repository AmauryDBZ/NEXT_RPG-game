class Assassin extends Character {
  constructor(name, hp = 6, dmg = 6, mana = 20, status = "playing", protection){
    super(name, hp, dmg, mana, status);
    this.protection = protection;
  };

  details = () => {
    console.log("the Assassin can do a shadow hit that deals 7 dmg to the target, it costs 20 mana. It allows the assassin to be totally protected the next turn from any damages. If the victim doesn't dies, the assassin also gets -7 hp.");
  };

  special = (victim) => {
    if (this.mana >= 20) {
      console.log(`shadow hit special feature ! ${victim.name} gets 7 damages and ${this.name} has absolute protection for next turn`);
      console.log("it costs 20 mana");
      this.protection = true;
      if (!isNaN(victim.protection)) {
        victim.isProtected(7);
      } else {
        victim.hp -= 7;
      }
      if (victim.hp > 0) {
        this.hp -= 7;
        console.log(`the target doesn't die, ${this.name} got 7 damages in return`);
        if (this.hp < 1) {
          console.log(`${this.name} died ... too bad !`)
        }
      }
      this.mana -= 20;
    } else {
      console.log("insufficient mana, standard attack choosen")
      this.dealDamage(victim);
    }
  };
};
