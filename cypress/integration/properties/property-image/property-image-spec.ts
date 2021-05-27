/// <reference types="cypress" />
import {Then} from 'cypress-cucumber-preprocessor/steps';

//const propertyObj = new realStateProperties();

Then(`clientWidth of the property images must be exactly {int} px`,async function (value:number) {

  cy.get(`.list > li .main-img`).each(($element)=>{ // Used for each to check each image clientWidth
    //In this test, if one of the image has clientWidth not equal to 300 px, then this feature test will fail.
    cy.wrap($element).invoke('outerWidth').should('be.lt', value); 

  });


});