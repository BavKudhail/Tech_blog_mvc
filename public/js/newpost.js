console.log("hello");
// comment form
const commentForm = document.querySelector("#comment-form");
const submitBtn = document.querySelector(".submit-btn");

// comment form handler
const commentFormHandler = async (event) => {
  event.preventDefault();

  // create variables
  const title = document.querySelector("#new-post-title").value;
  const content = document.querySelector("#new-post-content").value;

  // if post title & post content are true
  if (title && content) {
    // create a post request to create a new post
    const response = await fetch("/api/post", {
      method: "POST",
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

commentForm.addEventListener("submit", commentFormHandler);

// Inactivity function
const inactivityTime = () => {
  let time;
  const resetTimer = () => {
    clearTimeout(time);
    time = setTimeout(logout, 10000);
  };
  window.onload = resetTimer;
  //   DOM
  document.onmousemove = resetTimer;
  document.onkeydown = resetTimer;

  const logout = () => {
    alert("Your session has timed out, please log in again ");
  };
};

window.onload = function () {
  inactivityTime();
};
