const nameInput = document.querySelector("#name");
const emailInput = document.querySelector("#email");
const msgInput = document.querySelector("#message");
const allInputs = document.querySelectorAll(".contact-input-js");
const submitBtn = document.querySelector(".contact__form__box__btn");
const alertMsg = document.querySelector(".contact__form__box__alert");
const alertEmail = document.querySelector(".contact__form__box__label-warning");
const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

const checkForm = () => {
	if (nameInput.value == "" || emailInput == "" || msgInput == "") {
		alertMsg.style.display = "block";
		if (!validateEmail(emailInput.value)) {
			alertEmail.innerText = "- podaj poprawny adres email!";
		} else {
			alertEmail.innerText = "";
		}
	} else {
		alertMsg.style.display = "none";
		alertEmail.innerText = "";
		allInputs.forEach((input) => {
			input.value = "";
		});
	}
};

const validateEmail = (email) => {
	return emailRegex.test(email);
};

submitBtn.addEventListener("click", checkForm);

// pamiętaj żeby dodać popup
