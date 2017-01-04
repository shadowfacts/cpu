"use strict";

const Instructions = require("./instructions");
const Registers = require("./registers");
const Memory = require("./memory");

module.exports = class CPU {

	constructor() {
		this.instructions = new Instructions();
		this.registers = new Registers();
		this.memory = new Memory();
		this.index = 0;
		this.prog = null;

		Object.getOwnPropertyNames(Instructions.prototype).filter((fn) => {
			return fn != "constructor";
		}).forEach((fn) => {
			this[fn] = function() {
				const params = [this];
				params.push.apply(params, arguments);
				this.instructions[fn].apply(this.instructions, params);
			}
		});
	}

	exec(prog) {
		this.prog = prog;
		for (this.index = 0; this.index < prog.insns.length; this.index++) {
			const insn = prog.insns[this.index];
			this[insn.insn].apply(this, insn.args);
		}
		this.prog = null;
	}

}
