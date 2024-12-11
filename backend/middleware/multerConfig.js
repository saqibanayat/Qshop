const multer = require('multer');
const path = require('path');

// Configure Multer storage
const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, 'images/'); // Folder for user uploads
    },
    filename: function (req, file, cb) {
        const baseUrl= "http://127.0.0.1:3000/images/"
        const name=Date.now()+Math.round(Math.random()*10000)+path.extname(file.originalname)
        const fileLink=baseUrl+name;
        if(!Array.isArray(req.body.images))
          req.body.images=[]
  
        req.body.images.push(fileLink);
        req.body.image = fileLink;
        cb(null,name); 
      }
});

// File filter (e.g., accept only images)
const fileFilter = (req, file, cb) => {
    const allowedMimeTypes = ['image/jpeg','image/jpg', 'image/png', 'image/gif'];
    if (allowedMimeTypes.includes(file.mimetype)) {
        cb(null, true);
    } else {
        cb(new Error('Invalid file type. Only JPEG, PNG, and GIF are allowed.'));
    }
};

// Multer instance
const upload = multer({
    storage,
    limits: { fileSize: 1024 * 1024 * 5 }, // 5MB file size limit
    fileFilter,
});

module.exports = upload;
