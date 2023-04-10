export type DayWithPairsType = 'w1d1' | 'w1d2' | 'w2d1' | 'w2d2' | 'w3d1' | 'w3d2';

export type DaysWithPairsArray = ['w1d1', 'w1d2', 'w2d1', 'w2d2', 'w3d1', 'w3d2'];

export const daysWithPairsArray = ['w1d1', 'w1d2', 'w2d1', 'w2d2', 'w3d1', 'w3d2'];

export type OnePairType = [string, string];

export type PairsByDayType = {
  [k in DayWithPairsType]: OnePairType[];
};
