package Simms.rsc;

import cucumber.api.cli.Main;

/**
 * A runner for cucumber from the command line. @TBD to get this working 
 * @author Paul
 *
 */
public class CucumberRunner {
    public static void main(String[] args) throws Throwable {
    	RunCukeTestsIT.setup();
        Hooks hooks = new Hooks();
        hooks.beforeScenario();
        Runtime.getRuntime().addShutdownHook(new Thread() {
            public void run() {
                RunCukeTestsIT.teardown();
            }
        });
        Main.main(args);
    }
}
