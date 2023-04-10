import type { StudentType } from '../types/studentTypes';

export default function getRandomNames(students: StudentType[], amount: number): string[] {
  let indicies: number[] = [];
  while ([...new Set(indicies)].length < amount) {
    indicies = [];
    for (let i = 0; i < amount; i += 1) {
      indicies.push(Math.floor(Math.random() * students.length));
    }
  }
  return indicies.map((index) => students[index].name);
}
