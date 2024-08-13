<script>
    // Function to toggle between dark (default) and light mode
    function toggleDarkMode() {
        const body = document.body;
        body.classList.toggle('light-mode');
        
        // Save the user's preference
        if (body.classList.contains('light-mode')) {
            localStorage.setItem('theme', 'light');
            document.getElementById('dark-mode-toggle').innerText = 'Dark Mode';
        } else {
            localStorage.setItem('theme', 'dark');
            document.getElementById('dark-mode-toggle').innerText = 'Light Mode';
        }
    }

    // Check and apply the saved theme on page load
    function applySavedTheme() {
        const savedTheme = localStorage.getItem('theme');
        if (savedTheme === 'light') {
            document.body.classList.add('light-mode');
            document.getElementById('dark-mode-toggle').innerText = 'Dark Mode';
        }
    }

    // Apply saved theme on page load
    applySavedTheme();

    // Add event listener to the toggle button
    document.getElementById('dark-mode-toggle').addEventListener('click', toggleDarkMode);
</script>
