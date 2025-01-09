@Greythrportallogin
Feature: Greythr portal login Page

   @validlogin
  Scenario Outline: User logs into the valid Credentials
    Given User on the Greythr login page
    When User  should enter the "<loginId>" in the LoginId
    And User should enter the "<password>" in the password field
    And User should click the Login button
    #Then after login user should verify the success message "Good Afternoon"

    Examples:
      | loginId | password    |
      | 2545    | Hinthu@1164 |


  @Invalidlogin
  Scenario Outline: Invalid login with incorrect credentials
    Given User on the Greythr login page
    When User  should enter the "<loginId>" in the LoginId
    And User should enter the "<password>" in the password field
    And User should click the Login button
    Then User should see an invalid error message
    Examples:
      | loginId  | password    |
      | 29098774 | Hintkh@1964 |

   @Amazonlogin
   Scenario Outline: Login with valid Credeentials
   Given User on the Amazon login page
   When User enter the "<text>" into the search box and click enter
   Then User should see the results for iphone
   And User should scroll down the page
   And User add an iPhone to the cart
   And User click on the cart icon to view the cart
   Then User should see the cart page
  #  Then User should switch to the cart window
    And User click the proceed to pay button
   
Examples:
|text|
|iphone 13 128gb|