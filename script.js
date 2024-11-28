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

function validateCurrentSection() {
    const currentSection = document.getElementById(currentSectionId);
    const inputs = currentSection.querySelectorAll('input, select, textarea');
    for (let input of inputs) {
        if (input.value.trim() === '') {
            // Show alert if a field is empty
            alert('Please fill out all required fields before proceeding.');
            return false;
        }
    }
    return true;
}

function nextSection(nextSectionId) {
    if (validateCurrentSection()) {
        navigateToSection(nextSectionId);
    }
}

// Initialize the first section as visible
navigateToSection(currentSectionId);
