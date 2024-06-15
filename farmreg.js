
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

// Get a reference to the Realtime Database
const db = getDatabase(app);

document.getElementById("regBtn").addEventListener('click', async (event) => {
  event.preventDefault(); // Prevent default form submission behavior

  const name = document.getElementById("name").value;
  const username = document.getElementById("username").value;
  const password = document.getElementById("password").value;
  // const confirmPassword = document.getElementById("confirm_password").value;
  const email = document.getElementById("email").value;
  // const confirmEmail = document.getElementById("confirm_email").value;
  const address1 = document.getElementById("address1").value;
  const address2 = document.getElementById("address2").value;
  const city = document.getElementById("city").value;
  const region = document.getElementById("region").value;
  const country = document.getElementById("country").value;
  const postalCode = document.getElementById("postal_code").value;
  const phone = document.getElementById("phone").value;
  const about = document.getElementById("about_me").value;

  // Validate user input (implement appropriate validation logic here)

  try {
    const farmerRef = ref(db, 'FarmerReg/' + username); // Use a secure path for user registration
    await set(farmerRef, {
      name,
      username,
      email,
      password, // Consider hashing passwords before storing
      // confirmPassword,
      // confirmEmail,
      address1,
      address2,
      city,
      region,
      country,
      postalCode,
      phone,
      about
    });
    alert("Registration successful!");
  } catch (error) {
    console.error("Registration failed:", error);
    alert("Registration failed. Please check the console for details.");
  }
});

