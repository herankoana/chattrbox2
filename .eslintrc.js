module.exports = {
  "env": {
    "browser": true
  },
  "extends": "eslint:recommended",
  "parserOptions": {
    "ecmaVersion": 6,
    "sourceType": "module",
    "ecmaFeatures": {
      "jsx": true,
      "modules": true,
      "experimentalObjectRestSpread": true
    }
  },
  "rules": {
    "indent": [
      "error",
      2
    ],
    "linebreak-style": [
      "error",
      "windows"
    ],
    "semi": [
      "error",
      "always"
    ],
    "no-console": [
      "off",
      "always"
    ],
    "no-undef": [
      "off",
      "always"
    ]
  }

};
