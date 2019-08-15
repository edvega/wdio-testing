import { expect } from "chai";
import * as dataHelper from "../lib/data-helpers";
import LoginPage from "../page-objects/LoginPage";
import { username, password } from "../lib/config";

describe("Login test", () => {

    it("Should deny access with wrong creds", () => {
        LoginPage.open();
        LoginPage.loginToApplication("foo", "bar");
        expect(LoginPage.errorMessage.getText()).to.contains(
            "Login and/or password are wrong");
    });

    it("Should login to application", () => {
        LoginPage.open();
        LoginPage.loginToApplication(username, password);
    });

    it("Should logout from application", () => {
        $(".icon-user").waitForExist();
        $(".icon-user").click();
        $("#logout_link").waitForExist();
        $("#logout_link").click();
        $("#logout_link").waitForExist(5000, true);
    });
});