package Simms.rsc.stepdefinitions;

import Simms.rsc.pageobjects.*;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import org.junit.Assert;


/**
 * This class has methods defined from the feature files and converts it into steps that are requried for the actions
 * to be performed. It is the interface between the business facing feature, and solution facing pages.
 *
 * This should be split further down into functional areas as the project increases @TODO
 */
public class TestSteps extends GenericStepDef {

	@Given("^I am on the home page$")
	public void I_am_on_the_home_page() {
		Assert.assertTrue("I_am_on_the_home_page: Home Page failed to load", HomePage.isPageLoaded());
	}

	@When("^I search for \"([^\"]*)\"$")
	public void I_search_for(String arg1)  {
		Assert.assertTrue("I_search_for: Failed to search for item", Header.searchForItem(arg1));
	}

	@Then("^I see the item page with title \"([^\"]*)\"$")
	public void I_see_the_item_page_with_title(String arg1)  {
		Assert.assertTrue("I see the item page with title: Item title not correct", HomePage.checkItemTitleOnPage(arg1));
	}


	@Then("^I see no results for \"([^\"]*)\"$")
	public void I_see_no_results_for(String arg1)  {
		Assert.assertTrue("I am not on the no results page: Page failed to load", NoResultsPage.isPageLoaded());
		Assert.assertTrue("I don't see the no results message", NoResultsPage.checkNoResultsMessageIsShowing(arg1));
	}


	@Then("^I see the categories tab with first item \"([^\"]*)\"$")
	public void I_see_the_categories_tab_with_first_item(String arg1)  {
		Assert.assertTrue("I am on the categories page: Page failed to load", CategoriesPage.isPageLoaded());
		Assert.assertTrue("Not expected categories tab", CategoriesPage.checkCategoriesSection(arg1));
	}

	@Then("^I see breadcrumb \"([^\"]*)\"$")
	public void I_see_breadcrumb(String arg1)  {
		Assert.assertTrue("Not expected breadcrumb", CategoriesPage.checkBreadcrumb(arg1));
	}






	@When("^I add to the cart$")
	public void I_add_to_the_cart()  {
		Assert.assertTrue("Item page is not loaded: Page failed to load", ItemPage.isPageLoaded());
		Assert.assertTrue("No add to basket available: Cannot add to basket", ItemPage.addToBasket());
	}

	@When("^I select cart$")
	public void I_select_cart()  {
		Assert.assertTrue("No add to basket available: Cannot select cart", Header.selectBasket());
	}

	@Then("^I am able to checkout securely$")
	public void I_am_able_to_checkout_securely()  {
		Assert.assertTrue("I am not on the basket page: Page failed to load", BasketPage.isPageLoaded());
		Assert.assertTrue("Not having basket page title", BasketPage.checkBasketTitlePresent());
		Assert.assertTrue("Not checkout button", BasketPage.checkCheckoutButtonAvailable());
	}

	@Then("^page contains item \"([^\"]*)\"$")
	public void page_contains_item(String arg1)  {
		Assert.assertTrue("Page source does not contain expected string", checkIfPageContainsText(arg1));
	}



	@When("^I select category \"([^\"]*)\"$")
	public void I_select_category(String arg1)  {
		Assert.assertTrue("Unable to select category", CategoriesPage.selectCategoryWithText(arg1));
	}

	@When("^I add first result item to basket$")
	public void I_add_first_result_item_to_basket()  {
		Assert.assertTrue("Unable to add entry to basket", ResultPage.addFirstResultItemToBasket());
	}


}