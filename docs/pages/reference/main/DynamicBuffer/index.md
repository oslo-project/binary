---
title: "DynamicBuffer"
---

# DynamicBuffer

A dynamically-sized view of an `Uint8Array`. It automatically grows the array size (capacity) and allows˝ you to continuously write to an `Uint8Array`. The capacity grows by a factor of 2 (1 => 2 => 4 => 8 => 16...).

## Constructor

```ts
function constructor(capacity: number): this;
```

### Parameters

- `capacity`: Initial capacity

## Methods

- [`DynamicBuffer.bytes()`](/reference/main/DynamicBuffer/bytes)
- [`DynamicBuffer.clear()`](/reference/main/DynamicBuffer/clear)
- [`DynamicBuffer.readInto()`](/reference/main/DynamicBuffer/readInto)
- [`DynamicBuffer.write()`](/reference/main/DynamicBuffer/write)

## Properties

```ts
interface Properties {
	capacity: number;
	length: number;
}
```

- `capacity`
- `length`
