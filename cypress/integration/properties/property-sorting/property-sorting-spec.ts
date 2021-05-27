/// <reference types="cypress" />
import {When,Then} from 'cypress-cucumber-preprocessor/steps'; 
import realStateProperties from '../../../page-objects/real-state-properties'; // Page object used for Real state Property page. This is where all of the code execution was written
let sortOption = ''; // variable for sortOption. Not an approprate but a much faster way to declared global variable. In cyrpress it is much safer to use Alias (.as(`<key>`); 

const propertyObj = new realStateProperties(); // declaring of a new constant for the page Object to be use accross the Steps.

When(`user opens the 'Sort by' dropdown list`,function(){
  cy.get('.sort-sel').trigger('click'); // Get dropdown class .sort-sel and send click to the element
});

When(`selects {string}`,function(value:string){
  sortOption = value;
  cy.get('.sort-sel').select(value); // Selecting of the sortOption given from scenario(Ex: Price Accending or A-Z...)
  cy.wait(1000); 
});

Then(`properties on the page must be ordered by {string}`,function(value:string){
  (sortOption.includes(`Price`))? propertyObj.checkPriceSorting(value,sortOption): propertyObj.checkTitleSorting(value,sortOption);
  // A condition was thrown to verify which object will be run for the given steps
  // Since we have 2 value sort, the Price sorting and Title Sorting. Code execution for the two was separated
  // For Price : checkPriceSorting object and for Title : checkTitleSorting
  // With value and sortOption as argument fo it will be used during the step execution

});
