var typed = new Typed(".typing", {
    strings: ["", "Web Designer", "Web Developer", "Graphic Designer", "YouTuber"],
    typeSpeed: 100,
    BackSpeed: 60,
    loop: true
})

const nav = document.querySelector(".nav"),
    navList = nav.querySelectorAll("li"),
    totalNavList = navList.length,
    allSection = document.querySelectorAll(".section"),
    totalSection = allSection.length;
for (let i = 0; i < totalNavList; i++) {
    const a = navList[i].querySelector("a");
    a.addEventListener("click", function () {
        removeBackSection();
        for (let j = 0; j < totalNavList; j++) {
            if (navList[j].querySelector("a").classList.contains("active")) {
                addBackSection(j);
                // allSection[j].classList.add("back-section");
            }
            navList[j].querySelector("a").classList.remove("active");
        }
        this.classList.add("active")
        showSection(this);
        if (window.innerWidth < 1200) {
            asideSectionTogglerBtn();
        }
    })
}
function removeBackSection() {
    for (let i = 0; i < totalSection; i++) {
        allSection[i].classList.remove("back-section");
    }
}
function addBackSection(num) {
    allSection[num].classList.add("back-section");
}
function showSection(element) {
    for (let i = 0; i < totalSection; i++) {
        allSection[i].classList.remove("active");
    }
    const target = element.getAttribute("href").split("#")[1];
    document.querySelector("#" + target).classList.add("active")
}
function updateNav(element) {
    for (let i = 0; i < totalNavList; i++) {
        navList[i].querySelector("a").classList.remove("active");
        const target = element.getAttribute("href").split("#")[1];
        if (target === navList[i].querySelector("a").getAttribute("#href").split("#")[1]) {
            navList[i].querySelector("a").classList.add("active");
        }
    }
}
document.querySelector(".hire-me").addEventListener("click", function () {
    const sectionIndex = this.getAttribute("data-section-index");
    showSection(this);
    updateNav(this);
    removeBackSection();
    addBackSection(sectionIndex);
})
const navTogglerBtn = document.querySelector(".nav-toggler"),
    aside = document.querySelector(".aside");
navTogglerBtn.addEventListener("click", () => {
    asideSectionTogglerBtn();
})
function asideSectionTogglerBtn() {
    aside.classList.toggle("open");
    navTogglerBtn.classList.toggle("open");
    for (let i = 0; i < totalSection; i++) {
        allSection[i].classList.toggle("open");
    }
}

const Texts = [
    'HTML', 'CSS', 'JAVASCRIPT',
    'MONGODB', 'MONGOOSE', 'PHP',
    'PYTHON', 'WEB-DEVELOPER',
    'FRONTEND-DEVELOPER', 'BACKEND-DEVELOPER',
    'EXPRESSJS', 'REACTJS', 'NODEJS', 'FULLSTACK-DEVELOPER'];

    var tagCloud = TagCloud('.Sphere', Texts, {
        radius: 200,
        width: 10,
        maxSpeed: 'normal',
        initSpeed: 'fast',
        direction: 150,
        keep: true
    });

    var color = 'var(--skin-color)';
    document.querySelector('.Sphere').style.color = color;

    VanillaTilt.init(document.querySelectorAll(".service-item-inner"), {
		max: 25,
		speed: 400
	});
    VanillaTilt.init(document.querySelectorAll(".card"), {
		max: 25,
		speed: 400
	});
    VanillaTilt.init(document.querySelectorAll(".project-img"), {
		max: 25,
		speed: 400
	});