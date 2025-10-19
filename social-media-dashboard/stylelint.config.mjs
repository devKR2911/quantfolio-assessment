/** @type {import("stylelint").Config} */
export default {
  ignoreFiles: ["dist/**/**", "storybook-static/**/**"],
  extends: ["stylelint-config-standard", "stylelint-config-standard-scss"],
  rules: {
    "declaration-no-important": true,
    "selector-class-pattern": null,
  },
};
