# @oslojs/binary

A runtime-agnostic TypeScript library for working with binary data.

Alongside [`@oslojs/encoding`]() and [`@oslojs/crypto`](), it aims to provide a basic toolbox for implementing auth and auth-related standards.

```
npm i @oslojs/binary
```

## Examples

### Big endian and little endian integers

Supports uint8, uint16, uint32, and uint64.

```ts
import { BigEndian, LittleEndian } from "@oslojs/binary";

const toUint32: number = BigEndian.uint32(new Uint8Array([1, 2, 3, 4]));
const toUint64: bigint = LittleEndian.uint64(new Uint8Array([1, 2, 3, 4, 5, 6, 7, 8]));

const fromUint32 = new Uint8Array(4);
const fromUint64 = new Uint8Array(8);
LittleEndian.putUint32(fromUint32, 135155375, 0);
BigEndian.putUint64(fromUint64, 281478725684090n, 0);
```

### Other utilities

```ts
import { compareBytes, concatenateBytes } from "@oslojs/binary";

// IMPORTANT: NOT constant time
const equal = compareBytes(new Uint8Array([1, 2, 3]), new Uint8Array([1, 2, 3]));

const concatenated = concatenateBytes(new Uint8Array([1, 2, 3]), new Uint8Array([4, 5, 6]));
```

```ts
import { xor, and, or, not } from "@oslojs/binary";

const a = new Uint8Array();
const b = new Uint8Array();
xor(a, b);
```

```ts
import { rotr32, rotl32, rotr64, rotl64 } from "@oslojs/binary";
```
