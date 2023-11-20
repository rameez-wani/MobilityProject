const { defineConfig } = require("cypress");

// const preprocessor = require("@badeball/cypress-cucumber-preprocessor");
// const browserify = require("@badeball/cypress-cucumber-preprocessor/browserify");

// async function setupNodeEvents(on, config) {
//   // This is required for the preprocessor to be able to generate JSON reports after each run, and more,
//   await preprocessor.addCucumberPreprocessorPlugin(on, config);

//   on("file:preprocessor", browserify.default(config));

//   // Make sure to return the config object as it might have been modified by the plugin.
//   return config;
// }

module.exports = defineConfig
({
  reporter: 'cypress-mochawesome-reporter',
  defaultCommandTimeout:8000,
  env:
  {
   url: 'http://sap.f2wmobi.de/'
   
  },

  projectId: "onreso",
  viewportHeight:900,
  viewportWidth:1500,
  e2e: {
    //setupNodeEvents,
      // implement node event listeners here
    // specPattern: 'cypress/integration/examples/*.js'
    specPattern: 'cypress/integration/MobilityProject/*.js'
  // specPattern: 'cypress/integration/examples/BDD/*.feature'
    },
  });
