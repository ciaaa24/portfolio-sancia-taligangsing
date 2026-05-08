
const menuIcon = document.querySelector('#menu-icon');
const navbar = document.querySelector('.navbar');


if (menuIcon && navbar) {
    menuIcon.onclick = () => {
        navbar.classList.toggle('active');
        if (navbar.classList.contains('active')) {
            menuIcon.innerHTML = '&#10005;'; // Simbol silang (X)
        } else {
            menuIcon.innerHTML = '&#9776;';  // Simbol garis tiga
        }
    };
}


const galleryItems = document.querySelectorAll('.gallery-item img');


if (galleryItems.length > 0) {
    
    const lightbox = document.createElement('div');
    lightbox.id = 'lightbox';
    document.body.appendChild(lightbox);

    
    galleryItems.forEach(image => {
        image.addEventListener('click', () => {
            lightbox.classList.add('active'); 
            
            const img = document.createElement('img');
            img.src = image.src; 
            
            
            while (lightbox.firstChild) {
                lightbox.removeChild(lightbox.firstChild);
            }
            lightbox.appendChild(img);
        });
    });

    
    lightbox.addEventListener('click', e => {
        if (e.target !== e.currentTarget) return; 
        lightbox.classList.remove('active');
    });
}