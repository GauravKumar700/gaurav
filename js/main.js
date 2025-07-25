/*===== SHOW MENU =====*/
const showMenu = (toggleId, navId) => {
    const toggle = document.getElementById(toggleId),
        nav = document.getElementById(navId)

    if (toggle && nav) {
        toggle.addEventListener('click', () => {
            nav.classList.toggle('show-menu')
        })
    }
}
showMenu('nav-toggle', 'nav-menu')

/*===== REMOVE MENU MOBILE =====*/
const navLink = document.querySelectorAll('.nav__link')
function linkAction() {
    const navMenu = document.getElementById('nav-menu')
    navMenu.classList.remove('show-menu')
}
navLink.forEach(n => n.addEventListener('click', linkAction))

/*===== SCROLL SECTIONS ACTIVE LINK =====*/
const sections = document.querySelectorAll('section[id]')

function scrollActive() {
    const scrollY = window.pageYOffset

    sections.forEach(current => {
        const sectionHeight = current.offsetHeight
        const sectionTop = current.offsetTop - 50
        const sectionId = current.getAttribute('id')

        if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
            document.querySelector('.nav__menu a[href*=' + sectionId + ']').classList.add('active-link')
        } else {
            document.querySelector('.nav__menu a[href*=' + sectionId + ']').classList.remove('active-link')
        }
    })
}

window.addEventListener('scroll', scrollActive)

/*===== CHANGE BACKGROUND HEADER =====*/
function scrollHeader() {
    const header = document.getElementById('header')
    if (this.scrollY >= 30) {
        header.classList.add('scroll-header')
    } else {
        header.classList.remove('scroll-header')
    }
}

window.addEventListener('scroll', scrollHeader)

/*===== SHOW SCROLL TOP =====*/
function scrollTop() {
    const scrollTop = document.getElementById('scroll-top')
    if (this.scrollY >= 560) {
        scrollTop.classList.add('show-scroll')
    } else {
        scrollTop.classList.remove('show-scroll')
    }
}
window.addEventListener('scroll', scrollTop)

// Toggle Button for Show more skills
// function scrollSkills(direction) {
//     const container = document.getElementById('skillsScroll');
//     const scrollAmount = 300;

//     container.scrollBy({
//         left: direction === 'left' ? -scrollAmount : scrollAmount,
//         behavior: 'smooth',
//     });
// }

/*===== MIXITUP FILTER PORTFOLIO =====*/
const mixer = mixitup('.portfolio__container', {
    selectors: {
        target: '.portfolio__content'
    },
    animation: {
        duration: 300
    }
});

/* Link active portfolio */
const linkPortfolio = document.querySelectorAll('.portfolio__item')

function activePortfolio() {
    if (linkPortfolio) {
        linkPortfolio.forEach(l => l.classList.remove('active-portfolio'))
        this.classList.add('active-portfolio')
    }
}
linkPortfolio.forEach(l => l.addEventListener('click', activePortfolio))

/*===== SWIPER CAROUSEL =====*/
const swiper = new Swiper('.testimonial__container', {
    spaceBetween: 16,
    loop: true,
    grabCursor: true,

    pagination: {
        el: '.swiper-pagination',
        clickable: true
    },
    breakpoints: {
        640: {
            slidesPerView: 2,
        },
        1024: {
            slidesPerView: 3,
        },
    }
});

/*===== GSAP ANIMATION =====*/
gsap.from('.home__img', { opacity: 0, duration: 2, delay: .5, x: 60 })

gsap.from('.home__data', { opacity: 0, duration: 2, delay: .8, y: 25 })

gsap.from('.home__greeting, .home__name, .home__profession, .home__button', { opacity: 0, duration: 2, delay: 1, y: 25, ease: 'expo.out', stagger: .2 })

gsap.from('.nav__logo, .nav__toggle', { opacity: 0, duration: 2, delay: 1.5, y: 25, ease: 'expo.out', stagger: .2 })

gsap.from('.nav__item', { opacity: 0, duration: 2, delay: 1.8, y: 25, ease: 'expo.out', stagger: .2 })

gsap.from('.home__social-icon', { opacity: 0, duration: 2, delay: 2.3, y: 25, ease: 'expo.out', stagger: .2 })

/*========= OPEN MAIL ==========*/

function openEmail() {
    // Replace 'recipient@example.com' with the target email address
    var recipientEmail = 'gauravkumar7004515@gmail.com';

    // Use the mailto: protocol to open the default email client
    var mailtoLink = 'mailto:' + recipientEmail;

    // Open the default email client with the pre-filled recipient email address
    window.location.href = mailtoLink;
}

/*========= OPEN PHONE ==========*/

function openDialpad() {
    // Replace '+1234567890' with the target phone number
    const phoneNumber = '+917004515369';

    // Use the tel: protocol to open the phone dialer
    const telLink = 'tel:' + phoneNumber;

    // Open the phone dialer with the pre-filled phone number
    window.location.href = telLink;
}

/*========= OPEN MAP ==========*/

function openGoogleMaps() {
    // Replace the address with the target location
    const address = 'Roorkee Institute of Technology, Puhana - Jhabrera Rd, Nanheda Anantpur, Uttarakhand 247668';
    // var address = 'WR4P+8X Nanheda Anantpur, Uttarakhand';

    // Encode the address for the URL
    const encodedAddress = encodeURIComponent(address);

    // Create the Google Maps URL with the encoded address
    const mapsUrl = 'https://www.google.com/maps?q=' + encodedAddress;

    // Open Google Maps with the specified address
    window.open(mapsUrl, '_blank');
}

/*========= OPEN WHAT'S APP ==========*/

function openWhatsApp() {
    // Replace '+1234567890' with the target WhatsApp number
    const phoneNumber = '+917004515369';
    // https://wa.me/1XXXXXXXXXX

    // Create the WhatsApp URL with the pre-filled message
    const whatsappUrl = 'https://wa.me/' + phoneNumber + '?text=Hello%20there!';

    // Open WhatsApp with the specified number and pre-filled message
    window.open(whatsappUrl, '_blank');
}
