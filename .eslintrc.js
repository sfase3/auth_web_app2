
module.exports = {
    env: {
        "browser": true,
        "es2021": true,
        
    },
    extends: [
        "eslint:recommended",
        "plugin:vue/vue3-recommended",
        "plugin:@typescript-eslint/recommended"
    ],
    overrides: [
    ],
    parser: "vue-eslint-parser",
    parserOptions: {
        ecmaVersion: "latest",
        sourceType: "module",
        parser: "@typescript-eslint/parser"
    },
    plugins: [
        "vue",
        "@typescript-eslint"
    ],
    rules: {
        "vue/max-attributes-per-line": [0,
            {
                "singleline": 4,
                "multiline": {
                    "max": 1,
                    "allowFirstLine": true
                }
            }
        ],
        "vue/multi-word-component-names": "off",
        'no-undef': 'off',
        
    },
}

