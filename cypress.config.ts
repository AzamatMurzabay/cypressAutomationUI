import { defineConfig } from "cypress"; 

const xlsx = require("node-xlsx").default;
const fs = require("fs"); // for file
const path = require("path")

require('dotenv').config()
console.log(process.env) // remove this after you've confirmed it is working

export default defineConfig({
  reporter: 'cypress-mochawesome-reporter',
  e2e: {
    baseUrl: "https://uitestingplayground.com/",
    setupNodeEvents(on, config) {
      //reporter 
      require('cypress-mochawesome-reporter/plugin')(on);

      // reading excell doc from fixture 

      on("task", {
        parseXlsx({ filePath }) {
          return new Promise((resolve, reject) => {
            try {
              const jsonData = xlsx.parse(fs.readFileSync(filePath));
              resolve(jsonData);
            } catch (e) {
              reject(e);
            }
          });
        },
      });
      // implement node event listeners here
    },
    env:{
      stage:'https://stage.pasv.us',
      prod:'https://coding.pasv.us/course',
      test: 'Hello World!',
      demoQA: 'https://demoqa.com',
      homeWork: 'https://play1.automationcamp.ir/expected_conditions.html',
      automationCamp: 'https://play1.automationcamp.ir',
      herokuapp: 'https://the-internet.herokuapp.com',
      email: 'box4usa@gmail.com',
      password: 'Kenessary04!'
    }
  }, 
  retries: {
    runMode: 3, 
    openMode: 2, 
  },
  video: true,
  screenshotOnRunFailure: true,
  defaultCommandTimeout: 16_000,
  reporter: 'cypress-mochawesome-reporter',
  reporterOptions: {
    charts: true,
    reportPageTitle: 'LacutrePASV',
    embeddedScreenshots: true,
    inlineAssets: true,
    saveAllAttempts: false,
  },
});
