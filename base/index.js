module.exports = {
	'parser': 'babel-eslint',
	'env': {
		'browser': true,
		'node': true
	},
	'extends': 'eslint:recommended',
	'rules': {
		'linebreak-style': [2, 'unix'],
		'vars-on-top': [0],

		'comma-dangle': 0,							    	// http://eslint.org/docs/rules/comma-dangle
		'no-cond-assign': [2, 'always'], 				// http://eslint.org/docs/rules/no-cond-assign
		'no-console': 1,                 				// http://eslint.org/docs/rules/no-console
		'no-debugger': 1,                				// http://eslint.org/docs/rules/no-debugger
		'no-alert': 1,                  					// http://eslint.org/docs/rules/no-alert
		'no-constant-condition': 1,      				// http://eslint.org/docs/rules/no-constant-condition
		'no-dupe-keys': 2,               				// http://eslint.org/docs/rules/no-dupe-keys
		'no-duplicate-case': 2,          				// http://eslint.org/docs/rules/no-duplicate-case

		'no-invalid-regexp': 2,								// http://eslint.org/docs/rules/no-invalid-regexp
		'no-irregular-whitespace': 2,						// http://eslint.org/docs/rules/no-irregular-whitespace

	/**
	* Style
	*/
		'indent': [2, 'tab', { 'SwitchCase': 1 }],	// http://eslint.org/docs/rules/indent
		'brace-style': [
			2,               									// http://eslint.org/docs/rules/brace-style
			'1tbs', {
				'allowSingleLine': true
			}
		],
		'quotes': [2, 'single', 'avoid-escape'], 		// http://eslint.org/docs/rules/quotes
		'id-length': [0, {               				// http://eslint.org/docs/rules/id-length
			'min': 2,
			'properties': 'never'
		}],
		'camelcase': [2, {               				// http://eslint.org/docs/rules/camelcase
			'properties': 'never'
		}],
		'comma-spacing': [2, {          					// http://eslint.org/docs/rules/comma-spacing
			'before': false,
			'after': true
		}],
		'comma-style': [2, 'last'],      				// http://eslint.org/docs/rules/comma-style
		'eol-last': 1,                  					// http://eslint.org/docs/rules/eol-last
		'func-names': 1,                				 	// http://eslint.org/docs/rules/func-names
			'key-spacing': [2, {             			// http://eslint.org/docs/rules/key-spacing
			'beforeColon': false,
			'afterColon': true
		}],
		'max-len': [1, 120, 2, { 							// http://eslint.org/docs/rules/max-len
			'ignoreComments': true
		}],
		'new-cap': [2, {                 				// http://eslint.org/docs/rules/new-cap
			'newIsCap': true
		}],
		'no-multiple-empty-lines': [2, { 				// http://eslint.org/docs/rules/no-multiple-empty-lines
			'max': 2
		}],
		'no-spaced-func': 2,            					// http://eslint.org/docs/rules/no-spaced-func
		'no-trailing-spaces': [2, { 						// http://eslint.org/docs/rules/no-trailing-spaces
			'skipBlankLines': false
		}],
		'one-var': [2, 'never'],         				// http://eslint.org/docs/rules/one-var
		'padded-blocks': 0,   								// http://eslint.org/docs/rules/padded-blocks
		'semi': [2, 'always'],								// http://eslint.org/docs/rules/semi
		'semi-spacing': [2, {            				// http://eslint.org/docs/rules/semi-spacing
			'before': false,
			'after': true
		}],
		'space-before-blocks': [2, 'always'],			// http://eslint.org/docs/rules/space-before-blocks
		'space-before-function-paren': [2, { 			// http://eslint.org/docs/rules/space-before-function-paren
			'anonymous': 'always',
			'named': 'never'
		}],
		'space-infix-ops': 2,           					// http://eslint.org/docs/rules/space-infix-ops
		'space-in-parens': [2, 'never'],					// http://eslint.org/docs/rules/space-in-parens
		'spaced-comment': [0, 'always', {				// http://eslint.org/docs/rules/spaced-comment
			'exceptions': ['*']
		}],
		'keyword-spacing': 2,

	/**
	* Variables
	*/
		'no-shadow': 0,                  				// http://eslint.org/docs/rules/no-shadow
		'no-shadow-restricted-names': 2,					// http://eslint.org/docs/rules/no-shadow-restricted-names
		'no-undef': 2,                   				// http://eslint.org/docs/rules/no-undef
		'no-unused-vars': [2, {          				// http://eslint.org/docs/rules/no-unused-vars
			'vars': 'local',
			'args': 'none'
		}],
		'no-use-before-define': [2, 'nofunc'],       // http://eslint.org/docs/rules/no-use-before-define
	}
};