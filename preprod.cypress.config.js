const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    //"baseUrl":"https://opensource-demo.orangehrmlive.com",
    //"defaultCommandTimeout":20000,
    "pageLoadTimeout": 120000,
    // "viewportWidth":375,
    // "viewportHeight": 667,

    "retries":{openMode: 2, runMode:1},
    env:{

        "username": "erkgnkj",
        "password": "iufrioj4",
        "loginurl":"https://preprod.opensource-demo.orangehrmlive.com"
    },
  
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});
