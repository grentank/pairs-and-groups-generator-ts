import type { PairsAndGroupsType } from '../types/keysTypes';
import type { DayWithPairsType } from '../types/pairsType';
import type { StudentType } from '../types/studentTypes';
import correctPairs from './correctPairs';
import generatePairsFromSplits from './pickHalfIndicies';

export default function generatePairs(
  day: DayWithPairsType,
  students: StudentType[],
  pairsAndGroups: PairsAndGroupsType,
): void {
  for (let counter = 0; counter < 1e6; counter += 1) {
    const generatedPairs = generatePairsFromSplits(students);

    if (correctPairs(generatedPairs, students)) {
      pairsAndGroups[day] = generatedPairs;
      generatedPairs.forEach((pair) => {
        const firstStudent = students.find((student) => student.name === pair[0]);
        const secondStudent = students.find((student) => student.name === pair[1]);
        if (firstStudent && secondStudent) {
          firstStudent.hasBeenWith.push(secondStudent.name);
          secondStudent.hasBeenWith.push(firstStudent.name);
        }
      });
      return;
    }
  }
}
