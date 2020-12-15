function loadRepos() {
   let id = Math.floor(Math.random() * 20);
   let url = `https://swapi.dev/api/people/${id}`;

   const httpRequest = new XMLHttpRequest();
   httpRequest.addEventListener('readystatechange', function () {
      if (httpRequest.readyState == 4 && httpRequest.status == 200) {
         document.getElementById("res").textContent = httpRequest.responseText;
      }
   });
   httpRequest.open("GET", url);
   httpRequest.send();
}