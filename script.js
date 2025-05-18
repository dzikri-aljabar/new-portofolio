const toggleBtn = document.getElementById('toggleBtn');
const menu = document.getElementById('menu');

// Toggle menu saat klik tombol hamburger
toggleBtn.addEventListener('click', (e) => {
    e.stopPropagation(); // Biar klik ini nggak dianggap klik di luar

    menu.classList.toggle('hidden');

    // Ganti ikon
    toggleBtn.innerHTML = menu.classList.contains('hidden')
        ? `<i class="fa-solid fa-bars text-lg text-white"></i>`
        : `<i class="fa-solid fa-xmark text-lg text-white"></i>`;
});

// Tutup menu saat klik di luar
document.addEventListener('click', (e) => {
    const isClickInsideMenu = menu.contains(e.target);
    const isClickToggle = toggleBtn.contains(e.target);

    if (!menu.classList.contains('hidden') && !isClickInsideMenu && !isClickToggle) {
        menu.classList.add('hidden');
        toggleBtn.innerHTML = `<i class="fa-solid fa-bars text-lg text-white"></i>`;
    }
});


const scrollers = document.querySelectorAll(".scroller");

if(!window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
    addAnimation();
}

function addAnimation() {
    scrollers.forEach((scroller) => {
        scroller.setAttribute("data-animated", true);

        const scrollerInner = scroller.querySelector(".scroller_inner");
        const scrollerContent = Array.from(scrollerInner.children);

        scrollerContent.forEach((item) => {
            const duplicatedItem = item.cloneNode(true);
            duplicatedItem.setAttribute("aria-hidden", true);
            scrollerInner.appendChild(duplicatedItem);
        })
    });
}
