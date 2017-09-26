Feature: End to end tests from the home page to the purchase page


Scenario: End to end from a search
  Given I am on the home page
  When I search for "Wera 25 Pieces VDE/1000 V Plumbing Tool Kit"
  And I add to the cart
  And I select cart
  Then I am able to checkout securely
  And page contains item "Wera 25 Pieces VDE/1000 V Plumbing Tool Kit"

Scenario: End to end from categories navigation
  Given I am on the home page
  When I search for "battery"
  And I select category "Automotive Battery Maintenance"
  And I select category "Battery Hydrometers"
  And I add first result item to basket
  And I select cart
  Then I am able to checkout securely
  And page contains item "Glass Battery Hydrometer"



