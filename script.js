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
}

// Blog post navigation
let currentPost = 0;
const blogFiles = [
    'blogs/post1.md',
    'blogs/post2.md',
    'blogs/post3.md',
    'blogs/post4.md',
    'blogs/post5.md'
];

// Fetch and display a blog post
function showPost(index) {
    fetch(blogFiles[index])
        .then(response => response.text())
        .then(md => {
            const htmlContent = marked.parse(md);
            document.getElementById('blog-content').innerHTML = htmlContent;
            // Scroll smoothly to the blog section
            document.getElementById('blog').scrollIntoView({ behavior: "smooth" });
        })
        .catch(error => console.error("Error fetching blog post:", error));
}

// Show next blog post
function nextPost() {
    currentPost = (currentPost + 1) % blogFiles.length;
    showPost(currentPost);
}

// Show previous blog post
function previousPost() {
    currentPost = (currentPost - 1 + blogFiles.length) % blogFiles.length;
    showPost(currentPost);
}

// Load latest post on home page
function loadLatestPost() {
    fetch(blogFiles[0])
        .then(response => response.text())
        .then(md => {
            const htmlContent = marked.parse(md);
            const tempDiv = document.createElement('div');
            tempDiv.innerHTML = htmlContent;
            document.getElementById('latest-blog-title').textContent = tempDiv.querySelector('h1').textContent;
            document.getElementById('latest-blog-preview').textContent = tempDiv.querySelector('p').textContent.substring(0, 100) + '...';
        })
        .catch(error => console.error("Error loading latest post:", error));;
}

//populate the bloglist
function loadBlogList() {
    const blogListContainer = document.getElementById('blog-list');
    blogListContainer.innerHTML = ""; // Clear previous list

    blogFiles.forEach((file, index) => {
        const listItem = document.createElement('li');
        listItem.innerHTML = `<a href="#" onclick="showPost(${index})"> ${index + 1}</a>`;
        blogListContainer.appendChild(listItem);
    });
}


// Initial Load
document.addEventListener('DOMContentLoaded', function() {
    showPost(currentPost);
    loadLatestPost();
    loadBlogList(); // Load the list when the page loads
});