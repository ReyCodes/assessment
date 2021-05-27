@assesment
Feature: Property UI: Images client sizes

    Background: 
    Given browser is at qaexam.forge99 properties page

  Scenario: Properties image width should be is 300px
    Then clientWidth of the property images must be exactly 300 px


# This test will check Property image clientwidth.
# It is run through for each loop which returns fails if one of the image has size not equal to 300px  