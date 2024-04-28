const nameInput = document.querySelector("#name");
const emailInput = document.querySelector("#email");
const msgInput = document.querySelector("#message");
const allInputs = document.querySelectorAll(".contact-input-js");
const submitBtn = document.querySelector(".contact__form__box__btn");
const alertMsg = document.querySelector(".contact__form__box__alert");
const alertEmail = document.querySelector(".contact__form__box__label-warning");
const popupElements = document.querySelectorAll(".contact-popup-js");
const popupBtn = document.querySelector('.contact__popup__btn')
const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

const checkForm = () => {
	if (nameInput.value == "" || emailInput.value == "" || msgInput.value == "") {
		alertMsg.style.display = "block";
		if (!validateEmail(emailInput.value)) {
			alertEmail.innerText = "- podaj poprawny adres email!";
		} else {
			alertEmail.innerText = "";
		}
	} else {
		if (!validateEmail(emailInput.value)) {
			alertEmail.innerText = "- podaj poprawny adres email!";
		} else {
			alertMsg.style.display = "none";
			alertEmail.innerText = "";
			allInputs.forEach((input) => {
				input.value = "";
			handlePupup()
			});
		}
	}
};

const validateEmail = (email) => {
	return emailRegex.test(email);
};

const handlePupup = () => {
	popupElements.forEach((item) => {
		item.classList.toggle('contact__popup-visible')
	})
}

submitBtn.addEventListener("click", checkForm);
popupBtn.addEventListener("click", handlePupup);

