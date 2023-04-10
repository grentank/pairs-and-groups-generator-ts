import type { DayKeyType, PairOrGroupType, PairsAndGroupsType } from '../types/keysTypes';
import type { OnePairType } from '../types/pairsType';
import type { StudentType } from '../types/studentTypes';

export default function noRepeats(
  randomPairOrGroup: PairOrGroupType,
  pairsAndGroups: PairsAndGroupsType,
  day: DayKeyType,
  students: StudentType[],
): boolean {
  for (const studentName of randomPairOrGroup) {
    for (const thisDayPairOrGroup of pairsAndGroups[day]) {
      if (thisDayPairOrGroup.includes(studentName)) return false;
    }

    const targetStudent = students.find((student) => student.name === studentName);
    for (const otherStudentName of randomPairOrGroup) {
      if (targetStudent?.hasBeenWith.includes(otherStudentName)) return false;
    }
  }

  return true;
}
