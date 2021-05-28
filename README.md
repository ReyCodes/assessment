# Assesment for QA Engineer

Test environment uses Cypress cucumberTS. 

## Get started
**System Requirements: **

Install VSCode editor:
- Download installer from here: https://code.visualstudio.com/download

In order to pull the data, desktop must have git installed. To install git follow the instruction below.
For Mac OS and linux :
```sh
sudo apt install git
```
For Windows user, download the install in here: https://git-scm.com/download/win

When Git is installed, you can now clone this repo at the Terminal(for Ubuntu and Mac) or git bash (for Windows).
After clone, go to the file location and open it with VSCode. Use VSCode terminal and there install Node.

Install node:
-For Ubuntu and Mac
```sh
sudo apt install nodejs
```
For windows:
Download the node installer in here: https://nodejs.org/en/download/

Note: for windows machine. User needs to restart VSCode.


### TEST Installation
After everyting sytem requirement was installed and when the file was already cloned, we can now start the Test installation.

For dependency installation.
```sh
npm install
```
This will install all depencies required for this test.

Make sure no error was encountered during the installation. Depracation is fine.


### Run Test
We can now run the test when we are done with 'npm install'. **Note**: Node must be installed in the machine in order for the 'npm commands' run.

With browser:
```sh
npx cypress open
```

For headless:
at the VSCode terminal enter the following command
```sh
npm run test
```
This command will clean the reports and run headless testting to all test of ther assesment


For windows PC: To run the test, enter below command
```sh
npm run test:windows
```
This command did not include the reports cleanup, since some windows PC do not recognize rm -rF command. A workarround for this was to manually delete the **'/TestReport** folder and then run the command to generate the report.

Running headless will automatically creates screenshot for errors and screen records for every scenarios.
Screenshots and videos are stored at Cypress/reports/.  But for this test, I disabled the video capturing of the test.

### Cypress Mochawesome reporter
After the test was runned thru headless, execute this command to generate report Html file
```sh
npm run generate:html:report
```
This will merge all the reports and create a Testreport folder at the root directory that contains the "cypress-test-report.html" file.

