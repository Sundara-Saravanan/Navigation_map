function showAlert(div,type,msg){
    var putInDiv = document.getElementById(div)
    putInDiv.innerHTML = '<div class="alert alert-'+type+' alert-dismissible fade show" role="alert">'+msg+'<button type="button" class="close" data-dismiss="alert" aria-label="Close"> <span aria-hidden="true">&times;</span></button></div>'

}
 

// sign up creating a new user

$('#sign_up_form').submit(function(e){
    e.preventDefault()
    var email = document.querySelector('#sign_up_email').value
    var pwd1 = document.querySelector('#sign_up_pwd1').value
    var pwd2 = document.querySelector('#sign_up_pwd2').value

    if (pwd1==pwd2){
        firebase.auth().createUserWithEmailAndPassword(email, pwd1).catch(function(error) {
            // Handle Errors here.
            var errorCode = error.code;
            var errorMessage = error.message;
            showAlert('sign_up_alerts','warning',errorMessage)
            then(
            showAlert('sign_up_alerts','success','user registered successfully'))


            // ...
          }
          
          );

          


    }else{
        showAlert('sign_up_alerts','warning','password are not matching')

    }
})
