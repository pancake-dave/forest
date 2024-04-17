const burgerBtn = document.querySelector(".burger-btn");
const navMobile = document.querySelector(".nav-mobile");
const navMobileItems = document.querySelectorAll(".nav-mobile__link");
const navDesktopItems = document.querySelectorAll(".nav-desktop__link");
const navLinkHome = document.querySelector(".nav-link-home");
const navLinkAboutUs = document.querySelector(".nav-link-aboutus");
const navLinkOffer = document.querySelector(".nav-link-offer");
const navLinkContact = document.querySelector(".nav-link-contact");
const allSections = document.querySelectorAll(".section");

let navLinkClicked = false;

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
	// navLinkClicked = true;
	removeActiveLink();
	e.target.classList.add("nav-desktop__link--active");
};

const handleScroll = () => {
	if (navLinkClicked == false) {
		const currentPosition = window.scrollY;
		allSections.forEach((section) => {
			if (
				section.classList.contains("header") &&
				section.offsetTop == currentPosition
			) {
				removeActiveLink();
				navLinkHome.classList.add("nav-desktop__link--active");
			} else if (
				section.classList.contains("about-us") &&
				section.offsetTop <= currentPosition + 90
			) {
				removeActiveLink();
				navLinkAboutUs.classList.add("nav-desktop__link--active");
			} else if (
				section.classList.contains("offer") &&
				section.offsetTop <= currentPosition + 90
			) {
				removeActiveLink();
				navLinkOffer.classList.add("nav-desktop__link--active");
			}
		});
	}
};

navDesktopItems.forEach((item) => {
	item.addEventListener("click", handleDesktopNav);
	// item.addEventListener("click", () => {
	// 	const targetSectionId = item.getAttribute("href").substring(1);
	// 	const targetSection = document.getElementById(targetSectionId);
	// 	const scrollOffset = 90;
	// 	const scrollThreshold = targetSection.offsetTop - scrollOffset;

	// 	const resetNavLinkClicked = () => {
	// 		if (window.scrollY >= scrollThreshold) {
	// 			console.log('reset');
	// 			navLinkClicked = false;
	// 			window.removeEventListener("scroll", resetNavLinkClicked);
	// 		}
	// 	};

	// 	window.addEventListener("scroll", resetNavLinkClicked);
	// });
});
navMobileItems.forEach((item) => {
	item.addEventListener("click", handleMobileNav);
});
burgerBtn.addEventListener("click", handleMobileNav);
window.addEventListener("scroll", handleScroll);
