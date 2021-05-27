// ***********************************************************
// This example support/index.js is processed and
// loaded automatically before your test files.
//
// This is a great place to put global configuration and
// behavior that modifies Cypress.
//
// You can change the location of this file or turn off
// automatically serving support files with the
// 'supportFile' configuration option.
//
// You can read more here:
// https://on.cypress.io/configuration
// ***********************************************************

// Import commands.js using ES2015 syntax:
import './commands'
import addContext from 'mochawesome/addContext';
let base64Image=''

// Use after hook to generate screenshot path on test fail
// Reading the image with the base64 encoding automatically generates a base64 string, ready to embed
// ### KEEP function() instead of lambda type () => , in order to be able to access scenario context using "this."
afterEach( function() {
  // if test failed
  if (this.currentTest.state === 'failed') {
      //array containing the parent folder title and scenario name
      let titlePathArray = this.currentTest.titlePath();

      const screenshot = `${Cypress.config('screenshotsFolder')}/${Cypress.spec.name}/${titlePathArray[0]} ` +
          `-- ${titlePathArray[1]} \(failed\).png`;

      // //for feature debugging purposes
      // cy.task('log', screenshot)
      // cy.task('log', titlePathArray)

      //read file and generate base64 string
      cy.readFile(screenshot, 'base64').then((file) => {
          base64Image = file;
      })
  }
})

// actions/events are not meant to execute tasks, read files, execute bash commands
// the base64 image must be generated in the after hook for now
// embed images for more reliable jenkins reports (old reports will have correct images since they'll not be link based)
Cypress.on('test:after:run', (test, runnable) => {
  if (test.state === 'failed') {
      addContext({ test }, "data:image/png;base64," + base64Image);
  }
});