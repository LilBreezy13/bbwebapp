

//form submit


// let email = document.querySelector('.email');
// let psd = document.querySelector('.password');
// let check = document.querySelector('#rem');
// let msg = document.querySelectorAll('.msg');


const refresh = () =>{
  
  if(email.value == ""){
    msg[0].innerText = "Please enter a valid email address or phone number.";
  }if(psd.value == ""){
    msg[1].innerText = "Your password must contain between 4 and 60 characters.";
  }else{
        msg[0].innerText = "";
        msg[1].innerText = "";
        alert('Sign-in succesfully');
  }
  
  email.value = "";
  psd.value = "";
  check.checked = "";
 
}

///////////////////////////// 

  // Import the functions you need from the SDKs you need
  import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.1/firebase-app.js";
  import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
  
  // TODO: Add SDKs for Firebase products that you want to use
  // https://firebase.google.com/docs/web/setup#available-libraries

  // Your web app's Firebase configuration
  const firebaseConfig = {
    apiKey: "AIzaSyClkBqpnsnSxnOacLwbhaN4DWkk9haRYWo",
    authDomain: "bbeko-wepp-app.firebaseapp.com",
    projectId: "bbeko-wepp-app",
    storageBucket: "bbeko-wepp-app.appspot.com",
    messagingSenderId: "82846566120",
    appId: "1:82846566120:web:5fae47487e67eea55a2b5d"
  };

  // Initialize Firebase
  const app = initializeApp(firebaseConfig);

  // inputs
  const email = document.getElementById('email').value;
  const password = document.getElementById('password').value;

  //submit button

  const submit = document.getElementById('submit').value;
  submit.addEventListener("click",function(event){
    event.preventDefault()
    alert(5)
  }) 
