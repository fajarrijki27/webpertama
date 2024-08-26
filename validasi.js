document.getElementById('contactForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Mencegah form dari submit secara default

    let name = document.getElementById('name').value.trim();
    let email = document.getElementById('email').value.trim();
    let message = document.getElementById('message').value.trim();
    let errorMessage = document.getElementById('error-message');

    errorMessage.textContent = ''; // Kosongkan pesan error sebelumnya

    if (name === '' || email === '' || message === '') {
        errorMessage.textContent = 'Please fill in all fields.';
        return;
    }

    if (!validateEmail(email)) {
        errorMessage.textContent = 'Please enter a valid email address.';
        return;
    }

    // Jika semua validasi lolos, submit form
    alert('Form submitted successfully!');
    // event.target.submit(); // Un-comment untuk mengaktifkan submit setelah validasi
});

function validateEmail(email) {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(String(email).toLowerCase());
}
