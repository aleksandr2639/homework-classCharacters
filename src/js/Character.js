const typePersons = ['Bowerman', 'Swordsman', 'Magician', 'Daemon', 'Undead', 'Zombie'];

export default class Character {
  constructor(name, type, attack, defence) {
    if (name.length > 1 && name.length < 10) {
      this.name = name;
    } else throw new Error('Invalid name length');
    if (!typePersons.includes(type)) {
      throw new Error('Invalid type!');
    }
    this.type = type;
    this.health = 100;
    this.level = 1;
    this.attack = attack;
    this.defence = defence;
  }
}
