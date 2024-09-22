const filterButtons = document.querySelectorAll('.filter_button button');
const filterableCards = document.querySelectorAll('.filterable_cards .card');

filterButtons.forEach(button => {
    button.addEventListener('click', () => {
        // Remove 'active' class from all buttons
        filterButtons.forEach(btn => btn.classList.remove('active'));
        // Add 'active' class to the clicked button
        button.classList.add('active');

        const filterValue = button.getAttribute('data-name');

        filterableCards.forEach(card => {
            const cardCategory = card.getAttribute('data-name');
            if (filterValue === 'all' || filterValue === cardCategory) {
                card.style.display = 'block'; // Show card
            } else {
                card.style.display = 'none';  // Hide card
            }
        });
    });
});
