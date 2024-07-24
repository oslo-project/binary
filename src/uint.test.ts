import { expect, test } from "vitest";
import { bigEndian, littleEndian } from "./uint.js";
import { describe } from "vitest";

describe("bigEndian", () => {
	describe("bigEndian.uint8", () => {
		test("returns correct value", () => {
			expect(bigEndian.uint8(new Uint8Array([1]), 0)).toBe(1);
		});
		test("excessive bytes", () => {
			expect(bigEndian.uint8(new Uint8Array([1, 2]), 0)).toBe(1);
		});
		test("offset", () => {
			expect(bigEndian.uint8(new Uint8Array([1, 2]), 1)).toBe(2);
		});
		test("throws error on insufficient bytes", () => {
			expect(() => bigEndian.uint8(new Uint8Array([]), 0)).toThrowError();
		});
		test("throws error on insufficient bytes with offset", () => {
			expect(() => bigEndian.uint8(new Uint8Array([1]), 1)).toThrowError();
		});
	});
	describe("bigEndian.uint16", () => {
		test("returns correct value", () => {
			expect(bigEndian.uint16(new Uint8Array([1, 2]), 0)).toBe(0x0102);
		});
		test("excessive bytes", () => {
			expect(bigEndian.uint16(new Uint8Array([1, 2, 3]), 0)).toBe(0x0102);
		});
		test("offset", () => {
			expect(bigEndian.uint16(new Uint8Array([1, 2, 3]), 1)).toBe(0x0203);
		});
		test("throws error on insufficient bytes", () => {
			expect(() => bigEndian.uint16(new Uint8Array([1]), 0)).toThrowError();
		});
		test("throws error on insufficient bytes with offset", () => {
			expect(() => bigEndian.uint16(new Uint8Array([1, 2]), 1)).toThrowError();
		});
	});
	describe("bigEndian.uint32", () => {
		test("returns correct value", () => {
			expect(bigEndian.uint32(new Uint8Array([1, 2, 3, 4]), 0)).toBe(0x01020304);
		});
		test("excessive bytes", () => {
			expect(bigEndian.uint32(new Uint8Array([1, 2, 3, 4, 5]), 0)).toBe(0x01020304);
		});
		test("offset", () => {
			expect(bigEndian.uint32(new Uint8Array([1, 2, 3, 4, 5]), 1)).toBe(0x02030405);
		});
		test("throws error on insufficient bytes", () => {
			expect(() => bigEndian.uint32(new Uint8Array([1]), 0)).toThrowError();
		});
		test("throws error on insufficient bytes with offset", () => {
			expect(() => bigEndian.uint32(new Uint8Array([1, 2, 3, 4]), 1)).toThrowError();
		});
	});
	describe("bigEndian.uint64", () => {
		test("returns correct value", () => {
			expect(bigEndian.uint64(new Uint8Array([1, 2, 3, 4, 5, 6, 7, 8]), 0)).toBe(
				0x0102030405060708n
			);
		});
		test("excessive bytes", () => {
			expect(bigEndian.uint64(new Uint8Array([1, 2, 3, 4, 5, 6, 7, 8, 9]), 0)).toBe(
				0x0102030405060708n
			);
		});
		test("offset", () => {
			expect(bigEndian.uint64(new Uint8Array([1, 2, 3, 4, 5, 6, 7, 8, 9]), 1)).toBe(
				0x0203040506070809n
			);
		});
		test("throws error on insufficient bytes", () => {
			expect(() => bigEndian.uint64(new Uint8Array([1]), 0)).toThrowError();
		});
		test("throws error on insufficient bytes with offset", () => {
			expect(() => bigEndian.uint64(new Uint8Array([1, 2, 3, 4, 5, 6, 7, 8]), 1)).toThrowError();
		});
	});

	describe("bigEndian.putUint8", () => {
		test("sets correct value", () => {
			const data = new Uint8Array(1);
			bigEndian.putUint8(data, 1, 0);
			expect(data).toStrictEqual(new Uint8Array([1]));
		});
		test("excessive bytes", () => {
			const data = new Uint8Array(2);
			bigEndian.putUint8(data, 1, 0);
			expect(data).toStrictEqual(new Uint8Array([1, 0]));
		});
		test("offset", () => {
			const data = new Uint8Array(2);
			bigEndian.putUint8(data, 1, 1);
			expect(data).toStrictEqual(new Uint8Array([0, 1]));
		});
		test("insufficient space", () => {
			const data = new Uint8Array(0);
			expect(() => bigEndian.putUint8(data, 1, 0)).toThrow();
		});
		test("insufficient space with offset", () => {
			const data = new Uint8Array(1);
			expect(() => bigEndian.putUint8(data, 1, 1)).toThrow();
		});
	});
	describe("bigEndian.putUint16", () => {
		test("sets correct value", () => {
			const data = new Uint8Array(2);
			bigEndian.putUint16(data, 258, 0);
			expect(data).toStrictEqual(new Uint8Array([1, 2]));
		});
		test("excessive bytes", () => {
			const data = new Uint8Array(3);
			bigEndian.putUint16(data, 258, 0);
			expect(data).toStrictEqual(new Uint8Array([1, 2, 0]));
		});
		test("offset", () => {
			const data = new Uint8Array(3);
			bigEndian.putUint16(data, 258, 1);
			expect(data).toStrictEqual(new Uint8Array([0, 1, 2]));
		});
		test("insufficient space", () => {
			const data = new Uint8Array(0);
			expect(() => bigEndian.putUint16(data, 1, 0)).toThrow();
		});
		test("insufficient space with offset", () => {
			const data = new Uint8Array(2);
			expect(() => bigEndian.putUint16(data, 258, 1)).toThrow();
		});
	});
	describe("bigEndian.putUint32", () => {
		test("sets correct value", () => {
			const data = new Uint8Array(4);
			bigEndian.putUint32(data, 16909060, 0);
			expect(data).toStrictEqual(new Uint8Array([1, 2, 3, 4]));
		});
		test("excessive bytes", () => {
			const data = new Uint8Array(5);
			bigEndian.putUint32(data, 16909060, 0);
			expect(data).toStrictEqual(new Uint8Array([1, 2, 3, 4, 0]));
		});
		test("offset", () => {
			const data = new Uint8Array(5);
			bigEndian.putUint32(data, 16909060, 1);
			expect(data).toStrictEqual(new Uint8Array([0, 1, 2, 3, 4]));
		});
		test("insufficient space", () => {
			const data = new Uint8Array(0);
			expect(() => bigEndian.putUint32(data, 1, 0)).toThrow();
		});
		test("insufficient space with offset", () => {
			const data = new Uint8Array(4);
			expect(() => bigEndian.putUint32(data, 16909060, 1)).toThrow();
		});
	});
	describe("bigEndian.putUint64", () => {
		test("sets correct value", () => {
			const data = new Uint8Array(8);
			bigEndian.putUint64(data, 72623859790382856n, 0);
			expect(data).toStrictEqual(new Uint8Array([1, 2, 3, 4, 5, 6, 7, 8]));
		});
		test("excessive bytes", () => {
			const data = new Uint8Array(9);
			bigEndian.putUint64(data, 72623859790382856n, 0);
			expect(data).toStrictEqual(new Uint8Array([1, 2, 3, 4, 5, 6, 7, 8, 0]));
		});
		test("offset", () => {
			const data = new Uint8Array(9);
			bigEndian.putUint64(data, 72623859790382856n, 1);
			expect(data).toStrictEqual(new Uint8Array([0, 1, 2, 3, 4, 5, 6, 7, 8]));
		});
		test("insufficient space", () => {
			const data = new Uint8Array(0);
			expect(() => bigEndian.putUint64(data, 72623859790382856n, 0)).toThrow();
		});
		test("insufficient space with offset", () => {
			const data = new Uint8Array(8);
			expect(() => bigEndian.putUint64(data, 72623859790382856n, 1)).toThrow();
		});
	});
});

