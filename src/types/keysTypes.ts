import type { DayWithGroupType, GroupsByDaysType, OneGroupType } from './groupTypes';
import type { DayWithPairsType, OnePairType, PairsByDayType } from './pairsType';

export type DayKeyType = DayWithPairsType | DayWithGroupType;

export type WeeksAndDaysType = [
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

export type PairsAndGroupsType = GroupsByDaysType & PairsByDayType;

export type PairOrGroupType = OneGroupType | OnePairType;
