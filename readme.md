# **R**eact Automation <em>[**I**nstallation](https://wiki.entrata.com/index.php/React_or_app_installation)</em> And Configuration
## Pre-requisites :

- PhpStorm (Version 2018.1.4 or Above).
- Node JS ( Version ^12.16. NPM version ^6.14 ).
- Read Access of EntrataReactAutomation
- Git

## Group Annotation :

**1. Prerequisite :**
 
    - @Prerequisites - Group for all Product
    - @Prerequisites_ProductName - Group for Specific product                         

**2. Smoke :**

    - @Smoke** - Group for all Product
    - @TC_TESTCASEID - Group for Specific product

**3. Sanity :**
    
    - @Sanity - Group for all Product</sup>
    - @Sanity_ProductName - Group for Specific product</sup>
               
## Codeception Execution Commands for Windows, Linux And Mac:

     - Run Specific Group Command : npx codeceptjs run --grep Group_Name --steps
     - Run Specific Text file Command : npx codeceptjs run **CEST_FILE_PATH** --steps

     Note: Optional Command Parameters.
     --steps : Shows execution steps in terminal window.    

## Execution Environment setup:

**For changing track (Rapid/Standard):**
    
    - For Standard track change .env file values form %ltid% to 2 and %ltname% to standard.
    - For Rapid track change .env file values form %ltid% to 1 and %ltname% to rapid.
    
**For Changing Environment:**

    - Replace the %DNS% with environment name like stage/trunk/production/etc.
    - For live environment make it blank.

    Note: Default Environment setup is rapid stage.     

**Headless and headfull mode execution:**
 
     - For headfull mode in .env file set value of show is true.
     - For headless mode in .env file set value of show is false.

**For Showing allure report:**

    - Command: allure serve ./EntrataAutomationLog 