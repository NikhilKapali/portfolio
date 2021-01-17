const showMenu = (toggleId, navId) => {
    const toggle = document.getElementById(toggleId),
        nav = document.getElementById(navId)
    
    if (toggle && nav) {
        toggle.addEventListener('click', () => {
            nav.classList.toggle('show')
        })
    }
}

showMenu('nav-toggle', 'nav-menu')

const navLink = document.querySelectorAll('.nav__link')

function linkAction() {
    const navMenu = document.getElementById('nav-menu')
    navMenu.classList.remove('show')
}

navLink.forEach(n => n.addEventListener('click', linkAction))

const sections = document.querySelectorAll('section[id]')

window.addEventListener('scroll', scrollActive)

function scrollActive() {
    const scrolly = window.pageYOffset

    sections.forEach(current => {
        const sectionHeight = current.offsetHeight
        const sectionTop = current.offsetTop - 50;
        sectionId = current.getAttribute('id')

        if (scrolly > sectionTop && scrolly <= sectionTop + sectionHeight) {
            DocumentTimeline.querySelector('.nav__menu a[href*=' +sectionId + ']').classList.add('active')
        }
        else {
            DocumentTimeline.querySelector('.nav__menu a[href*=' +sectionId + ']').classList.remove('active')
            
        }
    })
}