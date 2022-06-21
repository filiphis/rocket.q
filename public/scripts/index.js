const enterRoomForm = document.querySelector(".enterRoom__form");
const enterRoomBtn = document.querySelector("#enter-room-btn");
const enterRoomInput = document.querySelector("#room-code");

enterRoomForm.addEventListener("submit", async (event) => {
  event.preventDefault();

  const inputRoomValue = enterRoomInput.value;

  if (inputRoomValue.length == 6) {
    let rooms = [];
    const response = await fetch(`http://localhost:3000/rooms`);
    rooms = await response.json();
    const newRoom = rooms.filter((item) => item.id == inputRoomValue);

    console.log(!!newRoom[0]);
    if (newRoom[0]) {
      // window.location.replace(`/room/${newRoom[0].id}`);
      window.location.href = `http://localhost:3000/room/${newRoom[0].id}`;
    }

    if (!newRoom[0]) {
      let newElement = enterRoomForm.querySelector(".roomMessagemError");
      newElement.classList.add("Error");
    }
  }
});
