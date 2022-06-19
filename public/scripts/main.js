import Modal from "./modalDelete.js";

const modal = Modal();

// Buscando elementos que serão utilizados para manipular o DOM
const deleteButtons = document.querySelectorAll(".questions__buttonDelete");
const readButtons = document.querySelectorAll(".questions__check");
const cancelButton = document.querySelector(".modalDelete__cancelBtn");

// Event Listeners
deleteButtons.forEach((button) => {
  button.addEventListener("click", (event) => {
    montaModal(event, "delete");
  });
});

readButtons.forEach((button) => {
  button.addEventListener("click", (event) => {
    montaModal(event, "read");
  });
});

cancelButton.addEventListener("click", (event) => {
  event.preventDefault();
  modal.close();
});

function montaModal(event, action) {
  event.preventDefault();
  modal.open();

  const passwordButton = document.querySelector("#password");
  passwordButton.value = "";
  const title = document.querySelector(".modalDelete__title");
  const description = document.querySelector(".modalDelete__warning");
  const modalButton = document.querySelector(".modalDelete__deleteBtn");

  const message = action == "read" ? "Marcar como lida" : "Excluir";
  title.textContent = message;
  modalButton.textContent = message;
  description.textContent = `Tem certeza que você deseja ${message.toLowerCase()} está pergunta ?`;

  if (action == "read") {
    modalButton.classList.remove("modalDelete__button--delete");
    modalButton.classList.add("modalDelete__button--read");
  }

  if (action == "delete") {
    modalButton.classList.remove("modalDelete__button--read");
    modalButton.classList.add("modalDelete__button--delete");
  }

  setFormActionURL(event, action);
}

function setFormActionURL(event, action) {
  console.log("setFormActionURL");
  const modalForm = document.querySelector("[data-modalForm]");
  const roomId = document.querySelector("[data-roomid]").dataset.roomid;
  const questionId =
    event.target.closest("[data-questionid]").dataset.questionid;
  const formActionURL = `/questions/${roomId}/${questionId}/${action}`;
  modalForm.setAttribute("action", formActionURL);
}
