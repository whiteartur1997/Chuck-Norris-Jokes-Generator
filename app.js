document.querySelector(".get-jokes").addEventListener("click", loadJokes);

function loadJokes(e) {
  const number = document.querySelector('input[type="number"]').value;
  const xhr = new XMLHttpRequest();

  xhr.open('GET', `http://api.icndb.com/jokes/random/${number}`);
  
  xhr.onload = function() {
    if(this.status = 200) {
      const response = JSON.parse(this.response);
      if(response.type === "success") {
        response.value.forEach(joke => {
          let li = document.createElement("li");
          li.innerHTML = joke.joke;
          document.querySelector("ul").appendChild(li);
        });
      } else {
        let li = document.createElement("li");
          li.innerHTML = "Smth went wrong";
          document.querySelector("ul").appendChild(li);
      }
      
    }
  }
  xhr.send();

  e.preventDefault();
}