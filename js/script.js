// ====Typing Animation====
var typed = new Typed(".typing", {
    strings: ["Web Developer"],
    typeSpeed: 100,
    backSpeed: 60,
    loop: true
})


//     === Aside ===
// const nav = document.querySelector(".nav"),
//     navList = nav.querySelectorAll("li"),
//     totalNavList = navList.length,
//     allSections = document.querySelectorAll(".section"),
//     totalSection = allSections.length;


// for (let i = 0; i < totalNavList; i++) {
//     const a = navList[i].querySelector("a");
//     a.addEventListener("click", function () {
//         for (let j = 0; j < totalNavList; j++) {
//             navList[j].querySelector("a").classList.remove("active");
//         }
//         this.classList.add("active")
//         showSection(this);
//     })
// }

// // function showSection(element) {
// //     const target = element.getAttribute("href").split("#");
// //     target = href[1];
// //     console.log(target)
// // }
// function showSection(element) {
//     for (let i = 0; i < totalSection; i++) {
//         allSections[i].classList.remove("active");
//     }
//     const target = element.getAttribute("href").split("#")[1];
//     document.querySelector("#" + target).classList.add("active")
// }

// !=====Nav Bar====
const navTogglerBtn = document.querySelector(".nav-toggler"),
    aside = document.querySelector(".aside");
navTogglerBtn.addEventListener("click", () => {
    asideSectionTogglerBtn();
})

function asideSectionTogglerBtn() {
    aside.classList.toggle("open");
    navTogglerBtn.classList.toggle("open");
    // for (let i = 0; i > totalSection; i++) {
    //     allSections[i].classList.toggle("open");
    // }

}