package Simms.rsc.pageobjects;

import Simms.rsc.stepdefinitions.GenericStepDef;
import org.openqa.selenium.By;

/**
 * Page object for the detailed item page. May need specifying better for different items
 */
public class ItemPage  extends GenericStepDef {
    // Is there a better item for this? @TODO
    public static final String ADD_TO_BASKET_XPATH = ".//*[@id='addToCartForm_35007133:addToOrder']";

    /**
     * Checks if the page is loaded - should be called at the start of testing on this page
     * @return - boolean - success
     */
    public static boolean isPageLoaded () {
        return waitForElementToBePresent(By.xpath(ADD_TO_BASKET_XPATH));
    }

    public static boolean addToBasket () {
        return waitForElementToBePresentAndClick(By.xpath(ADD_TO_BASKET_XPATH));
    }

}

