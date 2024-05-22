export function compareBytes(a: Uint8Array, b: Uint8Array): boolean {
	if (a.byteLength !== b.byteLength) {
		return false;
	}
	for (let i = 0; i < b.byteLength; i++) {
		if (a[i] !== b[i]) {
			return false;
		}
	}
	return true;
}

export function concatenateBytes(a: Uint8Array, b: Uint8Array): Uint8Array {
	const result = new Uint8Array(a.byteLength + b.byteLength);
	concatenateBytesInto(result, a, b);
	return result;
}

export function concatenateBytesInto(target: Uint8Array, a: Uint8Array, b: Uint8Array): void {
	target.set(new Uint8Array(a), 0);
	target.set(new Uint8Array(b), a.byteLength);
}

export class DynamicBuffer {
	private value: Uint8Array;
	public capacity: number;

	public length = 0;

	constructor(capacity: number) {
		this.value = new Uint8Array(capacity);
		this.capacity = capacity = capacity;
	}

	public write(data: Uint8Array): void {
		if (this.length + data.byteLength <= this.capacity) {
			this.value.set(data, this.length);
			this.length += data.byteLength;
			return;
		}
		while (this.length + data.byteLength > this.capacity) {
			if (this.capacity === 0) {
				this.capacity = 1;
			} else {
				this.capacity = this.capacity * 2;
			}
		}
		const newValue = new Uint8Array(this.capacity);
		newValue.set(this.value.subarray(0, this.length));
		newValue.set(data, this.length);
		this.value = newValue;
		this.length += data.byteLength;
	}

	public readInto(target: Uint8Array): void {
		if (target.byteLength < this.length) {
			throw new TypeError("Not enough space");
		}
		target.set(this.value.subarray(0, this.length));
	}

	public bytes(): Uint8Array {
		return this.value.slice(0, this.length);
	}

	public clear(): void {
		this.length = 0;
	}
}
