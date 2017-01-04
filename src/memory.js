"use strict";

module.exports = class Memory {

	constructor() {
		this.mem = new Array(128);
	}

	get(ptr) {
		return this.mem[ptr];
	}

	set(ptr, val) {
		this.mem[ptr] = val;
	}

}
