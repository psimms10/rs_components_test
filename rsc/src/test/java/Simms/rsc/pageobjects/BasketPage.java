package Simms.rsc.pageobjects;

import Simms.rsc.stepdefinitions.GenericStepDef;
import org.openqa.selenium.By;

/**
 * Page object for the Basket summary page containing details on that page.
 */
public class BasketPage extends GenericStepDef {
    public static final String BASKET_PAGE_URL = "https://uk.rs-online.com/web/ca/basketsummary/";

    public static final String CHECKOUT_BUTTON_ID = "checkoutSecurelyAndPuchBtn";
    public static final String BASKET_TITLE_XPATH = ".//*[@id='shoppingBasketForm']/div/div[3]/div/div[2]";
    public static final String BASKET_TITLE_TEXT = "My basket";
    /**
     * Checks if the page is loaded - should be called at the start of testing on this page
     * @return - boolean - success
     */
    public static boolean isPageLoaded () {
        // Check URL start
        System.out.println(driver.getCurrentUrl());
        return driver.getCurrentUrl().contains(BASKET_PAGE_URL);
    }

    public static boolean checkBasketTitlePresent ()
    {
        return waitForElementAndConfirmTextIsContained(By.xpath(BASKET_TITLE_XPATH), BASKET_TITLE_TEXT);
    }

    public static boolean checkCheckoutButtonAvailable ()
    {
        boolean retVal = waitForElementToBePresent(By.id(CHECKOUT_BUTTON_ID));
        return retVal;
    }

}

