const Page = require('./page');
var chai = require('chai')
var assert = chai.assert;
const expectChai = require('chai').expect;
const Locators = require('../../ConfigData/locators');
class LoginPage extends Page{
    get userName(){
        return $(Locators.usernameXpath)
    }
    get password(){
        return $(Locators.passwordXpath)
    }
    get loginButton(){
        return $(Locators.loginbuttonXpath)
    }
    get errorResult(){
        return $(Locators.errorresultXpath)
    }
    async login(username,password){
        let a= await this.get_Title()
        assert.equal(a,'Swag Labs')
        await this.userName.setValue(username)
        await this.password.setValue(password)
        await this.loginButton.click();
    }
    async geterrorValue(){
        await this.errorResult.getText()
    }
    get_Title(){
        return super.get_Title();
    }
    open () {
        return super.open('');
    }
    wait(){
        return super.wait()
    }
}
module.exports = new LoginPage();
