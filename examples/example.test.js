import { expect } from "chai";

describe("DuckDuckGo Search Test", () => {
    it("Search should run", () => {
        browser.url("https://duckduckgo.com/");
        browser.$("#search_form_input_homepage").setValue("WebdriverIO");
        browser.$("#search_button_homepage").click();
    });

    it("Verify title value", () => {
        const title = browser.getTitle();
        expect(title).to.contains("WebdriverIO");
    });
});