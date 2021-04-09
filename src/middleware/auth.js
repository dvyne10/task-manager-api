const jwt = require("jsonwebtoken");
const User = require("../models/user");

const auth = async (req, res, next) => {
  try {
    //   console.log(req.header('Authorization'))
    const token = req.header("Authorization").replace("Bearer ", "");
    const decoded =  jwt.verify(token, process.env.JWT_SECRET);
    const user = await User.findOne({_id: decoded.id, 'tokens.token':token});
    // console.log(decoded)

    if(!user) {
        throw new Error();
    }
    req.token = token;
    req.user = user;
    next()

  } catch (e) {
    res.status(401).send({error:'please authenticate'});
  }
};

module.exports = auth;
