import ErrorRepository from './errorRepository';

const errorRepository = new ErrorRepository();
const types = ['Bowman', 'Swordsman', 'Daemon', 'Magician', 'Undead', 'Zombie'];
class Character {
  health = 100;

  level = 1;

  constructor(name, type) {
    this.name = name;
    if (name.length > 10) {
      throw new Error(errorRepository.translate(100));
    }
    if (name.length <= 2) {
      throw new Error(errorRepository.translate(150));
    }
    this.type = type;
    if (!types.includes(this.type)) {
      throw new Error(errorRepository.translate(200));
    }
  }
}

export { Character, types };
