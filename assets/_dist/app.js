var config = {
	apiKey: "AIzaSyBFs8UHDxvs5AtWBl1CDdr3e5SNPDzet1k",
	authDomain: "chakacheck.firebaseapp.com",
	databaseURL: "https://chakacheck.firebaseio.com",
	storageBucket: "",
	messagingSenderId: "16601365181"
};
var firebaseapp = firebase.initializeApp(config);
var itemsRef = firebase.database().ref("0");


function loginWithGoogle() {
  // Instantiate the Google authentication provider
  var provider = new firebase.auth.GoogleAuthProvider();
  // Handle the authentication request using the Popup method
  firebase.auth().signInWithPopup(provider).then(function(result) {
    var user = result.user;
  }).catch(function(error) {
    console.log(error);
  });
}

function logout() {
  localStorage.removeItem('profile');
  firebase.auth().signOut().then(function() {
    console.log("Signout Successful")
  }, function(error) {
    console.log(error);
  });
}

console.dir(itemsRef) 

new Vue({
  el: "#app",
  data: {
    newTodo: ""
  },
  firebase: {
    items: itemsRef.limitToLast(25)
  },
  methods: {
    removeTodo: function (key) {
      itemsRef.child(key).remove();
    },
    addTodo: function () {
      if (this.newTodo.trim()) {
        itemsRef.push({
          text: this.newTodo
        });
        this.newTodo = "";
      }
    }
  }
});