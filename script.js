let currentSectionId = 'personal-details-section';

function navigateToSection(sectionId) {
    // Hide all sections
    const sections = document.querySelectorAll('.form-section');
    sections.forEach(section => section.style.display = "none");

    // Show the targeted section
    document.getElementById(sectionId).style.display = "block";

    // Update navbar links
    const links = document.querySelectorAll('.nav-link');
    links.forEach(link => link.classList.remove('active'));
    document.querySelector(`.nav-link[href="#${sectionId}"]`).classList.add('active');

    // Update current section ID
    currentSectionId = sectionId;
}

function nextSection(nextSectionId) {
    navigateToSection(nextSectionId);
}

// Initialize the first section as visible
navigateToSection(currentSectionId);
