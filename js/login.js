$(document).ready(function() {
  start();
  function start() {
    $('#profile').hide();
  }

  var $ingresoGoogle = $('#btn-google');

  $ingresoGoogle.click(googleLogin);

  function googleLogin() {
    var provider = new firebase.auth.GoogleAuthProvider();

    firebase.auth().signInWithPopup(provider)
      .then(function(result) {
        console.log(result.user.displayName);
        next1();
        $('#img-user').attr('src', result.user.photoURL);
        console.log(firebase.database().ref('users'));
      });
  }

  function next1() {
      $('#login').hide();
      $('#profile').show();
  }

});