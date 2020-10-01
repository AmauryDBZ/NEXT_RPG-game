class Bot extends Character {
  constructor(name, hp = 40, dmg = 1, mana = 0, status = "playing"){
    super(name, hp, dmg, mana, status);
  };

  details = () => {
    return "the Bot have nothing special but a large amount of hp. It can convert 10 hp into 5 dmg for an attack";
  };

  special = (victim) => {
    if (this.hp > 10) {
      game.displayGame(`<br>blood attack special feature ! ${victim.name} takes 5 damages`);
      game.displayGame("<br>it costs 10 hp");
      if (!isNaN(victim.protection)) {
        victim.isProtected(5);
      } else {
        victim.hp -= 5;
      }
      this.hp -= 10;
    } else {
      game.displayGame("<br>insufficient hp, standard attack choosen")
      this.dealDamage(victim);
    }
  };
};
