# How to run the Test #

**Prerequisite**
1. Node.js

**Run this project**
- Open editor
- Create and run new project with **package.json** file 
    - Create project folder: `mkdir foldername`
    - Enter into this folder: `cd foldername`
    - Create package.json file: `npm i init`
    - Install cypress: `npm install cypress --save-dev`
    - Run cypress test runner: `node_modules\.bin\cypress open`
    - Choose test file name from Cypress test runner. 

**Important notes**

- The structure of this project
    - This project is written in Page Object style. 
    - Cypress only allow CSS and all the CSS selector's paths are stored in [cypress\support\pageObject](cypress\support\pageObject) folder.
    - All specific variables are (ex: specific product name, specific country name etc) defined in [\cypress\fixtures\variables.json](\cypress\fixtures\variables.json) file.
    - All test cases are written in [\cypress\integration\testCases](\cypress\integration\testCases) folder.
    - You can find the test site URL in [cypress.json](cypress.json) file as an environment variable. 
    <br /><br />
- About webdriver configuration
    - Like Selenium or Cucumber, Cypress doesnot need to configure webdriver cause cypress test cases directly run from chrome browser. If you want to change the browser. Just go to Cypress test runner and change the browser.
    <br /><br />
- For auto suggestion in editor: write `<reference types="Cypress"/>` in the top of your test case file. 
- If you want, you can overwrite configuration data or variable (ex: `execTimeout`, `browsers` etc) in **cypress.json** file.    
    
Project is ready to run. Execute all the commands from Run this project section and enjoy the automatic test.
