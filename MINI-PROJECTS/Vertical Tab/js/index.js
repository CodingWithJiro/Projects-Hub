toggleVtab();

function toggleVtab() {
    // DECLARE VARIABLES
    const vtabContainer = document.querySelector(".vtab__container");
    const vtabs = vtabContainer.querySelectorAll(".vtab__button");
    const articles = vtabContainer.querySelectorAll(".vtab__article");
    const defaultVtab = document.getElementById("tabLorem");

    // ADD A RESET FUNCTION
    function resetVtab() {
        vtabs.forEach(vtab => {
            vtab.classList.remove("vtab__button--current");
            vtab.setAttribute("aria-selected", "false");
            vtab.setAttribute("tabindex", "-1")
        });
        articles.forEach(article => {
            article.classList.add("hidden");
        });
    }

    // THE TARGET ARTICLE WILL SHOW WHEN A VTAB BUTTON IS CLICKED
    vtabs.forEach(vtab => {
        vtab.addEventListener("click", function(){
            const vtabData = vtab.dataset.tab;
            resetVtab();
            vtab.classList.add("vtab__button--current");
            vtab.setAttribute("aria-selected", "true");
            vtab.setAttribute("tabindex", "0")
            articles.forEach(article => {
                const articleData = article.dataset.tab;
                if(articleData === vtabData) {
                    article.classList.remove("hidden");
                }
            });
        });
    });

    // ADD A DEFAULT CLICKED VTAB
    defaultVtab.click();
}