
// smallScrollIcon
const smallScrollIcon = document.querySelector("#smallScrollIcon")
window.addEventListener("scroll", function (e) {
    if (window.scrollY > 200) {
        smallScrollIcon.style.opacity = "1"
    }
    else {
        smallScrollIcon.style.opacity = "0"
    }
    e.stopPropagation()
})

// navBar
const navBar = document.querySelector("#links")
const menuToggle = document.querySelector("#menuToggle")
let isOpen = false;
menuToggle.addEventListener("click", (e) => {
    e.stopPropagation()
    if (window.innerWidth <= 768) {
        if (!isOpen) {
            navBar.classList.add("active");
            menuToggle.textContent = "❌";
            isOpen = true;
        } else {
            navBar.classList.remove("active");
            menuToggle.textContent = "☰";
            isOpen = false;
        }
    }
});
//Form data
document.addEventListener("DOMContentLoaded", () => {
    const form = document.querySelector("#userForm");
    form.addEventListener("submit", (e) => {
        e.preventDefault();
        const name = form.querySelector("input[type='text']").value;
        const mobile = form.querySelector("input[type='number']").value;
        const address = form.querySelector("textarea").value;

        let entries = JSON.parse(localStorage.getItem("userData"));
        if (!entries) {
            entries = []
        }
        entries.push({ name, mobile, address });
        localStorage.setItem("userData", JSON.stringify(entries));

        alert("✅ Data Saved successfully in LocalStorage!");
        form.reset();
    })
})
// progressBar
function progressBar(technology, presentage) {
    const fill = document.querySelector(technology);
    let width = 0
    const interval = setInterval(() => {
        if (width >= presentage) {
            clearInterval(interval);
        } else {
            width++;
            fill.style.width = width + "%";
            fill.textContent = width + "%";
        }
    }, 50);
}
progressBar(".html", 90)
progressBar(".css", 90)
progressBar(".js", 75)
progressBar(".nodejs", 60)
progressBar(".bootstrap", 80)
progressBar(".mangodb", 75)
progressBar(".expressjs", 70)
progressBar(".reactjs", 90)


