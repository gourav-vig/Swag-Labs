const ProductData = require('../../ConfigData/productdata');
const Page = require('./page');
var chai = require('chai')
var assert = chai.assert;
const expectChai = require('chai').expect;
const Locators = require('../../ConfigData/locators');
class Home_Page_DropDown extends Page {
    get DropDown_Link() {
        return $(Locators.dropdownlinkXpath)
    }
    get data() {
        return $(Locators.dataXpath)
    }
    get price1() {
        return $(Locators.price1Xpath)
    }
    get price2() {
        return $(Locators.price2Xpath)
    }
    async select() {
        let x = ProductData.selectProductDropDown;
        const selectBox = await this.DropDown_Link;
        switch (x) {
            case "az":
                await selectBox.selectByAttribute('value', 'az');
                console.log(await selectBox.getValue());
                let str1 = await this.data.getText();
                assert.equal(str1.charAt(1), "a")
                break;
            case "za":
                await selectBox.selectByAttribute('value', 'za');
                console.log(await selectBox.getValue());
                let str2 = await this.data.getText();
                assert.equal(str2.charAt(1), "e")
                break;
            case "lohi":
                await selectBox.selectByAttribute('value', 'lohi');
                console.log(await selectBox.getValue());
                let p1 = await this.price1.getText();
                let p2 = await this.price1.getText();
                if (p1 < p2) {
                    assert.equal(true)
                }
                break;
            case "hilo":
                await selectBox.selectByAttribute('value', 'hilo');
                console.log(await selectBox.getValue());
                let p3 = await this.price1.getText();
                let p4 = await this.price1.getText();
                if (p3 > p4) {
                    assert.equal(true)
                }
                break;
            default:
                console.log("Incorrect Details")
        }
    }
}
module.exports = new Home_Page_DropDown();