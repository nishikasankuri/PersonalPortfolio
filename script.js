// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});
// Typing Effect
const typed = new Typed('.typed', {
    strings: ['Nishika!', 'a Developer', 'a Problem Solver', 'Software Engineer Intern -AI/ML', 'Asssitant System Engineer'],
    typeSpeed: 100,
    backSpeed: 50,
    loop: true
});
// Experience Section - Toggle Detailed Description
document.querySelectorAll('.view-more').forEach(button => {
    button.addEventListener('click', () => {
        const experienceItem = button.closest('.experience-item');
        experienceItem.classList.toggle('active');

        // Change button text
        if (experienceItem.classList.contains('active')) {
            button.textContent = 'View Less';
        } else {
            button.textContent = 'View More';
        }
    });
});
// Volunteering Section - Toggle Detailed Description
document.querySelectorAll('.view-more').forEach(button => {
    button.addEventListener('click', () => {
        const volunteeringItem = button.closest('.volunteering-item');
        volunteeringItem.classList.toggle('active');

        // Change button text
        if (volunteeringItem.classList.contains('active')) {
            button.textContent = 'View Less';
        } else {
            button.textContent = 'View More';
        }
    });
});