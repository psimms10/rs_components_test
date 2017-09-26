# rs_components_test
Test requested by RS-components. With 3 search tests and 2 end to end.
The test project was written in Java, utilising Cucumber for defining the features and scenarios, and Selenium to interact with the website.

It was created on Windows 8 within the InelliJ IDE. There is a pom.xml file included that should create the dependencies when loaded.

Currently it is set up to run with Chrome as there are some version incompatibilities with Firefox and Selenium.

The chromedriver.exe is placed in the project root directory where it is invoked from.

To run the tests choose Simms.rsc.RunCukeTestsIT.java and run it in IntelliJ.

Unfortunately due to time constraints in preparing this test, there are a few things missing, but most notably:

I haven't been able to test running this on a clean machine in case any problem in building and running.

There is the survey popup that sometimes comes up and the tests don't handle this well yet, and may fail.

Currently there is a timing issue waiting for an item to be added to the cart (should check that the cart number increases). I have added a sleep here which is not good practice.

TestSteps class should be split into more functionally grouped classes to ease readability.

Should think about adding tags to the tests (eg search, endtoene, smoke etc). Also setup and teardown (eg deleteAllCookies).

Code is structured so there is a class for each page (Page object) to minimise maintenance (+ header). The main step definition abstract the page objects from the cucumber tests. Asserts happen at the step definition level, page objects methods typically returning a boolean for its success.

Currently for ease and speed to create it is all using static. Should instantiate classes in a fuller solution for performance.

Tests should be run from a test data database to ensure consistency (eg if a product is sold out it cannot then be added to a basket - this should be controlled).

Please contact me should you require any further information. Should there be problems running, but you can review the tests and are happy, I am happy to bring my laptop to an interview if required to ensure smooth running.
