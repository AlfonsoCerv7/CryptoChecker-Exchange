// materialize automatic select css
$(document).ready(function(){
  $('select').formSelect();
});
$(document).ready(function(){
  $('.modal').modal();
})
// add in an event listener that alerts the user they need to select a crypto/country
// if they select search without choosing an option


document.getElementById('cryptoSearchButton').addEventListener('click', function(){
var crypto = document.getElementById('crypto').value;
var country = document.getElementById('country').value;
let today = new Date().toLocaleDateString() // wip
console.log(today);
url = ('https://coinlib.io/api/v1/coin?key=f2c79808b255e493&symbol=' + crypto);
url2 =('https://api.exchangerate.host/convert?from=' + crypto + '&to='+ country);
console.log(url);
console.log(url2);

if(url = 'https://coinlib.io/api/v1/coin?key=f2c79808b255e493&symbol='){
  M.toast({html: 'I am a toast!'})


}
else{
fetch(url)
.then(function(response) {
  return response.json();
})
.then(function(data) {
  console.log(data);
  console.log(data.price)
  localStorage.setItem(crypto, data.price);
});
  fetch(url2)
.then(function(response) {
    return response.json();
  })
  .then(function(data2) {
    console.log(data2);
    console.log(data2.result)
    localStorage.setItem(crypto, data2.result);
  });
    // these will be under the respective functions for USD and conversion. 
    // the local storage set above
    // make list element for creation/populating 
var watchlistitem = document.createElement("div").innerHTML = crypto + " " + country + " " + localStorage.getItem(crypto); + " " + today + "<br></br>";
var watchlist = document.getElementById("Watchlist");
var innermodal = document.getElementById("innerModal");
watchlist.append(watchlistitem);
innermodal.append(watchlistitem);
});

document.getElementById('close').addEventListener('click', function(){
document.getElementById('innerModal').innerHTML = "";

});


// these will be under the respective functions for USD and conversion. 
// localStorage.setItem('userinput', data.coins[0]);
// localStorage.setItem('userinput', data2.result);
// this will send the local storage to the wishlist, but we will have to make a loop or create a new element per time the funciton is run so it is saving multiple iterations rather than replacing the same one.
