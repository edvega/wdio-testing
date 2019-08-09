import { expect } from "chai";

describe("WebdriverIO basics", () => {
    it("Load title", () => {
        const url = "http://zero.webappsecurity.com/";
        browser.url(url);

        // const pageTitle = browser.getTitle();
        // const pageUrl = browser.getUrl();
        const metadata = browser.getMetadata();

        expect(metadata.title).to.contains("Personal Banking");
        expect(metadata.url).to.contains("webapp");
    });

    it("waitForExist example", () => {
        const signButton = $("#signin_button");
        signButton.click();

        const loginForm = $("#login_form");
        loginForm.waitForExist(5000);
        loginForm.waitForDisplayed();
        loginForm.waitForEnabled();
    });

    it("Static waiting", () => {
        browser.pause(3000);
    });

    it("Inject javascript into browser", () => {
        const result = browser.execute((numA, numB) => {
            return numA + numB;
        }, 5, 10);

        expect(result).to.equal(15);
    });

    it("working with inputs", () => {
        const url = "http://zero.webappsecurity.com/";
        browser.url(url);

        const searchBox = $("#searchTerm");
        searchBox.addValue("your text");
        searchBox.clearValue();
        searchBox.setValue("your value");
    });
});