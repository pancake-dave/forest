const burgerBtn = document.querySelector(".burger-btn");
const navMobile = document.querySelector(".nav-mobile");
const navDesktop = document.querySelector(".nav-desktop");
const navMobileItems = document.querySelectorAll(".nav-mobile__link");
const navDesktopItems = document.querySelectorAll(".nav-desktop__link");
const allSections = document.querySelectorAll(".section");
const footerYear = document.querySelector(".footer__year");

let observerEnabled = true;

const handleMobileNav = () => {
	navMobile.classList.toggle("nav-mobile--active");
	burgerBtn.classList.toggle("burger-btn--animation");
};

const handleDesktopNav = (e) => {
	removeActiveLink();
	e.target.classList.add("nav-desktop__link--active");
	observerEnabled = false;
	window.addEventListener("scroll", () => {
		const currentPosition = window.scrollY;
		const target = e.target.getAttribute("href").substring(1);
		allSections.forEach((section) => {
			const conditions = [
				section.classList.contains(target) &&
					section.offsetTop == currentPosition + 90,
				section.classList.contains("home") &&
					section.offsetTop == currentPosition,
				window.innerHeight + window.scrollY >= document.body.scrollHeight,
			];
			if (conditions.includes(true)) {
				observerEnabled = true;
				console.log('test ok');
			}
		});
	});
};

const removeActiveLink = () => {
	navDesktopItems.forEach((item) => {
		item.classList.remove("nav-desktop__link--active");
	});
};

const handleIntersection = (entries) => {
	if (observerEnabled) {
		entries.forEach((entry) => {
			if (entry.isIntersecting) {
				const targetId = entry.target.id;
				removeActiveLink();
				navDesktopItems.forEach((item) => {
					if (item.getAttribute("href").substring(1) === targetId) {
						item.classList.add("nav-desktop__link--active");
					}
				});
			}
		});
	}
};

const observer = new IntersectionObserver(handleIntersection, {
	root: null,
	rootMargin: "0px",
	threshold: 1,
});

const currentDate = () => {
	const date = new Date();
	footerYear.innerText = date.getFullYear();
};

currentDate();
allSections.forEach((section) => {
	observer.observe(section);
});
navDesktopItems.forEach((item) => {
	item.addEventListener("click", handleDesktopNav);
});
[burgerBtn, ...navMobileItems].forEach((item) => {
    item.addEventListener("click", handleMobileNav);
});