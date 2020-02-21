'use struct';

{
    const menuItems = document.querySelectorAll('.menu li a'); //menuの中のliの全てのa

    menuItems.forEach(item => {
        item.addEventListener('click', e => {
            e.preventDefault();

            item.classList.add('active');
        });
    });
}