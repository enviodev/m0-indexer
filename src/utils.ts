export function makeEventId(hash: string, index: number): string {
  return `${hash}-${index}`;
}
