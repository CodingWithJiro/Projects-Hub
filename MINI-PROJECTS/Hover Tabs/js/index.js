// CALL THE HOVER TAB FUNCTION ON PAGE LOAD
hoverTab();

// DECLARE HOVER TAB FUNCTION
function hoverTab() {
    // DECLARE LOCAL VARIABLES
    const hoverTab = document.querySelector(".hoverTab");
    const buttons = hoverTab.querySelectorAll(".nav__button");
    const articles = hoverTab.querySelectorAll(".content__article");

    // ADD A RESET TAB FUNCTION
    function resetTab() {
        // LOOP OVER EACH BUTTON
        buttons.forEach(button => {
            // REMOVE THE ACTIVE CLASS
            button.classList.remove("nav__button--active");

            // SET ATTRIBUTE OF ARIA-SELECTED TO FALSE
            button.setAttribute("aria-selected", "false");
        });

        // LOOP OVER EACH ARTICLE
        articles.forEach(article => {
            // ADD HIDDEN CLASS
            article.classList.add("hidden");

            // SET ATTRIBUTE OF ARIA-HIDDEN TO TRUE
            article.setAttribute("aria-hidden", "true");
        });
    }

    // LOOP OVER EACH TAB BUTTON
    buttons.forEach(button => {
        // ADD A HOVER LISTENER OVER A TAB BUTTON
        button.addEventListener("mouseover", function() {
            // DECLARE A VARIABLE TO STORE BUTTON DATA-TAB VALUE
            const buttonData = button.dataset.tab;

            // RESET ALL TAB BEFORE DOING ANYTHING
            resetTab();

            // ADD THE ACTIVE CLASS FOR THE HOVERED BUTTON
            button.classList.add("nav__button--active");

            // SET THE ATTRIBUTE FOR ARIA SELECTED OF THE HOVERED BUTTON TO TRUE
            button.setAttribute("aria-selected", "true");

            // LOOP OVER EACH ARTICLE
            articles.forEach(article => {
                // DECLARE A VARIABLE TO STORE ARTICLE DATA-TAB VALUE
                const articleData = article.dataset.tab;
                
                // ADD A CONDITION THAT IF ARTICLE DATA IS EQUAL TO BUTTON DATA, DO THE FF:
                if (articleData === buttonData) {
                    // UNHIDE THE ARTICLE
                    article.classList.remove("hidden");
                    // SET ATTRIBUTE ARIA-HIDDEN TO FALSE;
                    article.setAttribute("aria-hidden", "false");
                }
            });
        });
    });

    // ADD A DEFAULT HOVERED OVER TAB ON PAGE LOAD
    const defaultTab = hoverTab.querySelector(".nav__button--default");
    defaultTab.dispatchEvent(new Event("mouseover"));
}