function scrollUp() {
    // Create a new button element
    let button = document.createElement('button');
    button.className = 'scrollUpButton';
    button.id = 'scrollUpButton';
    button.innerHTML = '&uarr; Back to Contents';
    button.style.display = 'none';
    button.style.position = 'fixed'; // Position the button
    button.style.right = '20px'; // Position the button
    button.style.bottom = '20px'; // Position the button

    // Append the button to the body of the document
    document.body.appendChild(button);

    // Get the "overview" section
    let overviewSection = document.getElementById('overview');

    // Create an IntersectionObserver
    let observer = new IntersectionObserver(function(entries) {
        // entries[0] is the first (and only) entry in this case
        if (!entries[0].isIntersecting) {
            // If the "overview" section is not intersecting with the viewport, display the button
            button.style.display = 'block';
        } else {
            // If the "overview" section is intersecting with the viewport, hide the button
            button.style.display = 'none';
        }
    });

    // Start observing the "overview" section
    observer.observe(overviewSection);

    // Add an event listener to the button
    button.addEventListener('click', function() {
        // Scroll to the "overview" section
        overviewSection.scrollIntoView({behavior: "smooth"});
    });
    window.addEventListener('beforeprint', function() {
            button.style.display = 'none';
    });
    window.addEventListener('afterprint', function() {
            button.style.display = 'block';
    });
}
