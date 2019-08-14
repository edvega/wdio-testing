import { expect } from "chai";

describe("Submit feedback Form Test", () => {

    before(function() {
        browser.url("http://zero.webappsecurity.com/index.html");

        const metadata = browser.getMetadata();
        expect(metadata.title).to.contains("Personal Banking");
        expect(metadata.url).to.contains("index.html");
    });

    it("Should navigate to feedback page", () => {
        $("#feedback").waitForExist(5000);
        $("#feedback").click();

        const metadata = browser.getMetadata();
        expect(metadata.url).to.contains("feedback.html");
    });

    it("Should submit feedback form", () => {
        $("form").waitForExist(5000);
        $("#name").setValue("Some name");
        $("#email").setValue("mail@mail.com");
        $("#subject").setValue("Testing");
        $("#comment").setValue("Some comments");
        $(".btn-primary").click();
    });

    it("Should show success feedback page", () => {
        $("#feedback-title").waitForExist(5000);
    });
});