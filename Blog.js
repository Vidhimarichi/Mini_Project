// Function to filter blog posts based on category
function filterPosts(category) {
    const posts = document.querySelectorAll('.post');
    posts.forEach(post => {
        if (category === 'all') {
            post.style.display = 'block'; // Show all posts
        } else {
            // Filter posts based on category
            if (post.getAttribute('data-category') === category) {
                post.style.display = 'block';
            } else {
                post.style.display = 'none';
            }
        }
    });
}
