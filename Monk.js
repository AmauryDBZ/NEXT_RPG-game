class Monk extends Character {
  constructor(name, hp = 8, dmg = 2, mana = 200, status = "playing"){
    super(name, hp, dmg, mana, status);
  };

  details = () => {
    return "the Monk can heal him self by 8 hp, it costs 25 mana.";
  };

  special = (victim) => {
    if (this.mana >= 25) {
      console.log(`heal special feature ! ${this.name} has +8 hp`);
      console.log("it costs 25 mana");
      this.hp += 8;
      this.mana -= 25;
    } else {
      console.log("insufficient mana, standard attack choosen")
      this.dealDamage(victim);
    }
  };
};
