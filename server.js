const express = require('express');
const multer = require('multer');
const path = require('path');
const app = express();
const port = 3000;

// กำหนดที่เก็บไฟล์
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, './uploads');
  },
  filename: (req, file, cb) => {
    cb(null, Date.now() + path.extname(file.originalname));
  },
});

const upload = multer({ storage: storage });

// สร้าง folder 'uploads' ถ้ายังไม่มี
const fs = require('fs');
if (!fs.existsSync('./uploads')) {
  fs.mkdirSync('./uploads');
}

// API สำหรับอัปโหลดรูปภาพ
app.post('/upload', upload.single('image'), (req, res) => {
  if (!req.file) {
    return res.status(400).send('No file uploaded');
  }
  const imageUrl = `http://localhost:${port}/uploads/${req.file.filename}`;
  res.json({ message: 'Image uploaded successfully', imageUrl });
});

// ให้บริการไฟล์ที่อัปโหลด
app.use('/uploads', express.static('uploads'));

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
