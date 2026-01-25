document.addEventListener("DOMContentLoaded", function () {
    // active links 
    const links = document.querySelectorAll("#navbar #links #link a");
    const titles = document.querySelectorAll(".title");

    window.addEventListener("scroll", () => {
        const pos = window.scrollY + window.innerHeight / 2;

        titles.forEach((title, index) => {

            const start = title.offsetTop;
            const end = titles[index + 1]? titles[index + 1].offsetTop: document.body.scrollHeight;
            if (pos >= start && pos < end) {

                links.forEach(link => link.classList.remove("active"));

                const activeLink = document.querySelector(
                    `#navbar #links #link a[href="#${title.id}"]`
                );

                if (activeLink) activeLink.classList.add("active");
            }

        });
    });
    // smallScrollIcon
    const smallScrollIcon = document.querySelector("#smallScrollIcon")
    if (smallScrollIcon) {
        window.addEventListener("scroll", function (e) {
            e.stopPropagation();
            if (window.scrollY > 200) {
                smallScrollIcon.style.opacity = "1"
            }
            else {
                smallScrollIcon.style.opacity = "0"
            }

        });
    }

    // navBar
    const navBar = document.querySelector("#links");
    const menuToggle = document.querySelector("#menuToggle");
    if (navBar && menuToggle) {
        menuToggle.addEventListener("click", () => {
            navBar.classList.toggle("open")
            if (navBar.classList.contains("open")) {
                menuToggle.textContent = "✖";
            } else {
                menuToggle.innerHTML = "☰";
            }

        });
    }
    //progressbar
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
});

        





