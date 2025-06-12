toggleTabs();

function toggleTabs() {
    const tabContainer = document.querySelector(".tab__container");
    const buttons = tabContainer.querySelectorAll(".tab__button");
    const articles = tabContainer.querySelectorAll(".tab__article");
    const closeButtons = tabContainer.querySelectorAll(".tab__closeButton");
    
    // ADD A RESET FUNCTION
    function resetTabs() {
        articles.forEach(a => {
            a.classList.add("hidden");
        });
        buttons.forEach(b => {
            b.classList.remove("tab__button--active");
            b.setAttribute("aria-selected", "false");
        });
    }

    // CALL THE RESET FUNCTION WHEN A CLOSE BUTTON IS CLICKED
    closeButtons.forEach(closeButton => {
        closeButton.addEventListener("click", function() {
            resetTabs()
        });
    });

    // TOGGLE TAB ARTICLES WHEN A NEW TAB IS CLICKED
    buttons.forEach(button => {
        button.addEventListener("click", function() {
            const buttonData = button.dataset.tab;
            resetTabs()
            button.classList.add("tab__button--active");
            button.setAttribute("aria-selected", "true");
            articles.forEach(article => {
                const articleData = article.dataset.tab;
                if (articleData === buttonData) {
                    article.classList.remove("hidden");
                }
            });
        });
    });
}