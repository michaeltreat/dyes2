module.exports = {
  "rules": {
    "quotes": ["error", "single", { "allowTemplateLiterals": true }],
    "comma-dangle": ["error", "always-multiline"],
    "no-console": "off",
    "indent": [ "error", 2 ],
    "linebreak-style": [ "error", "unix" ]
  },
  "env": {
    "es6": true,
    "node": true,
    "mocha": true,
    "jasmine": true
  },
  "globals": {
    "__API_URI__": false,
    "__DEBUG__": false
  },
  "ecmaFeatures": {
    "modules": true,
    "experimentalObjectRestSpread": true,
    "impliedStrict": true
  },
  "extends": "eslint:recommended"
}
