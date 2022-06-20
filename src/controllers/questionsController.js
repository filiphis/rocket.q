const Database = require("../db/config");
module.exports = {
  index(req, res) {
    const { roomid, messageid, action } = req.params;
    const password = req.body.password;

    console.log(roomid);
    console.log(messageid);
    console.log(action);
    console.log(password);
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
