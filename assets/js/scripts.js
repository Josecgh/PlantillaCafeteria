const openBtn = document.getElementById('openMenu');
const closeBtn = document.getElementById('closeMenu');
const sidebar = document.getElementById('sidebar');
const overlay = document.getElementById('overlay');
const menuLinks = document.querySelectorAll('#sidebar a');


menuLinks.forEach(link => {
    link.addEventListener('click', () => {
        closeSidebar();
    });
});

/*
* funcion de cerrar 
*/ 

const closeSidebar = () => {
    sidebar.classList.remove('active');
    overlay.classList.remove('active');
};

closeBtn.addEventListener('click', closeSidebar);
overlay.addEventListener('click', closeSidebar);

openBtn.addEventListener('click', () => {
    sidebar.classList.add('active');
    overlay.classList.add('active');
});




// Botón "Ir al top"
(function(){
    const btn = document.getElementById('btn-top');
    if (!btn) return;

    const toggleVisibility = () => {
        if (window.scrollY > 300) btn.classList.add('show');
        else btn.classList.remove('show');
    };

    window.addEventListener('scroll', toggleVisibility);
    document.addEventListener('DOMContentLoaded', toggleVisibility);

    btn.addEventListener('click', () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    });
})();



