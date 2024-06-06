document.addEventListener('DOMContentLoaded', () => {
    const images = document.querySelectorAll('.art-image');

    images.forEach(image => {
        const imageId = image.id;
        const blendModeSelect = document.getElementById(`blend-mode-${imageId}`);
        const positionXInput = document.getElementById(`position-x-${imageId}`);
        const positionYInput = document.getElementById(`position-y-${imageId}`);

        blendModeSelect.addEventListener('change', (e) => {
            image.style.mixBlendMode = e.target.value;
        });

        positionXInput.addEventListener('input', (e) => {
            image.style.left = `${e.target.value}%`;
        });

        positionYInput.addEventListener('input', (e) => {
            image.style.top = `${e.target.value}%`;
        });
    });

    // Function to send email with snapshot (requires server-side code)
    function sendEmail() {
        const email = document.getElementById('email').value;
        // Code to capture snapshot and send email
    }

    document.getElementById('send-email').addEventListener('click', sendEmail);
});
