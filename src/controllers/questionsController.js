const Database = require("../db/config");
module.exports = {
  async index(req, res) {
    const db = await Database();
    const { roomid, questionid, action } = req.params;
    const password = req.body.password;

    const getRoom = await db.get(`SELECT * FROM rooms WHERE id = ${roomid}`);
    const roomPassword = getRoom.password;

    if (password != roomPassword) {
      console.log("Senha incorreta!");
      res.render(`password-error`, { roomid: roomid });
    }

    if (password == roomPassword) {
      console.log("Acerto mizeravi!");
      if (action == "delete") {
        await db.run(`DELETE FROM questions WHERE id = ${questionid}`);
        await db.close();
        res.redirect(`/room/${roomid}`);
        return;
      }

      if (action == "read") {
        await db.run(
          `UPDATE questions SET isRead = true WHERE id = ${questionid}`
        );

        await db.close();
        res.redirect(`/room/${roomid}`);
        return;
      }
    }

    // console.log(roomid);
    // console.log(questionid);
    // console.log(action);
    // console.log(password);
  },

  async create(req, res) {
    const db = await Database();
    const questionText = req.body.questionText;
    const roomid = req.params.roomid;
    const isRead = 0;

    await db.run(`INSERT INTO  questions (questionText, isRead, roomid) VALUES (
      '${questionText}',
      ${isRead},
      ${roomid}
    )`);

    res.redirect(`/room/${roomid}`);
  },
};
