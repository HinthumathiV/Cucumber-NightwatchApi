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

