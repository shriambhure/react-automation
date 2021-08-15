# **R**eact **A**utomation [**I**nstallation](https://react_installation_doucment_url) **A**nd **C**onfiguration

## Pre-requisites :

- VS Code
- Node JS (Version ^12.16 NPM Version ^6.14)
- Git

## Aplications/Tests Directory
  - Contains all the test file with suffix Text

## Data
  - Contains Test data .JSON files.

## Interface/Pages 
  - Contains all Application Pages

## Libraries 
  - Contains all Internal Libraries required to test execution and reporting.

## CodeceptJS Execution Command For Windows, Mac and Linux.

	- Run Specific Group **Command** : npx codeceptjs run --grep GroupName --steps
	- Run Specific Test File **Command** : npx codeceptjs run **TEST_FILE_PATH** --steps

	Note: Optional Command Parameters.
	--steps : Shows the execution steps in terminal/command promt window.

## Headless And Headfull Mode Execution Configuration.
	
	- For Headfull mode do change in .env file of **Show** variable value is set as true.
	- For Headless mode do change in .env file of **Show** variable value is set as false.

## For Showing allure report.
	- **Command :** allure serve ./TestReportLogs