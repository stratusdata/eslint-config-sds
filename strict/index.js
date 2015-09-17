var base = require('../base');
var strict = require('./strict');

var writeableBase = JSON.parse(JSON.stringify(base));

Object.keys(strict.rules).forEach(function assignRule(ruleName) {
	writeableBase.rules[ruleName] = strict.rules[ruleName];
});

module.exports = writeableBase;

