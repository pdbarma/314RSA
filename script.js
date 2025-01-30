// Function to show selected section
function showSection(sectionId) {
    // Hide all sections
    document.querySelectorAll('section').forEach(section => {
        section.classList.remove('active');
    });
    
    // Remove active class from all nav links
    document.querySelectorAll('nav a').forEach(link => {
        link.classList.remove('active');
    });
    
    // Show selected section
    document.getElementById(sectionId).classList.add('active');
    
    // Add active class to clicked nav link
    event.target.classList.add('active');
}

// Blog post navigation
let currentPost = 0;
const posts = document.querySelectorAll('.blog-post');

function showPost(index) {
    posts.forEach(post => post.classList.remove('active'));
    posts[index].classList.add('active');
}

function nextPost() {
    currentPost = (currentPost + 1) % posts.length;
    showPost(currentPost);
}

function previousPost() {
    currentPost = (currentPost - 1 + posts.length) % posts.length;
    showPost(currentPost);
}