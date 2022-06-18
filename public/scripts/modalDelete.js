export default function Modal() {
  const modal = document.querySelector(".modalDelete__wrapper");



  function open() {
    modal.classList.add("active");
  }

  function close() {
    modal.classList.remove("active");
  }

  return {
    open,
    close,
  };
}
