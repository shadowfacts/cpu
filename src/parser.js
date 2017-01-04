"use strict";

const fs = require("fs");
const Program = require("./program");

function parse(f, callback) {
	const prog = new Program();
	fs.readFile(f, (err, data) => {
		const lines = data.toString().split("\n");
		lines.forEach((line) => {
			const parts = line.split(" ");
			prog[parts[0]].apply(prog, parts.slice(1, parts.length));
		});
		callback(prog);
	});
};

module.exports = parse;

// module.exports = class Parser {

// 	constructor(f) {
// 		const prog = new Program();
// 		const text = await fs.readFile(f);
// 		const lines = text.split("\n");
// 		lines.forEach((line) => {

// 		});
// 	}

// }