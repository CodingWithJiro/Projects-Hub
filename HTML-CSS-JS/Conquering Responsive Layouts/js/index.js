// RUN MENU BUTTON FUNCTION ON PAGE LOAD
menuButton();

// DECLARE MENU BUTTON FUNCTION
function menuButton() {
    // DECLARE LOCAL VARIABLE FOR HEADER ELEMENT LOOKUP
    const header = document.querySelector(".header");
    // DECLARE VARIABLE FOR MENU BUTTON
    const button = header.querySelector (".header__menu");
    // DECLARE VARIABLE FOR NAV MENU
    const menu = header.querySelector(".nav");
    
    // ADD OPEN/CLOSE NAV CHECKER
    function isOpen() {
        // DECLARE VARIABLE FOR ARIA EXPANDED ATTRIBUTE VALUE
        const ariaExpanded = button.getAttribute("aria-expanded");

        // RETURN TRUE OR FALSE
        if (ariaExpanded === "true") {
            return true;
        } else {
            return false;
        }
    }

    // ADD THE OPEN NAV FUNCTION
    function openNav() {
        // ARIA EXPANDED SET TO TRUE FOR MENU BUTTON
        button.setAttribute("aria-expanded", "true");
        // REMOVE HIDDEN CLASS FROM THE NAV ELEMENT
        menu.classList.remove("hidden");
    }

    // ADD THE CLOSE NAV FUNCTION
    function closeNav() {
        // ARIA EXPANDED SET TO FALSE FOR MENU BUTTON
        button.setAttribute("aria-expanded", "false");
        // ADD HIDDEN CLASS FROM THE NAV ELEMENT
        menu.classList.add("hidden");
    }

    // ADD EVENT LISTENER CLICK TO THE MENU BUTTON
    button.addEventListener("click", function() {
        // CALL CHECKER FUNCTION
        isOpen();

        // IF OPEN, CLOSE NAV MENU, OTHERWISE, OPEN NAV MENU
        if (isOpen()) {
            closeNav();
        } else {
            openNav();
        }
    });

    // ADD EVENT LISTENER CLICK FOR THE ENTIRE DOCUMENT
    document.addEventListener("click", function(event) {
        // DECLARE A VARIABLE IF THE USER CLICKED INSIDE THE HEADER ELEMENT (TRUE) OR OUTSIDE (FALSE)
        const isHeader = !!(event.target.closest(".header"));
        // CHECK IF ISHEADER IS FALSE, DO THE FF
        if (isHeader === false) {
        // CALL MENU BUTTON TOGGLE FUNCTION
            closeNav();
        }
    });

    // ADD EVENT LISTENER KEYDOWN "ESCAPE" FOR THE ENTIRE DOCUMENT
    document.addEventListener("keydown", function (event) {
        // DECLARE A VARIABLE IF THE USER CLICKED THE ESCAPE KEY BUTTON
        const isEscape = (event.key === "Escape");
        // IF USER CLICKED THE ESCAPE KEY, CLOSE NAV MENU
        if (isEscape === true) {
            closeNav();
        }
    });
}
