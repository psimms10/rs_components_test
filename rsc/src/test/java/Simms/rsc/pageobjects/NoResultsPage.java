package Simms.rsc.pageobjects;

import Simms.rsc.stepdefinitions.GenericStepDef;
import org.openqa.selenium.By;

/**
 * Page object for after search with no results.
 */
public class NoResultsPage extends GenericStepDef {
    public static final String NO_RESULTS_PAGE_URL_CONTAINS = "ossc=Zero";

    public static final String NO_RESULTS_HEADER_XPATH = ".//*[@id='zeroResultBody']/h2[1]";
    public static final String NO_RESULTS_HEADER_STRING = "We couldn't find any results for";


    /**
     * Checks if the page is loaded - should be called at the start of testing on this page
     *
     * @return - boolean - success
     */
    public static boolean isPageLoaded() {
        // Check URL start
        return driver.getCurrentUrl().contains(NO_RESULTS_PAGE_URL_CONTAINS);
    }

     public static boolean checkNoResultsMessageIsShowing(String noResultsStr) {
        boolean retVal = waitForElementToBePresent(By.xpath(NO_RESULTS_HEADER_XPATH));
        if (retVal) {
            retVal = waitForElementAndConfirmTextIsContained(By.xpath(NO_RESULTS_HEADER_XPATH), NO_RESULTS_HEADER_STRING);
            if (retVal) {
                retVal = waitForElementAndConfirmTextIsContained(By.xpath(NO_RESULTS_HEADER_XPATH), noResultsStr);
            }
        }
        return retVal;
    }

}

