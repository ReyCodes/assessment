var currency = require('currency.js'); //Currency JS was use to have an easier Currency conversion to integer. Currency JS was an object.

class realStateProperties{ //Class name

  checkPriceSorting(value:string,sortOption:string){ 

    cy.get('li > .prop-det > .list-price > span').then(($element)=>{ //Select all prices list from class 'li > .prop-det > .list-price > span'
      // Used two array variables in order to have Before and after sort value of the price
      // This array variable will hold the list of prices base from the current page sorting.
      let expectedPriceSort = $element.toArray().map($el => currency($el.innerText)['value']); 
      let actualPriceSort = $element.toArray().map($el => currency($el.innerText)['value']); 

      if(sortOption == 'Price Descending'){
         //It is now the time to compare the actual page descending sort result with the Exact price descending sort.
         //'.sort((a, b) => b - a') was used to get the correct descending value.
         //If one of the price are not in the same arranges as the expected. Then the Test will return fail.
        assert.deepEqual(actualPriceSort,expectedPriceSort.sort((a, b) => b - a),`Srted by ${value}: \n Actual Price sort: ${actualPriceSort} \n Expected: ${expectedPriceSort.sort((a, b) => b - a)}`);
      }
      else if(sortOption == 'Price Ascending'){
        //It is now the time to compare the actual page ascending sort result with the Exact price ascending sort.
        //'.sort((a, b) => a - b') was used to get the correct asscending value.
        //If one of the price are not in the same arranges as the expected. Then the Test will return fail.
        assert.deepEqual(actualPriceSort,expectedPriceSort.sort((a, b) => a - b),`Sorted by ${value}: \n Actual Price sort: ${actualPriceSort} \n Expected: ${expectedPriceSort.sort((a, b) => a - b)}`);
      }
    });
  }

  checkTitleSorting(value:string,sortOption:string){

    cy.get('li > .prop-det > .prop-title > .listing-item').then(($element)=>{//Select all Title list from class 'li > .prop-det > .prop-title > .listing-item'
      // Used two array variables in order to have Before and After sort Title list
      // This array variable will hold the list of Title base from the current page sorting.
      let expectedTitleSort = $element.toArray().map($el => $el.innerText);
      let actualTitleSort = $element.toArray().map($el => $el.innerText);
  
      if(sortOption == 'A-Z'){
        //It is now the time to compare the actual page Title A-Z sort result with the Expected A-Z title sort.
        //'.sort()' was used to get the correct A-Z title sort
        //If one of the title are not in the same arranges as the expected. Then the Test will return fail.
        assert.deepEqual(actualTitleSort, expectedTitleSort.sort(),`Not sorted by ${value}: \n Actual Price sort: ${actualTitleSort} \n Expected: ${expectedTitleSort.sort()}`);
      }
      else if(sortOption == 'Z-A'){
        //It is now the time to compare the actual page Title Z-A sort result with the Expected Z-A title sort.
        //'.sort().reverse()' was used to get the correct Z-A title sort
        //If one of the title are not in the same arranges as the expected. Then the Test will return fail.
        assert.deepEqual(actualTitleSort, expectedTitleSort.sort().reverse(),`Not sorted by ${value}: \n Actual Price sort: ${actualTitleSort} \n Expected: ${expectedTitleSort.sort().reverse()}`);
      }

    });
  }

}

export default realStateProperties; // Export the class in order to be used outside from where it is declared