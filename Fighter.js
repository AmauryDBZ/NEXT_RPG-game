class Fighter extends Character {
  constructor(name, hp = 12, dmg = 4, mana = 40, status = "playing", protection = 0){
    super(name, hp, dmg, mana, status);
    this.protection = protection;
  };

  details = () => {
    console.log("the Fighter can do dark vision hit that deals 5 dmg to the target. It allows the assassin to be protected by 2 hp for the next attacks. It costs 20 mana");
  };

  special = (victim) => {
    if (this.mana >= 20) {
      console.log(`dark vision special feature ! ${victim.name} takes 5 damages and ${this.name} has a protection of 2 points for the next attack`);
      console.log("it costs 20 mana")
      if (!isNaN(victim.protection)) {
        victim.isProtected(5);
      } else {
        victim.hp -= 5;
      }
      this.mana -= 20;
      this.protection += 2;
    } else {
      console.log("insufficient mana, standard attack choosen")
      this.dealDamage(victim);
    }
  };
};
