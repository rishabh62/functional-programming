const BASE_URL = `https://api-nodejs-todolist.herokuapp.com`;

const tryLogin = async (email, password) => {
  if (localStorage.getItem("userInfo")) {
    location.href = "../app.html";
    return;
  }
  const loginUrl = `${BASE_URL}/user/login`;
  try {
    const response = await fetch(loginUrl, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ email: email, password: password }),
    });
    const json = await response.json();
    localStorage.setItem("userInfo", JSON.stringify(json));
    location.href = "../app.html";
  } catch (err) {
    console.log(err);
  }
};

document.querySelector("form").addEventListener("submit", (event) => {
  event.preventDefault();
  const email = document.querySelector("#email").value;
  const password = document.querySelector("#password").value;
  tryLogin(email, password);
});
