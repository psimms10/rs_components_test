$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("Simms/rsc/EndToEnd.feature");
formatter.feature({
  "line": 1,
  "name": "End to end tests from the home page to the purchase page",
  "description": "",
  "id": "end-to-end-tests-from-the-home-page-to-the-purchase-page",
  "keyword": "Feature"
});
formatter.before({
  "duration": 1121683173,
  "status": "passed"
});
formatter.scenario({
  "line": 4,
  "name": "End to end from a search",
  "description": "",
  "id": "end-to-end-tests-from-the-home-page-to-the-purchase-page;end-to-end-from-a-search",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 5,
  "name": "I am on the home page",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "I search for \"Wera 25 Pieces VDE/1000 V Plumbing Tool Kit\"",
  "keyword": "When "
});
formatter.step({
  "line": 7,
  "name": "I add to the cart",
  "keyword": "And "
});
formatter.step({
  "line": 8,
  "name": "I select cart",
  "keyword": "And "
});
formatter.step({
  "line": 9,
  "name": "I am able to checkout securely",
  "keyword": "Then "
});
formatter.step({
  "line": 10,
  "name": "page contains item \"Wera 25 Pieces VDE/1000 V Plumbing Tool Kit\"",
  "keyword": "And "
});
formatter.match({
  "location": "TestSteps.I_am_on_the_home_page()"
});
formatter.result({
  "duration": 15811186261,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Wera 25 Pieces VDE/1000 V Plumbing Tool Kit",
      "offset": 14
    }
  ],
  "location": "TestSteps.I_search_for(String)"
});
formatter.result({
  "duration": 12934979559,
  "status": "passed"
});
formatter.match({
  "location": "TestSteps.I_add_to_the_cart()"
});
formatter.result({
  "duration": 2425782658,
  "status": "passed"
});
formatter.match({
  "location": "TestSteps.I_select_cart()"
});
formatter.result({
  "duration": 15021391354,
  "status": "passed"
});
formatter.match({
  "location": "TestSteps.I_am_able_to_checkout_securely()"
});
formatter.result({
  "duration": 3775055507,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Wera 25 Pieces VDE/1000 V Plumbing Tool Kit",
      "offset": 20
    }
  ],
  "location": "TestSteps.page_contains_item(String)"
});
formatter.result({
  "duration": 1024501805,
  "status": "passed"
});
formatter.after({
  "duration": 63632,
  "status": "passed"
});
formatter.before({
  "duration": 183526795,
  "status": "passed"
});
formatter.scenario({
  "line": 12,
  "name": "End to end from categories navigation",
  "description": "",
  "id": "end-to-end-tests-from-the-home-page-to-the-purchase-page;end-to-end-from-categories-navigation",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 13,
  "name": "I am on the home page",
  "keyword": "Given "
});
formatter.step({
  "line": 14,
  "name": "I search for \"battery\"",
  "keyword": "When "
});
formatter.step({
  "line": 15,
  "name": "I select category \"Automotive Battery Maintenance\"",
  "keyword": "And "
});
formatter.step({
  "line": 16,
  "name": "I select category \"Battery Hydrometers\"",
  "keyword": "And "
});
formatter.step({
  "line": 17,
  "name": "I add first result item to basket",
  "keyword": "And "
});
formatter.step({
  "line": 18,
  "name": "I select cart",
  "keyword": "And "
});
formatter.step({
  "line": 19,
  "name": "I am able to checkout securely",
  "keyword": "Then "
});
formatter.step({
  "line": 20,
  "name": "page contains item \"Glass Battery Hydrometer\"",
  "keyword": "And "
});
formatter.match({
  "location": "TestSteps.I_am_on_the_home_page()"
});
formatter.result({
  "duration": 8358719831,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "battery",
      "offset": 14
    }
  ],
  "location": "TestSteps.I_search_for(String)"
});
formatter.result({
  "duration": 9404131301,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Automotive Battery Maintenance",
      "offset": 19
    }
  ],
  "location": "TestSteps.I_select_category(String)"
});
formatter.result({
  "duration": 3234596739,
  "error_message": "org.openqa.selenium.WebDriverException: unknown error: Element \u003ca href\u003d\"http://uk.rs-online.com/web/c/batteries/automotive-battery-maintenance/\" title\u003d\"...\"\u003eAutomotive Battery Maintenance\u003c/a\u003e is not clickable at point (312, 252). Other element would receive the click: \u003cdiv class\u003d\"acsModalBackdrop acsAbandonButton\" data-isbackdrop\u003d\"true\"\u003e...\u003c/div\u003e\n  (Session info: chrome\u003d60.0.3112.113)\n  (Driver info: chromedriver\u003d2.30.477700 (0057494ad8732195794a7b32078424f92a5fce41),platform\u003dWindows NT 6.2.9200 x86_64) (WARNING: The server did not provide any stacktrace information)\nCommand duration or timeout: 946 milliseconds\nBuild info: version: \u00272.45.0\u0027, revision: \u00275017cb8e7ca8e37638dc3091b2440b90a1d8686f\u0027, time: \u00272015-02-27 09:10:26\u0027\nSystem info: host: \u0027KYRIAKOS\u0027, ip: \u0027192.168.1.101\u0027, os.name: \u0027Windows 8\u0027, os.arch: \u0027amd64\u0027, os.version: \u00276.2\u0027, java.version: \u00271.8.0_131\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCapabilities [{applicationCacheEnabled\u003dfalse, rotatable\u003dfalse, mobileEmulationEnabled\u003dfalse, networkConnectionEnabled\u003dfalse, chrome\u003d{chromedriverVersion\u003d2.30.477700 (0057494ad8732195794a7b32078424f92a5fce41), userDataDir\u003dC:\\Users\\Maria\\AppData\\Local\\Temp\\scoped_dir4548_615}, takesHeapSnapshot\u003dtrue, pageLoadStrategy\u003dnormal, databaseEnabled\u003dfalse, handlesAlerts\u003dtrue, hasTouchScreen\u003dfalse, version\u003d60.0.3112.113, platform\u003dWIN8, browserConnectionEnabled\u003dfalse, nativeEvents\u003dtrue, acceptSslCerts\u003dtrue, locationContextEnabled\u003dtrue, webStorageEnabled\u003dtrue, browserName\u003dchrome, takesScreenshot\u003dtrue, javascriptEnabled\u003dtrue, cssSelectorsEnabled\u003dtrue, unexpectedAlertBehaviour\u003d}]\nSession ID: 1ff4185541ca96f9a7148258b5b0431c\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:62)\r\n\tat sun.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\r\n\tat java.lang.reflect.Constructor.newInstance(Constructor.java:423)\r\n\tat org.openqa.selenium.remote.ErrorHandler.createThrowable(ErrorHandler.java:204)\r\n\tat org.openqa.selenium.remote.ErrorHandler.throwIfResponseFailed(ErrorHandler.java:156)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:599)\r\n\tat org.openqa.selenium.remote.RemoteWebElement.execute(RemoteWebElement.java:268)\r\n\tat org.openqa.selenium.remote.RemoteWebElement.click(RemoteWebElement.java:79)\r\n\tat Simms.rsc.stepdefinitions.GenericStepDef.clickElement(GenericStepDef.java:123)\r\n\tat Simms.rsc.stepdefinitions.GenericStepDef.waitForElementToBePresentAndClick(GenericStepDef.java:70)\r\n\tat Simms.rsc.pageobjects.CategoriesPage.selectCategoryWithText(CategoriesPage.java:50)\r\n\tat Simms.rsc.stepdefinitions.TestSteps.I_select_category(TestSteps.java:84)\r\n\tat ✽.And I select category \"Automotive Battery Maintenance\"(Simms/rsc/EndToEnd.feature:15)\r\n",
  "status": "failed"
});
formatter.match({
  "arguments": [
    {
      "val": "Battery Hydrometers",
      "offset": 19
    }
  ],
  "location": "TestSteps.I_select_category(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "TestSteps.I_add_first_result_item_to_basket()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "TestSteps.I_select_cart()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "TestSteps.I_am_able_to_checkout_securely()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "Glass Battery Hydrometer",
      "offset": 20
    }
  ],
  "location": "TestSteps.page_contains_item(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.after({
  "duration": 20527,
  "status": "passed"
});
formatter.uri("Simms/rsc/Search.feature");
formatter.feature({
  "line": 1,
  "name": "As a customer, I wish to use the search functionality to find items with different methods.",
  "description": "",
  "id": "as-a-customer,-i-wish-to-use-the-search-functionality-to-find-items-with-different-methods.",
  "keyword": "Feature"
});
formatter.before({
  "duration": 162318126,
  "status": "passed"
});
formatter.scenario({
  "line": 9,
  "name": "Search with single result",
  "description": "",
  "id": "as-a-customer,-i-wish-to-use-the-search-functionality-to-find-items-with-different-methods.;search-with-single-result;;2",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 4,
  "name": "I am on the home page",
  "keyword": "Given "
});
formatter.step({
  "line": 5,
  "name": "I search for \"875-7987\"",
  "matchedColumns": [
    0
  ],
  "keyword": "When "
});
formatter.step({
  "line": 6,
  "name": "I see the item page with title \"Wera 25 Pieces VDE/1000 V Plumbing Tool Kit\"",
  "matchedColumns": [
    1
  ],
  "keyword": "Then "
});
formatter.match({
  "location": "TestSteps.I_am_on_the_home_page()"
});
formatter.result({
  "duration": 5945414550,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "875-7987",
      "offset": 14
    }
  ],
  "location": "TestSteps.I_search_for(String)"
});
formatter.result({
  "duration": 9409371718,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Wera 25 Pieces VDE/1000 V Plumbing Tool Kit",
      "offset": 32
    }
  ],
  "location": "TestSteps.I_see_the_item_page_with_title(String)"
});
formatter.result({
  "duration": 1637083867,
  "status": "passed"
});
formatter.after({
  "duration": 25316,
  "status": "passed"
});
formatter.before({
  "duration": 33058621,
  "status": "passed"
});
formatter.scenario({
  "line": 10,
  "name": "Search with single result",
  "description": "",
  "id": "as-a-customer,-i-wish-to-use-the-search-functionality-to-find-items-with-different-methods.;search-with-single-result;;3",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 4,
  "name": "I am on the home page",
  "keyword": "Given "
});
formatter.step({
  "line": 5,
  "name": "I search for \"Wera 25 Pieces VDE/1000 V Plumbing Tool Kit\"",
  "matchedColumns": [
    0
  ],
  "keyword": "When "
});
formatter.step({
  "line": 6,
  "name": "I see the item page with title \"Wera 25 Pieces VDE/1000 V Plumbing Tool Kit\"",
  "matchedColumns": [
    1
  ],
  "keyword": "Then "
});
formatter.match({
  "location": "TestSteps.I_am_on_the_home_page()"
});
formatter.result({
  "duration": 6036079437,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Wera 25 Pieces VDE/1000 V Plumbing Tool Kit",
      "offset": 14
    }
  ],
  "location": "TestSteps.I_search_for(String)"
});
formatter.result({
  "duration": 8911824293,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Wera 25 Pieces VDE/1000 V Plumbing Tool Kit",
      "offset": 32
    }
  ],
  "location": "TestSteps.I_see_the_item_page_with_title(String)"
});
formatter.result({
  "duration": 1388682369,
  "status": "passed"
});
formatter.after({
  "duration": 23263,
  "status": "passed"
});
formatter.before({
  "duration": 7355331,
  "status": "passed"
});
formatter.scenario({
  "line": 12,
  "name": "Search with no results",
  "description": "",
  "id": "as-a-customer,-i-wish-to-use-the-search-functionality-to-find-items-with-different-methods.;search-with-no-results",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 13,
  "name": "I am on the home page",
  "keyword": "Given "
});
formatter.step({
  "line": 14,
  "name": "I search for \"no result hahaha\"",
  "keyword": "When "
});
formatter.step({
  "line": 15,
  "name": "I see no results for \"no result hahaha\"",
  "keyword": "Then "
});
formatter.match({
  "location": "TestSteps.I_am_on_the_home_page()"
});
formatter.result({
  "duration": 5592385351,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "no result hahaha",
      "offset": 14
    }
  ],
  "location": "TestSteps.I_search_for(String)"
});
formatter.result({
  "duration": 7059781392,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "no result hahaha",
      "offset": 22
    }
  ],
  "location": "TestSteps.I_see_no_results_for(String)"
});
formatter.result({
  "duration": 2713535519,
  "status": "passed"
});
formatter.after({
  "duration": 26001,
  "status": "passed"
});
formatter.before({
  "duration": 13308017,
  "status": "passed"
});
formatter.scenario({
  "line": 17,
  "name": "Search with a category",
  "description": "",
  "id": "as-a-customer,-i-wish-to-use-the-search-functionality-to-find-items-with-different-methods.;search-with-a-category",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 18,
  "name": "I am on the home page",
  "keyword": "Given "
});
formatter.step({
  "line": 19,
  "name": "I search for \"battery\"",
  "keyword": "When "
});
formatter.step({
  "line": 20,
  "name": "I see the categories tab with first item \"Automotive Battery Maintenance\"",
  "keyword": "Then "
});
formatter.step({
  "line": 21,
  "name": "I see breadcrumb \"Batteries\"",
  "keyword": "And "
});
formatter.match({
  "location": "TestSteps.I_am_on_the_home_page()"
});
formatter.result({
  "duration": 5108389525,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "battery",
      "offset": 14
    }
  ],
  "location": "TestSteps.I_search_for(String)"
});
formatter.result({
  "duration": 7256940525,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Automotive Battery Maintenance",
      "offset": 42
    }
  ],
  "location": "TestSteps.I_see_the_categories_tab_with_first_item(String)"
});
formatter.result({
  "duration": 1755035323,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Batteries",
      "offset": 18
    }
  ],
  "location": "TestSteps.I_see_breadcrumb(String)"
});
formatter.result({
  "duration": 545996819,
  "status": "passed"
});
formatter.after({
  "duration": 28053,
  "status": "passed"
});
});