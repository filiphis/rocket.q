module.exports = {
  index(req, res) {
    const { roomid, messageid, action } = req.params;
    const password = req.body.password;

    console.log(roomid);
    console.log(messageid);
    console.log(action);
    console.log(password);
  },
};
