import { expect } from "chai";
import * as dataHelper from "../lib/data-helpers";
import LoginPage from "../page-objects/LoginPage";

describe("Login test", () => {

    it("Should deny access with wrong creds", () => {
        LoginPage.open();
        LoginPage.loginForm.waitForExist();
        LoginPage.username.setValue("foo");
        LoginPage.password.setValue("bar");
        LoginPage.submitButton.click();
        LoginPage.wait(2000);
        expect(LoginPage.errorMessage.getText()).to.contains(
            "Login and/or password are wrong");
    });
});