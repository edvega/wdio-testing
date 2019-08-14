import { expect } from "chai";

describe("Submit feedback Form Test", () => {

    before(function() {
        browser.url("http://zero.webappsecurity.com/index.html");

        const metadata = browser.getMetadata();
        expect(metadata.title).to.contains("Personal Banking");
        expect(metadata.url).to.contains("index.html");
    });

    it("Should navigate to feedback page", () => {
        browser.waitAndClick("#feedback");

        const metadata = browser.getMetadata();
        expect(metadata.url).to.contains("feedback.html");
    });

    it("Should submit feedback form", () => {
        browser.waitAndTypeText("#name", "Some name");
        browser.waitAndTypeText("#email", "Some email");
        browser.waitAndTypeText("#subject", "Testing");
        browser.waitAndTypeText("#comment", "Some comments");
        browser.waitAndClick(".btn-primary");
    });

    it("Should show success feedback page", () => {
        $("#feedback-title").waitForExist(5000);
    });
});