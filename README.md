# OCUID, a somewhat objectid compatible version of cuid

`ocuid` is a fork of `cuid` with the main difference that it starts with the same timestamp format `ObjectId` uses, to ease migrations from ObjectId into cuid's without the need to rewrite all id's to still have the sortability of ids.

Unless you're migrating from ObjectId's you probably want to have a [cuid](https://github.com/ericelliott/cuid) instead.

## Using the library

```js
import { ocuid, isValid, getTimestampFromId } from "ocuid";

// Generate a ocuid
const id = ocuid();

// Check validity of ocuid or ObjectId
const isValidId = isValid(id);

// Get the timestamp (amount of ms since epoch) from an ocuid or ObjectId
const timestamp = getTimestampFromId(id);
```
