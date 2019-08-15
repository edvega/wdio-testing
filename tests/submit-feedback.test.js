import { expect } from "chai";
import Navbar from "../components/Navbar";
import FeedbackPage from "../page-objects/FeedbackPage";

describe("Submit feedback Form Test", () => {

    before(function() {
        browser.url("http://zero.webappsecurity.com/index.html");

        const metadata = browser.getMetadata();
        expect(metadata.title).to.contains("Personal Banking");
        expect(metadata.url).to.contains("index.html");
    });

    it("Should navigate to feedback page", () => {
        Navbar.feedback.click();
        const metadata = browser.getMetadata();
        expect(metadata.url).to.contains("feedback.html");
    });

    it("Should submit feedback form", () => {
        FeedbackPage.submitFeedback(
            "name", "email@email.com", "subject", "comment");
    });

    it("Should show success feedback page", () => {
        FeedbackPage.feedbackTitle.waitForExist();
    });
});