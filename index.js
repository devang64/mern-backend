const express = require('express');
const dbConnection = require('./database');
const allRoutes = require('./routes/mainRoutes');
const cors = require('cors');
const multer = require('multer');
const app = express();
const PORT = process.env.PORT;

dbConnection()
app.use(express.json({ limit: '10mb' }));
app.use(cors());
const upload = multer({
    limits: { fileSize: 1024 * 1024 * 2 } // set 2 mb limit for request data
});
app.use(upload.any());

//middleware for handling file size
app.use((err, req, res, next) => {
    if (err instanceof multer.MulterError && err.code === 'LIMIT_FILE_SIZE') {
        return res.status(400).json({ success: false, message: 'File size limit exceeded (max 2mb)' });
    }
    next(err);
});

app.use('/api', allRoutes);

app.listen(3000, () => {
    console.log(`Server is running on port ${PORT}!`);
});
