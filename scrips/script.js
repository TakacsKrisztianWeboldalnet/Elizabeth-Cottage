//További képek
document.addEventListener("DOMContentLoaded", function () {
  const galleryMoreButton = document.querySelector(".gallery-more");
  const additionalImages = document.querySelectorAll(".gallery-additional");

  galleryMoreButton.addEventListener("click", function (event) {
    event.preventDefault();

    additionalImages.forEach((img) => {
      img.style.display = "block";
    });

    galleryMoreButton.style.display = "none";
  });
});

//GYIK működése:
document.addEventListener("DOMContentLoaded", function () {
  const questions = document.querySelectorAll(".question");

  questions.forEach((question) => {
    const header = question.querySelector(".question-header");
    const img = header.querySelector("img");

    header.addEventListener("click", () => {
      questions.forEach((q) => {
        const qImg = q.querySelector(".question-header img");
        if (q !== question && q.classList.contains("open")) {
          q.classList.remove("open");
          qImg.src = "./images/Icon ionic-ios-arrow-back (2).svg";
        }
      });

      question.classList.toggle("open");

      if (question.classList.contains("open")) {
        img.src = "./images/Icon ionic-ios-arrow-back (3).svg";
      } else {
        img.src = "./images/Icon ionic-ios-arrow-back (2).svg";
      }
    });
  });
});