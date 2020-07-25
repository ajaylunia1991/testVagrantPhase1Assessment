var assert = require('assert');

class weatherPage{

    /**
     * sub page containing specific selectors and methods for a specific page
     */
    
    get search(){
        return $("//input[@class='searchBox']");
    }

    get checkCity(){
        return $("#Gwalior");
    }

    get textOnMap(){
        return $("//div[contains(text(),'Gwalior')]");
    }

    get degree(){
        return $("div.leaflet-container.leaflet-touch.leaflet-fade-anim.leaflet-grab.leaflet-touch-drag.leaflet-touch-zoom:nth-child(6) div.leaflet-pane.leaflet-map-pane div.leaflet-pane.leaflet-marker-pane:nth-child(4) div.leaflet-marker-icon.my-div-icon.leaflet-zoom-animated.leaflet-interactive:nth-child(12) div.outerContainer div.temperatureContainer:nth-child(2) > span.tempRedText");
    }
    
    get fahrenheit(){
        return $("div.leaflet-container.leaflet-touch.leaflet-fade-anim.leaflet-grab.leaflet-touch-drag.leaflet-touch-zoom:nth-child(6) div.leaflet-pane.leaflet-map-pane div.leaflet-pane.leaflet-marker-pane:nth-child(4) div.leaflet-marker-icon.my-div-icon.leaflet-zoom-animated.leaflet-interactive:nth-child(12) div.outerContainer div.temperatureContainer:nth-child(2) > span.tempWhiteText");
    }

    get infoOfLeaflet(){
        return $("//div[@class='leaflet-popup-content-wrapper']");
    } 
    
    get textFromLeaflet(){
        return $("//span[contains(text(),'Gwalior, Madhya Pradesh')]");
    }

    async searchCityAndCheckTheCheckBox(city)
    { await (await this.search).waitForDisplayed(5000);
      await ((await this.search).setValue(city))
      await browser.pause(3000);
      const cityCheckBox =  await (this.checkCity);  
      return cityCheckBox.click();
    }

    async checkCityAvailableOnMapAndDisplayTemperature()
    {
        await (await this.textOnMap).waitForDisplayed(5000);
        let cityName = await (await(this.textOnMap)).getText();
        console.log("City Name should be" + cityName);
        assert.equal('Gwalior',cityName);
        let degree = await(await(this.degree)).getText();
        let fahrenheit = await(await(this.fahrenheit)).getText();
        console.log("Degree Temperature of Gwalior is:- " + degree);
        console.log("Fahrenheit Temperature of Gwalior is:- " + fahrenheit);
    }

    async checkWeatherDetails()
    {   await (await(this.textOnMap)).click();
        await (await this.infoOfLeaflet).waitForDisplayed(5000);
        let info = await (await (this.textFromLeaflet)).getText();
        console.log("Information available is :- " + info);
        assert.equal("Gwalior, Madhya Pradesh",info);
    }
      
}
module.exports = new weatherPage();