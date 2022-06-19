module.exports = {
  index(req, res) {
    let roomCode = 333333;
    res.redirect(`/room/${roomCode}`);
  },
};
