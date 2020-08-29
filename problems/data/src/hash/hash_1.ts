export function solution(participant: string[], completion: string[]): string {
  const map = participant.reduce((res, name) => res.set(name, (res.get(name) || 0) + 1), new Map());

  for (const name of completion) {
    const count = map.get(name);
    count > 1 ? map.set(name, count - 1) : map.delete(name);
  }

  return Array.from(map.keys()).join(",");
}
