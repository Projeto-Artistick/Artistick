document.addEventListener("DOMContentLoaded", function () {
    const searchInput = document.getElementById("search");
    const cards = document.querySelectorAll(".card");

    searchInput.addEventListener("input", function () {
        const searchText = searchInput.value.toLowerCase();

        cards.forEach(card => {
            const title = card.querySelector(".title").textContent.toLowerCase();
            if (title.includes(searchText)) {
                card.style.display = "block";
            } else {
                card.style.display = "none";
            }
        });
    });
});