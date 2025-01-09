const { Given, When, Then } = require("@cucumber/cucumber");
const { client } = require("nightwatch-api");
const{assert} = require('assert');


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
 
    
 
        //   Then('User should switch to the cart window', function () {
        //     return client
        //     .windowHandles(function(result) {
        //         const handles = result.value;
        //         if (handles.length >= 2) {
        //             // Switch to the second window (the new tab)
        //             client.switchWindow(handles[1]);
        //           } else {
        //             throw new Error('No second window found.');
        //           }
        //         })
        //         .waitForElementVisible('body', 5000);  // Wait to make sure the cart page is visible
        //     });
           
        
         Then('User click the proceed to pay button', async ()=> {
            await client
            .waitForElementVisible('//button[text()="Proceed to checkout"]',2000)
            .click('//button[text()="Proceed to checkout"]');          
         });
   
        
        

        
    
       
 



