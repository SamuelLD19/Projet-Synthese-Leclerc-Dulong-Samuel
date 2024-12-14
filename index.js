  var messageInput = document.getElementById('messageInput');
        var fontSelect = document.getElementById('fontSelect');
        var cardPreview = document.getElementById('cardPreview');

        // Update card preview text as the user types
        messageInput.addEventListener('input', function () {
            cardPreview.textContent = messageInput.value || "Lorem ipsum dolor sit amet, consectetur adipiscing elit.";
        });

        // Change font style dynamically based on dropdown selection
        fontSelect.addEventListener('change', function () {
            cardPreview.style.fontFamily = fontSelect.value;
        });