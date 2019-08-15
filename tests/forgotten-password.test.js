import { expect } from "chai";
import Navbar from "../components/Navbar";
import LoginPage from "../page-objects/LoginPage";
import forgottenPasswordPage from "../page-objects/ForgottenPasswordPage";
import ForgottenPasswordPage from "../page-objects/ForgottenPasswordPage";

describe("Forgotten Password Test", () => {
    it("Should navigate to homepage", () => {
        const url = "http://zero.webappsecurity.com/index.html";
        browser.url(url);

        const metadata = browser.getMetadata();
        expect(metadata.title).to.contains("Personal Banking");
        expect(metadata.url).to.contains("index.html");
    });

    it("Should click on signin button", () => {
        Navbar.signInButton.waitForExist();
        Navbar.signInButton.click();
        
        const metadata = browser.getMetadata();
        expect(metadata.url).to.contains("login.html");
    });

    it("Should click on forgotten password link", () => {
        LoginPage.forgottenPasswordLink.waitForExist();
        LoginPage.forgottenPasswordLink.click();
        
        ForgottenPasswordPage.title.waitForExist();
        expect(ForgottenPasswordPage.title.getText()).to.contains("Forgotten Password");
    });

    it("Should request new password", () => {
        ForgottenPasswordPage.submitEmail("email@mail.com");
    });
});