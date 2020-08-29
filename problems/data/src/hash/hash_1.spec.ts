import { solution } from "./hash_1";

describe("완주하지 못한 선수를 찾을 수 있다.", () => {
  test("참석자가 ['leo', 'kiki', 'eden']이고, 완주자가 ['eden', 'kiki']이면, 'leo'를 리턴한다.", () => {
    const participant = ["leo", "kiki", "eden"];
    const completion = ["eden", "kiki"];

    expect(solution(participant, completion)).toBe("leo");
  });

  test("참석자가 ['marina', 'josipa', 'nikola', 'vinko', 'filipa']이고, 완주자가 ['josipa', 'filipa', 'marina', 'nikola']이면, 'vinko'를 리턴한다.", () => {
    const participant = ["marina", "josipa", "nikola", "vinko", "filipa"];
    const completion = ["josipa", "filipa", "marina", "nikola"];

    expect(solution(participant, completion)).toBe("vinko");
  });

  test("참석자가 ['mislav', 'stanko', 'mislav', 'ana']이고, 완주자가 ['stanko', 'ana', 'mislav']이면, 'mislav'를 리턴한다.", () => {
    const participant = ["mislav", "stanko", "mislav", "ana"];
    const completion = ["stanko", "ana", "mislav"];

    expect(solution(participant, completion)).toBe("mislav");
  });
});
