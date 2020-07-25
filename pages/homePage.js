
class homePage{ 

    /**
     * sub page containing specific selectors and methods for a specific page
     */
    
    get extraNavigation(){
        return $("//a[@class='topnavmore']");
    }

    get weather(){
        return $("div.seclevelnav div.topnav_cont > a:nth-child(8)");
    }

    async clickOnExtraNavigation() {
        await (await this.extraNavigation).waitForDisplayed(5000);
        return await (await this.extraNavigation).click();
    }    
    
    async clickOnWeather() {
        await (await this.weather).waitForDisplayed(3000);
        return await (await this.weather).click();
    }

}
module.exports = new homePage();