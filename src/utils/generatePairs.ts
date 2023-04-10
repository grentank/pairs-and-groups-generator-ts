import type { PairsAndGroupsType } from '../types/keysTypes';
import type { DayWithPairsType, OnePairType } from '../types/pairsType';
import type { StudentType } from '../types/studentTypes';
import noRepeats from './noRepeats';
import randomName from './randomName';

export default function generatePairs(
  day: DayWithPairsType,
  students: StudentType[],
  pairsAndGroups: PairsAndGroupsType,
): void {
  const numberOfPairs = students.length % 2 ? (students.length + 1) / 2 : students.length / 2;

  for (let pairIndex = 0; pairIndex < numberOfPairs; pairIndex += 1) {
    const randomPair = [randomName(students), randomName(students)] as OnePairType;

    if (noRepeats(randomPair, pairsAndGroups, day, students)) {
      pairsAndGroups[day].push(randomPair);
      const firstStudent = students.find((student) => student.name === randomPair[0]);
      const secondStudent = students.find((student) => student.name === randomPair[1]);
      if (firstStudent && secondStudent) {
        firstStudent.hasBeenWith.push(secondStudent.name);
        secondStudent.hasBeenWith.push(firstStudent.name);
      }
    } else pairIndex -= 1;
  }
}
