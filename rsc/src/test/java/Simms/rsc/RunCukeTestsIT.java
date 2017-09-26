package Simms.rsc;

import Simms.rsc.support.Driver;
import cucumber.api.CucumberOptions;
import cucumber.api.junit.Cucumber;
import org.junit.AfterClass;
import org.junit.BeforeClass;
import org.junit.runner.RunWith;
/**
 * Initialise and close the drivers. This is the main entry from running the JUNIT tests.
 * @author Paul
 *
 */
@RunWith(Cucumber.class)
@CucumberOptions(tags = "~@manual,@pending",strict = true,format = {"html:target/cukes"})
public class RunCukeTestsIT {

    @BeforeClass
    public static void setup(){
        Driver.initialiseDriver();
    }

    @AfterClass
    public static void teardown(){
        Driver.driver.close();
    }

}
