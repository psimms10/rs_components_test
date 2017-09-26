package Simms.rsc;


import Simms.rsc.support.Driver;
import cucumber.api.Scenario;
import cucumber.api.java.After;
import cucumber.api.java.Before;

/**
 * Adding in hooks for before / after the tests.
 * Example maximise the window before tests. @TBD to consider actions on these - eg reset data
 * @author Paul
 *
 */
public class Hooks extends Driver{

    @Before
    public void beforeScenario(){
        Driver.driver.manage().window().maximize();
    }

    @After
    public void afterScenario(Scenario scenario){

    }


}
