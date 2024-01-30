import { defineConfig } from "cypress"; 

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
    }
  },
  defaultCommandTimeout: 16_000,
});
