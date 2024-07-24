---
title: "ByteOrder"
---

# `ByteOrder`

## Definition

```ts
interface ByteOrder {
	uint8(data: Uint8Array, offset: number): number;
	uint16(data: Uint8Array, offset: number): number;
	uint32(data: Uint8Array, offset: number): number;
	uint64(data: Uint8Array, offset: number): bigint;
	putUint8(target: Uint8Array, value: number, offset: number): void;
	putUint16(target: Uint8Array, value: number, offset: number): void;
	putUint32(target: Uint8Array, value: number, offset: number): void;
	putUint64(target: Uint8Array, value: bigint, offset: number): void;
}
```

### Methods

- `uint8()`: Converts the first 1 byte from the offset to an integer. Throws a `TypeError` if there isn't enough bytes.
- `uint16()`: Converts the first 2 bytes from the offset to an integer. Throws a `TypeError` if there isn't enough bytes.
- `uint32()`: Converts the first 4 bytes from the offset to an integer. Throws a `TypeError` if there isn't enough bytes.
- `uint64()`: Converts the first 8 bytes from the offset to an integer. Throws a `TypeError` if there isn't enough bytes.
- `putUint8()`: Puts the binary representation of the integer to the first 1 byte from the offset. Throws a `TypeError` on insufficient space in `target` and invalid `value`.
- `putUint16()`: Puts the binary representation of the integer to the first 2 byte from the offset. Throws a `TypeError` on insufficient space in `target` and invalid `value`.
- `putUint32()`: Puts the binary representation of the integer to the first 4 byte from the offset. Throws a `TypeError` on insufficient space in `target` and invalid `value`.
- `putUint64()`: Puts the binary representation of the integer to the first 8 byte from the offset. Throws a `TypeError` on insufficient space in `target` and invalid `value`.
