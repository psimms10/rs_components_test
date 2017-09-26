Feature: As a customer, I wish to use the search functionality to find items with different methods.

Scenario Outline: Search with single result
  Given I am on the home page
  When I search for <item>
  Then I see the item page with title <title>
  Examples:
  | item | title |
  | "875-7987" | "Wera 25 Pieces VDE/1000 V Plumbing Tool Kit" |
  | "Wera 25 Pieces VDE/1000 V Plumbing Tool Kit" | "Wera 25 Pieces VDE/1000 V Plumbing Tool Kit" |

Scenario: Search with no results
  Given I am on the home page
  When I search for "no result hahaha"
  Then I see no results for "no result hahaha"

Scenario: Search with a category
  Given I am on the home page
  When I search for "battery"
  Then I see the categories tab with first item "Automotive Battery Maintenance"
  And I see breadcrumb "Batteries"