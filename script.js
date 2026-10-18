const links = document.querySelectorAll('.navbar a');

window.onscroll = function() {
    links.forEach(link => {
        const section = document.querySelector(link.hash);
``
        if (section.offsetTop <= window.scrollY + 200) {
            links.forEach(a => a.classList.remove('active'));
            link.classList.add('active');
        }
    });
};
