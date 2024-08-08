// Function to set up event listeners for a dentist
function setupDentistHover(dentistName, dentistImg, imgHoverSrc, imgOutSrc) {
    dentistName.addEventListener("mouseover", () => {
        dentistImg.src = imgHoverSrc;
    });
    dentistName.addEventListener("mouseout", () => {
        dentistImg.src = imgOutSrc;
    });
    dentistImg.addEventListener("mouseover", () => {
        dentistImg.src = imgHoverSrc;
    });
    dentistImg.addEventListener("mouseout", () => {
        dentistImg.src = imgOutSrc;
    });
}

// Dan's setup
let dentistNameDan = document.querySelector(".dentist-name-dan");
let dentistImgDan = document.querySelector(".dentist-image-dan");
setupDentistHover(
    dentistNameDan,
    dentistImgDan,
    "https://wordpress-183497-4713410.cloudwaysapps.com/wp-content/uploads/2024/07/Dan-headshot.jpg",
    "https://wordpress-183497-4713410.cloudwaysapps.com/wp-content/uploads/2024/07/Dan-headshot-with-mask.jpeg"
);

// Alina's setup
let dentistNameAlina = document.querySelector(".dentist-name-alina");
let dentistImgAlina = document.querySelector(".dentist-image-alina");
setupDentistHover(
    dentistNameAlina,
    dentistImgAlina,
    "https://wordpress-183497-4713410.cloudwaysapps.com/wp-content/uploads/2024/07/Alina-headshot.jpg",
    "https://wordpress-183497-4713410.cloudwaysapps.com/wp-content/uploads/2024/07/Alina-headshot-with-mask.jpeg"
);

// Mike's setup
let dentistNameMike = document.querySelector(".dentist-name-mike");
let dentistImgMike = document.querySelector(".dentist-image-mike");
setupDentistHover(
    dentistNameMike,
    dentistImgMike,
    "https://wordpress-183497-4713410.cloudwaysapps.com/wp-content/uploads/2024/07/Mike-headshot.jpg",
    "https://wordpress-183497-4713410.cloudwaysapps.com/wp-content/uploads/2024/07/Mike-headshot-with-mask.jpeg"
);
