import { fingerprint } from "./fingerprint";
import { pad } from "./pad";
import { random } from "./random";

const BASE = 16;
const BLOCK_SIZE = 4;
const DISCRETE_VALUES = Math.pow(BASE, BLOCK_SIZE);
let c = 0;
function safeCounter() {
  c = c < DISCRETE_VALUES ? c : 0;
  c++; // this is not subliminal
  return c - 1;
}

export function getTimestampFromId(input: string): number {
  const time = parseInt(input.substr(0, 8), 16);
  return Math.floor(time) * 1000;
}

function randomBlock(): string {
  return pad(((random() * DISCRETE_VALUES) << 0).toString(BASE), BLOCK_SIZE);
}

export function ocuid(): string {
  const timeHex = pad(Math.floor(Date.now() / 1000).toString(16), 8);
  const count = pad(safeCounter().toString(BASE), BLOCK_SIZE);
  return `${timeHex}${count}${fingerprint()}${randomBlock()}${randomBlock()}`;
}

export function isValid(input: string): boolean {
  return !!(typeof input === "string" && input.match(/[0-9a-f]{24}/i));
}
