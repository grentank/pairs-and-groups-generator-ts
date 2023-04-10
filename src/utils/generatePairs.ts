import type { PairsAndGroupsType } from '../types/keysTypes';
import type { DayWithPairsType, OnePairType } from '../types/pairsType';
import type { StudentType } from '../types/studentTypes';
import getRandomNames from './getRandomNames';
import noRepeats from './noRepeats';
import generatePairsFromSplits from './pickHalfIndicies';
import randomName from './randomName';

export default function generatePairs(
  day: DayWithPairsType,
  students: StudentType[],
  pairsAndGroups: PairsAndGroupsType,
): void {
  //   const numberOfPairs = students.length % 2 ? (students.length - 1) / 2 : students.length / 2;

  //   if (students.length % 2 === 1) {
  //     pairsAndGroups[day].push([getRandomNames(students, 1)[0], 'solo']);
  //   }

  for (let counter = 0; counter < 1e6; counter += 1) {
    const generatedPairs = generatePairsFromSplits(students);

    for (const pair of generatedPairs) {
      if (noRepeats(pair, pairsAndGroups, day, students)) {
        pairsAndGroups[day].push(pair);
        const firstStudent = students.find((student) => student.name === pair[0]);
        const secondStudent = students.find((student) => student.name === pair[1]);
        if (firstStudent && secondStudent) {
          firstStudent.hasBeenWith.push(secondStudent.name);
          secondStudent.hasBeenWith.push(firstStudent.name);
        }
      } else break;
    }
  }
}
