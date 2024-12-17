const navItems = document.querySelectorAll('.nav-item');
const frontendParagraph = document.querySelector('p strong:contains("Фронт энд")'); // Select the paragraph

navItems.forEach(item => {
  item.addEventListener('click', () => {
    showContent(item.id);
    if (item.textContent === 'Фронт энд') {
      frontendParagraph.style.color = 'blue'; // Change text color to blue
    } else {
      frontendParagraph.style.color = 'black'; // Reset text color to black
    }
  });
});

function showContent(sectionId) {
  const frontendContent = document.getElementById('frontend');
  const backendContent = document.getElementById('backend');

  frontendContent.style.display = 'none';
  backendContent.style.display = 'none';

  if (sectionId) {
    document.getElementById(sectionId).style.display = 'block';
  }
}

function jumpToSection() {
    const targetSection = document.getElementById('target-section');
    targetSection.scrollIntoView({ behavior: 'smooth' }); // Smooth scrolling
}
function scrollToMap() {
    const mapSection = document.querySelector('.map');
    mapSection.scrollIntoView({ behavior: 'smooth' });
}
function scrollToPDF() {
    const pdfSection = document.querySelector('.pdf');
    pdfSection.scrollIntoView({ behavior: 'smooth' });
}