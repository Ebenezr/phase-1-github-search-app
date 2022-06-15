
document.addEventListener("DOMContentLoaded", () => {

   const input= document.getElementById("search");
   const form= document.getElementById("github-form");
const searchUser=(event)=>{
    event.preventDefault();
    fetch(`https://api.github.com/users/octocat/repos/${name}`, {
        method: "GET",
        headers: {
            "Content-type": "application/json;charset=UTF-8",
            "Accept": "application/vnd.github.v3+json"}
        })
        .then(response => response.json()) 
        .then(json => console.log(json)); 


    //.catch(err => console.log(err));
}

});    