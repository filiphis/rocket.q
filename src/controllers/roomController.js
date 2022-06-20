const Database = require("../db/config");

module.exports = {
  async index(req, res) {
    const db = await Database();

    const password = req.body.password;

    const roomsIDS = await db.all(`SELECT id FROM rooms`);

    let roomid = "";

    let roomCodeExists = true;

    while (roomCodeExists) {
      for (let index = 0; index < 6; index++) {
        roomid += Math.floor(Math.random() * 10).toString();
      }
      parseInt(roomid);

      roomCodeExists = roomsIDS.some((roomCode) => roomCode == roomid);

      if (!roomCodeExists) {
        await db.run(`INSERT INTO rooms (
          id,
          password
        ) VALUES (
          ${roomid},
          ${password}
        )`);
      }
    }

    await db.close();

    res.redirect(`/room/${roomid}`);
  },

  async open(req, res) {
    const db = await Database();

    const roomid = req.params.roomid;
    const questions = await db.all(
      `SELECT * FROM questions WHERE isRead = 0 AND roomid = ${roomid}`
    );
    const questionsRead = await db.all(
      `SELECT * FROM questions WHERE isRead = 1 AND roomid = ${roomid}`
    );

    await db.close();

    res.render("room", { roomid, questions, questionsRead });
  },
};
