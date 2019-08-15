import BasePage from "../page-objects/BasePage";

class FeedbackPage {

    get feedbackForm() {
        return $("form");
    }

    get nameInput() {
        return $("#name");
    }

    get emailInput() {
        return $("#email");
    }

    get subjectInput() {
        return $("#subject");
    }

    get commentInput() {
        return $("#comment");
    }

    get submitButton() {
        return $(".btn-primary");
    }

    get feedbackTitle() {
        return $("#feedback-title");
    }

    submitFeedback(name, email, subject, comment) {
        this.feedbackForm.waitForExist();
        this.nameInput.setValue(name);
        this.emailInput.setValue(email);
        this.subjectInput.setValue(subject);
        this.commentInput.setValue(comment);
        this.submitButton.click();
    }
}

export default new FeedbackPage();