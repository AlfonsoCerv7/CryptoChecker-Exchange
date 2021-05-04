// materialize automatic select css
$(document).ready(function () {
  $("select").formSelect();
});

var main = document.getElementById('cryptoSearchButton').addEventListener('click', function(){
var crypto = document.getElementById('crypto').value;
var country = document.getElementById('country').value;
var today = new Date().toLocaleDateString() 

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
          console.log(data.price);
        });
      fetch(url2)
        .then(function (response) {
          return response.json();
        })
        .then(function (data2) {
          console.log(data2);
          console.log(data2.result);
          localStorage.setItem(crypto, data2.result);
          if(localStorage.getItem(crypto) == data2.result){
            var watchlistitem = (document.createElement("div").innerHTML =
              today +
              " " +
              crypto +
              " " +
              country +
              " " +
              localStorage.getItem(crypto));
            +" ";
            var innermodal = document.getElementById("innerModal");
            innermodal.append(watchlistitem);
              }
            else{
            main();
            }
        });
      }
  });

  document.getElementById("close").addEventListener("click", function() {
  document.getElementById('innerModal').innerHTML = "";
});

document.getElementById("save").addEventListener("click", function() {

  var savedList = document.getElementById("Watchlist");
  var userInput = document.createElement("li")
  userInput.innerHTML = document.getElementById("innerModal").innerHTML;
  savedList.append(userInput);
  document.getElementById("innerModal").innerHTML = "";
});


// these will be under the respective functions for USD and conversion. 
// localStorage.setItem('userinput', data.coins[0]);
// localStorage.setItem('userinput', data2.result);
// this will send the local storage to the wishlist, but we will have to make a loop or create a new element per time the funciton is run so it is saving multiple iterations rather than replacing the same one.
