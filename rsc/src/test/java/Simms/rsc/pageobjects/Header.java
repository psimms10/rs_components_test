package Simms.rsc.pageobjects;

import Simms.rsc.stepdefinitions.GenericStepDef;
import org.openqa.selenium.By;

/**
 * Page object for the Header - not specific page. Eg search and basket icon
 */
public class Header extends GenericStepDef {
    public static final String SEARCH_TERM_ID = "searchTerm";
    public static final String SEARCH_BUTTON_ID = "btnSearch";
    public static final String BASKET_CSS = ".icon-cart";

    /**
     *
     * @param search
     * @return - boolean - success
     */
    public static boolean searchForItem (String search)
    {
        boolean retVal = waitForElementToBePresentAndEnterText(By.id(SEARCH_TERM_ID), search);
        if (retVal) {
            retVal = waitForElementToBePresentAndClick(By.id(SEARCH_BUTTON_ID));
        }
        return retVal;
    }

    /**
     * Currently has a sleep. Should probably change this to checking that the number of items in the
     * basket has incremented when adding to basket - thus ensuring that this adding has been completed.
     * @return
     */
    public static boolean selectBasket ()
    {
        sleepSecs(5);
        return waitForElementToBePresentAndClick(By.cssSelector(BASKET_CSS));
    }
    public static boolean checkBasketText (String expText)
    {
        return waitForElementAndConfirmTextIsContained(By.cssSelector(BASKET_CSS), expText);
    }

}
