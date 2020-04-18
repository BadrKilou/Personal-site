gsap.to('.logo', {duration: 3, x: -10, backgroundColor: '#746675', ease: 'back', borderRadius: '3%'});
gsap.from('.random-person', {duration: 4, y: 100, ease: 'back', stagger: 0.6})
gsap.from('.cta-btn', {duration: 3, y: 100, ease: 'back'})
gsap.from('.nav-links', {
    duration: 3,
    delay: 1,
    ease: 'back',
    y: 100   
})
gsap.from('.me', {
    duration: 3,
    y: -100,
    ease: easeOut
})

gsap.from('.hello', {
    duration: 3,
    y: 100,
    ease: 'back',
    
})



