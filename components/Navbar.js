class Navbar {

    get home() {
        return $("#homeMenu");
    }

    get onlineBanking() {
        return $("#onlineBankingMenu");
    }

    get feedback() {
        return $("#feedback");
    }

    get searchbox() {
        return $("#searchTerm");
    }

    get signInButton() {
        return $("#signin_button");
    }

    search(text) {
        this.searchbox.waitForExist();
        this.searchbox.setValue(text);
        browser.keys("Enter");
    }
}

export default new Navbar();