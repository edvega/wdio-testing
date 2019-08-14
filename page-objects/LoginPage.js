import BasePage from "./BasePage";

class LoginPage extends BasePage {

    get loginForm() {
        return $("#login_form");
    }

    get username() {
        return $("#user_login");
    }

    get password() {
        return $("#user_password");
    }

    get submitButton() {
        return $(".btn-primary");
    }

    get errorMessage() {
        return $(".alert-error");
    }

    open() {
        super.open("http://zero.webappsecurity.com/login.html");
    }
}

export default new LoginPage();