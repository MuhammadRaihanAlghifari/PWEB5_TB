const jwt = require('jsonwebtoken');
const dotenv = require('dotenv');

dotenv.config();

const verifyToken = (req, res, next) => {
    const token = req.cookies.token || '';
    if (!token) {
<<<<<<< HEAD
        return res.status(403).json({ message: 'Access denied' });
=======
        return res.redirect("/");
>>>>>>> 57044525058e9a27cacb6b39a553a1d97b9e4608
    }

    try {
        const decoded = jwt.verify(token, process.env.JWT_SECRET_TOKEN);
        req.user = decoded;
        next();
    } catch (err) {
<<<<<<< HEAD
        res.status(401).json({ message: 'Invalid token' });
=======
        res.statu4s(401).json({ message: 'Invalid token' });
>>>>>>> 57044525058e9a27cacb6b39a553a1d97b9e4608
    }
};

module.exports={
    verifyToken
}