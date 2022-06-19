document.addEventListener("DOMContentLoaded", () => {
  // const input = document.getElementById("search");
  // const form = document.getElementById("github-form");

  // const searchUser = () => {
  //     form.addEventListener("submit", dispaly);

  //     function dispaly(event) {
  //         event.preventDefault();

  //     }
  // function fetchData() {

  //         .then((response) => response.json())
  //         .then((json) => console.log(json))
  //         .catch(err => console.log(err));
  // }
  const gitform = document.getElementById("github-form");

  const list = document.getElementById("user-list");
  //const userAction =
  gitform.addEventListener("submit", async (event) => {
    list.innerHTML = ""; //clear the content on each click
    event.preventDefault();
    const searchName = document.getElementById("search").value.trim();
    console.log(searchName);
    fetch(`https://api.github.com/users`, {
      method: "GET",
      headers: {
        "Content-type": "application/json;charset=UTF-8",
        Accept: "application/vnd.github.v3+json",
      },
    })
      .then((response) => response.json())
      .then((todos) => {
        todos.forEach((todo) => {
          if (searchName == todo.login) {
            const li = document.createElement("li");
            li.textContent = `${todo.login}`;
            list.appendChild(li);
          }
        });
      });
  });
});
