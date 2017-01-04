"use strict";

function trace(name) {
	var msg = "trace: ";
	for (var k in arguments) {
		msg += arguments[k] + " ";
	}
	console.log(msg);
}

module.exports = class Instructions {

	mov(cpu, a, b) {
		trace("mov", a, b);
		if (typeof a == "number" && typeof b == "string") {
			cpu.registers.set(b, cpu.memory.get(a));
		} else if (typeof a == "string" && typeof b == "number") {
			cpu.memory.set(b, cpu.registers.get(a));
		} else {
			throw new Error();
		}
	}

	const(cpu, val, register) {
		trace("const", val, register);
		cpu.registers.set(register, val);
	}

	add(cpu, a, b) {
		trace("add", a, b);
		cpu.registers.set(a, cpu.registers.get(a) + cpu.registers.get(b));
	}

	sub(cpu, a, b) {
		trace("sub", a, b);
		cpu.registers.set(a, cpu.registers.get(a) - cpu.registers.get(b));
	}

	mul(cpu, a, b) {
		trace("mul", a, b);
		cpu.registers.set(a, cpu.registers.get(a) * cpu.registers.get(b));
	}

	div(cpu, a, b) {
		trace("div", a, b);
		cpu.registers.set(a, cpu.registers.get(a) / cpu.registers.get(b));
	}

	label(cpu, id) {
		trace("label", id);
	}

	goto(cpu, label) {
		trace("goto", label);
		cpu.index = cpu.prog.indexOf(cpu.prog.insns.find((it) => {
			return it.insn == "label" && it.args[0] == label;
		}));
	}

	echo(cpu, register) {
		trace("echo", register);
		console.log(register + ": " + cpu.registers.get(register));
	}

}