// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })
/* import { addMatchImageSnapshotCommand } from "cypress-image-snapshot/command"


declare namespace Cypress {
    interface Chainable<Subject> {
        //need to add custom command for the new plugin

        matchImageSnapshot(snapshotName?: string): void;
    }
}

//custom settings for the plugin command
addMatchImageSnapshotCommand ({
    customSnapshotsDir: "src/snapshots",
    failureThreshold: 0.05, //Treshold for the entire image
    failureThresholdType: "percent", //Type of the treshold / image or number of pixels
    capture: "viewport", //runner, viewport or full page
    customDiffConfig: {threshold:0.1} //Treshold for each pixel
})

//denies the function of taking screenshots in the testrunner
Cypress.Commands.overwrite('matchImageSnapshot', (originalFn, snapshotName, options) => {
    if (Cypress.env('ALLOW_SCREENSHOT')) {
      originalFn(snapshotName, options)
    } else {
      cy.log(`Screenshot comparison is disabled`);
    }
}) */

import { addMatchImageSnapshotCommand } from "cypress-image-snapshot/command";

addMatchImageSnapshotCommand ({
  failureThreshold: 0.15,
  failureThresholdType: "percent"
})