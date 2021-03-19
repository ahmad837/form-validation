$(function () {
  $("#form").submit(handleFormSubmit);
});

function handleFormSubmit(e) {
      if(
          $('#name').val().length >=5 && $('#password').val().length >= 8 && $('#password').val() === $('#confirm_password').val()
      ){
          alert('Submitting form')
      }
      if(
          $('#name').val().length < 5
      )
      {
          $('#name').css("border","1px solid red")
          $('#error1').text("Name Should be 5 letters long")
      }
      if(
          $('#password').val().length < 8
      )
      {
          $('#password').css("border","1px solid red")
          $('#error2').text(" Password should be 8 letters long")
      }
      if(
          $('#password').val() != $('#confirm_password').val() || $('#confirm_password').val().length === 0
      )
      {
          $('#password').css("border","1px solid red")
          $('#confirm_password').css("border","1px solid red")
          $('#error3').text(" Passwords don't match")
      }

  e.preventDefault();
}