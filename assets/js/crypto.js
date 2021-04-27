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

  (function ($) {
    $(function () {

        //initialize all modals           
        $('.modal').modal();

        //now you can open modal from code
        $('#modal1').modal('open');

        //or by click on trigger
        $('.trigger-modal').modal();

    }); // end of document ready
})(jQuery); // end of jQuery name space
  
  
  
  