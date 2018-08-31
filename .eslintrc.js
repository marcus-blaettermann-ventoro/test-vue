module.exports = {
	root: true,
	env: {
		node: true
	},
	extends: [
		'plugin:vue/recommended',
		'@vue/airbnb',
		'@vue/typescript',
	],
	plugins: [
		'filenames',
	],
	rules: {
		'no-console': process.env.NODE_ENV === 'production' ? 'error' : 'off',
		'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off',

		'filenames/match-regex': [ 2, '^[A-Za-z?\.(d\.)?]+$', true ],
		'filenames/match-exported': 2,

		// Ventoro custom settings
		indent: [ 2, 'tab' ],
		'no-tabs': 0,
		'space-in-parens': [ 2, 'always' ],
		'template-curly-spacing': [ 2, 'always' ],
		'array-bracket-spacing': [ 2, 'always' ],
		'object-curly-spacing': [ 2, 'always' ],
		'computed-property-spacing': [ 2, 'always' ],
		'no-multiple-empty-lines': [ 2, { max: 1 } ],
		'max-len': [ 'error', 100, 4 ],
		'no-param-reassign': ['error', { 'ignorePropertyModificationsFor': [ 'context' ] } ],
	},
	overrides: [
		{
			files: [ '*.vue' ],
			rules: {
				indent: 'off',
				'vue/script-indent': [ 'error', 'tab', {
					baseIndent: 1,
					switchCase: 0,
				} ],
				'vue/html-indent': [ 'error', 'tab', {
					attribute: 1,
					closeBracket: 0,
					alignAttributesVertically: true,
				} ],
			},
		},
		{
			files: [ 'mocks/*', '*.config.js', '*.spec.js' ],
			rules: {
				'import/no-extraneous-dependencies': [ 'error', {
					devDependencies: true
				} ],
			}
		},
		{
			files: [ '*.spec.js' ],
			env: {
				jest: true
			},
		},
	],
};
