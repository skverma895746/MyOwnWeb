document.addEventListener("DOMContentLoaded",()=>{


    const links = document.querySelectorAll("#navbar #links #link a");
    const titles = document.querySelectorAll(".title");
    const smallScrollIcon = document.querySelector("#smallScrollIcon");
    const navBar = document.querySelector("#links");
    const menuToggle = document.querySelector("#menuToggle");
//  tracking navbar 
    window.addEventListener("scroll", () => {
        const pos = window.scrollY + window.innerHeight / 2;

        titles.forEach((title, index) => {
            const start = title.offsetTop;
            const end = titles[index + 1] ? titles[index + 1].offsetTop : document.body.scrollHeight;

            if (pos >= start && pos < end) {
                links.forEach((link) => link.classList.remove("active"));

                const activeLink = document.querySelector(
                    `#navbar #links #link a[href="#${title.id}"]`
                );

                if (activeLink) {
                    activeLink.classList.add("active");
                }
            }
        });

        if (smallScrollIcon) {
            smallScrollIcon.style.opacity = window.scrollY > 200 ? "1" : "0";
        }
    });
//    moblie menubar 
    if (navBar && menuToggle) {
        menuToggle.addEventListener("click", () => {
            navBar.classList.toggle("open");

            if (navBar.classList.contains("open")) {
                menuToggle.textContent = "✕";
                menuToggle.setAttribute("aria-expanded", "true");
            } else {
                menuToggle.textContent = "☰";
                menuToggle.setAttribute("aria-expanded", "false");
            }
        });
    };
    //   skills progress bar 
    function progressBar(technology, percentage) {
        const fill = document.querySelector(technology);
        if (fill) {

        let width = 0;

        const interval = setInterval(() => {
            if (width >= percentage) {
                clearInterval(interval);
                return;
            }

            width++;
            fill.style.width = width + "%";
            fill.textContent = width + "%";
        }, 50);
    }
}
    progressBar(".html", 90);
    progressBar(".css", 90);
    progressBar(".js", 75);
    progressBar(".nodejs", 60);
    progressBar(".bootstrap", 80);
    progressBar(".mongodb", 75);
    progressBar(".expressjs", 70);
    progressBar(".reactjs", 90);

// domContent end 
 });
