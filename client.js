document.addEventListener('DOMContentLoaded', () => {
    const artContainer = document.getElementById('art-container');

    function sendEmail() {
        const email = document.getElementById('email').value;

        if (!email) {
            alert('Please enter a valid email address.');
            return;
        }

        html2canvas(artContainer).then(canvas => {
            const imageData = canvas.toDataURL('image/png');

            fetch('/send-email', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    email: email,
                    image: imageData
                })
            }).then(response => {
                if (response.ok) {
                    alert('Email sent successfully!');
                } else {
                    alert('Failed to send email.');
                }
            }).catch(error => {
                console.error('Error sending email:', error);
                alert('Failed to send email.');
            });
        });
    }

    document.getElementById('send-email').addEventListener('click', sendEmail);
});