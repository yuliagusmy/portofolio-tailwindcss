// Function to show the selected portfolio section and hide others
function showPortfolioSection(sectionId) {
    // Hide all portfolio sections with fade out effect
    const sections = document.querySelectorAll('.portfolio-section');
    sections.forEach(section => {
        section.style.opacity = '0';
        setTimeout(() => {
            section.classList.add('hidden');
        }, 300);
    });

    // Show the selected section with fade in effect
    const selectedSection = document.getElementById(`${sectionId}-section`);
    if (selectedSection) {
        setTimeout(() => {
            selectedSection.classList.remove('hidden');
            selectedSection.offsetHeight; // Force reflow
            selectedSection.style.opacity = '1';

            // Initialize typography animation if typography section is shown
            if (sectionId === 'typography') {
                setupTypographySection();
            }
        }, 300);
    }

    // Update active button state
    const buttons = document.querySelectorAll('.portfolio-btn');
    buttons.forEach(button => {
        button.classList.remove('active');
        if (button.getAttribute('onclick').includes(sectionId)) {
            button.classList.add('active');
        }
    });

    // Scroll to the portfolio section smoothly
    const portfolioSection = document.getElementById('portofolio');
    if (portfolioSection) {
        portfolioSection.scrollIntoView({ behavior: 'smooth' });
    }
}

// Function to setup typography section with static grid
function setupTypographySection() {
    const typographySection = document.getElementById('typography-section');
    if (!typographySection) return;

    // Hapus container lama jika ada
    let oldContainer = typographySection.querySelector('.typography-container');
    if (oldContainer) {
        oldContainer.remove();
    }

    // Buat container grid baru
    const container = document.createElement('div');
    container.className = 'typography-container grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6';
    typographySection.appendChild(container);

    // Daftar gambar
    const items = [
        { src: 'src/img/portofolio/typography/typography1.png', alt: 'Typography Project 1' },
        { src: 'src/img/portofolio/typography/typography2.png', alt: 'Typography Project 2' },
        { src: 'src/img/portofolio/typography/typography3.png', alt: 'Typography Project 3' },
        { src: 'src/img/portofolio/typography/typography4.png', alt: 'Typography Project 4' },
        { src: 'src/img/portofolio/typography/typography5.png', alt: 'Typography Project 5' },
        { src: 'src/img/portofolio/typography/typography17.webp', alt: 'Typography Project 6' },
        { src: 'src/img/portofolio/typography/typography18.jpg', alt: 'Typography Project 7' },
        { src: 'src/img/portofolio/typography/typography19.webp', alt: 'Typography Project 8' },
        { src: 'src/img/portofolio/typography/typography20.webp', alt: 'Typography Project 9' },
        { src: 'src/img/portofolio/typography/typography8.jpg', alt: 'Typography Project 10' },
        { src: 'src/img/portofolio/typography/typography9.jpg', alt: 'Typography Project 11' },
        { src: 'src/img/portofolio/typography/typography10.jpg', alt: 'Typography Project 12' },
        { src: 'src/img/portofolio/typography/typography11.jpg', alt: 'Typography Project 13' }
    ];

    // Render semua gambar ke grid
    items.forEach(item => {
        const card = document.createElement('div');
        card.className = 'min-w-[300px] rounded-lg shadow-md overflow-hidden hover:shadow-lg transition';
        const img = document.createElement('img');
        img.src = item.src;
        img.alt = item.alt;
        img.className = 'w-full h-auto';
        card.appendChild(img);
        container.appendChild(card);
    });
}

// Initialize portfolio section on page load
document.addEventListener('DOMContentLoaded', function() {
    // Show website section by default
    showPortfolioSection('website');

    // Add click event listeners to all portfolio buttons
    const buttons = document.querySelectorAll('.portfolio-btn');
    buttons.forEach(button => {
        button.addEventListener('click', function(e) {
            e.preventDefault();
            const sectionId = this.getAttribute('onclick').match(/'([^']+)'/)[1];
            showPortfolioSection(sectionId);
        });
    });
});