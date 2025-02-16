// script.js
document.addEventListener("DOMContentLoaded", () => {
    const skills = document.querySelectorAll("#skills ul li");

    skills.forEach(skill => {
        skill.addEventListener("mouseover", () => {
            skill.style.backgroundColor = "#005bb5";
            skill.style.transition = "0.3s";
        });
        skill.addEventListener("mouseout", () => {
            skill.style.backgroundColor = "#0073e6";
        });
    });

    const contactLink = document.querySelector("#contact a");
    contactLink.addEventListener("click", (e) => {
        e.preventDefault();
        alert("Redirecting to LinkedIn Profile");
        window.open(contactLink.href, "_blank");
    });
});