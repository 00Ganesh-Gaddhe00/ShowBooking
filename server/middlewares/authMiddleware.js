const jwt = require("jsonwebtoken")

const middleware = function (req, res, next) {
    try {
        console.log(req)
        const token = req.headers.authorization.split(" ")[1];
        console.log(token)
        const verifiedToken = jwt.verify(token, process.env.SECRET_TOKEN_KEY)
        req.body.userId = verifiedToken.userId
        next()
    }
    catch (err) {
        res.status(401).send({
            success: false,
            message: "Invalid Token"
        }
        )
    }
}

module.exports = middleware
