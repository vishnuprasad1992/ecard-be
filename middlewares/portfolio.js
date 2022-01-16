const jwt = require("jsonwebtoken")

const checkLogin = (req, res, next) => {

  const token = req.headers.authorization.split(" ")[1]

  jwt.verify(token, process.env.JWT_SECRET, (err, verifiedJwt) => {
    if (err) {
      res.send(err.message)
    } else {
      // to send the parameters from token to next function
      // req.user = verifiedJwt
      next()
    }
  })
}

module.exports = checkLogin