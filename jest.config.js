module.exports = {
    preset: '@vue/cli-plugin-unit-jest',

    root: [
        '<rootDir>/src/',
    ],

    moduleFileExtensions: ["js", "vue", "ts"],

    transform: {
        "^.+\\.js$": "babel-jest",
        "^.+\\.vue$": "vue-jest"
    },

    coveragePathIgnorePatterns: [
        "<rootDir>/build/",
        "<rootDir>/node_modules/"
    ]
}