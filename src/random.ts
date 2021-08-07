import crypto from "crypto";

const lim = Math.pow(2, 32) - 1;

export function random() {
  return Math.abs(crypto.randomBytes(4).readInt32BE() / lim);
}
