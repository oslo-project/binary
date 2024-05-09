---
title: "Convert between binary and integers"
---

# Convert between binary and integers

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
