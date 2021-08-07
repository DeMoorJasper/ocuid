# ocuid, an objectid compatible version of cuid

`ocuid` is a fork of `cuid` which is compatible with the ObjectId character space and also starts with the same timestamp format, everything following the timestamp is the same as a cuid with the main difference that the character space is smaller.

## When to not use this library

You don't have a need to keep using the same format as ObjectId, in this case simply use [cuid](https://github.com/ericelliott/cuid) instead. It has way better cross-language support, is battle-tested and has a large community.

## When you could use this library

- You're migrating away from mongodb, but want to use a more collision-resistant id that is still compatible with your existing ObjectId's to ensure the order remains correct
- You want to generate an ObjectId without importing a huge library, disclaimer: this library doesn't 100% match the ObjectId specification (on purpose) but it should still be valid

## How to use this library

```js
import { ocuid, isValid, getTimestampFromId } from "ocuid";

// Generate a ocuid
const id = ocuid();

// Check validity of ocuid or ObjectId
const isValidId = isValid(id);

// Get the timestamp (amount of ms since epoch) from an ocuid or ObjectId
const timestamp = getTimestampFromId(id);
```
