// Original file: https://github.com/ericelliott/cuid/blob/master/lib/fingerprint.js
import os from "os";

import { pad } from "./pad";

const BASE = 16;
const BLOCK_SIZE = 2;
const pid = pad(process.pid.toString(BASE), BLOCK_SIZE);
const hostname = os.hostname();
const length = hostname.length;
const hostId = pad(
  hostname
    .split("")
    .reduce(function (prev, char) {
      return +prev + char.charCodeAt(0);
    }, +length + 36)
    .toString(BASE),
  BLOCK_SIZE
);

export function fingerprint() {
  return pid + hostId;
}
