module.exports = {
    extends: ['@commitlint/config-conventional'],
    "rules": {
        "header-max-length": [2, "always", 72],
        "body-empty": [2, "never"]
    }
}
