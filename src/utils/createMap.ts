import type { PairsAndGroupsType } from '../types/keysTypes';
import type { StudentType } from '../types/studentTypes';
import { DayWithPairsType } from '../types/pairsType';
import generatePairs from './generatePairs';
import { weeksAndDays } from './indexToKey';
import { isGroupsDay, isPairsDay } from '../types/guards';

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

  weeksAndDays.forEach((day) => {
    if (isPairsDay(day)) generatePairs(day, students, pairsAndGroups);
    // if(isGroupsDay(day)) generateGroups();
  });

  console.log(pairsAndGroups);
  return [pairsAndGroups, students];
}
