import type { DayKeyType, PairOrGroupType, PairsAndGroupsType } from '../types/keysTypes';
import type { OnePairType } from '../types/pairsType';
import type { StudentType } from '../types/studentTypes';

export default function noRepeats(
  randomPairOrGroup: PairOrGroupType,
  pairsAndGroups: PairsAndGroupsType,
  day: DayKeyType,
  students: StudentType[],
): boolean {
  // console.log(pairsAndGroups);
  // console.log(randomPairOrGroup);
  // console.log(day);
  for (const studentName of randomPairOrGroup) {
    // console.log(studentName, 'name');
    for (const thisDayPairOrGroup of pairsAndGroups[day]) {
      // console.log(thisDayPairOrGroup, '[]');
      if (thisDayPairOrGroup.includes(studentName)) return false;
    }

    const targetStudent = students.find((student) => student.name === studentName);
    for (const otherStudentName of randomPairOrGroup) {
      // console.log(otherStudentName, 'othername');
      if (targetStudent?.hasBeenWith.includes(otherStudentName)) return false;
    }
  }

  return true;
}
