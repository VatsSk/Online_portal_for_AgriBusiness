

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


  // Function to handle login
document.getElementById("loginBtn").addEventListener('click', async (event) => {
    event.preventDefault(); // Prevent default form submission behavior
  
    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;
  
    try {
      const farmerRef = ref(db, 'FarmerReg/' + username);
      const snapshot = await get(farmerRef);

      if (snapshot.exists()) {
        const userData = snapshot.val();
        const storedPassword = userData.password; // Retrieve stored password hash
        // Compare stored password hash with provided password (consider hashing)
        if (password === storedPassword) {
          // Login successful
          alert("Login successful!");
          // Redirect or perform any other actions for successful login
          window.location.href = "Farmhome.html";
        } else {
          // Incorrect password
          alert("Incorrect password!");
        }
      } else {
        // User does not exist
        alert("User does not exist!");
      }
    } catch (error) {
      console.error("Login failed:", error);
      alert("Login failed. Please check the console for details.");
    }
  });
  