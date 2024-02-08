document.addEventListener('DOMContentLoaded', function () {
    const toggleBtn = document.querySelector('.navbar_toggleBtn');
    const menuList = document.querySelector('.nav_bar_list');
    const navbarLogo = document.querySelector(".navbar__logo");

    if (toggleBtn != null) {
        toggleBtn.addEventListener('click', () => {
            menuList.classList.toggle('active');
            
            if (menuList.classList.contains('active')) {
                if (navbarLogo) {
                    navbarLogo.style.display = "none";
                }
            } else {
                if (navbarLogo) {
                    navbarLogo.style.display = "";
                }
            }
        });
    } else {
        console.log("왜 btn이 null이지");
    }
});
