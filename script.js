const themeToggleBtn = document.getElementById('theme-toggle');
const body = document.body;

// Function to set the theme
function setTheme(isDark) {
    if (isDark) {
        body.classList.add('dark-mode');
    } else {
        body.classList.remove('dark-mode');
    }
}

// Function to initialize theme
function initTheme() {
    // Check if user has a saved preference
    const savedTheme = localStorage.getItem('theme');
    
    if (savedTheme) {
        setTheme(savedTheme === 'dark');
    } else {
        // If no preference, use time-based logic
        const hour = new Date().getHours();
        const isDarkTime = hour < 6 || hour >= 18;
        setTheme(isDarkTime);
    }
}

// Handle button click
themeToggleBtn.addEventListener('click', () => {
    const isDark = body.classList.contains('dark-mode');
    // Toggle the theme (if currently dark, make it light, and vice versa)
    const newThemeIsDark = !isDark;
    
    setTheme(newThemeIsDark);
    
    // Save preference
    localStorage.setItem('theme', newThemeIsDark ? 'dark' : 'light');
});

// Initialize on load
initTheme();