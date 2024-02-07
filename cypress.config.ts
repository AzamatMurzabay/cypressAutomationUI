import { defineConfig } from "cypress"; 
require('dotenv').config()
console.log(process.env) // remove this after you've confirmed it is working

export default defineConfig({
  e2e: {
    baseUrl: "https://uitestingplayground.com/",
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
    env:{
      stage:'https://stage.pasv.us/course',
      prod:'https://coding.pasv.us/course',
      test: 'Hello World!',
      demoQA: 'https://demoqa.com',
      homeWork: 'https://play1.automationcamp.ir/expected_conditions.html',
      herokuapp: 'https://the-internet.herokuapp.com',
    }
  },
  defaultCommandTimeout: 16_000,
});
