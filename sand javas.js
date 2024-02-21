
document.addEventListener('mouseleave', function (e) {
    if (e.clientY < 0 ) {
    showExitIntentPopup();
    localStorage.setItem('popupShown', 'true');
    }
});

function showExitIntentPopup() {
    document.getElementById('exitIntentPopup').style.display = 'flex';
}

function rateStar(star) {
    for (let i = 1; i <= 5; i++) {
    const starElement = document.getElementById('starRating').children[i - 1];
    starElement.classList.toggle('checked', i <= star);
    }
}

function submitReview() {
    
    document.getElementById('exitIntentPopup').style.display = 'none';
    showConfirmationPopup();
}

function showConfirmationPopup() {
    document.getElementById('confirmationPopup').style.display = 'flex';
}

function hideConfirmationPopup() {
    document.getElementById('confirmationPopup').style.display = 'none';
}


window.addEventListener('click', function (e) {
    if (!e.target.closest('.popup')) {
    document.querySelectorAll('.overlay').forEach(function (popup) {
        popup.style.display = 'none';
    });
    }
});

document.addEventListener('DOMContentLoaded', function () {
    
    const aboutSection = document.getElementById('aboutSection');
    const contentBox = document.querySelector('.content-box');

    
    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                
                contentBox.classList.add('animated');
                
                observer.disconnect();
            }
        });
    }, { threshold: 0.5 }); 

    
    observer.observe(aboutSection);
});

document.addEventListener('DOMContentLoaded', function () {
    
    const navLinks = document.querySelectorAll('nav a[href^="#"]');

    
    navLinks.forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();

            const targetSectionId = this.getAttribute('href').substring(1);
            const targetSection = document.getElementById(targetSectionId);

            
            targetSection.scrollIntoView({
                behavior: 'smooth'
            });
        });
    });
});

document.addEventListener('DOMContentLoaded', function () {
    const bestsellersSection = document.getElementById('Bestseller');
    const boxes = document.querySelectorAll('.box');

    function handleIntersection(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('animated');
            }
        });
    }

    
    const observer = new IntersectionObserver(handleIntersection, { threshold: 0.5 });

    
    observer.observe(bestsellersSection);
});

function showMenu(menuType) {
    const menuContent = document.getElementById('menuContent');
    
    switch (menuType) {
        case 'appetizers':
            menuContent.innerHTML = `<p>${menuType} menu content goes here...</p>`;
            break;
        
    }
}
    