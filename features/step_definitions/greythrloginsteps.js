const { Given, When, Then} = require("@cucumber/cucumber");
const { client } = require("nightwatch-api");
const path = require('path');
// const { Builder,By } = require("selenium-webdriver");
// const { get } = require("selenium-webdriver/http");
 const assert = require('assert');
// const { expect } = require('chai');

// let driver = new Builder().forBrowser("chrome").build();
// driver.manage().window().maximize();

// Ensure the path is correctly specified

const featurePath = path.relative(__dirname, '../../features');

        Given('User on the Greythr login page', async ()=> {
            await client
            .url('https://hr-portal.greythr.com/uas/portal/auth/login?login_challenge=e4c32b8d8b4049e89d9bc61ba6efa15c')
            .waitForElementVisible('body',5000);
          
         });

   

         When('User  should enter the {string} in the LoginId', async (loginId)=> {
            await client
            .setValue('#username',loginId);
           
         });

  
         When('User should enter the {string} in the password field', async (password)=> {
          await client
          .setValue('#password',password);
         });

         When('User should click the Login button', async () => {
            await client.waitForElementVisible('button[type="submit"]', 10000);
            await client.execute(function() {
           document.querySelector('button[type="submit"]').click();

        });
        await client.pause(5000);
});

   //  Then('after login user should verify the success message {string}', async (text)=> {
         // const successMessage = await client.driver.findElement(By.xpath("//h1[text()='Good Afternoon']")).getText();
         // assert.strictEqual(successMessage, "Good Afternoon", "The text does not match");
         //  });

         Then('User should see an invalid error message', async ()=> {
           await client.waitForElementVisible("//div[@class='opacity-90 text-7gpx text-text-default font-body']",3000)
           const errormsg=await client.getText("//div[@class='opacity-90 text-7gpx text-text-default font-body']");
           client.assert.equal(errormsg,containsText(' reset your password'));
          });
      
