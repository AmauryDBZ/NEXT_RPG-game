class Paladin extends Character {
  constructor(name, hp = 16, dmg = 3, mana = 160, status = "playing"){
    super(name, hp, dmg, mana, status);
  };

  details = () => {
    return "the Paladin can do some healing lightings that deals 4 dmg to the target and increase his hp by 5. It costs 40 mana.";
  };

  special = (victim) => {
    if (this.mana >= 40) {
      game.displayGame(`<br>healing lighting special feature ! ${victim.name} takes 4 damages and ${this.name} healing +5`);
      game.displayGame("<br>it costs 40 mana");
      if (!isNaN(victim.protection)) {
        victim.isProtected(4);
      } else {
        victim.hp -= 4;
      }
      this.hp += 5;
      this.mana -= 40;
    } else {
      game.displayGame("<br>insufficient mana, standard attack choosen")
      this.dealDamage(victim);
    }
  };
};
