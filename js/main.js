'use struct';

{
    const menuItems = document.querySelectorAll('.menu li a'); //menuの中のliの全てのa
    const contents = document.querySelectorAll('content');

    menuItems.forEach(cilkedItem => {
        cilkedItem.addEventListener('click', e => {
            e.preventDefault();

            menuItems.forEach(item => {
                item.classList.remove('active');
            });
            cilkedItem.classList.add('active');

            contents.forEach(content => {
                content.classList.remove('active');
            });
            document.getElementById(cilkedItem.dataset.id).classList.add('active');
        });
    });
}