import { expect } from "chai";

describe("Login test", () => {

    it("Should navigate to homepage", () => {
        const url = "http://zero.webappsecurity.com/index.html";
        browser.url(url);

        const metadata = browser.getMetadata();
        expect(metadata.title).to.contains("Personal Banking");
        expect(metadata.url).to.contains("index.html");
    });

    it("Should click on signin button", () => {
        browser.waitAndClick("#signin_button");
        
        const metadata = browser.getMetadata();
        expect(metadata.url).to.contains("login.html");
    });

    it("Should submit login form", () => {
        const loginForm = $("#login_form");
        const userName = $("#user_login");
        const password = $("#user_password");

        loginForm.waitForExist(5000);
        userName.setValue("random name");
        password.setValue("random password");
        browser.waitAndClick(".btn-primary");
    });

    it("Should show error message", () => {
        const errorMessage = $(".alert-error");
        expect(errorMessage.getText()).to.contains("Login and/or password are wrong");
    });
});