"use strict";

const CPU = require("./src/cpu");
const Program = require("./src/program");
const parse = require("./src/parser");

const cpu = new CPU();

parse("test.txt", (prog) => {
	cpu.exec(prog);
});

// const prog = new Program();

// prog.const(11, "a");
// prog.const(3, "b");
// prog.mul("a", "b");
// prog.echo("a");
// const l1 = prog.label("l1");
// prog.sub("a", "b")
// prog.echo("a");
// prog.goto(l1);

// const cpu = new CPU();
// cpu.exec(prog);