document
  .getElementById("loginForm")
  .addEventListener("submit", function (event) {
    event.preventDefault();
    document.getElementById("verificationCodeContainer").style.display =
      "block";

    // You can simulate login validation here
    alert("Login successful! Please enter the verification code.");
  });

// Handle verification form submission
document
  .getElementById("verificationForm")
  .addEventListener("submit", function (event) {
    event.preventDefault();

    const verificationCode = document.getElementById("verificationCode").value;

    // Simulate sending the verification code to an API (e.g., JSONPlaceholder)
    fetch("https://jsonplaceholder.typicode.com/posts", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        code: verificationCode,
      }),
    })
      .then((response) => response.json())
      .then((data) => {
        alert("Code sent successfully!");
        console.log("Server response:", data);
      })
      .catch((error) => {
        console.error("Error:", error);
        alert("There was an error sending the code.");
      });
  });
