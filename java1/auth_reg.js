function showAlert(div,type,msg){
    var putInDiv = document.getElementById(div)
    putInDiv.innerHTML = '<div class="alert alert-'+type+' alert-dismissible fade show" role="alert">'+msg+'<button type="button" class="close" data-dismiss="alert" aria-label="Close"> <span aria-hidden="true">&times;</span></button></div>'

}
 

// sign in for new user
firebase.auth().onAuthStateChanged(function(user){
    if(user){
//user is signed in
       var email = user.email;
        document.getElementById('logoutBtn').style.display='block'
        document.getElementById('not_logged_in').style.display='none'
        document.getElementById('logged_in').style.display='block'
        
        mapinit()
        // installalert()
 

    }else{
        document.getElementById('logoutBtn').style.display='none'
        document.getElementById('not_logged_in').style.display='block'
        document.getElementById('logged_in').style.display='none'
        
    }


    }
)

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

            // ...
          });


    }else{
        showAlert('sign_up_alerts','warning','password are not matching')

    }
})




// sign in auth (with email and password)
$('#sign_in_form').submit(function(e){
    e.preventDefault()
    var email = document.querySelector('#sign_in_email').value
    var pwd1 = document.querySelector('#sign_in_pwd').value

    firebase.auth().signInWithEmailAndPassword(email, pwd1).catch(function(error){
        // handle error Headers
        var errorCode = error.code;
            var errorMessage = error.message;
            showAlert('sign_in_alerts','warning',errorMessage)


    });
   
})


function logoutUser(){
    firebase.auth().signOut()
}

