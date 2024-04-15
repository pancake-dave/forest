const burgerBtn = document.querySelector(".burger-btn");
const navMobile = document.querySelector(".nav-mobile");
const navMobileItems = document.querySelectorAll(".nav-mobile__link");
const navDesktopItems = document.querySelectorAll(".nav-desktop__link");
const navLinkHome = document.querySelector(".nav-link-home");
const navLinkAboutUs = document.querySelector(".nav-link-aboutus");
const navLinkOffer = document.querySelector(".nav-link-offer");
const navLinkContact = document.querySelector(".nav-link-contact");
const allSections = document.querySelectorAll(".section");

let naVlinkClicked = false;

const handleMobileNav = () => {
	navMobile.classList.toggle("nav-mobile--active");
	burgerBtn.classList.toggle("burger-btn--animation");
};

const removeActiveLink = () => {
	navDesktopItems.forEach((item) => {
		item.classList.remove("nav-desktop__link--active");
	});
};

const handleDesktopNav = (e) => {
	naVlinkClicked = true;
	removeActiveLink();
	e.target.classList.add("nav-desktop__link--active");
};

const handleObserver = () => {
	if (naVlinkClicked === false) {
		const currentSection = window.scrollY;
		allSections.forEach((section) => {
			if (
				section.classList.contains("header") &&
				section.offsetTop == currentSection
			) {
				removeActiveLink();
				navLinkHome.classList.add("nav-desktop__link--active");
			} else if (
				section.classList.contains("about-us") &&
				section.offsetTop <= currentSection + 90
			) {
				removeActiveLink();
				navLinkAboutUs.classList.add("nav-desktop__link--active");
			} else if (
				section.classList.contains("offer") &&
				section.offsetTop <= currentSection + 90
			) {
				removeActiveLink();
				navLinkOffer.classList.add("nav-desktop__link--active");
			}
		});
	}
	// naVlinkClicked = false;
};

window.addEventListener("scroll", handleObserver);
navDesktopItems.forEach((item) => {
	item.addEventListener("click", handleDesktopNav);
});
navMobileItems.forEach((item) => {
	item.addEventListener("click", handleMobileNav);
});
burgerBtn.addEventListener("click", handleMobileNav);
