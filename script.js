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
            document.getElementById('latest-blog-preview').textContent = tempDiv.querySelector('p').textContent.substring(0, 300) + '...';
        })
        .catch(error => console.error("Error loading latest post:", error));
}

// Populate the blog list
function loadBlogList() {
    const blogListContainer = document.getElementById('blog-list');
    blogListContainer.innerHTML = ""; // Clear previous list

    blogFiles.forEach((file, index) => {
        const listItem = document.createElement('li');
        listItem.innerHTML = `<a href="#" onclick="showPost(${index})"> ${index + 1}</a>`;
        blogListContainer.appendChild(listItem);
    });
}

// Image Viewer Functionality
document.addEventListener("DOMContentLoaded", function() {
    const images = document.querySelectorAll(".photo-item img");
    const viewer = document.createElement("div");
    viewer.id = "image-viewer";
    viewer.style.position = "fixed";
    viewer.style.top = "0";
    viewer.style.left = "0";
    viewer.style.width = "100vw";
    viewer.style.height = "100vh";
    viewer.style.background = "rgba(0, 0, 0, 0.8)";
    viewer.style.display = "none";
    viewer.style.alignItems = "center";
    viewer.style.justifyContent = "center";
    viewer.style.zIndex = "1000";
    viewer.innerHTML = `<div class="viewer-content" style="position: relative;"><img id="viewer-img" src="" alt="" style="max-width: 90vw; max-height: 90vh; pointer-events: none;"><button id="close-viewer" style="position: absolute; top: 10px; right: 10px; background: red; color: white; border: none; padding: 2px; font-size: 1.5rem; cursor: pointer;">×</button></div>`;
    document.body.appendChild(viewer);

    const viewerImg = document.getElementById("viewer-img");
    const closeViewer = document.getElementById("close-viewer");

    images.forEach(img => {
        img.addEventListener("click", function() {
            viewer.style.display = "flex";
            viewerImg.src = this.src;
        });
    });

    closeViewer.addEventListener("click", function() {
        viewer.style.display = "none";
    });

    // Prevent opening image in new tab
    images.forEach(img => {
        img.addEventListener("contextmenu", function(event) {
            event.preventDefault();
        });
    });

    viewerImg.addEventListener("contextmenu", function(event) {
        event.preventDefault();
    });

    viewerImg.addEventListener("dragstart", function(event) {
        event.preventDefault();
    });
});

// Initial Load
document.addEventListener('DOMContentLoaded', function() {
    showPost(currentPost);
    loadLatestPost();
    loadBlogList();
});
