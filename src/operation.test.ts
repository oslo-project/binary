import { test, expect } from "vitest";
import { and, not, or, xor, rotl32, rotr32, rotl64, rotr64 } from "./operation.js";

test("and()", () => {
	const a = new Uint8Array([0b00101001, 0b00001111, 0b01101011]);
	const b = new Uint8Array([0b11010110, 0b11110000, 0b10010100]);
	and(a, b);
	expect(a).toStrictEqual(new Uint8Array([0b0, 0b0, 0b0]));
});

test("or()", () => {
	const a = new Uint8Array([0b00101001, 0b00001111, 0b01101011]);
	const b = new Uint8Array([0b11111111, 0b11111111, 0b11111111]);
	or(a, b);
	expect(a).toStrictEqual(new Uint8Array([0xff, 0xff, 0xff]));
});

test("xor()", () => {
	const a = new Uint8Array([0b00101001, 0b00001111, 0b01101011]);
	const b = new Uint8Array([0b11010110, 0b11110000, 0b10010100]);
	xor(a, b);
	expect(a).toStrictEqual(new Uint8Array([0xff, 0xff, 0xff]));
});

test("not()", () => {
	const a = new Uint8Array([0b00101001, 0b00001111, 0b01101011]);
	not(a);
	expect(a).toStrictEqual(new Uint8Array([0b11010110, 0b11110000, 0b10010100]));
});

test("rotl32()", () => {
	expect(rotl32(0b11110000000000000000000000000000, 2)).toBe(0b11000000000000000000000000000011);
});

test("rotr32()", () => {
	expect(rotr32(0b00000000000000000000000000001111, 2)).toBe(0b11000000000000000000000000000011);
});

test("rotl64()", () => {
	expect(rotl64(0b1111000000000000000000000000000000000000000000000000000000000000n, 2)).toBe(
		0b1100000000000000000000000000000000000000000000000000000000000011n
	);
});

test("rotr64()", () => {
	expect(rotr64(0b0000000000000000000000000000000000000000000000000000000000001111n, 2)).toBe(
		0b1100000000000000000000000000000000000000000000000000000000000011n
	);
});
