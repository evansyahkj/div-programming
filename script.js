document.addEventListener('DOMContentLoaded'), function () {
    // Seleksi elemen yang memiliki submenu
    const menuItemsWithSubmenu = document.querySelectorAll('li:has(.submenu)');

    // Menambahkan event listener pada setiap elemen
    menuItemsWithSubmenu.forEach((menuItem) => {
        menuItem.addEventListener('click', function (event) {
            // Cek apakah submenu aktif
            const submenu = menuItem.querySelector('.submenu');
            if (submenu.style.display === 'block') {
                submenu.style.display = 'none';
            } else {
                submenu.style.display = 'block';
            }
            event.stopPropagation();
        });
    });
}
