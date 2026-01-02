import jwt from 'jsonwebtoken'

function authentication(req, res, next) {
  try {
    const authorization = req.headers.authorization;
    if (!authorization) {
      return res.status(401).json({ success: false, message: "Access denied as you dont have access token!" })
    }
    const token = authorization.split(' ')[1];
    const verifyToken = jwt.verify(token, process.env.SECRET_KEY);
    req.userId = verifyToken.id;
    next()
  } catch (error) {
    console.log(error.message)
    if (error.message === 'jwt expired' || error.message === "invalid signature") {
      return res.status(401).json({ success: false, message: "Access token is invalid or expired!" })
    }
    return res.status(403).json({ success: false, message: error.message || 'Server side error!' })
  }
}

export default authentication;