gsap.registerPlugin(ScrollTrigger)

const navLinksContainer = document.querySelector('.links')
const navLinks = document.querySelectorAll('.links>a')
const hamburger = document.getElementById('hamburger')

hamburger.addEventListener('click', () => {
    navLinksContainer.classList.toggle('click')
})

const toggleActiveLink = e => {
    navLinks.forEach(link => {
        if (link.classList.contains('active-link')) {
            link.classList.remove('active-link')
        }
    })
    e.target.className = 'active-link'
    navLinksContainer.classList.remove('click')
}
navLinks.forEach(link => {
    link.addEventListener('click', toggleActiveLink)
    const href = link.getAttribute('href')
    const sectionId = href.substring(1)

})

//animation stuff
gsap.to('#work-arrow, #projects-arrow', { duration: 0.7, xPercent: 30, yoyo: true, repeat: -1, ease: Power2.easeOut });

const scrollTrigger = {
    trigger: '#computer-man',
    start: 'top 150px',
    end: '+=500',
    toggleActions: 'play reset play reset'
}

gsap.to('#left-leaf', {
    scrollTrigger, duration: 1, rotation: 15, transformOrigin: 'bottom 50%', yoyo: true, repeat: -1, ease: Power0.easeNone
})
gsap.to('#right-leaf', { scrollTrigger, duration: 1, rotation: -15, transformOrigin: 'bottom 50%', yoyo: true, repeat: -1, ease: Power0.easeNone })
gsap.to('#left-hand', { scrollTrigger, duration: 0.3, rotation: 5, transformOrigin: 'top 50%', yoyo: true, repeat: -1, ease: Power0.easeNone })
gsap.to('#right-hand', { scrollTrigger, duration: 0.3, delay: 0.3, rotation: -5, transformOrigin: 'top 50%', yoyo: true, repeat: -1, ease: Power0.easeNone })

gsap.from('.wrapper', {
    scrollTrigger: {
        trigger: '.wrapper',
        start: 'top center',
        end: '+=500',
    }, duration: 1, x: -800, ease: Back.easeOut
})

gsap.from('.card:first-child', {
    scrollTrigger: {
        trigger: '.card:first-child',
        start: 'top center',
        end: '+=600',
    }, duration: 0.7, xPercent: 110, ease: Power2.easeOut
})
gsap.from('.card:last-child', {
    scrollTrigger: {
        trigger: '.card:last-child',
        start: 'top 80%',
        end: '+=600',
    }, duration: 0.7, xPercent: -110, ease: Power2.easeOut
})

gsap.set(".skills-container", {
    xPercent: -100
});

gsap.to(".skills-container", {
    duration: 5,
    ease: "none",
    xPercent: 100,
    repeat: -1
});

gsap.from('.project1 >div', {
    scrollTrigger: {
        trigger: '.project1',
        start: 'top 80%',
        end: '+=500'
    },
    duration: 0.5,
    scale: 0,
    ease: 'none',
    stagger: {
        grid: [1, 4],
        each: 0.2
    }
})
gsap.from('.project2 >div', {
    scrollTrigger: {
        trigger: '.project2',
        start: 'top 80%',
        end: '+=500'
    },
    duration: 0.5,
    scale: 0,
    ease: 'none',
    stagger: {
        grid: [1, 4],
        each: 0.2
    }
})