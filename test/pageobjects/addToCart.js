const ProductData = require('../../ConfigData/productdata');
const Page = require('./page');
var chai = require('chai')
var assert = chai.assert;
const expectChai = require('chai').expect;
const Locators = require('../../ConfigData/locators');
const CartData = require('../../ConfigData/cartdata');
class AddToCart extends Page{
    get addcartLink(){
        return $(Locators.addcartlinkXpath);
    }
    get cartLink(){
        return $(Locators.cartlinkXpath)
    }
    get checkoutButton(){
        return $(Locators.checkoutbuttonXpath)
    }
    get continueShoping(){
        return $(Locators.continueshopXpath)
    }
    get removeButton(){
        return $(Locators.removebuttonXpath)
    }
    get firstName(){
        return $(Locators.firstnameXpath)
    }
    get lastName(){
        return $(Locators.lastnameXpath)
    }
    get postCode(){
        return $(Locators.postcodeXpath)
    }
    get continueButton(){
        return $(Locators.continuebuttonXpath)
    }
    get cancelButton(){
        return $(Locators.cancelbuttonXpath)
    }
    get finishButton(){
        return $(Locators.finishbuttonXpath)
    }
    get Title(){
        return $(Locators.titleXpath)
    }
    get backHomeButton(){
        return $(Locators.backhomebuttonXpath)
    }
    async test(){
        await this.addcartLink.click();
        await this.cartLink.click();
        let a = await this.Title.getText();
        assert.equal(a,"YOUR CART")
        await this.removeButton.click();
        await this.continueShoping.click();
        await this.addcartLink.click();
        await this.cartLink.click();
        assert.equal(a,"YOUR CART")
        await this.checkoutButton.click();

        let b = await this.Title.getText();
        assert.equal(b,"CHECKOUT: YOUR INFORMATION")
        await this.firstName.setValue(CartData.firstname)
        await this.lastName.setValue(CartData.lastname)
        await this.postCode.setValue(CartData.postcode)
        await this.continueButton.click();

        let c = await this.Title.getText();
        assert.equal(c,"CHECKOUT: OVERVIEW")
        await this.finishButton.click();

        let d = await this.Title.getText();
        assert.equal(d,"CHECKOUT: COMPLETE!")
        await this.backHomeButton.click();
        
        let e = await this.Title.getText();
        assert.equal(e,"PRODUCTS")
    }
}
module.exports = new AddToCart();