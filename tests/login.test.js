import { expect } from "chai";
import * as dataHelper from "../lib/data-helpers";
import LoginPage from "../page-objects/LoginPage";

describe("Login test", () => {

    it("Should deny access with wrong creds", () => {
        LoginPage.open();
        LoginPage.loginToApplication("foo", "bar");
        expect(LoginPage.errorMessage.getText()).to.contains(
            "Login and/or password are wrong");
    });
});