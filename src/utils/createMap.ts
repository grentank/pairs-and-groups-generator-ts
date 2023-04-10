import type { PairsAndGroupsType } from '../types/keysTypes';
import type { StudentType } from '../types/studentTypes';
import generatePairs from './generatePairs';
import { weeksAndDays } from './indexToKey';
import { isGroupsDay, isPairsDay } from '../types/guards';
import generateGroups from './generateGroups';

export default function createMap(names: string[]): [a: PairsAndGroupsType, b: StudentType[]] {
  const pairsAndGroups = {} as PairsAndGroupsType;
  const students = names.map((studentsName) => {
    const targetObj = { name: studentsName, hasBeenWith: [] as string[] } as StudentType;

    weeksAndDays.forEach((day) => {
      targetObj[day] = [];
      pairsAndGroups[day] = [];
    });
    return targetObj;
  });

  if (students.length % 2 === 1)
    students.push({ name: 'solo', hasBeenWith: [] as string[] } as StudentType);

  weeksAndDays.forEach((day) => {
    if (isPairsDay(day)) generatePairs(day, students, pairsAndGroups);
    if (isGroupsDay(day)) generateGroups(day, students, pairsAndGroups);
  });

  console.log(pairsAndGroups);
  return [pairsAndGroups, students];
}
