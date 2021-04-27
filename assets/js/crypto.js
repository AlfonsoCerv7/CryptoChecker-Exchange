fetch("https://coinlib.io/api/v1/global?key=f2c79808b255e493&pref=EUR")
.then(function(response) {
  return response.json();
})
.then(function(data) {
  console.log(data);
});


fetch("https://api.exchangerate.host/latest")
.then(function(response) {
    return response.json();
  })
  .then(function(data2) {
    console.log(data2);
  });