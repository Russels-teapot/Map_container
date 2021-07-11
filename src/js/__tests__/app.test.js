import ErrorRepository from '../errorRepository';
import { Character, types } from '../Character';

test('Error 100', () => {
  expect(() => new Character('asdasdasdasd', 'Bowman')).toThrow('Длина имени должна быть меньше 10 символов');
});

test('Error 200', () => {
  expect(() => new Character('qwerty', 'Necromancer')).toThrow('Несуществующий класс');
});

test('Unnamed error', () => {
  expect(() => new Character('as', 'Undead')).toThrow('Unknown error');
});
