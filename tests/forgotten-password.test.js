import { expect } from "chai";

describe("Forgotten Password Test", () => {
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

    it("Should click on forgotten password link", () => {
        browser.waitAndClick("*=Forgot your password ?");

        const pageTitle = $("h3");
        pageTitle.waitForExist(5000);
        expect(pageTitle.getText()).to.contains("Forgotten Password");
    });

    it("Should request new password", () => {
        browser.waitAndTypeText("#user_email", "mail@mail.com");
        browser.waitAndClick(".btn-primary");
    });
});