import { describe, expect, test } from "vitest";

import { compareBytes, concatenateBytes, DynamicBuffer } from "./bytes.js";

test("compareBytes()", () => {
	const randomBytes = new Uint8Array(32);
	crypto.getRandomValues(randomBytes);
	expect(compareBytes(randomBytes, randomBytes)).toBe(true);
	const anotherRandomBytes = new Uint8Array(32);
	crypto.getRandomValues(anotherRandomBytes);
	expect(compareBytes(randomBytes, anotherRandomBytes)).toBe(false);
	expect(compareBytes(new Uint8Array(0), new Uint8Array(1))).toBe(false);
});

test("concatenateBytes()", () => {
	const a = new Uint8Array([0, 1]);
	const b = new Uint8Array([2, 3, 4]);
	expect(concatenateBytes(a, b)).toStrictEqual(new Uint8Array([0, 1, 2, 3, 4]));
});

describe("DynamicBuffer", () => {
	test("DynamicBuffer.write()", () => {
		const buffer = new DynamicBuffer(0);
		buffer.write(new Uint8Array([0x01]));
		expect(buffer.bytes()).toStrictEqual(new Uint8Array([0x01]));
		buffer.write(new Uint8Array(100));
		expect(buffer.capacity).toStrictEqual(128);
		expect(buffer.bytes()).toStrictEqual(new Uint8Array([0x01, ...new Uint8Array(100)]));
		buffer.write(new Uint8Array(27));
		expect(buffer.length).toStrictEqual(128);
		expect(buffer.capacity).toStrictEqual(128);
	});

	test("DynamicBuffer.writeByte()", () => {
		const buffer = new DynamicBuffer(0);
		buffer.writeByte(0x01);
		expect(buffer.bytes()).toStrictEqual(new Uint8Array([0x01]));
		buffer.writeByte(0x02);
		buffer.writeByte(0x03);
		buffer.writeByte(0x04);
		expect(buffer.capacity).toBe(4);
		expect(buffer.bytes()).toStrictEqual(new Uint8Array([0x01, 0x02, 0x03, 0x04]));
	});
});
