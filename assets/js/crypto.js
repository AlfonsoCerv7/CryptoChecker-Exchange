// var userinput = document.queryselect(*input from html that theyre searching*)
// var desiredrate = document.queryselect(*input from html of the currency they are getting*)
// this fetch would pull based *userinput* for example btc for eth etc. 

fetch("https://coinlib.io/api/v1/coin?key=f2c79808b255e493&symbol=BTC,ETC,DOGE,XMR,TRX")
.then(function(response) {
  return response.json();
})
.then(function(data) {
  console.log(data);
  console.log(data.coins[0].price)
});

// this fetch would pull based on *userinput* in the from, then their desired conversion in "to=desiredrate"
fetch("https://api.exchangerate.host/convert?from=BTC&to=EUR")
.then(function(response) {
    return response.json();
  })
  .then(function(data2) {
    console.log(data2);
    console.log(data2.result)
  });