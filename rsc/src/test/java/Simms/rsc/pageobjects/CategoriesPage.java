package Simms.rsc.pageobjects;

import Simms.rsc.stepdefinitions.GenericStepDef;
import org.openqa.selenium.By;

/**
 * Page object for the Categories page (where a list of categories are there) containing details on that page.
 */
public class CategoriesPage extends GenericStepDef {
    public static final String CATEGORIES_PAGE_START_URL = "http://uk.rs-online.com/web/c/";

    public static final String CATEGORY_BREADCRUMB_XPATH = ".//*[@id='breadcrumb']/ul/li[3]/a";
    public static final String CATEGORY_FIRST_ITEM_XPATH = ".//*[@id='categories']/ul/li[1]/div/a";
    public static final String CATEGORIES_TITLE_XPATH = ".//*[@id='categories']/div";
    public static final String CATEGORIES_TITLE_TEXT = "CATEGORIES";

    /**
     * Checks if the page is loaded - should be called at the start of testing on this page
     * @return - boolean - success
     */
    public static boolean isPageLoaded () {
        // Check URL start
        return driver.getCurrentUrl().contains(CATEGORIES_PAGE_START_URL);
    }

    public static boolean checkBreadcrumb (String breadcrumb)
    {
        boolean retVal = waitForElementToBePresent(By.xpath(CATEGORY_BREADCRUMB_XPATH));
        if (retVal) {
            retVal = waitForElementAndConfirmTextIsContained(By.xpath(CATEGORY_BREADCRUMB_XPATH), breadcrumb);
        }
        return retVal;
    }

    public static boolean checkCategoriesSection (String categoryItem1)
    {
        boolean retVal = waitForElementToBePresent(By.xpath(CATEGORIES_TITLE_XPATH));
        if (retVal) {
            retVal = waitForElementAndConfirmTextIsContained(By.xpath(CATEGORIES_TITLE_XPATH), CATEGORIES_TITLE_TEXT);
            if (retVal) {
                retVal = waitForElementAndConfirmTextIsContained(By.xpath(CATEGORY_FIRST_ITEM_XPATH), categoryItem1);
            }
        }
        return retVal;
    }


    public static boolean selectCategoryWithText (String categoryItem)
    {
        return waitForElementToBePresentAndClick(By.linkText(categoryItem));
    }
}

