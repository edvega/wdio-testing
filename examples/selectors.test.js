import { expect } from "chai";

describe("Selector playground", () => {
    it("By ID", () => {
        const byID = $("#signin_button");
        byID.click();
    });

    it("By Classname", () => {
        const byClassname = $(".brand");
        byClassname.click();
    });

    it("By XPath", () => {
        const byXpath = $("//input[@id='searchTerm']");
        byXpath.click();
    });

    it("By CSS Query", () => {
        const byCSSQuery = $("form");
        byCSSQuery.isVisible();
    });

    it("By Link text", () => {
        const byLinkText = $("=Zero Bank");
    });

    it("By partial link text", () => {
        const byPartialLinkText = $("*Bank");
    });

    it("By Text", () => {
        const byText = $("h1=Title");
    });
});