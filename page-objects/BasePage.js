export default class BasePage {
    open(url) {
        browser.url(url);
    }

    wait(time) {
        browser.pause(time);
    }
}