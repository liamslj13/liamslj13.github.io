const scrollAnimation = () => {
    const sections = document.querySelectorAll('section');
    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                (entry.target as HTMLElement).classList.add('visible');
                observer.unobserve(entry.target);
            }
        });
    }, { threshold: 0.1 });

    sections.forEach(section => {
        observer.observe(section);
    });
};

document.addEventListener('DOMContentLoaded', () => {
    const body = document.body as HTMLElement;
    body.style.opacity = '0';
    body.style.transition = 'opacity 1.5s';
    setTimeout(() => body.style.opacity = '1', 50);
    scrollAnimation();

    // Adjust hero image size and layout for better positioning
    const heroImage = document.querySelector('.hero .photo') as HTMLElement;
    const heroText = document.querySelector('.hero h1') as HTMLElement;
    const heroContainer = document.querySelector('.hero') as HTMLElement;

    if (heroImage && heroText && heroContainer) {
        const updateHeroLayout = () => {
            if (window.innerWidth <= 768) {
                heroImage.style.width = '150px';
                heroImage.style.height = '150px';
                heroContainer.style.display = 'flex';
                heroContainer.style.flexDirection = 'column';
                heroContainer.style.alignItems = 'center';
                heroText.style.textAlign = 'center';
                heroImage.style.margin = '0 auto';
                heroImage.style.order = '1';
                heroText.style.order = '2';
            } else {
                heroImage.style.width = '250px';
                heroImage.style.height = '250px';
                heroContainer.style.display = 'flex';
                heroContainer.style.flexDirection = 'row';
                heroContainer.style.alignItems = 'center';
                heroText.style.textAlign = 'left';
                heroImage.style.margin = '0 20px 0 0';
                heroImage.style.order = '0';
                heroText.style.order = '1';
            }
        };

        updateHeroLayout();
        window.addEventListener('resize', updateHeroLayout);
    }
});