(()=>{
    const refs = {
        openMobileMenuBtn: document.querySelector("[data-mobile-menu-open]"),
        closeMobileMenuBtn: document.querySelector("[data-mobile-menu-close]"),
        mobileMenu: document.querySelector("[data-mobile-menu]")
    };
    refs.openMobileMenuBtn.addEventListener("click", toggleMobileMenu);
    refs.closeMobileMenuBtn.addEventListener("click", toggleMobileMenu);
    function toggleMobileMenu() {
        refs.mobileMenu.classList.toggle("is-hidden");
    }
})();

//# sourceMappingURL=index.4de31554.js.map
