import type { StudentType } from '../types/studentTypes';

export default function randomName(students: StudentType[]): string {
  return students[Math.floor(Math.random() * students.length)].name;
}
