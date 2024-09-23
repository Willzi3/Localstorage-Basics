function saveData() {
    // Get values from form inputs
    let name = document.getElementById("name").value;
    let email = document.getElementById("email").value;
    let password = document.getElementById("password").value;

    // Retrieve existing user records from localStorage or initialize an empty array
    let user_records = JSON.parse(localStorage.getItem("users")) || [];

    // Check if the user with the same email already exists
    if (user_records.some((v) => v.email === email)) {
        alert("Duplicate Data");
    } else {
        // Add new user record to the array
        user_records.push({
            name: name,
            email: email,
            password: password
        });

        // Save updated user records to localStorage
        localStorage.setItem("users", JSON.stringify(user_records));
        
        alert("Data Saved Successfully!");
    }
}