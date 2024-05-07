Feature: Background example

Background:
    Given user is on sauce-demo Page
    When user login using username "<username>" and password "<password>"

@validate_cart @all
Scenario: validate empty cart
    Then user should be redirected to Dashboard page
    When user click cart buttons
    Then user should see empty Cart

@buy_product @all
Scenario Outline: User buy a product
    Then user should be redirected to Dashboard page
    And user add "<product>" to cart
    When user click add to cart buttons

Examples:
    | username        | password              | product                |
    | standard_user   | secret_sauce!         | Sauce Labs Backpack    |
    | locked_out_user | secret_sauce          | Sauce Labs Fleece Jacket |