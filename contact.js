document.getElementById('contactForm').addEventListener('submit', function(event) {
    event.preventDefault();
    // Here you can add code to handle form submission, such as sending data to a server or displaying a confirmation message
    // For simplicity, let's just log the form data
    const formData = new FormData(this);
    const formDataObject = {};
    formData.forEach(function(value, key) {
        formDataObject[key] = value;
    });
    console.log(formDataObject);
});
