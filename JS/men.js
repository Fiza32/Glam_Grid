

// Dropdown JS
function dropDown1() {
    let content = document.querySelector(".drop-elem1");

    content.addEventListener("mouseover", function () {
        let menu = document.querySelector(".dd-menu1");
        menu.style.display = "block";
    });

    let menu = document.querySelector(".dd-menu1");
    menu.addEventListener("mouseover", function () {
        menu.style.display = "block";
        menu.addEventListener("mouseout", function () {
            menu.style.display = "none";
        });
    });

    content.addEventListener("mouseout", function () {
        let menu = document.querySelector(".dd-menu1");
        menu.style.display = "none";
    });
}
dropDown1();
