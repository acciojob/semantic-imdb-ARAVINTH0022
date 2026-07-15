//your code here
// 1. Select the form
const form = document.querySelector('form'); // Or use a specific ID: document.getElementById('myForm')

// 2. Add the event listener
form.addEventListener('submit', function(event) {
    // 3. Prevent the default page reload
    event.preventDefault();

    // 4. Access form data
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;

    console.log('Form Submitted!', { name, email });
    
    // Add your validation or submission logic here
});   