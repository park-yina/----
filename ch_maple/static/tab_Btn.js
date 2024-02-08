document.addEventListener('DOMContentLoaded', function () {
    const tabItems = document.querySelectorAll('.tab__item');
    if (tabItems.length > 0) {
        tabItems.forEach(function (item) {
            item.addEventListener('click', function () {
                tabItems.forEach(function (tab) {
                    tab.classList.remove('active');
                });
                item.classList.toggle('active');
            });
        });
    }
});
