// ===============================
// CLIPZONE JAVASCRIPT
// ===============================

const searchInput = document.querySelector(".search");
const videoCards = document.querySelectorAll(".video-card");


// ===============================
// VIDEO LINKS
// ===============================

const videoLinks = [
    "YFMIPCr_ZqI", // Clip 1 - your current video
    "",             // Clip 2
    "",             // Clip 3
    "",             // Clip 4
    "",             // Clip 5
    "",             // Clip 6
    "",             // Clip 7
    "",             // Clip 8
    "",             // Clip 9
    "",             // Clip 10
    "",             // Clip 11
    "",             // Clip 12
    "",             // Clip 13
    "",             // Clip 14
    "",             // Clip 15
    "",             // Clip 16
    "",             // Clip 17
    ""              // Clip 18
];


// ===============================
// SEARCH
// ===============================

searchInput.addEventListener("input", function () {

    const searchText =
        searchInput.value.toLowerCase().trim();

    videoCards.forEach(function (card) {

        const title =
            card.querySelector("h3")
                .textContent
                .toLowerCase();

        const category =
            card.querySelector("p")
                .textContent
                .toLowerCase();

        if (
            title.includes(searchText) ||
            category.includes(searchText)
        ) {
            card.style.display = "";
        } else {
            card.style.display = "none";
        }

    });

});


// ===============================
// OPEN VIDEO
// ===============================

function openVideo(videoID, title) {

    if (!videoID) {

        alert(
            "This clip doesn't have a video yet.\n\n" +
            "Add a YouTube video ID to script.js first."
        );

        return;
    }


    const overlay =
        document.createElement("div");

    overlay.className = "video-popup";


    overlay.innerHTML = `
        <div class="video-popup-content">

            <button class="close-video">
                ✕
            </button>

            <iframe
                src="https://www.youtube.com/embed/${videoID}?autoplay=1"
                title="${title}"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowfullscreen>
            </iframe>

            <h2>${title}</h2>

        </div>
    `;


    document.body.appendChild(overlay);


    // Close button
    const closeButton =
        overlay.querySelector(".close-video");

    closeButton.addEventListener("click", function () {
        overlay.remove();
    });


    // Close when clicking outside
    overlay.addEventListener("click", function (event) {

        if (event.target === overlay) {
            overlay.remove();
        }

    });


    // Close with ESC
    function closeWithEscape(event) {

        if (event.key === "Escape") {

            overlay.remove();

            document.removeEventListener(
                "keydown",
                closeWithEscape
            );

        }

    }

    document.addEventListener(
        "keydown",
        closeWithEscape
    );

}


// ===============================
// MAKE CLIPS CLICKABLE
// ===============================

videoCards.forEach(function (card, index) {

    // Keep Clip 1's existing YouTube player
    if (index === 0) {
        return;
    }


    card.style.cursor = "pointer";


    card.addEventListener("click", function () {

        const title =
            card.querySelector("h3").textContent;

        const videoID =
            videoLinks[index];

        openVideo(videoID, title);

    });

});
