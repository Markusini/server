const dialog = document.getElementById("page-header-menu");
dialog.addEventListener("click", (event) => {
    if (event.target === dialog) {
        dialog.close();
    }
});

window.addEventListener("resize", () => {
    dialog.close();
})