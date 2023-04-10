import type { DayWithGroupType, OneGroupType } from '../types/groupTypes';
import type { PairsAndGroupsType } from '../types/keysTypes';
import type { DayWithPairsType, OnePairType } from '../types/pairsType';
import type { StudentType } from '../types/studentTypes';
import getRandomNames from './getRandomNames';
import groupsMapping from './groupsMapping';
import noRepeats from './noRepeats';

export default function generateGroups(
  day: DayWithGroupType,
  students: StudentType[],
  pairsAndGroups: PairsAndGroupsType,
): void {
  const groupsMapped = groupsMapping(students.length);

  let counter = 0;

  for (let groupIndex = 0; groupIndex < groupsMapped.length; groupIndex += 1) {
    counter += 1;
    if (counter >= 1e6) return;
    const randomGroup = getRandomNames(students, groupsMapped[groupIndex]) as OneGroupType;

    if (noRepeats(randomGroup, pairsAndGroups, day, students)) {
      pairsAndGroups[day].push(randomGroup);
      randomGroup.forEach((studentName) => {
        const targetStudent = students.find((student) => student.name === studentName);
        targetStudent?.hasBeenWith.push(...randomGroup.filter((name) => name !== studentName));
      });
    } else groupIndex -= 1;
  }
}
