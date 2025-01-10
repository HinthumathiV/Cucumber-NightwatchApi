const { Given, When, Then } = require("@cucumber/cucumber");
const { client } = require("nightwatch-api");
const{assert} = require('assert');
const { Driver } = require("selenium-webdriver/chrome");


         Given('User on the Amazon login page',async()=> {
         await client
         .url("https://www.amazon.in/")
         .waitForElementVisible('body',3000);

           
         });
       
   

         When('User enter the {string} into the search box and click enter', async (text) => {
            await client
                .setValue('#twotabsearchtextbox', text)
                .click('input.nav-input[type="submit"]') 
                .pause(4000);
        });

          Then('User should see the results for iphone', async ()=> {
           //checking whether the after giving iphone the page is displaying or not
            await client
            .waitForElementVisible('.s-main-slot',3000)
            .assert.containsText('.s-main-slot', 'iPhone');
            
          });
 
         Then('User should scroll down the page', async ()=> {
           //Performing scroll down options
            await client
            .execute(() => {
                window.scrollBy(0, 1000);  // Scroll down by 1000px
              })
              .pause(2000);
          });

          Then('User add an iPhone to the cart', async ()=> {
                 await client
              .click('#a-autoid-1-announce')
              .pause(2000);
          });
 
         Then('User click on the cart icon to view the cart', async ()=> {
            await client
           .waitForElementVisible('#nav-cart', 5000)      // Wait for the cart icon
            .click('#nav-cart');      
            });

          Then('User should see the cart page', async ()=> {
            await client
            .assert.containsText('.sc-cart-header', 'Shopping Cart'); 
          });

        Then('User click the proceed to pay button', async()=> {
      await client
         .waitForElementVisible('#sc-buy-box-ptc-button', 20000)
         .click('#sc-buy-box-ptc-button')
         .pause(2000);

        });

       Then('User enter the {string} in the textbox', async (emailId)=>{
      await client
      .waitForElementPresent("input[name='email']",10000)
      .setValue("input[name='email']", emailId);
      
      });

     Then('User click the continue button', async ()=> {
      await client
      .waitForElementVisible('.a-button-input',4000)
      //.pause(7000)
      .click('.a-button-input');
          
         });

        //  Then('verify the error message', async()=> {
        //   await client
        // .waitForElementVisible('#auth-error-message-box',20000)
        // .assert.containsText('#auth-error-message-box','There was a problem')
        // });

        
        // Then('User navigates to the previous window', function () {
        //   return client.windowHandles(function(result){

        //     if (result.value.length>1) {
        //       client.switchwindow(result.value[0]);
        //     } else {
        //       console.error('Original window not found');s
        //     }
        //   })
         
        // });

    
 

       