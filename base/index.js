module.exports = {
	"extends": "airbnb",
	"parser": "babel-eslint",
	"plugins": ["xo"],
	"settings": {
		"import/resolver": {
			"babel-module": {}
		}
	},
	"rules": {
		"indent": [2, "tab", { "SwitchCase": 1 }],
		"react/jsx-indent": [2, "tab"],
		"react/jsx-indent-props": [2, "tab"],
		// Use a warning since we'll be framing out a few components
		// that don't yet use the react lifecycle but will soon..
		"react/prefer-stateless-function": 1,
		"max-len": [1, 120, 2, {
			"ignoreComments": true
		}],
		"comma-dangle": 0,
		"xo/filename-case": ["error", {"case": "kebabCase"}],
		"no-cond-assign": ["error", "except-parens"],
		"array-bracket-spacing": 0,
		"new-cap": [1, { "newIsCap": true, "capIsNew": false }],
		"no-underscore-dangle": [2, { "allow": [ "_id", "__APP__", "_source" ] }],
		"no-param-reassign": ["error", { "props": false }],
		"react/jsx-no-bind": [0, {
			"ignoreRefs": false,
			"allowArrowFunctions": false,
			"allowBind": false
		}],
		"no-confusing-arrow": ["error", {"allowParens": true}]
	}
}