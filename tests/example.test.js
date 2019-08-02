describe("DuckDuckGo Search Test", () => {
    it("Search should run", () => {
        browser.url("https://duckduckgo.com/");
        browser.$('#search_form_input_homepage').setValue("webdriverio");
        browser.$('#search_button_homepage').click();

        const title = browser.getTitle();
        console.log(title);
    });
});