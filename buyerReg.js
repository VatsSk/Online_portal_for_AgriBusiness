

  // Import the functions you need from the SDKs you need
  import { initializeApp } from "https://www.gstatic.com/firebasejs/10.11.1/firebase-app.js";
  import { getDatabase,get,set,ref} from "https://www.gstatic.com/firebasejs/10.11.1/firebase-database.js";
  // TODO: Add SDKs for Firebase products that you want to use
  // https://firebase.google.com/docs/web/setup#available-libraries

  // Your web app's Firebase configuration
  const firebaseConfig = {
    apiKey : "AIzaSyAtIuISC8XXUly-NShD1GPnJAgruQwvJz8",
    authDomain: "farmse-79887.firebaseapp.com",
    projectId: "farmse-79887",
    storageBucket: "farmse-79887.appspot.com",
    messagingSenderId: "681976786053",
    appId: "1:681976786053:web:7b6cc8f5a765ebbdcc0dec"
  };




// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Handle form submission for buyer registration
document.getElementById('regBtn').addEventListener('click', async(event)=> {
    event.preventDefault(); // Prevent default form submission

    // Get form data
    var buyerType = document.getElementById('buyerType').value;
    var companyName = document.getElementById('companyName').value;
    var username = document.getElementById('username').value;
    var password = document.getElementById('password').value;
    var email = document.getElementById('email').value;
    var phone = document.getElementById('phone').value;
    var gstNumber = document.getElementById('gstNumber').value;
    var address = document.getElementById('address').value;
    var city = document.getElementById('city').value;
    var state = document.getElementById('state').value;
    var zip = document.getElementById('zip').value;
    var productType = Array.from(document.getElementById('productType').selectedOptions).map(option => option.value);

    // Get a reference to the database service
    const db = getDatabase(app);

    // Add data to "buyers" node
    set(ref(db, 'buyers/'+username), {
        buyerType: buyerType,
        companyName: companyName,
        username: username,
        password: password,
        email: email,
        phone: phone,
        gstNumber: gstNumber,
        address: address,
        city: city,
        state: state,
        zip: zip,
        productType: productType
    })
    .then(() => {
        alert("Buyer data added successfully!");
        // Optionally, reset the form after successful submission
        document.getElementById('registrationForm').reset;
    })
    .catch((error) => {
        console.error("Error adding buyer data: ", error);
    });
});

