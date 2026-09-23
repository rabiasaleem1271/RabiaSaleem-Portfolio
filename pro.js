// Initialize Typed.js Dynamic Text Effect
document.addEventListener("DOMContentLoaded", function () {
    if (document.querySelector(".text")) {
        new Typed(".text", {
            strings: [
                "Full Stack Developer",
                "UI/UX Designer",
                "Frontend Specialist",
                "Problem Solver"
            ],
            typeSpeed: 100,
            backSpeed: 60,
            backDelay: 1000,
            loop: true
        });
    }
});
// Soft Skill Node Click Pulse Effect
document.querySelectorAll('.soft-node').forEach(node => {
    node.addEventListener('click', function(e) {
        this.style.boxShadow = '0 0 40px #0cef';
        setTimeout(() => {
            this.style.boxShadow = '';
        }, 600);
    });
});