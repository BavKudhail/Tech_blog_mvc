// get the post title
// get the post content
// update the post and return user to dashboard

// comment form
const commentForm = document.querySelector("#comment-form");
const submitBtn = document.querySelector(".submit-btn");
const postId = document.querySelector("#post-id").value;
const deleteBtn = document.querySelector(".delete-btn");

console.log(deleteBtn);

console.log(postId);

// comment form handler
const commentFormHandler = async (event) => {
  event.preventDefault();

  // create variables
  const title = document.querySelector("#new-post-title").value;
  const content = document.querySelector("#new-post-content").value;

  // if post title & post content are true
  if (title && content) {
    // create a post request to create a new post
    const response = await fetch(`/api/post/${postId}`, {
      method: "PUT",
      body: JSON.stringify({
        title,
        content,
      }),
      headers: {
        "Content-Type": "application/json",
      },
    });
    if (response.ok) {
      // redirect user to dashboard
      document.location.replace("/dashboard");
    } else {
      // else alert
      alert(response.statusText);
    }
  }
};

const deletePost = async () => {
  const response = await fetch(`/api/post/${postId}`, {
    method: "DELETE",
  });
  document.location.replace("/dashboard");
};

deleteBtn.addEventListener("click", deletePost);

commentForm.addEventListener("submit", commentFormHandler);
