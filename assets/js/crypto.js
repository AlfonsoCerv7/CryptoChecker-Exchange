// materialize automatic select css
$(document).ready(function(){
  $('select').formSelect();
});

// add in an event listener that alerts the user they need to select a crypto/country
// if they select seartch without choosing an option

// var userinput = document.queryselect(*input from html that theyre searching*)
// var desiredrate = document.queryselect(*input from html of the currency they are getting*)

//document.getElementById(*id of button*).onclick = Submit2;
// let today = new Date().toLocaleDateString()


// this fetch would pull based *userinput* for example btc for eth etc.
document.getElementById('cryptoSearchButton').addEventListener('click', function(){
fetch("https://coinlib.io/api/v1/coin?key=f2c79808b255e493&symbol=BTC,ETC,DOGE,XMR,TRX")
.then(function(response) {
  return response.json();
})
.then(function(data) {
  console.log(data);
  console.log(data.coins[0].price)
  return data.coins[0].price
  });
});

// on the search button, we need an event listener that grabs the values 
// in the crypto/country and populate it in the pop-out window


// this fetch would pull based on *userinput* in the from, then their desired conversion in "to=desiredrate"
// var Submit2 = function(){
fetch("https://api.exchangerate.host/convert?from=BTC&to=EUR")
.then(function(response) {
    return response.json();
  })
  .then(function(data2) {
    console.log(data2);
    console.log(data2.result)
  });
// return data2.result
// });

// these will be under the respective functions for USD and conversion. 
// localStorage.setItem('userinput', data.coins[0]);
// localStorage.setItem('userinput', data2.result);
// this will send the local storage to the wishlist, but we will have to make a loop or create a new element per time the funciton is run so it is saving multiple iterations rather than replacing the same one.

// make list element for creation/populating 
// document.getElementById("*wishlistid*").innerHTML = userinput + " *currency symbol*"+ localStorage.getItem('userinput'); + " " + today;