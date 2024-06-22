
const test = (req, res) => {
    try {
        res.status(200).json({
            message: 'test successful!'
        })
    } catch (error) {
        console.log('error: ', error);
        res.status(500).json(error)
    }
}

module.exports = {
    test
}