import Bowerman from '../Bowerman';
import Swordsman from '../Swordsman';
import Magician from '../Magician';
import Daemon from '../Daemon';
import Undead from '../Undead';
import Zombie from '../Zombie';

test('invalid name length', () => {
  const result = new Zombie('Fireman_9048', 'Bowman', 100, 1, 25, 25);
  expect(result).toThrow();
});

test('invalid name length', () => {
  const result = new Swordsman('G', 'Undead', 100, 1, 25, 25);
  expect(result).toThrow();
});

test('Invalid type', () => {
  const result = new Bowerman('Petr', 'Wolfhound', 100, 1, 25, 25);
  expect(result).toThrow();
});

test('Bowerman', () => {
  const personBowman = new Bowerman('John');
  expect(personBowman).toEqual({
    name: 'John',
    type: 'Bowerman',
    health: 100,
    level: 1,
    attack: 25,
    defence: 25,
  });
});

test('Zombie', () => {
  const personZombie = new Zombie('Marie');
  expect(personZombie).toEqual({
    name: 'Marie',
    type: 'Zombie',
    health: 100,
    level: 1,
    attack: 40,
    defence: 10,
  });
});

test('Undead', () => {
  const personUndead = new Undead('Alex');
  expect(personUndead).toEqual({
    name: 'Alex',
    type: 'Undead',
    health: 100,
    level: 1,
    attack: 25,
    defence: 25,
  });
});

test('Daemon', () => {
  const personDaemon = new Daemon('Danny');
  expect(personDaemon).toEqual({
    name: 'Danny',
    type: 'Daemon',
    health: 100,
    level: 1,
    attack: 10,
    defence: 40,
  });
});

test('Magician', () => {
  const personMagician = new Magician('Julia');
  expect(personMagician).toEqual({
    name: 'Julia',
    type: 'Magician',
    health: 100,
    level: 1,
    attack: 10,
    defence: 40,
  });
});

test('Swordsman', () => {
  const personSwordsman = new Swordsman('Cris');
  expect(personSwordsman).toEqual({
    name: 'Cris',
    type: 'Swordsman',
    health: 100,
    level: 1,
    attack: 40,
    defence: 10,
  });
});
