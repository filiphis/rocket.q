import Modal from "./modalDelete.js";

const modal = Modal();

const deleteButtons = document.querySelectorAll(".questions__buttonDelete");
const readButtons = document.querySelectorAll(".questions__check");
const cancelButton = document.querySelector(".modalDelete__cancelBtn");

deleteButtons.forEach((button) => {
  button.addEventListener("click", (event) => {
    openModal(event, "delete");
  });
});

readButtons.forEach((button) => {
  button.addEventListener("click", (event) => {
    openModal(event, "read");
  });
});

cancelButton.addEventListener("click", (event) => {
  event.preventDefault();
  modal.close();
});

function openModal(event, action) {
  event.preventDefault();
  modal.open();

  const title = document.querySelector(".modalDelete__title");
  const description = document.querySelector(".modalDelete__warning");
  const modalButton = document.querySelector(".modalDelete__deleteBtn");

  const message = action == "read" ? "Marcar como lida" : "Excluir";
  title.textContent = message;
  description.textContent = `Tem certeza que você deseja ${message.toLowerCase()} está pergunta ?`;
  modalButton.textContent = message;

  if (action == "read") {
    modalButton.classList.remove("modalDelete__button--delete");
    modalButton.classList.add("modalDelete__button--read");
  }

  if (action == "delete") {
    modalButton.classList.remove("modalDelete__button--read");
    modalButton.classList.add("modalDelete__button--delete");
  }

  const modalForm = document.querySelector("[data-modalForm]");
  const roomId = document.querySelector("[data-roomid]").dataset.roomid;
  const questionId =
    event.target.closest("[data-questionid]").dataset.questionid;

  const formActionURL = `/room/${roomId}/${questionId}/${action}`;

  modalForm.setAttribute("action", formActionURL);
}
