// --- SHARED SCRIPT FOR DWEIWY BLOG ---

/**
 * Updates the navigation links based on user login status.
 */
function updateNav() {
    const navLinks = document.getElementById('nav-links');
    if (!navLinks) return;

    const user = JSON.parse(localStorage.getItem('dweiwy_user'));
    let navHtml = '';

    if (user && user.id) {
        navHtml = `
            <li><a href="create-post.html">Create Post</a></li>
            <li><button id="logout-button" class="logout-button">Logout</button></li>
        `;
    } else {
        navHtml = `
            <li><a href="login.html">Login</a></li>
            <li><a href="register.html">Register</a></li>
        `;
    }
    navLinks.innerHTML = navHtml;

    const logoutButton = document.getElementById('logout-button');
    if (logoutButton) {
        logoutButton.addEventListener('click', () => {
            localStorage.removeItem('dweiwy_user');
            window.location.href = 'index.html';
        });
    }
}


// --- Initialization ---
document.addEventListener('DOMContentLoaded', () => {
    updateNav();
});

