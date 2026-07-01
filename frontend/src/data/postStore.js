import dummyPosts from "./posts";

let posts = [...dummyPosts];

// Get all posts
export function getPosts() {
  return posts;
}

// Get a single post
export function getPost(id) {
  return posts.find((post) => post.id === Number(id));
}

// Add a new post
export function addPost(post) {
  posts = [post, ...posts];
}

// Reset (useful later for testing)
export function resetPosts() {
  posts = [...dummyPosts];
}