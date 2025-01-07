const chromedriver = require("chromedriver"); 
module.exports={
   
   //  src_folders: ["features/step_definitions/fbloginsteps.js"],
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

             },
            //  test_runner: {
            //    type: 'cucumber',
            //    options: {
            //      feature_path: 'features/fblogin.feature',
            //      require: ['step_definitions/fbloginsteps.js'],
            //      tags: '@fblogin'
            //    }
            }},
         };