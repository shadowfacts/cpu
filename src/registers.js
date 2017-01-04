"use strict";

module.exports = class Registers {

	constructor() {
		this.registers = {
			a: 0,
			b: 0
		};
	}

	get(register) {
		if (!this.registers.hasOwnProperty(register)) throw new Error("No register " + register);
		return this.registers[register];
	}

	set(register, val) {
		if (!this.registers.hasOwnProperty(register)) throw new Error("No register " + register);
		this.registers[register] = val;
	}

}
