module.exports = {
	'rules': {
		'comma-dangle': [2, 'always-multiline'],    	// http://eslint.org/docs/rules/comma-dangle
		'eol-last': 2,                  					// http://eslint.org/docs/rules/eol-last
		'id-length': [2, {               				// http://eslint.org/docs/rules/id-length
			'min': 2,
			'properties': 'never'
		}],
		'no-shadow': 2,										// http://eslint.org/docs/rules/no-shadow
	}
}