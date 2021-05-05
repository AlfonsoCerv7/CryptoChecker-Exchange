// materialize automatic select css
$(document).ready(function () {
  $("select").formSelect();
});

var main = document
  .getElementById("cryptoSearchButton")
  .addEventListener("click", function () {
    var crypto = document.getElementById("crypto").value;
    var country = document.getElementById("country").value;
    var today = new Date().toLocaleDateString();

    url =
      "https://coinlib.io/api/v1/coin?key=f2c79808b255e493&symbol=" + crypto;
    url2 =
      "https://api.exchangerate.host/convert?from=" + crypto + "&to=" + country;
    if (crypto == "" || country == "") {
      M.toast({ html: "Please pick a Crypto and/or Country!" });
    } else {
      $(".modal").modal();
      fetch(url)
        .then(function (response) {
          return response.json();
        })
        .then(function (data) {
          console.log(data);
          console.log(data.price); // might need to fix this
        });
      fetch(url2)
        .then(function (response) {
          return response.json();
        })
        .then(function (data2) {
          console.log(data2);
          console.log(data2.result);
          localStorage.setItem(crypto, data2.result);
          if (localStorage.getItem(crypto) == data2.result) {
            var watchlistitem = (document.createElement("div").innerHTML =
              today +
              " " +
              crypto +
              " " +
              country +
              " " +
              localStorage.getItem(crypto));
            
            var innermodal = document.getElementById("innerModal");
            innermodal.append(watchlistitem);
            var tracker = 0; // tracker gimmick may be wrong. 
            var recentHistory = document.getElementById("searchHistory")
            var savedHistory = crypto + ", " + country;
            var historyList = document.createElement("li");
            historyList.setAttribute("id", tracker);
            var searchButton = document.createElement("button");
            searchButton.innerHTML = "Search for this again!";
            searchButton.setAttribute("id", tracker)
            historyList.innerHTML = savedHistory;
            recentHistory.append(historyList);
            recentHistory.append(searchButton);
            ++tracker; 
            
            searchButton.addEventListener ("click", function() {
              if(searchButton.getAttribute("id") == historyList.getAttribute("id")){
                
                alert("wip");
              }
            });
          } else {
            main(); // runs function again if values arent equal to one another.
          }
        });
    }
  });

document.getElementById("close").addEventListener("click", function () {
  document.getElementById("innerModal").innerHTML = "";
});

document.getElementById("save").addEventListener("click", function () {
  var savedList = document.getElementById("Watchlist");
  var savedCoins = document.createElement("li");
  savedCoins.innerHTML = document.getElementById("innerModal").innerHTML;
  localStorage.setItem(savedCoins, savedCoins.innerHTML);
  savedList.append(savedCoins);
  document.getElementById("innerModal").innerHTML = "";
  M.toast({ html: "Your search has been saved!" });
});