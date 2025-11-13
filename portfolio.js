document.addEventListener('DOMContentLoaded', function() {
    const filterButtons = document.querySelectorAll('.filter-btn');
    const projectCards = document.querySelectorAll('.project-card');

    filterButtons.forEach(button => {
        button.addEventListener('click', function() {
            // 1. Get the filter category
            const filterValue = this.getAttribute('data-filter');

            // 2. Update button styles
            filterButtons.forEach(btn => btn.classList.remove('active'));
            this.classList.add('active');

            // 3. Filter the projects
            projectCards.forEach(card => {
                const category = card.getAttribute('data-category');

                if (filterValue === 'all' || category === filterValue) {
                    // Show the project
                    card.classList.remove('hidden');
                } else {
                    // Hide the project
                    card.classList.add('hidden');
                }
            });
        });
    });
});