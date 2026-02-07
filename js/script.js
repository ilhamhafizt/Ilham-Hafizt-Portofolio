// Welcome Text
document.addEventListener('DOMContentLoaded', function () {
    const welcomeText = document.getElementById('welcomeText');
    const guestName = ('Please Enter Your Name!');

    if (guestName === null || guestName.trim() === '') {
        welcomeText.innerHTML = 'Hello Guest, I am';
    } else {
        welcomeText.innerHTML = `Hi ${guestName}, I am`;
    }
});

// Contact Data
document.addEventListener('DOMContentLoaded', function () {
    const form = document.querySelector('form');
    const resultText = document.getElementById('resultText');
    const welcomeText = document.getElementById('welcomeText');

    form.addEventListener('submit', function (e){
        e.preventDefault();

        const name = form.querySelector('input[type="text"]').value.trim();
        const dob = form.querySelector('input[type="date"]').value; 
        const gender = form.querySelector('input[name="gender"]:checked');
        const message = form.querySelector('textarea').value.trim();

        // Validation
        if (name === '' || dob === '' || !gender === '' || message === '') {
            alert('Please complate all fields!');
            return;
        }

        // Show submitted data
        resultText.innerHTML = `
            <strong>Name:</strong> ${name}<br>
            <strong>Date of Birth:</strong> ${dob}<br>
            <strong>Gender:</strong> ${gender.value}<br>
            <strong>Message:</strong> ${message}<br>
        `;
        form.reset();
    });
});