describe("littleEndian", () => {
	describe("littleEndian.uint8", () => {
		test("returns correct value", () => {
			expect(littleEndian.uint8(new Uint8Array([1]), 0)).toBe(1);
		});
		test("excessive bytes", () => {
			expect(littleEndian.uint8(new Uint8Array([1, 2]), 0)).toBe(1);
		});
		test("offset", () => {
			expect(littleEndian.uint8(new Uint8Array([1, 2]), 1)).toBe(2);
		});
		test("throws error on insufficient bytes", () => {
			expect(() => littleEndian.uint8(new Uint8Array([]), 0)).toThrowError();
		});
		test("throws error on insufficient bytes with offset", () => {
			expect(() => littleEndian.uint8(new Uint8Array([1]), 1)).toThrowError();
		});
	});
	describe("littleEndian.uint16", () => {
		test("returns correct value", () => {
			expect(littleEndian.uint16(new Uint8Array([1, 2]), 0)).toBe(0x0201);
		});
		test("excessive bytes", () => {
			expect(littleEndian.uint16(new Uint8Array([1, 2, 3]), 0)).toBe(0x0201);
		});
		test("offset", () => {
			expect(littleEndian.uint16(new Uint8Array([1, 2, 3]), 1)).toBe(0x0302);
		});
		test("throws error on insufficient bytes", () => {
			expect(() => littleEndian.uint16(new Uint8Array([1]), 0)).toThrowError();
		});
		test("throws error on insufficient bytes with offset", () => {
			expect(() => littleEndian.uint16(new Uint8Array([1, 2]), 1)).toThrowError();
		});
	});
	describe("littleEndian.uint32", () => {
		test("returns correct value", () => {
			expect(littleEndian.uint32(new Uint8Array([1, 2, 3, 4]), 0)).toBe(0x04030201);
		});
		test("excessive bytes", () => {
			expect(littleEndian.uint32(new Uint8Array([1, 2, 3, 4, 5]), 0)).toBe(0x04030201);
		});
		test("offset", () => {
			expect(littleEndian.uint32(new Uint8Array([1, 2, 3, 4, 5]), 1)).toBe(0x05040302);
		});
		test("throws error on insufficient bytes", () => {
			expect(() => littleEndian.uint32(new Uint8Array([1]), 0)).toThrowError();
		});
		test("throws error on insufficient bytes with offset", () => {
			expect(() => littleEndian.uint32(new Uint8Array([1, 2, 3, 4]), 1)).toThrowError();
		});
	});

	describe("littleEndian.uint64", () => {
		test("returns correct value", () => {
			expect(littleEndian.uint64(new Uint8Array([1, 2, 3, 4, 5, 6, 7, 8]), 0)).toBe(
				0x0807060504030201n
			);
		});
		test("excessive bytes", () => {
			expect(littleEndian.uint64(new Uint8Array([1, 2, 3, 4, 5, 6, 7, 8, 9]), 0)).toBe(
				0x0807060504030201n
			);
		});
		test("offset", () => {
			expect(littleEndian.uint64(new Uint8Array([1, 2, 3, 4, 5, 6, 7, 8, 9]), 1)).toBe(
				0x0908070605040302n
			);
		});
		test("throws error on insufficient bytes", () => {
			expect(() => littleEndian.uint64(new Uint8Array([1]), 0)).toThrowError();
		});
		test("throws error on insufficient bytes with offset", () => {
			expect(() => littleEndian.uint64(new Uint8Array([1, 2, 3, 4, 5, 6, 7, 8]), 1)).toThrowError();
		});
	});

	describe("littleEndian.putUint8", () => {
		test("sets correct value", () => {
			const data = new Uint8Array(1);
			littleEndian.putUint8(data, 1, 0);
			expect(data).toStrictEqual(new Uint8Array([1]));
		});
		test("excessive bytes", () => {
			const data = new Uint8Array(2);
			littleEndian.putUint8(data, 1, 0);
			expect(data).toStrictEqual(new Uint8Array([1, 0]));
		});
		test("offset", () => {
			const data = new Uint8Array(2);
			littleEndian.putUint8(data, 1, 1);
			expect(data).toStrictEqual(new Uint8Array([0, 1]));
		});
		test("insufficient space", () => {
			const data = new Uint8Array(0);
			expect(() => littleEndian.putUint8(data, 1, 0)).toThrow();
		});
		test("insufficient space with offset", () => {
			const data = new Uint8Array(1);
			expect(() => littleEndian.putUint8(data, 1, 1)).toThrow();
		});
	});
	describe("littleEndian.putUint16", () => {
		test("sets correct value", () => {
			const data = new Uint8Array(2);
			littleEndian.putUint16(data, 258, 0);
			expect(data).toStrictEqual(new Uint8Array([2, 1]));
		});
		test("excessive bytes", () => {
			const data = new Uint8Array(3);
			littleEndian.putUint16(data, 258, 0);
			expect(data).toStrictEqual(new Uint8Array([2, 1, 0]));
		});
		test("offset", () => {
			const data = new Uint8Array(3);
			littleEndian.putUint16(data, 258, 1);
			expect(data).toStrictEqual(new Uint8Array([0, 2, 1]));
		});
		test("insufficient space", () => {
			const data = new Uint8Array(0);
			expect(() => littleEndian.putUint16(data, 1, 0)).toThrow();
		});
		test("insufficient space with offset", () => {
			const data = new Uint8Array(2);
			expect(() => littleEndian.putUint16(data, 258, 1)).toThrow();
		});
	});
	describe("littleEndian.putUint32", () => {
		test("sets correct value", () => {
			const data = new Uint8Array(4);
			littleEndian.putUint32(data, 16909060, 0);
			expect(data).toStrictEqual(new Uint8Array([4, 3, 2, 1]));
		});
		test("excessive bytes", () => {
			const data = new Uint8Array(5);
			littleEndian.putUint32(data, 16909060, 0);
			expect(data).toStrictEqual(new Uint8Array([4, 3, 2, 1, 0]));
		});
		test("offset", () => {
			const data = new Uint8Array(5);
			littleEndian.putUint32(data, 16909060, 1);
			expect(data).toStrictEqual(new Uint8Array([0, 4, 3, 2, 1]));
		});
		test("insufficient space", () => {
			const data = new Uint8Array(0);
			expect(() => littleEndian.putUint32(data, 1, 0)).toThrow();
		});
		test("insufficient space with offset", () => {
			const data = new Uint8Array(4);
			expect(() => littleEndian.putUint32(data, 16909060, 1)).toThrow();
		});
	});
	describe("littleEndian.putUint64", () => {
		test("sets correct value", () => {
			const data = new Uint8Array(8);
			littleEndian.putUint64(data, 72623859790382856n, 0);
			expect(data).toStrictEqual(new Uint8Array([8, 7, 6, 5, 4, 3, 2, 1]));
		});
		test("excessive bytes", () => {
			const data = new Uint8Array(9);
			littleEndian.putUint64(data, 72623859790382856n, 0);
			expect(data).toStrictEqual(new Uint8Array([8, 7, 6, 5, 4, 3, 2, 1, 0]));
		});
		test("offset", () => {
			const data = new Uint8Array(9);
			littleEndian.putUint64(data, 72623859790382856n, 1);
			expect(data).toStrictEqual(new Uint8Array([0, 8, 7, 6, 5, 4, 3, 2, 1]));
		});
		test("insufficient space", () => {
			const data = new Uint8Array(0);
			expect(() => littleEndian.putUint64(data, 72623859790382856n, 0)).toThrow();
		});
		test("insufficient space with offset", () => {
			const data = new Uint8Array(8);
			expect(() => littleEndian.putUint64(data, 72623859790382856n, 1)).toThrow();
		});
	});
});
