const menuIcon = document.querySelector('#menu-icon');
const navbar = document.querySelector('.navbar');

menuIcon.onclick = () => {
    // Munculkan atau sembunyikan kotak menu
    navbar.classList.toggle('active');
    
    // Ubah simbol garis tiga menjadi simbol silang (X) murni
    if (navbar.classList.contains('active')) {
        menuIcon.innerHTML = '&#10005;'; // Simbol silang X
    } else {
        menuIcon.innerHTML = '&#9776;';  // Simbol garis tiga
    }
};



const galleryItems = document.querySelectorAll('.gallery-item img');

// Hanya jalankan kode ini jika ada gambar gallery di halaman tersebut
if (galleryItems.length > 0) {
    // Buat elemen <div> baru untuk background gelap (overlay)
    const lightbox = document.createElement('div');
    lightbox.id = 'lightbox';
    document.body.appendChild(lightbox);

    // Tambahkan aksi klik pada setiap gambar
    galleryItems.forEach(image => {
        image.addEventListener('click', () => {
            lightbox.classList.add('active'); // Munculkan layar gelap
            const img = document.createElement('img'); // Buat tag <img> baru
            img.src = image.src; // Copy sumber gambar yang diklik
            
            // Bersihkan gambar sebelumnya (jika ada), lalu masukkan gambar baru
            while (lightbox.firstChild) {
                lightbox.removeChild(lightbox.firstChild);
            }
            lightbox.appendChild(img);
        });
    });

    // Tutup lightbox jika area gelap di luarnya diklik
    lightbox.addEventListener('click', e => {
        if (e.target !== e.currentTarget) return; // Jangan tutup jika gambarnya yang diklik
        lightbox.classList.remove('active');
    });
}