$("#header_container").load("parts/header.html");

$("#registration_form").validate({
    rules: {
      first_name: "required",
      last_name: "required",
      password: {
        required: true,
        minlength:8
      },
      password2: {
        required: true,
        equalTo: "#password"
      },
      email: {
        required: true,
        email: true
      },
      checkbox: {
          required: true
      }
},
messages:{
  email:{
    email: "Please enter a valid email address"
  },
  checkbox: "You must agree to T&C to continue"
},
submitHandler: function(){
    var data = $("#registration_form").serializeArray();

    var dataJSON ={};

    $.each(data, function(index, field){
      dataJSON[field.name] = field.value;
    });

    var endpoint = "https://registration.free.beeceptor.com/newuser";
    $.post(endpoint, dataJSON, function(data, status){
      console.log(data);
    });
    
    return false;
  }
});