export default function groupsMapping(amount: number): number[] {
  const mapping: number[] = [];
  if (amount % 3 === 0) {
    for (let i = 0; i < amount / 3; i += 1) mapping.push(3);
    return mapping;
  }
  if (amount % 3 === 1) {
    for (let i = 0; i < (amount - 1) / 3 - 1; i += 1) mapping.push(3);
    mapping.push(4);
    return mapping;
  }
  //   if (amount % 3 === 2) {
  for (let i = 0; i < (amount - 2) / 3 - 2; i += 1) mapping.push(3);
  mapping.push(4);
  mapping.push(4);
  return mapping;
  //   }
}
