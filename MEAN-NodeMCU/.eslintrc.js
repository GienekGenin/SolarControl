module.exports = {
    "extends": "airbnb",
    "env": {
        "browser": true,
        "commonjs": true,
        "es6": true,
        "node": true
    },
    "extends": "eslint:recommended",
    "parserOptions": {
        "ecmaVersion": 2017,
        "sourceType": "module"
    },
    "rules": {
        "indent": [
            "error",
            "tab"
        ],
        "linebreak-style": [
            "error",
            "windows"
        ],
        "quotes": [
            "error",
            "single"
        ],
        "semi": [
            "error",
            "always"
        ],
        "no-console": 2,
		"linebreak-style": "off",
		"indent": ["error", "tab"],
		"no-tabs": "off",
		"arrow-parens": "off",
		"comma-dangle": ["error", "never"],
		"no-param-reassign": ["error", { "props": false }]
    }
};