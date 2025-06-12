accordionToggle()

function accordionToggle() {
    const accordions = document.querySelectorAll(".accordion__header");
    accordions.forEach(accordion => {
        accordion.addEventListener("click", function() {
            accordion.classList.toggle("active");

            const content = accordion.nextElementSibling;
            const icon = accordion.querySelector(".accordion__icon");

            if (content.style.maxHeight) {
                icon.textContent = "+";
                content.style.maxHeight = null;
            } 
            else {
                icon.textContent = "–";
                content.style.maxHeight = content.scrollHeight + "px";
            }
        });
    });
}