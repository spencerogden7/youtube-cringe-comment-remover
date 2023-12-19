const keywords = ["ohio", "skibidi toilet"];

function filterComments() {
  const comments = document.querySelectorAll("ytd-comment-renderer #content");

  comments.forEach(comment => {
    const commentText = comment.textContent.toLowerCase();

    for (let keyword of keywords) {
      if (commentText.includes(keyword)) {
        // Find the container of the comment and hide it
        let commentContainer = comment.closest("ytd-comment-thread-renderer");
        if (commentContainer) {
          commentContainer.style.display = "none";
        }
        break; // Exit the loop if one keyword is found
      }
    }
  });
}

// Run the filter when the page is loaded or when new comments are loaded dynamically
document.addEventListener("yt-visibility-refresh", filterComments);
document.addEventListener("yt-navigate-finish", filterComments); // For dynamic page changes

// Initial run on existing comments
filterComments();
