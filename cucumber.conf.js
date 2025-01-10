const { setDefaultTimeout, BeforeAll, AfterAll } = require('@cucumber/cucumber');
const { startWebDriver, createSession, closeSession, stopWebDriver } = require('nightwatch-api');

setDefaultTimeout(60000);

BeforeAll(async () => {
  await startWebDriver();
  await createSession();
});

AfterAll(async () => {
 // await closeSession();
//  await stopWebDriver();
});