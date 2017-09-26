package Simms.rsc.pageobjects;

import Simms.rsc.stepdefinitions.GenericStepDef;
import org.openqa.selenium.By;

/**
 * Page object for the results page.
 */
public class ResultPage  extends GenericStepDef {
    public static final String FIRST_ITEM_ADD_TO_BASKET_BUTTON_XPATH = ".//*[@id='atbBtn-1']";


    public static boolean addFirstResultItemToBasket ()
    {
        return waitForElementToBePresentAndClick(By.xpath(FIRST_ITEM_ADD_TO_BASKET_BUTTON_XPATH));
    }


}

