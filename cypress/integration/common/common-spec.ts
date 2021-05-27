/// <reference types="cypress" />
import {Given} from 'cypress-cucumber-preprocessor/steps';

Given(`browser is at qaexam.forge99 properties page`,function(){ 
  cy.visit(``); //Base URL were already set to https://qaexam.forge99.com/properties at the cypress.json.
  //If not set, cy.visit() should contain the page URL. Or Set the base URL when running the test using CYPRESS_BASE_URL terminal command
});

//This page is intended for common steps like those backgound steps.