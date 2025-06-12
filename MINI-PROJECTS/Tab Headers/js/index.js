// DECLARE GLOBAL VARIABLES
const tabHeader = document.querySelector(".tabHeader");

// DEFINE TOGGLETABHEADER() FUNCTION ON PAGE LOAD
toggleTabHeader();

// DECLARE TOGGLETABHEADER() FUNCTION
function toggleTabHeader() {
    // DECLARE LOCAL VARIABLES
    const buttons = tabHeader.querySelectorAll(".tabHeader__button");
    const articles = tabHeader.querySelectorAll(".tabHeader__article");
    const content = tabHeader.querySelector(".tabHeader__content");

    // ADD A RESET FUNCTION
    function resetTabHeader() {
        articles.forEach(article => {
            article.classList.add("hidden");
        });
        buttons.forEach(button => {
            button.classList.remove("active", "bgcolor0", "bgcolor1", "bgcolor2", "bgcolor3");
            button.setAttribute("aria-selected", "false");
        });
        content.classList.remove("bgcolor0", "bgcolor1", "bgcolor2", "bgcolor3");
    }

    // ADD A CLICK LISTENER FOR EACH TABHEADER BUTTON
    buttons.forEach((button, i) => {
        button.addEventListener("click", function() {
            const buttonData = button.dataset.tab;
            resetTabHeader();
            button.classList.add(`bgcolor${i}`,"active");
            content.classList.add(`bgcolor${i}`);
            button.setAttribute("aria-selected", "true");
            articles.forEach(article => {
                const articleData = article.dataset.tab;
                if (articleData === buttonData) {
                    article.classList.remove("hidden");
                }
            });
        });
    });
    
    // ADD A DEFAULT CLICKED TABHEADER BUTTON
    const defaultTabHeader = tabHeader.querySelector(".tabHeader__button--default");
    defaultTabHeader.click();
}