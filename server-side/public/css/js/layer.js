gsap.to('.layer', {y:'-100vh', delay: .4})
gsap.to('.layer1', {y:'-100vh', delay: .6})
gsap.to('.layer2', {y:'-100vh', delay: .7})
gsap.to('.overlay-gsap', {y:'-100vh', delay: 1})

gsap.fromTo('.section-content', {x: '-30rem', opacity: 0}, {x: '0', opacity: 1, ease: 'back.out(1.7)', delay:1.6})
gsap.fromTo('.newsletter', {x: '-40rem', opacity: 0}, {x: '0', opacity: 1, ease: 'back.out(1.7)', delay:2})