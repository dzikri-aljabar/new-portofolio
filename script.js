import Swal from 'sweetalert2'

const toggleBtn = document.getElementById('toggleBtn');
const menu = document.getElementById('menu');

toggleBtn.addEventListener('click', () => {
    menu.classList.toggle('hidden');
    if (menu.classList.contains('hidden')) {
        // Mengubah ikon menjadi hamburger saat menu disembunyikan
        toggleBtn.innerHTML = `
        <i class="fa-solid fa-bars text-lg text-white"></i>
        `;
    } else {
        // Mengubah ikon menjadi silang saat menu ditampilkan
        toggleBtn.innerHTML = `
        <i class="fa-solid fa-xmark text-lg text-white"></i>
        `;
    }
});

