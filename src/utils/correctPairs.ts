import type { PairOrGroupType } from '../types/keysTypes';
import type { StudentType } from '../types/studentTypes';

export default function correctPairs(
  possiblePairs: PairOrGroupType[],
  students: StudentType[],
): boolean {
  for (const randomPairOrGroup of possiblePairs) {
    for (const studentName of randomPairOrGroup) {
      const targetStudent = students.find((student) => student.name === studentName);
      for (const otherStudentName of randomPairOrGroup) {
        if (targetStudent?.hasBeenWith.includes(otherStudentName)) {
          return false;
        }
      }
    }
  }

  return true;
}
