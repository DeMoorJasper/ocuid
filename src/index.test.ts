import { ocuid, isValid, getTimestampFromId } from "./index";

test("Should be able to generate 1000 valid ocuids", () => {
  for (let i = 0; i < 250; i++) {
    const generatedOcuid = ocuid();
    expect(isValid(generatedOcuid)).toBe(true);
  }
});

test("Should generate unique ocuids", () => {
  let generatedIds = new Set();
  for (let i = 0; i < 10_000; i++) {
    const generatedOcuid = ocuid();
    expect(generatedIds.has(generatedOcuid)).toBe(false);
  }
});

test("Should be able to extract timestamp from ocuids", () => {
  for (let i = 0; i < 250; i++) {
    const generatedOcuid = ocuid();
    const timestamp = getTimestampFromId(generatedOcuid);
    expect(timestamp).toBeGreaterThan(Date.now() - 2500);
    expect(timestamp).toBeLessThan(Date.now() + 2500);
  }
});
