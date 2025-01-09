const chromedriver = require("chromedriver"); 
module.exports={
   
     src_folders: ["features/step_definitions/amazonloginsteps.js"],
   //  output_folder: "reports",
  
    test_settings: {
    default:{ 
        webdriver: {
             start_process: true, 
             
             server_path:require("chromedriver").path, 
             port:4444, 
             cli_args: ['--port=4444'] 
        },   
             desiredCapabilities: {
                browserName: 'chrome'

   //           },
            //  chrome: {
            //    webdriver: {
            //      start_process: true,
            //      server_path: require("chromedriver").path,
            //      port: 4444,
            //      cli_args: ['--port=4444']
            //    },
            //    desiredCapabilities: {
            //      browserName: 'chrome',
            //      chromeOptions: {
            //        args: ['--headless']
            //      },
           
            //   test_runner: {
            // //    type: 'cucumber',
            //    cucumberOpts: {
            // //      feature_path: 'features/fblogin.feature',
            //      require: ['step_definitions/greythrloginsteps.js'],
            //      format:["json:reports/cucumber-report.json"],
            //       tags: ['@validlogin']
            //     }
            
            }},
         }};