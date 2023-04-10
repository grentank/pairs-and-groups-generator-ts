import type { OnePairType } from '../types/pairsType';
import type { StudentType } from '../types/studentTypes';

export default function generatePairsFromSplits(students: StudentType[]): OnePairType[] {
  const { length } = students;
  const indicies = students.map((_, index) => index);
  let firstHalf: number[] = [];
  const amount = length % 2 ? (length - 1) / 2 : length / 2;
  while ([...new Set(firstHalf)].length < amount) {
    firstHalf = [];
    for (let i = 0; i < amount; i += 1) {
      firstHalf.push(Math.floor(Math.random() * length));
    }
  }
  const secondHalf = indicies.filter((index) => !firstHalf.includes(index));

  for (let c = 0; c < 100; c += 1) {
    const i = Math.floor(Math.random() * (length / 2));
    const j = Math.floor(Math.random() * (length / 2));
    const temp = secondHalf[i];
    secondHalf[i] = secondHalf[j];
    secondHalf[j] = temp;
  }

  const pairsOfIndicies = firstHalf.map((el, ind) => [el, secondHalf[ind]]);

  const allPairs = pairsOfIndicies.map(
    (pair) => pair.map((ind) => students[ind].name) as OnePairType,
  );

  if (length % 2) {
    const lastStudent = students.find((student) => !allPairs.flat().includes(student.name));
    if (lastStudent) allPairs.push([lastStudent?.name, 'solo']);
  }

  return allPairs;
}
