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

