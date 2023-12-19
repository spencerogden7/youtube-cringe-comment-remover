// List of keywords to filter
const keywords = ["ohio", "skibidi toilet"];

// Function to filter comments
function filterComments() {
  const comments = document.querySelectorAll("#comments #content-text");
  
  comments.forEach(comment => {
    const commentText = comment.textContent.toLowerCase();
    
    for (let keyword of keywords) {
      if (commentText.includes(keyword)) {
        // Hide comment if it contains a filtered keyword
        comment.closest("#comment").style.display = "none";
        break; // Exit the loop if one keyword is found
      }
    }
  });
}

// Run the filter when the page is loaded or when new comments are loaded dynamically
document.addEventListener("DOMContentLoaded", filterComments);
document.addEventListener("yt-navigate-finish", filterComments); // For dynamic page changes
