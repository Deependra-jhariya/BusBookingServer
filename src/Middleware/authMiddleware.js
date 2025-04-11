const jwt = require("jsonwebtoken");

const protect = (req, res, next) => {
  const token = req.headers.authorization.split(' ')[1];

  if (!token)
    res.status(401).json({
      message: "not authorized no token",
    });

  try {
    const decoded = jwt.verify(token, process.env.JWTSECRET_KEY);
    req.user = decoded.user;
    next();
  } catch (error) {
    res.status(401).json({
      message: "Token failed.",
    });
  }
};

module.exports = protect;
