import type { DayWithGroupType } from './groupTypes';
import type { DayWithPairsType } from './pairsType';

export type StudentWithPairs = {
  [k in DayWithPairsType]: string[];
};

export type StudentWithGroups = {
  [k in DayWithGroupType]: string[];
};

export type StudentType = StudentWithPairs &
  StudentWithGroups & { name: string; hasBeenWith: string[] };
