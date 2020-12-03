# Powerinbox - Automation task

The attached project have the solution of the task
Testing omdb api using mocha/chai, supertest in javascript ES6
## Clone the project from github

## Installation

Use [Nodejs](https://nodejs.org/en/download/) and package manager [npm](https://www.npmjs.com/get-npm) to install mocha/chai, supertest.
Also in the same line mochawesome-report will be installed for the reports
For UI testing used cypress and the installation in the same npm line

```bash
npm i --save-dev subertest mocha chai mochawesome cypress @babel/cli @babel/core @babel/node @babel/register @babel/preset-env
```

## **_API_** Test cases explanation
In the 6 test cases tested the functionality of sending parameters to the api.
In some test cases testing sending different parameters and expecting the descent result, and in another we tested the negative side by sending wrong/not mach params
Also we cover cases that gets != 200 response code by sending wrong apikey or not sending apikey at all

###### How to Execute:
In the terminal navigate to the cloned repo and run the following command
```bash
npm test -- --reporter mochawesome
```
The Suit will be executed, and the all results will be collected under mochawesome-report folder
a json file also will be created beside the HTML.

### **Please note:** Test case 2 expected to fail due a weird error message. Looks like a bug.

## **_UI_** Test case explanation
using cypress for the first time.
Navigating to YNET website and locating the logo after appears in the dom

###### How to Execute:
In the terminal navigate to the cloned repo and run the following command
```bash
node_modules/.bin/cypress open
```
A cypress wizard will open, click on the logo_spec.js in the list. an automatic Chrome window will be launched, and the test will start running