
document.addEventListener("DOMContentLoaded", function () {
    const voteButton = document.querySelector("button");
    const message = document.getElementById("message");

    voteButton.addEventListener("click", function () {
        let selected = document.querySelector('input[name="candidate"]:checked');
        if (selected) {
            message.innerText = "🎉 Thanks for Voting! Your voice matters! 🔥";
            message.style.color = "#ff8c00";
            voteButton.disabled = true;
        } else {
            message.innerText = "⚠️ Please select a candidate before voting!";
            message.style.color = "red";
        }
    });
});
