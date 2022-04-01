// Login logic
const loginFormHandler = async (event) => {
  event.preventDefault();

  //   Collect values from the login form
  const usernameEl = document.querySelector("#username-login").value.trim();
  const passwordEl = document.querySelector("#password-login").value.trim();

  console.log(`Executing login for ${usernameEl}`);

  // If username and password are true
  if (usernameEl && passwordEl) {
    //   Send a POST request to the API endpoint
    const response = await fetch("/api/user/login", {
      method: "POST",
      body: JSON.stringify({
        username: usernameEl,
        password: passwordEl,
      }),
      headers: { "Content-Type": "application/json" },
    });

    if (response.ok) {
      // If successful, redirect the browser to the dashboard
      document.location.replace("/dashboard");
    } else {
      alert("Failed to login");
    }
  }
};

document
  .querySelector(".login-form")
  .addEventListener("submit", loginFormHandler);
