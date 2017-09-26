package Simms.rsc.pageobjects;

import org.openqa.selenium.By;

import Simms.rsc.stepdefinitions.GenericStepDef;

/**
 * This class handle the page specific details for the Home Page
 *
 * @author Paul
 *
 */
public class HomePage extends GenericStepDef {
    public static final String HOME_PAGE_URL = "http://uk.rs-online.com/web/";

    public static final String ITEM_PAGE_TITLE_XPATH = ".//*[@id='mainContent']/div[1]/div[1]/div[1]/div[1]/div/h1";


    /**
     * Checks if the page is loaded - should be called at the start of testing on this page
     * @return - boolean - success
     */
    public static boolean isPageLoaded () {
        loadPage(HOME_PAGE_URL);
        // Check URL start
        return driver.getCurrentUrl().startsWith(HOME_PAGE_URL);
    }

    public static boolean checkItemTitleOnPage (String title)
    {
        boolean retVal = waitForElementToBePresent(By.xpath(ITEM_PAGE_TITLE_XPATH));
        if (retVal) {
            retVal = waitForElementToBePresentAndConfirmTextAsExpected(By.xpath(ITEM_PAGE_TITLE_XPATH), title);
        }
        return retVal;
    }

}
