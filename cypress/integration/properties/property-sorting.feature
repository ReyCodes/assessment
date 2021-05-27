@assesment 
Feature: Sorting of Properties

  Background: 
    Given browser is at qaexam.forge99 properties page

  Scenario Outline: Properties sorting ordered by <sortingRules>
	  When user opens the 'Sort by' dropdown list
	  And selects "<sortOption>"
	  Then properties on the page must be ordered by "<sortingRules>"
    Examples:
    |sortOption       |sortingRules                            |
    |Price Descending |most expensive to least expensive       |
    |Price Ascending  |least expensive to most expensive       |
    |A-Z              |alphabetized order                      |
    |Z-A              |reverse alphabetized order              |

# Instead of having 4 scenario's in the feature file, I used Cucumber Scenario Outline which is also the same as have 4 scenario's
# Each of the example row are treated as one scenario


#Below Scenario are equivalent to above scenario outline
  #  Scenario Outline: User opens https://qaexam.forge99.com/properties 
  # 	  When user opens the 'Sort by' dropdown list
  # 	  And selects "<sortOption>"
  # 	  Then properties title on the page must be sorted by "<sortingRules>"
  #     Examples:
  #     |sortOption       |sortingRules                            |
 
  # Scenario: User opens https://qaexam.forge99.com/properties 
  #   When the user opens the “Sort by” dropdown
  #   And the user selects “Price Ascending”
  #   Then the properties on the page must be ordered from 

  # Scenario: User opens https://qaexam.forge99.com/properties/
  #   When user opens the 'Sort by' dropdown list
  #   And selects "A-Z"
  #   Then the properties on the page must be alphabetized by .prop-title*

  # Scenario: User opens https://qaexam.forge99.com/properties 
  #   When the user opens the Sort by dropdown
  #   And the user selects “Z-A”
  #   Then the properties on the page must be ordered from Z-A by .prop-title*

  # Scenario: User opens https://qaexam.forge99.com/properties 
  #   Given that the page finishes loading
  #   Then the clientWidth of the property images must be exactly 300px.
