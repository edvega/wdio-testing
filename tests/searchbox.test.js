import Navbar from "../components/Navbar";

describe("Searchbox test", () => {
    it("Should load homepage and search for some value", () => {
        browser.url("http://zero.webappsecurity.com/index.html");
        Navbar.search("Hello world");
    });
});