import type { DayWithGroupType } from './groupTypes';
import { daysWithGroupArray } from './groupTypes';
import type { DayKeyType } from './keysTypes';
import type { DayWithPairsType } from './pairsType';
import { daysWithPairsArray } from './pairsType';

function isPairsDay(day: DayKeyType): day is DayWithPairsType {
  return daysWithPairsArray.includes(day);
}

function isGroupsDay(day: DayKeyType): day is DayWithGroupType {
  return daysWithGroupArray.includes(day);
}

export { isPairsDay, isGroupsDay };
