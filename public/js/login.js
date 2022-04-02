// Login logic
const loginFormHandler = async (event) => {
  event.preventDefault();

  //   Collect values from the login form
  const username = document.querySelector("#username-login").value.trim();
  const password = document.querySelector("#password-login").value.trim();

  console.log(`Executing login for ${username}`);
  console.log(username);
  console.log(password);

  // If username and password are true
  if (username && password) {
    console.log("Making a PUT REQUEST");
    //   Send a POST request to the API endpoint
    const response = await fetch("/api/user/login", {
      method: "POST",
      body: JSON.stringify({
        username,
        password,
      }),
      headers: { "Content-Type": "application/json" },
    });

    if (response.ok) {
      test();
      console.log("REQUEST SUCCESSFUL");
      // If successful, redirect the browser to the dashboard
      // @DEBUG - WHY IS THE BELOW NOT WORKING
    } else {
      console.log("FAILURE");
      alert("Failed to login");
    }
  }
};

document
  .querySelector(".login-form")
  .addEventListener("submit", loginFormHandler);

function test() {
  document.location.replace("/dashboard");
  console.log("REDIRECTING TO DASHBOARD");
}
