document.getElementById("SbmtBtn").addEventListener("click", function() {
    let inputField = document.getElementById("email");
    let notification = document.getElementById("notification");

    if (inputField.value.trim() === "") {
        showNotification("wrong format", "#FF5733"); // Červená notifikace
    } else {
        showNotification("we have your email", "#4CAF50"); // Zelená notifikace
        inputField.value = ""; // Vymazání obsahu inputu
    }
});

function showNotification(message, color) {
    let notification = document.getElementById("notification");
    notification.textContent = message;
    notification.style.background = color;
    notification.classList.add("show");

    setTimeout(() => {
        notification.classList.remove("show");
    }, 3000); // Notifikace zmizí po 3 sekundách
}
