// Mobile Menu Toggle
const mobileMenu = document.getElementById('mobile-menu');
const navLinks = document.querySelector('.nav-links');

mobileMenu.addEventListener('click', () => {
  navLinks.classList.toggle('active');
});

// Section Navigation
const sections = document.querySelectorAll('.section');
const navLinksAll = document.querySelectorAll('.nav-links a');

navLinksAll.forEach(link => {
  link.addEventListener('click', (e) => {
    e.preventDefault();

    // Hide all sections
    sections.forEach(section => section.classList.remove('active'));

    // Show the clicked section
    const targetSection = document.querySelector(link.getAttribute('href'));
    targetSection.classList.add('active');

    // Update active link in navigation
    navLinksAll.forEach(navLink => navLink.classList.remove('active'));
    link.classList.add('active');
  });
});

// Highlight Active Section on Scroll
window.addEventListener('scroll', () => {
  const scrollPosition = window.scrollY;

  sections.forEach(section => {
    const sectionTop = section.offsetTop;
    const sectionHeight = section.offsetHeight;

    if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
      const targetLink = document.querySelector(`.nav-links a[href="#${section.id}"]`);
      navLinksAll.forEach(link => link.classList.remove('active'));
      targetLink.classList.add('active');
    }
  });
});

// Contact Form Submission
const contactForm = document.getElementById('contact-form');

contactForm.addEventListener('submit', (e) => {
  e.preventDefault();
  const formData = new FormData(contactForm);
  const data = Object.fromEntries(formData);

  // Simulate form submission (replace with actual API call)
  console.log('Form Submitted:', data);
  alert('Thank you for your message! We will get back to you soon.');
  contactForm.reset();
});