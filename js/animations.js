const timeline = gsap.timeline({ defaults: { ease: 'power1.out' } });

timeline.to('.preloader__text', { y: '0%', duration: 2, stagger: 0.5 })
timeline.to('.preloader__slider', { y: '-100%', duration: 1, delay: 0.25 });
timeline.to('.preloader', { y: '-100%', duration: 1 }, '-=1.25');
timeline.fromTo(
  '.hero__content',
  { opacity: 0.3, y: '15%' },
  { opacity: 1, y: '0%', duration: 1 },
  '-=1.5'
);
// setTimeout(()=>document.getElementById("preloader__text").innerHTML = "Hello there !", 2500);

form = document.getElementById('contact-form')
form.addEventListener('submit', function(event) {
   // generate a five digit number for the contact_number variable
   console.log("here too");
   // these IDs from the previous steps
   emailjs.sendForm('service_zfal8mq', 'template_uh1efrs', this)
       .then(function() {
           console.log('SUCCESS!');
       }, function(error) {
           console.log('FAILED...', error);
       });
   event.preventDefault();
});