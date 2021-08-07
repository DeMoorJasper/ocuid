import { ocuid, isValid, getTimestampFromId } from "./index";

test("Should be able to generate 1000 valid ocuids", () => {
  for (let i = 0; i < 250; i++) {
    const generatedOcuid = ocuid();
    console.log(generatedOcuid);
    expect(isValid(generatedOcuid)).toBe(true);
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
