export function pad(input: string, size: number): string {
  return input.padStart(size, "0").substr(-size);
}
