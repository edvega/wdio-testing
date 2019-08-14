import { expect } from "chai";
import * as dataHelper from "../lib/data-helpers";

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

        loginForm.waitForExist(5000);
        browser.waitAndTypeText("#user_login", dataHelper.getRandomName());
        browser.waitAndTypeText("#user_password", "random password");
        browser.waitAndClick(".btn-primary");
    });

    it("Should show error message", () => {
        const errorMessage = $(".alert-error");
        expect(errorMessage.getText()).to.contains(
            "Login and/or password are wrong");
    });
});