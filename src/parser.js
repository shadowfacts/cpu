"use strict";

const fs = require("fs");
const Program = require("./program");

function parse(f, callback) {
	const prog = new Program();
	fs.readFile(f, (err, data) => {
		const lines = data.toString().split("\n");
		lines.forEach((line) => {
			const parts = line.split(" ");
			const args = parts.slice(1, parts.length);
			for (var i = 0; i < args.length; i++) {
				if (!isNaN(args[i])) {
					args[i] = parseFloat(args[i]);
				}
			}
			prog[parts[0]].apply(prog, args);
		});
		callback(prog);
	});
};

module.exports = parse;
