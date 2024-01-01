const { defineConfig } = require("cypress");

module.exports = defineConfig({
  projectId: 'bjf1gf',
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});
