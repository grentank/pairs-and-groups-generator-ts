export type DayWithGroupType = 'w1d5' | 'w2d5' | 'w3d5';

export type DaysWithGroupArray = ['w1d5', 'w2d5', 'w3d5'];

export const daysWithGroupArray = ['w1d5', 'w2d5', 'w3d5'];

export type OneGroupType = string[];

export type GroupsByDaysType = {
  [k in DayWithGroupType]: OneGroupType[];
};
