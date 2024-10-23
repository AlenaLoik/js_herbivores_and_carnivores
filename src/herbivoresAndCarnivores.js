'use strict';

class Animal {
  static alive = [];
  constructor(name) {
    this.health = 100;
    this.name = name;
    this.setAnimal();
  }

  setAnimal() {
    Animal.alive = [...Animal.alive, this];
  }

  removeAnimal() {
    Animal.alive = Animal.alive.filter((el) => el.health > 0);
  }
}

class Herbivore extends Animal {
  hidden = false;

  hide() {
    this.hidden = true;
  }
}

class Carnivore extends Animal {
  bite(herbivore) {
    if (!herbivore.hidden && herbivore instanceof Herbivore) {
      herbivore.health -= 50;

      if (herbivore.health <= 0) {
        super.removeAnimal();
      }
    }
  }
}

module.exports = {
  Animal,
  Herbivore,
  Carnivore,
};
