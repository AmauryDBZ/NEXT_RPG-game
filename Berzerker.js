class Berzerker extends Character {
  constructor(name, hp = 8, dmg = 4, mana = 0, status = "playing"){
    super(name, hp, dmg, mana, status);
  };

  details = () => {
    console.log("the Berzerker can increase its rage that increase his dmg by 1 but decrease its hp by 1.");
  };

  special = (victim) => {
    if (this.hp > 1) {
      console.log(`rage special feature ! ${this.name} has +1 dmg and -1 hp`);
      this.hp -= 1;
      this.dmg += 1;
      this.dealDamage(victim);
    } else {
      console.log("insufficient hp, standard attack choosen")
      this.dealDamage(victim);
    }
  };
};
