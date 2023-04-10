import type { DayKeyType, WeeksAndDaysType } from '../types/keysTypes';

export const weeksAndDays: WeeksAndDaysType = [
  'w1d1',
  'w1d2',
  'w1d5',
  'w2d1',
  'w2d2',
  'w2d5',
  'w3d1',
  'w3d2',
  'w3d5',
];

export default function indexToKey(index: number): DayKeyType {
  const foundKey = weeksAndDays.find((_, ind) => index === ind);
  return foundKey || 'w1d1';
}
