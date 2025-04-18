import 'dotenv/config'; //הגדרת השרת לקבלת משתני סביבה מהקובץ .env
import express from 'express';
import cityRouter from './city/city.routes.js';
const PORT = 5500;

//הגדרת השרת
const server = express();
server.use(express.json());
server.use(express.urlencoded({ extended: true })); //תמיכה בכתובת בתווים שאינם לטיניים

//route --> controller --> model --> database
server.use('/api/city', cityRouter);

server.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});