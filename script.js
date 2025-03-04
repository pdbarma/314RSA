// Function to show selected section
function showSection(sectionId) {
    document.querySelectorAll('section').forEach(section => section.classList.remove('active'));
    document.querySelectorAll('nav a').forEach(link => link.classList.remove('active'));
    document.getElementById(sectionId).classList.add('active');
  }
  
  // ************************************************************************************************************
  // Image Viewer Functionality (unchanged)
  document.addEventListener("DOMContentLoaded", function () {
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
    viewer.innerHTML = `<div class="viewer-content" style="position: relative;">
                          <img id="viewer-img" src="" alt="" style="max-width: 90vw; max-height: 90vh; pointer-events: none;">
                          <button id="close-viewer" style="position: absolute; top: 10px; right: 10px; background: red; color: white; border: none; padding: 2px; font-size: 1.5rem; cursor: pointer;">×</button>
                        </div>`;
    document.body.appendChild(viewer);
  
    const viewerImg = document.getElementById("viewer-img");
    const closeViewer = document.getElementById("close-viewer");
  
    images.forEach(img => {
      img.addEventListener("click", function () {
        viewer.style.display = "flex";
        viewerImg.src = this.src;
      });
    });
  
    closeViewer.addEventListener("click", function () {
      viewer.style.display = "none";
    });
  
    images.forEach(img => img.addEventListener("contextmenu", event => event.preventDefault()));
    viewerImg.addEventListener("contextmenu", event => event.preventDefault());
    viewerImg.addEventListener("dragstart", event => event.preventDefault());
  });
  
  // ************************************************************************************************************
  // Blog Files Array
  const blogFiles = [
    'blogs/post1.md',
    'blogs/post2.md',
    'blogs/post3.md',
    'blogs/post4.md',
    'blogs/post5.md'
  ];
  
  // New function to open a full blog post (for blog cards)
  window.viewBlog = function (index) {
    index = parseInt(index, 10);
    console.log("viewBlog called with index:", index);
    fetch(blogFiles[index])
      .then(response => {
        if (!response.ok) throw new Error("Failed to load " + blogFiles[index]);
        return response.text();
      })
      .then(md => {
        document.getElementById("blog-content").innerHTML = marked.parse(md);
        showSection("blog"); // Display the blog section with full content
      })
      .catch(error => console.error("Error fetching blog post:", error));
  };
  
  // Function to load the Latest Blog preview in the home section
  function loadLatestBlog() {
    fetch(blogFiles[0])
      .then(response => response.text())
      .then(md => {
        const tempDiv = document.createElement("div");
        tempDiv.innerHTML = marked.parse(md);
        const title = tempDiv.querySelector("h1") ? tempDiv.querySelector("h1").textContent : "Latest Blog";
        const description = tempDiv.querySelector("p") ? tempDiv.querySelector("p").textContent.substring(0, 150) + "..." : "Click to read more";
        document.getElementById("latest-blog-title").innerText = title;
        document.getElementById("latest-blog-preview").innerText = description;
        const readMoreLink = document.querySelector(".home-section a.read-more");
        if (readMoreLink) {
          readMoreLink.setAttribute("onclick", "viewBlog(0)");
        }
      })
      .catch(error => console.error("Error loading latest blog post:", error));
  }
  
  // Generate blog cards dynamically and attach click events
  document.addEventListener("DOMContentLoaded", function () {
    loadLatestBlog(); // Load the Latest Blog preview
  
    const blogContainer = document.querySelector(".blogs-grid");
    if (!blogContainer) {
      console.error("blogs-grid container not found");
      return;
    }
  
    // Generate a blog card for each blog file
    blogFiles.forEach((file, index) => {
      fetch(file)
        .then(response => response.text())
        .then(md => {
          const tempDiv = document.createElement("div");
          tempDiv.innerHTML = marked.parse(md);
          const title = tempDiv.querySelector("h1") ? tempDiv.querySelector("h1").textContent : `Blog ${index + 1}`;
          const description = tempDiv.querySelector("p") ? tempDiv.querySelector("p").textContent.substring(0, 150) + "..." : "No description available.";
          const blogCard = document.createElement("div");
          // Use class "blog-card" for styling (ensure your CSS targets this class)
          blogCard.classList.add("blog-card");
          blogCard.setAttribute("data-index", index);
          blogCard.innerHTML = `<h3>${title}</h3><p>${description}</p>`;
          blogContainer.appendChild(blogCard);
        })
        .catch(error => console.error(`Error fetching ${file}:`, error));
    });
  
    // Attach click event listener to the container to handle clicks on any blog card
    blogContainer.addEventListener("click", function (event) {
      const card = event.target.closest(".blog-card");
      if (card) {
        const index = card.getAttribute("data-index");
        console.log("Blog card clicked, index:", index);
        if (index !== null) {
          viewBlog(index);
        }
      }
    });
  });
  