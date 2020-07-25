var home_Page = require("../../pages/homePage");
var weather_Page = require("../../pages/weatherPage");
var assert = require('assert');
const { weather } = require("../../pages/homePage");

beforeEach(async function() {
    browser.url("/");
    await browser.pause(3000);
    let URL = await browser.getUrl();
    console.log(URL);
    await assert.equal(URL,'https://www.ndtv.com/');
    
  });

describe("This test should display weather of gwalior city", function () {
    it("Should be able to display weather details of gwalior city", async function (done) {
      await home_Page.clickOnExtraNavigation();
      await home_Page.clickOnWeather();
      await weather_Page.searchCityAndCheckTheCheckBox("Gwalior");
      await weather_Page.checkCityAvailableOnMapAndDisplayTemperature();
      await weather_Page.checkWeatherDetails();
    });
});  
  