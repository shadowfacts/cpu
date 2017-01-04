"use strict";

const Instructions = require("./instructions");

module.exports = class Program {

	constructor() {
		this.insns = [];

		Object.getOwnPropertyNames(Instructions.prototype).filter((fn) => {
			return fn != "constructor";
		}).forEach((fn) => {
			this[fn] = function() {
				const insn = {
					insn: fn,
					args: arguments
				};
				this.insns.push(insn);
				return insn;
			}
		});
	}

	indexOf(insn) {
		return this.insns.indexOf(insn);
	}

}