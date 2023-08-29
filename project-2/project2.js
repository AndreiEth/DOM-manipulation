const openBtn = document.getElementById("open-btn");
const modalContainer = document.getElementById("modal-container");
const closeBtn = document.getElementById("close-btn");

openBtn.addEventListener("click", function () {
  modalContainer.style.display = "block";
});

closeBtn.addEventListener("click", function (e) {
  modalContainer.style.display = "none";
});

window.addEventListener("click", function (e) {
  if (e.target === modalContainer) {
    modalContainer.style.display = 'none';
  }
});
