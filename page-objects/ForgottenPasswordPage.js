import BasePage from "../page-objects/BasePage";

class ForgottenPasswordPage {
    
    get emailInput() { 
        return $("#user_email");
    }

    get submitButton() {
        return $(".btn-primary");
    }

    get title() {
        return $("h3");
    }
    submitEmail(email) {
        this.emailInput.waitForExist();
        this.emailInput.setValue(email);
        this.submitButton.click();
    }
}

export default new ForgottenPasswordPage();