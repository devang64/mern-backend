const validateToken = (req, res, next) => {
    const token = req.headers.authorization?.split(' ')[1];
    if (!token) {
        return res.status(401).json({ message: 'Unauthorized: No token provided' });
    }
    try {
        const decodedToken = verifyToken(token);
        if (!decodedToken) {
            return res.status(401).json({ message: 'Unauthorized: Invalid token' });
        }
        if (decodedToken.exp < Date.now() / 1000) {
            return res.status(401).json({ message: 'Unauthorized: Token expired' });
        }
        req.user = decodedToken;
        next();
    } catch (error) {
        return res.status(401).json({ message: 'Unauthorized: Invalid token' });
    }
}