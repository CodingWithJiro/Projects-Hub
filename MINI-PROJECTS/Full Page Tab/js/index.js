// CALL THE TOGGLE TAB FUNCTION ON PAGE LOAD
toggleTab();
// DECLARE THE TOGGLE TAB FUNCTION
function toggleTab() {
    // DECLARE REQUIRED VARIABLES
    const nav = document.querySelector(".nav");
    const page = document.querySelector(".page");
    const buttons = nav.querySelectorAll(".nav__button");
    const sections = page.querySelectorAll(".page__section"); 

    // ADD A RESET TAB FUNCTION
    function resetTab() {
        // LOOP THROUGH ALL BUTTONS
        buttons.forEach(button => {
            // FOR EACH BUTTON REMOVE THE FF CLASSES
            button.classList.remove("bgcolor0", "bgcolor1", "bgcolor2", "bgcolor3", "nav__button--active");
            // FOR EACH BUTTON SET ARIA-SELECTED ATTRIBUTE VALUE TO FALSE
            button.setAttribute("aria-selected", "false");
        });
        // LOOP THROUGH ALL PAGE SECTIONS
        sections.forEach(section => {
            // HIDE ALL PAGE SECTIONS
            section.classList.add("hidden");
            // REMOVE THE FF CLASSES FOR THE PAGE ELEMENT
            page.classList.remove("bgcolor0", "bgcolor1", "bgcolor2", "bgcolor3");
            // FOR EACH PAGE SECTION SET ATTRIBUTE OF ARIA-HIDDEN TO TRUE
            section.setAttribute("aria-hidden", "true");
        });
    }

    // ADD A FUNCTION WHEN A BUTTON IS CLICKED
    buttons.forEach((button, i) => {
        // ADD A LISTENER FOR EACH BUTTON
        button.addEventListener("click", function () {
            // STORE THE DATA-TAB VALUE FROM CLICKED BUTTON
            const buttonData = button.dataset.tab;
            // CALL RESET TAB FUNCTION
            resetTab();
            // LOOP THROUGH ALL SECTIONS
            sections.forEach(section => {
                // STORE ALL THE DATA-TAB VALUE FROM ALL SECTIONS
                const sectionData = section.dataset.tab;
                // IF ONE DATA-TAB VALUE FROM SECTION IS EQUAL TO THE DATA-TAB VALUE OF THE CLICKED BUTTON, DO THE FF:
                if (sectionData === buttonData) {
                    // UNHIDE THE MATCHING SECTION
                    section.classList.remove("hidden");
                    // CHANGE THE PAGE BGCOLOR
                    page.classList.add(`bgcolor${i}`);
                    // CHANGE THE CLICKED BUTTON BGCOLOR
                    button.classList.add(`bgcolor${i}`);
                    // ADD THIS ACTIVE CLASS FOR THE CLICKED BUTTON
                    button.classList.add("nav__button--active");
                    // CHANGE THE ARIA-SELECTED FOR CLICKED BUTTON TO TRUE
                    button.setAttribute("aria-selected", "true");
                    // CHANGE THE ARIA-HIDDEN VALUE ATTRIBUTE FOR MATCHING PAGE SECTION TO FALSE
                    section.setAttribute("aria-hidden", "false");
                }
            });
        });
    });

    // ADD A DEFAULT CLICKED PAGE
    const buttonDefault = nav.querySelector(".nav__button--default");
    buttonDefault.click();
}