const { defineConfig } = require("cypress");

module.exports = defineConfig({
  reporter: 'cypress-mochawesome-reporter',
  e2e: {
    "baseUrl":"https://opensource-demo.orangehrmlive.com",
    //"defaultCommandTimeout":20000,
    "pageLoadTimeout": 120000,
    // "viewportWidth":375,
    // "viewportHeight": 667,

    "retries":{openMode: 2, runMode:1},
    //"watchForFileChanges":false,
    env:{

        "username": "Admin",
        "password": "admin123",
        "loginurl":"/web/index.php/auth/login"
    },
    //"video":false,
  
    setupNodeEvents(on, config) {
      require('cypress-mochawesome-reporter/plugin')(on);
    },
  },
});
