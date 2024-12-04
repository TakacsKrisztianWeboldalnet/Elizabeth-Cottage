// Mobil oldalsáv
document.addEventListener("DOMContentLoaded", function () {
  const sidebar = document.querySelector(".sidebar");
  const toggleButton = document.querySelector(".sidebar-toggle");
  const links = sidebar.querySelectorAll("a");

  const closeSidebar = () => {
    sidebar.classList.remove("open");
  };

  toggleButton.addEventListener("click", function (event) {
    event.stopPropagation();
    sidebar.classList.toggle("open");
  });

  links.forEach((link) => {
    link.addEventListener("click", closeSidebar);
  });

  document.addEventListener("click", function (event) {
    if (!sidebar.contains(event.target) && !toggleButton.contains(event.target)) {
      closeSidebar();
    }
  });
});

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

//Felszereltség:
document.addEventListener("DOMContentLoaded", () => {
  const cardsContainer = document.querySelector(".equipment-cards");
  const cards = Array.from(document.querySelectorAll(".equipment-card"));
  const prevButton = document.querySelector(".equipment-cards-previous");
  const nextButton = document.querySelector(".equipment-cards-next");
  const selectionButtons = Array.from(
    document.querySelectorAll(".equipment-selection-button")
  );

  const totalCards = cards.length;
  const visibleCards = 2;
  const totalSteps = Math.ceil(totalCards / visibleCards);
  let currentStep = 0;

  const updateCardsVisibility = () => {
    cards.forEach((card, index) => {
      const isVisible =
        index >= currentStep * visibleCards &&
        index < (currentStep + 1) * visibleCards;
      card.classList.toggle("desktop-only", !isVisible);
    });
  };

  const updateSelection = () => {
    selectionButtons.forEach((button, index) => {
      button.classList.toggle(
        "selected",
        index === currentStep % selectionButtons.length
      );
    });
  };

  const navigate = (direction) => {
    currentStep = (currentStep + direction + totalSteps) % totalSteps;
    updateCardsVisibility();
    updateSelection();
  };

  updateCardsVisibility();
  updateSelection();

  prevButton.addEventListener("click", () => navigate(-1));
  nextButton.addEventListener("click", () => navigate(1));

  selectionButtons.forEach((button, index) => {
    button.addEventListener("click", () => {
      currentStep = index;
      updateCardsVisibility();
      updateSelection();
    });
  });
});

//Bővebb szöveg modal:
const moreTextButtonTour = document.querySelector('.more-text-tour');
const fullTextModalTour = document.querySelector('.full-text-tour');
const closeButtonTour = document.querySelector('.close-button-tour');

moreTextButtonTour.addEventListener('click', () => {
  fullTextModalTour.style.display = 'flex';
});

closeButtonTour.addEventListener('click', () => {
  fullTextModalTour.style.display = 'none';
});

window.addEventListener('keydown', (event) => {
  if (event.key === 'Escape') {
    fullTextModalTour.style.display = 'none';
  }
});

const moreTextButtonAttraction = document.querySelector('.more-text-attraction');
const fullTextModalAttraction = document.querySelector('.full-text-attraction');
const closeButtonAttraction = document.querySelector('.close-button-attraction');

moreTextButtonAttraction.addEventListener('click', () => {
  fullTextModalAttraction.style.display = 'flex';
});

closeButtonAttraction.addEventListener('click', () => {
  fullTextModalAttraction.style.display = 'none';
});

window.addEventListener('keydown', (event) => {
  if (event.key === 'Escape') {
    fullTextModalAttraction.style.display = 'none';
  }
});

//GYIK:
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