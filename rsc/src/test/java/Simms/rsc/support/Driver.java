package Simms.rsc.support;

import org.openqa.selenium.WebDriver;
import org.openqa.selenium.chrome.ChromeDriver;
import org.openqa.selenium.chrome.ChromeOptions;

/**
 * Sets up the webdriver instance. Using Chrome here as there are some issues with
 * Firefox versions.
 * @author Paul
 *
 */
public class Driver {

    public static WebDriver driver;

    /**
     * Fires up a chrome browser which is then used by the pageObjects to trigger browser events.
     */
    public static void initialiseDriver(){
        System.setProperty("webdriver.chrome.driver", "chromedriver.exe");
        ChromeOptions co = new ChromeOptions();
        co.addArguments("enable-popup-blocking"); // @TODO currently not blocking the survey
        co.addArguments("start-maximized");
        driver = new ChromeDriver(co);
        }

    }

